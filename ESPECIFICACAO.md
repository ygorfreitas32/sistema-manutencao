# Especificação de Funcionalidades - Gestão de Manutenção Fabril

## Visão Geral do Sistema

Sistema integrado de gestão de manutenção fabril com suporte a múltiplos usuários, controle de ativos, ordens de serviço, planos preventivos e rastreamento de equipes técnicas.

---

## 1. Nível 0: Autenticação e Acesso Inicial

### 1.1 Tela de Apresentação / Boas-Vindas

- O usuário acessa a URL raiz da aplicação.
- O sistema exibe o propósito da plataforma (*"A sua fábrica controlada pelo seu sistema de gestão"*).
- Ação: O usuário clica no botão **"Acessar Sistema"** ou **"Entrar"**.

### 1.2 Tela de Login

- O usuário insere suas credenciais (*E-mail* e *Senha*).
- O sistema valida o token de autenticação e o nível de acesso (Administrador, PCM ou Técnico).

### Transição

- *Falha na validação:* Exibe mensagem de erro e permanece na tela.
- *Sucesso:* Redireciona para a tela principal (**Visão Geral / Dashboard**).

---

## 2. Nível 1: Estrutura Global e Dashboard Central (Visão Geral)

Ao entrar no sistema, o usuário fixa-se na casca da aplicação (Layout Mestre):

### Componente Fixo - Sidebar (Menu Lateral Retrátil)

- **Topo:** Logotipo e marca **Gestão de Manutenção Fabril**.
- **Navegação:** Atalhos diretos para:
  - Visão Geral (Dashboard)
  - Ativos Industriais
  - Notas de Manutenção
  - Planos Preventivos
  - Equipes/Técnicos
  - Notas Corretivas Abertas
  - Auditoria
  - Configurações
- **Rodapé:** Cartão de perfil do usuário ativo (Avatar, Nome, Perfil de acesso e botão de *Logout*).

### Componente Fixo - Header (Cabeçalho Superior)

- Título da página atual (*ex.: Visão Geral*).
- Contexto operacional: Data dinâmica, status de conexão e seletor da planta fabril ativa (*ex.: Planta Principal*).

### 2.1 Painel Principal (Dashboard)

- Exibe cartões de indicadores rápidos (KPIs):
  - Total de Ativos Operacionais
  - OS Abertas
  - OS em Andamento
  - Máquinas Paradas
- Lista de alertas críticos e manutenções prioritárias do dia.
- Ações rápidas: Botão **"Nova OS"** e cliques nos cartões para filtrar as listagens correspondentes.
- Agenda de manutenção com reagendamento de planos.

---

## 3. Nível 2: Módulos Operacionais e Subfluxos

### 3.1 Módulo: Gestão de Ativos Fabris

#### 3.1.1 Listagem de Ativos

- Acessado via Sidebar -> "Ativos".
- Exibe tabela com colunas:
  - Tag (identificador único)
  - Descrição/Nome da máquina
  - Linha/Setor
  - Criticidade (A, B, C)
  - Status (Operacional, Parado, Em Manutenção)
- Recursos da tela:
  - Barra de busca por Tag/Nome
  - Filtros por criticidade/setor
  - Exportação para CSV

#### 3.1.2 Cadastro de Novo Ativo (Modal / Formulário)

- Acionado pelo botão **"+ Cadastrar Ativo"**.
- Entrada de dados:
  - Tag
  - Nome
  - Setor/Localização
  - Fabricante
  - Modelo
  - Ano de Fabricação
  - Horímetro inicial
  - Disciplina (Mecânica, Elétrica)
  - Categoria (Produtiva, Utilidades, Sobressalente)
- Ações:
  - Cancelar (fecha o modal)
  - Salvar (persiste os dados e atualiza a tabela em tempo real)

#### 3.1.3 Detalhes e Prontuário da Máquina

- Ocorre ao clicar sobre a linha de um ativo na listagem.
- Exibe ficha técnica completa.
- Histórico de ordens executadas.
- Indicadores individuais (MTBF / MTTR).
- Planos de manutenção associados.
- Documentação técnica (manuais, certificados, notas fiscais).

---

### 3.2 Módulo: Notas de Manutenção

#### 3.2.1 Tipos de Notas

- **Corretiva Mecânica:** Atendimento para equipe mecânica
- **Corretiva Elétrica:** Atendimento para equipe elétrica
- **Corretiva Calibração:** Atendimento para equipe de calibração
- **Programada Mecânica:** Manutenção planejada - mecânica
- **Programada Elétrica:** Manutenção planejada - elétrica
- **Programada Calibração:** Manutenção planejada - calibração

#### 3.2.2 Abertura de Nota de Manutenção

- Acionado via Sidebar -> "Notas de Manutenção".
- Seleção do tipo de nota (Corretiva/Programada + Disciplina).
- Inserção do equipamento/TAG afetado.
- Relato da anomalia / sintoma de falha.
- Descrição da possível solução.
- Prioridade (Muito urgente, Urgente, Pode esperar, Programada).
- Identificação do solicitante.
- Ação: Confirmar emissão da nota. O sistema registra na auditoria e encaminha para a fila de atendimento.

#### 3.2.3 Fila de Notas Corretivas Abertas

- Acessado via Sidebar -> "Notas Corretivas Abertas".
- Exibe apenas notas do tipo Corretiva que estão abertas ou em atendimento.
- Mostra: Equipamento, Tipo (Mecânica/Elétrica/Calibração), Prioridade, Equipe responsável.
- Ações:
  - **"Iniciar Atendimento"** → Muda status para "Em atendimento"
  - **"Concluir Nota"** → Marca como concluída e move para histórico

---

### 3.3 Módulo: Planos Preventivos e Rotinas

#### 3.3.1 Matriz de Prevenção

- Acessado via Sidebar -> "Planos Preventivos".
- Exibe rotinas cadastradas organizadas por:
  - Periodicidade (diária, semanal, mensal ou por horímetro)
  - Disciplina (Mecânica, Elétrica, Calibração)
  - Status (Pendente, Atrasado, Concluído)

#### 3.3.2 Criação/Edição de Plano Preventivo

- Definição do título do plano (*ex.: Lubrificação Semanal de Mancais*).
- Vinculação aos ativos aplicáveis.
- Criação de checklist de tarefas operacionais (passo a passo de inspeção).
- Definição da regra de disparo automático de OS preventiva.

#### 3.3.3 Reagendamento de Planos

- Clique no botão **"Reagendar"** em um plano.
- Sistema solicita a nova data.
- Plano é movido para a data informada e status retorna a "Pendente".

---

### 3.4 Módulo: Equipes e Técnicos

#### 3.4.1 Gestão de Equipe

- Acessado via Sidebar -> "Equipes".
- Lista os profissionais de manutenção com indicação de:
  - Especialidade (Mecânica, Elétrica, Instrumentação, Utilidades)
  - Turno de trabalho
  - Status em tempo real (*Disponível*, *Em Atendimento - OS #1042*, *Ausente*)
  - Tarefas atribuídas

#### 3.4.2 Agenda de Disponibilidade

- Tabela com escala 6x2 (6 dias trabalhados, 2 dias de folga).
- Visualização de disponibilidade de cada técnico por dia.
- Filtro por disciplina (Elétrica, Mecânica, Calibração).

#### 3.4.3 Cartão de Técnico

- Nome e especialidade.
- Status de disponibilidade hoje.
- Lista de tarefas/planos atribuídos.
- Botão de conclusão de plano.

---

### 3.5 Módulo: Auditoria

#### 3.5.1 Rastreamento de Alterações

- Acessado via Sidebar -> "Auditoria".
- Exibe histórico completo de alterações no sistema.
- Informações: Data, Usuário, Ação realizada, Entidade afetada, Detalhes da mudança.

#### 3.5.2 Desfazimento de Alterações

- Usuários com acesso de Analista podem desfazer ações.
- Requer validação de senha.
- Alteração desfeita é registrada no histórico como novo evento.

---

### 3.6 Módulo: Configurações

#### 3.6.1 Personalização da Aparência

- Acessado via Sidebar -> "Configurações".
- Controles disponíveis:
  - **Cor do Cabeçalho:** Seletor de cor com visualização em tempo real
  - **Cor Principal:** Define cor de botões e destaques
  - **Fonte do Sistema:** Escolha entre DM Sans, Space Grotesk, Georgia, Verdana
- **Botão "Restaurar Padrão":** Retorna todas as personalizações aos valores originais
- Alterações são salvas no navegador e persistem entre sessões

---

### 3.7 Módulo: Assistente IA (Demonstração)

#### 3.7.1 Geração de Planos Automáticos

- Acesso via Sidebar -> "Assistente IA".
- Upload de padrão do cliente (imagem ou documento).
- Descrição do equipamento ou serviço em linguagem natural.
- Sistema gera plano de manutenção estruturado:
  - Ativo vinculado
  - Tipo de inspeção recomendado
  - Prioridade sugerida
  - Passo a passo do roteiro

---

## 4. Nível 3: Encerramento de Sessão

### 4.1 Logout (Saída)

- O usuário clica na foto/cartão de perfil na base da Sidebar.
- Seleciona a opção **"Sair"**.
- O sistema invalida a sessão ativa.
- Limpa os dados locais de navegação.
- Redireciona o usuário de volta à tela de Apresentação/Login.

---

## Fluxos de Dados e Persistência

### Armazenamento Local (localStorage)

- **Ativos:** `pcm-assets`
- **Planos de Manutenção:** `pcm-plans`
- **Notas de Manutenção:** `pcm-maintenance-notes`
- **Auditoria:** `gestao-fabril-audit`
- **Tema/Personalização:** `gestao-fabril-theme`

### Tratamento de Erros

- Dados corrompidos no localStorage são descartados e valores padrão são restaurados.
- Console exibe avisos de dados inválidos para diagnóstico.

---

## Segurança

### Autenticação

- Login por usuário/senha (demonstração).
- Validação de nível de acesso (Administrador, PCM, Técnico).

### Autorização

- Ações sensíveis (edição, exclusão) requerem validação de senha de Analista.

### Auditoria

- Todas as operações críticas são registradas com timestamp, usuário e detalhes.
- Histórico completo permanentemente disponível.

---

## Tecnologia

- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **Ícones:** Lucide Icons
- **Armazenamento:** LocalStorage (dados de demonstração)
- **Responsividade:** Layout adaptável para desktop e tablets
- **Tipografia:** DM Sans, Space Grotesk

---

## Próximas Etapas (Roadmap)

- [ ] Integração com backend de autenticação (OAuth2 / JWT)
- [ ] API RESTful para sincronização de dados
- [ ] Relatórios avançados e BI
- [ ] Notificações em tempo real (WebSocket)
- [ ] Mobile app (React Native / Flutter)
- [ ] Integração com IoT para monitoramento preditivo
- [ ] Sistema de agendamento automático de manutenção

---

**Versão:** 1.0  
**Data:** Setembro de 2026  
**Status:** Em Produção (Demonstração)
