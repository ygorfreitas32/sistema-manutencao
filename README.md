# Gestao de Manutencao Fabril

Aplicacao web simples para demonstrar um sistema de Planejamento e Controle da Manutencao (PCM). Ela funciona diretamente no navegador e salva os dados no `localStorage`.

## Mapa do projeto

```text
atividadesPOO/
|-- index.html              Estrutura visual fixa da aplicacao
|-- css/
|   `-- styles.css          Cores, espacamentos, componentes e responsividade
|-- js/
|   `-- app.js              Dados, telas, regras, eventos e persistencia
|-- README.md               Este guia de manutencao
|-- ESPECIFICACAO.md        Especificacao original do projeto
|-- supabase-schema.sql     Estrutura SQL de referencia
|-- PCMDelphi.dpr           Projeto Delphi relacionado
|-- ATIVIDADE 1/            Arquivos da atividade academica
|-- Arquivo/                Materiais auxiliares
`-- projeto pi pcm/        Outro material do projeto
```

## Como a aplicacao funciona

1. O navegador carrega `index.html`.
2. O HTML mostra a tela de login e cria os pontos vazios `#main-content`, `#modal-root` e `#toast-root`.
3. `js/app.js` carrega os dados iniciais ou os dados salvos no navegador.
4. Ao enviar o login, o perfil e o nome do usuario sao guardados em memoria.
5. `applyProfileNavigation()` mostra somente as opcoes permitidas para o perfil.
6. `render()` chama `layout()`, que escolhe a tela atual e insere seu HTML em `#main-content`.
7. Depois de cada `render()`, os eventos dos botoes, formularios, filtros e abas sao conectados novamente.
8. Alteracoes de ativos, planos, notas, auditoria e tema sao salvas no `localStorage`.

## Onde alterar cada parte

### Estrutura da pagina

Edite `index.html` quando precisar alterar:

- campos fixos do login;
- itens fixos do menu lateral;
- titulo da barra superior;
- pontos de montagem usados pelo JavaScript.

As telas internas nao ficam escritas diretamente no HTML. Elas sao geradas por funcoes em `js/app.js`.

### Aparencia

Edite `css/styles.css` quando precisar alterar:

- cores globais no bloco `:root`;
- tamanho e espacamento dos elementos;
- estilos da tela de login e do menu lateral;
- tabelas, paineis, modais e botoes;
- comportamento em celular nos blocos `@media`.

A tela de configuracoes tambem altera algumas variaveis CSS em tempo de execucao, especialmente `--header-bg`, `--teal` e `--body-font`.

### Dados iniciais

No comeco de `js/app.js` ficam:

- `seedAssets`: ativos basicos da demonstracao;
- `catalogAssets`: equipamentos complementares;
- lista de planos de manutencao;
- lista de tecnicos e suas tarefas.

Para adicionar um ativo demonstrativo, inclua um objeto nesses catalogos com `tag`, `name`, `loc`, `disc`, `cat` e `val`.

### Telas

As funcoes que terminam com `Page` geram cada area principal:

- `dashboardPage`: indicadores e agenda;
- `assetsPage`: cadastro e tabela de ativos;
- `plansPage`: planos por disciplina;
- `maintenanceNotesPage`: abertura e acompanhamento de notas;
- `techniciansPage`: escala dos tecnicos;
- `assistantPageV2`: gerador de ordem de servico;
- `auditPage`: historico de alteracoes;
- `settingsPage`: cores e fonte;
- `correctiveRoutesPage`: fila de notas corretivas.

### Regras e eventos

As funcoes de apoio ficam entre os dados e as telas. Alguns exemplos:

- `readStorage`: le dados do navegador com tratamento de erro;
- `save`, `savePlans`, `saveNotes` e `saveTheme`: persistem alteracoes;
- `recordAudit`: registra quem fez uma alteracao;
- `render`: redesenha a tela atual;
- `openModal` e `closeModal`: controlam janelas de cadastro;
- `exportCsv`: baixa os ativos em formato CSV;
- `generateMaintenanceOrder`: monta o texto da ordem de servico.

Os eventos globais ficam no final do arquivo. Eles escutam formularios e cliques porque o conteudo das telas e recriado dinamicamente.

## Dados salvos no navegador

O projeto usa estas chaves do `localStorage`:

- `pcm-assets`: ativos e documentos;
- `pcm-plans`: planos de manutencao;
- `pcm-maintenance-notes`: notas de manutencao;
- `gestao-fabril-audit`: historico de alteracoes;
- `gestao-fabril-theme`: cores e fonte escolhidas;
- `pcm-generated-os-numbers`: numeros de ordens ja gerados.

Para testar a aplicacao como nova, abra o console do navegador e execute:

```js
localStorage.clear();
location.reload();
```

## Como abrir corretamente no VS Code

Abra a pasta inteira `atividadesPOO`, e nao apenas o arquivo `index.html`. Assim o Explorer mostra `css`, `js`, `README.md` e os demais materiais juntos.

Para executar, abra `index.html` no navegador. Como os arquivos sao estaticos, nao e obrigatorio iniciar um servidor local.
