program PCMDelphi;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  TAtivo = record
    Codigo: Integer;
    Tag: string;
    Local: string;
    Disciplina: string;
    Calibracao: Boolean;
    Categoria: string;
    Valor: Currency;
  end;

var
  Ativos: array of TAtivo;
  ProximoCodigo: Integer = 1;

function LerTexto(const Rotulo, Padrao: string): string;
var
  Entrada: string;
begin
  Write(Rotulo, ' [', Padrao, ']: ');
  ReadLn(Entrada);
  if Trim(Entrada) = '' then
    Result := Padrao
  else
    Result := Trim(Entrada);
end;

function LerInteiro(const Rotulo: string; Padrao: Integer): Integer;
var
  Entrada: string;
  Valor: Integer;
begin
  Entrada := LerTexto(Rotulo, IntToStr(Padrao));
  if TryStrToInt(Entrada, Valor) then
    Result := Valor
  else
    Result := Padrao;
end;

function LerValor(const Rotulo: string; Padrao: Currency): Currency;
var
  Entrada: string;
  Valor: Currency;
begin
  Entrada := LerTexto(Rotulo, CurrToStr(Padrao));
  Entrada := StringReplace(Entrada, ',', '.', [rfReplaceAll]);
  if TryStrToCurr(Entrada, Valor, TFormatSettings.Invariant) then
    Result := Valor
  else
    Result := Padrao;
end;

function LerSimNao(const Rotulo: string; Padrao: Boolean): Boolean;
var
  Entrada: string;
begin
  if Padrao then
    Entrada := LerTexto(Rotulo, 'S')
  else
    Entrada := LerTexto(Rotulo, 'N');
  Result := SameText(Entrada, 'S') or SameText(Entrada, 'SIM');
end;

procedure Pausar;
begin
  WriteLn;
  Write('Pressione ENTER para continuar...');
  ReadLn;
end;

procedure CadastrarAtivo;
var
  Ativo: TAtivo;
begin
  WriteLn;
  WriteLn('=== NOVO ATIVO ===');
  Ativo.Codigo := ProximoCodigo;
  Inc(ProximoCodigo);
  Ativo.Tag := LerTexto('Tag do equipamento', 'BMB-UTIL-01');
  Ativo.Local := LerTexto('Local de instalacao', 'Casa de maquinas');
  Ativo.Disciplina := LerTexto('Disciplina (Mecanica/Eletrica)', 'Mecanica');
  Ativo.Calibracao := LerSimNao('Possui calibracao periodica? (S/N)', False);
  Ativo.Categoria := LerTexto('Categoria (Produtiva/Utilidades/Sobressalente)', 'Produtiva');
  Ativo.Valor := LerValor('Valor da nota fiscal', 0);
  SetLength(Ativos, Length(Ativos) + 1);
  Ativos[High(Ativos)] := Ativo;
  WriteLn;
  WriteLn('Ativo ', Ativo.Tag, ' cadastrado com sucesso.');
  Pausar;
end;

procedure ListarAtivos;
var
  Ativo: TAtivo;
  Filtro: string;
  Encontrados: Integer;
begin
  WriteLn;
  WriteLn('=== ATIVOS CADASTRADOS ===');
  Filtro := LerTexto('Buscar por tag, local ou disciplina (ENTER para todos)', '');
  Encontrados := 0;
  for Ativo in Ativos do
    if (Filtro = '') or ContainsText(Ativo.Tag + ' ' + Ativo.Local + ' ' + Ativo.Disciplina, Filtro) then
    begin
      Inc(Encontrados);
      WriteLn('[', Ativo.Codigo, '] ', Ativo.Tag, ' | ', Ativo.Local);
      WriteLn('    ', Ativo.Disciplina, ' | Calibracao: ', BoolToStr(Ativo.Calibracao, 'Sim', 'Nao'),
        ' | ', Ativo.Categoria, ' | R$ ', FormatCurr('#,##0.00', Ativo.Valor));
    end;
  if Encontrados = 0 then
    WriteLn('Nenhum ativo encontrado.');
  Pausar;
end;

function DetectarPrioridade(const Descricao: string): string;
begin
  if ContainsText(Descricao, 'parou') or ContainsText(Descricao, 'urgente') or ContainsText(Descricao, 'vazamento') then
    Result := 'ALTA'
  else if ContainsText(Descricao, 'vibr') or ContainsText(Descricao, 'ruido') or ContainsText(Descricao, 'ruído') then
    Result := 'MEDIA'
  else
    Result := 'PROGRAMADA';
end;

function DetectarTipo(const Descricao: string): string;
begin
  if ContainsText(Descricao, 'mont') then
    Result := 'Montagem e comissionamento'
  else if ContainsText(Descricao, 'eletr') or ContainsText(Descricao, 'painel') then
    Result := 'Inspecao eletrica'
  else
    Result := 'Inspecao mecanica';
end;

procedure AssistentePCM;
var
  Descricao, Tag, Prioridade, Tipo: string;
begin
  WriteLn;
  WriteLn('=== ASSISTENTE PCM ===');
  WriteLn('Slogan: Planejamento e controle de montagem e manutencao da sua pequena e media empresa.');
  WriteLn;
  Write('Descreva o equipamento, problema ou montagem: ');
  ReadLn(Descricao);
  if Trim(Descricao) = '' then
  begin
    WriteLn('Informe uma descricao para gerar o plano.');
    Pausar;
    Exit;
  end;
  Tag := LerTexto('Tag do equipamento', 'EQUIPAMENTO-NAO-INFORMADO');
  Prioridade := DetectarPrioridade(Descricao);
  Tipo := DetectarTipo(Descricao);
  WriteLn;
  WriteLn('--- PLANO GERADO ---');
  WriteLn('Ativo: ', Tag);
  WriteLn('Tipo: ', Tipo);
  WriteLn('Prioridade sugerida: ', Prioridade);
  WriteLn('Descricao: ', Descricao);
  WriteLn;
  WriteLn('1. Isolar e sinalizar a area de trabalho.');
  WriteLn('2. Conferir historico, condicoes e riscos do equipamento.');
  WriteLn('3. Executar inspecao e registrar evidencias.');
  WriteLn('4. Corrigir a causa identificada e testar em seguranca.');
  WriteLn('5. Registrar materiais, responsavel e prazo no PCM.');
  WriteLn;
  WriteLn('Plano pronto para revisao do responsavel da manutencao.');
  Pausar;
end;

procedure MostrarResumo;
var
  Ativo: TAtivo;
  ValorTotal: Currency;
begin
  ValorTotal := 0;
  for Ativo in Ativos do
    ValorTotal := ValorTotal + Ativo.Valor;
  WriteLn;
  WriteLn('=== RESUMO PCM ===');
  WriteLn('Ativos cadastrados: ', Length(Ativos));
  WriteLn('Valor patrimonial: R$ ', FormatCurr('#,##0.00', ValorTotal));
  WriteLn('Planos pendentes: 12');
  Pausar;
end;

procedure Menu;
var
  Opcao: Integer;
  Continuar: Boolean;
begin
  SetLength(Ativos, 0);
  Continuar := True;
  while Continuar do
  begin
    WriteLn;
    WriteLn('==============================================');
    WriteLn(' PCM ENTERPRISE');
    WriteLn(' Planejamento e controle de montagem e manutencao');
    WriteLn('==============================================');
    WriteLn('1 - Resumo da operacao');
    WriteLn('2 - Cadastrar ativo');
    WriteLn('3 - Listar e buscar ativos');
    WriteLn('4 - Assistente PCM / gerar plano');
    WriteLn('0 - Sair');
    Opcao := LerInteiro('Escolha uma opcao', 0);
    case Opcao of
      1: MostrarResumo;
      2: CadastrarAtivo;
      3: ListarAtivos;
      4: AssistentePCM;
      0: Continuar := False;
    else
      WriteLn('Opcao invalida.');
    end;
  end;
end;

begin
  try
    Menu;
  except
    on E: Exception do
    begin
      WriteLn('Erro: ', E.Message);
      ReadLn;
    end;
  end;
end.
