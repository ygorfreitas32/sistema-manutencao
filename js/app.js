// Dados iniciais usados quando ainda não existe informação salva no navegador.
const seedAssets = [
  {
    id: 1,
    tag: "MTR-REC-01",
    name: "Motor de acionamento",
    loc: "Linha de Revestimento",
    disc: "Elétrica",
    calib: "Não",
    cat: "Produtiva",
    val: 75000,
  },
  {
    id: 2,
    tag: "CMP-UTL-02",
    name: "Compressor de ar",
    loc: "Sala de Ar Comprimido",
    disc: "Mecânica",
    calib: "Sim",
    cat: "Utilidades",
    val: 120000,
  },
  {
    id: 3,
    tag: "ROL-ESER-04",
    name: "Rolamento sobressalente",
    loc: "Almoxarifado Central",
    disc: "Mecânica",
    calib: "Não",
    cat: "Sobressalente",
    val: 4500,
  },
  {
    id: 4,
    tag: "BMB-ETA-08",
    name: "Bomba de tratamento",
    loc: "Estação de Tratamento",
    disc: "Mecânica",
    calib: "Sim",
    cat: "Utilidades",
    val: 89000,
  },
];
// Catálogo complementar de instrumentos e equipamentos demonstrativos.
const catalogAssets = [
  {
    tag: "MM-01",
    loc: "Oficina Elétrica - Bancada 01",
    disc: "Elétrica",
    cat: "Instrumento de Medição",
    name: "Instrumento de Medição",
    val: 1850,
  },
  {
    tag: "AC-01",
    loc: "Sala de Painéis - CCM 01",
    disc: "Elétrica",
    cat: "Alicate Amperímetro",
    name: "Alicate Amperímetro",
    val: 2400,
  },
  {
    tag: "MG-01",
    loc: "Subestação Principal",
    disc: "Elétrica",
    cat: "Megômetro / Testador de Isolação",
    name: "Megômetro / Testador de Isolação",
    val: 8900,
  },
  {
    tag: "TC-01",
    loc: "Utilidades - Compressores",
    disc: "Elétrica",
    cat: "Câmera Termográfica",
    name: "Câmera Termográfica",
    val: 14500,
  },
  {
    tag: "ST-01",
    loc: "Oficina Elétrica - Armário E",
    disc: "Elétrica",
    cat: "Soprador Térmico Industrial",
    name: "Soprador Térmico Industrial",
    val: 420,
  },
  {
    tag: "FE-01",
    loc: "Linha de Montagem 02",
    disc: "Elétrica",
    cat: "Ferro de Solda / Estação ESD",
    name: "Ferro de Solda / Estação ESD",
    val: 980,
  },
  {
    tag: "CM-01",
    loc: "Oficina Mecânica - Painel 01",
    disc: "Mecânica",
    cat: "Jogo de Chaves Combinadas",
    name: "Jogo de Chaves Combinadas",
    val: 1250,
  },
  {
    tag: "TQ-01",
    loc: "Oficina Mecânica - Armário M",
    disc: "Mecânica",
    cat: "Torquímetro de Estalo",
    name: "Torquímetro de Estalo",
    val: 1650,
  },
  {
    tag: "SM-01",
    loc: "Galpão de Bombas - Setor A",
    disc: "Mecânica",
    cat: "Sacador de Rolamentos Hidráulico",
    name: "Sacador de Rolamentos Hidráulico",
    val: 3800,
  },
  {
    tag: "PR-01",
    loc: "Oficina Mecânica - Bancada 03",
    disc: "Mecânica",
    cat: "Prensa Hidráulica 30t",
    name: "Prensa Hidráulica 30t",
    val: 6200,
  },
  {
    tag: "ES-01",
    loc: "Setor de Caldeiraria",
    disc: "Mecânica",
    cat: "Esmerilhadeira Angular",
    name: "Esmerilhadeira Angular",
    val: 890,
  },
  {
    tag: "AL-01",
    loc: "Sala de Máquinas - Ventiladores",
    disc: "Mecânica",
    cat: "Alinhador a Laser de Eixos",
    name: "Alinhador a Laser de Eixos",
    val: 28000,
  },
  {
    tag: "AV-01",
    loc: "Linha de Produção - Envasadora",
    disc: "Mecânica",
    cat: "Analisador de Vibração",
    name: "Analisador de Vibração",
    val: 34000,
  },
  {
    tag: "BC-01",
    loc: "Laboratório de Metrologia",
    disc: "Calibração",
    calib: "Sim",
    cat: "Bomba de Comparação Hidráulica",
    name: "Bomba de Comparação Hidráulica",
    val: 12300,
  },
  {
    tag: "CP-01",
    loc: "Sala de Instrumentação",
    disc: "Calibração",
    calib: "Sim",
    cat: "Calibrador de Processos Multifunção",
    name: "Calibrador de Processos Multifunção",
    val: 22500,
  },
  {
    tag: "TS-01",
    loc: "Caldeiras - Linha de Vapor",
    disc: "Calibração",
    calib: "Sim",
    cat: "Termômetro Padrão Digital",
    name: "Termômetro Padrão Digital",
    val: 4100,
  },
  {
    tag: "BT-01",
    loc: "Laboratório de Metrologia",
    disc: "Calibração",
    calib: "Sim",
    cat: "Bloco Termostático (Dry Block)",
    name: "Bloco Termostático (Dry Block)",
    val: 19800,
  },
  {
    tag: "PC-01",
    loc: "Oficina Mecânica - Metrologia",
    disc: "Calibração",
    calib: "Sim",
    cat: "Paquímetro Digital 300mm",
    name: "Paquímetro Digital 300mm",
    val: 750,
  },
  {
    tag: "MC-01",
    loc: "Usinagem - Sala de Medição",
    disc: "Calibração",
    calib: "Sim",
    cat: "Micrômetro Externo 0-25mm",
    name: "Micrômetro Externo 0-25mm",
    val: 620,
  },
  {
    tag: "MD-01",
    loc: "Tratamento de Efluentes (ETE)",
    disc: "Calibração",
    calib: "Sim",
    cat: "Manômetro Padrão Digital",
    name: "Manômetro Padrão Digital",
    val: 3200,
  },
].map((asset, index) => ({
  ...asset,
  id: 1000 + index,
  calib: asset.calib || "Não",
}));
// Leitura segura do localStorage: se houver dado inválido, usa o valor padrão.
const readStorage = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch (error) {
    console.warn(`Dados locais inválidos em ${key}; usando padrão.`, error);
    return fallback;
  }
};
// Estado principal da aplicação. Essas variáveis mudam enquanto o usuário navega.
let assets = readStorage("pcm-assets", seedAssets);
const existingTags = new Set(assets.map((asset) => asset.tag));
assets = [
  ...assets,
  ...catalogAssets.filter((asset) => !existingTags.has(asset.tag)),
].map((asset) => ({
  ...asset,
  name: asset.name || asset.tag,
  documents: asset.documents || [],
}));
localStorage.setItem("pcm-assets", JSON.stringify(assets));
let auditLog = readStorage("gestao-fabril-audit", []);
let maintenancePlans = readStorage("pcm-plans", [
  {
    id: 101,
    discipline: "Mecânica",
    title: "Inspeção de vibração",
    asset: "BMB-UTIL-01",
    date: "2026-09-01",
    status: "Atrasado",
    client: "Cliente demonstração",
  },
  {
    id: 102,
    discipline: "Mecânica",
    title: "Lubrificação preventiva",
    asset: "CMP-UTL-02",
    date: "2026-09-06",
    status: "Pendente",
    client: "Cliente demonstração",
  },
  {
    id: 103,
    discipline: "Elétrica",
    title: "Termografia do painel",
    asset: "MTR-REC-01",
    date: "2026-09-04",
    status: "Pendente",
    client: "Cliente demonstração",
  },
  {
    id: 104,
    discipline: "Calibração",
    title: "Calibração de manômetro",
    asset: "BMB-ETA-08",
    date: "2026-09-02",
    status: "Atrasado",
    client: "Cliente demonstração",
  },
]);
let currentView = "dashboard";
let currentUser = null;
let maintenanceNotes = readStorage("pcm-maintenance-notes", []);
const defaultTheme = { header: "#ffffff", accent: "#087f83", font: "DM Sans" };
let theme = { ...defaultTheme, ...readStorage("gestao-fabril-theme", {}) };
let currentDiscipline = "Mecânica";
let currentTechnicianDiscipline = "Elétrica";
// Equipes usadas na agenda de disponibilidade e na distribuição de tarefas.
const technicians = [
  {
    id: 1,
    name: "Carlos Mendes",
    discipline: "Elétrica",
    shiftStart: 0,
    tasks: ["Termografia do painel MTR-REC-01", "Reaperto de conexões"],
  },
  {
    id: 2,
    name: "Ana Ribeiro",
    discipline: "Elétrica",
    shiftStart: 1,
    tasks: ["Inspeção de motores", "Teste de proteção"],
  },
  {
    id: 3,
    name: "Lucas Alves",
    discipline: "Elétrica",
    shiftStart: 2,
    tasks: ["Limpeza de painel", "Atualizar diagrama"],
  },
  {
    id: 4,
    name: "Marcos Silva",
    discipline: "Mecânica",
    shiftStart: 0,
    tasks: ["Inspeção de vibração BMB-UTIL-01", "Lubrificação CMP-UTL-02"],
  },
  {
    id: 5,
    name: "Juliana Costa",
    discipline: "Mecânica",
    shiftStart: 1,
    tasks: ["Revisão de rolamentos", "Alinhamento de eixo"],
  },
  {
    id: 6,
    name: "Rafael Souza",
    discipline: "Mecânica",
    shiftStart: 2,
    tasks: ["Inspeção de correias", "Checklist de bomba"],
  },
  {
    id: 7,
    name: "Beatriz Lima",
    discipline: "Calibração",
    shiftStart: 0,
    tasks: ["Calibração BMB-ETA-08", "Verificação de manômetro"],
  },
  {
    id: 8,
    name: "Diego Martins",
    discipline: "Calibração",
    shiftStart: 1,
    tasks: ["Calibração de transmissores", "Emitir certificados"],
  },
  {
    id: 9,
    name: "Camila Rocha",
    discipline: "Calibração",
    shiftStart: 2,
    tasks: ["Inspeção de sensores", "Atualizar histórico metrológico"],
  },
];
// Funções pequenas de apoio para moeda, ícones, mensagens e persistência.
const money = (value) =>
  Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
const icon = (name) => `<i data-lucide="${name}" size="17"></i>`;
const refreshIcons = () => window.lucide && lucide.createIcons();
const showToast = (message) => {
  const root = document.getElementById("toast-root");
  root.innerHTML = `<div class="toast">${icon("check-circle-2")} ${message}</div>`;
  refreshIcons();
  setTimeout(() => (root.innerHTML = ""), 3200);
};
const save = () => localStorage.setItem("pcm-assets", JSON.stringify(assets));
const saveAudit = () =>
  localStorage.setItem("gestao-fabril-audit", JSON.stringify(auditLog));
const recordAudit = (action, asset, detail, before = null) => {
  auditLog.unshift({
    id: Date.now(),
    date: new Date().toLocaleString("pt-BR"),
    user: "Analista PCM",
    action,
    asset: asset.tag,
    detail,
    before: before ? JSON.parse(JSON.stringify(before)) : null,
  });
  saveAudit();
};
const savePlans = () =>
  localStorage.setItem("pcm-plans", JSON.stringify(maintenancePlans));
const saveNotes = () =>
  localStorage.setItem(
    "pcm-maintenance-notes",
    JSON.stringify(maintenanceNotes),
  );
const saveTheme = () =>
  localStorage.setItem("gestao-fabril-theme", JSON.stringify(theme));
// Aplica no CSS as preferências de aparência escolhidas pelo usuário.
function applyTheme() {
  document.documentElement.style.setProperty("--header-bg", theme.header);
  document.documentElement.style.setProperty("--teal", theme.accent);
  document.documentElement.style.setProperty(
    "--body-font",
    `'${theme.font}', sans-serif`,
  );
}
// Escolhe qual página deve ser desenhada dentro de #main-content.
function layout() {
  const total = assets.reduce((sum, asset) => sum + Number(asset.val), 0);
  const title =
    currentView === "dashboard"
      ? "Visão geral"
      : currentView === "assets"
        ? "Cadastro de ativos"
        : currentView === "plans"
          ? "Planos de manutenção"
          : currentView === "maintenance-notes"
            ? "Notas De Manutenção"
            : currentView === "technicians"
              ? "Técnicos"
              : currentView === "audit"
                ? "Auditoria"
                : currentView === "settings"
                  ? "Configurações"
                  : "Assistente PCM";
  const subtitle =
    currentView === "dashboard"
      ? "Acompanhe a saúde operacional da sua planta."
      : currentView === "assets"
        ? "Registre equipamentos e mantenha a base patrimonial atualizada."
        : currentView === "plans"
          ? "Rotas organizadas para cada disciplina da manutenção."
          : currentView === "maintenance-notes"
            ? "Registre falhas e encaminhe o atendimento para a equipe responsável."
            : currentView === "technicians"
              ? "Disponibilidade, escala 6x2 e planos atribuídos por técnico."
              : currentView === "audit"
                ? "Controle, rastreabilidade e reversão das ações realizadas."
                : "Transforme informações soltas em um plano de manutenção organizado.";
  return `<div class="section-head"><div><h2>${title}</h2><p>${subtitle}</p></div>${currentView === "assets" ? `<button class="btn btn-primary" id="new-asset">${icon("plus")} Novo ativo</button>` : ""}</div>${currentView === "dashboard" ? dashboardPage(total) : currentView === "assets" ? assetsPage() : currentView === "plans" ? plansPage() : currentView === "maintenance-notes" ? maintenanceNotesPage() : currentView === "technicians" ? techniciansPage() : currentView === "audit" ? auditPage() : currentView === "settings" ? settingsPage() : assistantPageV2()}`;
}
// Funções abaixo geram o HTML de cada área do sistema.
function dashboardPage(total) {
  const calibrated = assets.filter((a) => a.calib === "Sim").length;
  const plans = maintenancePlans.filter(
    (p) => p.discipline === currentDiscipline,
  );
  const statusClass = (status) =>
    status === "Atrasado" ? "orange" : status === "Concluído" ? "teal" : "gray";
  return `<div class="metrics"><div class="metric"><span class="metric-label">Ativos cadastrados</span><strong>${assets.length}</strong><small>Base operacional ativa</small></div><div class="metric teal"><span class="metric-label">Planos pendentes</span><strong>${maintenancePlans.filter((p) => p.status === "Pendente").length}</strong><small>Próximas execuções</small></div><div class="metric orange"><span class="metric-label">Planos atrasados</span><strong>${maintenancePlans.filter((p) => p.status === "Atrasado").length}</strong><small>Requerem reprogramação</small></div><div class="metric teal"><span class="metric-label">Valor patrimonial</span><strong>${money(total)}</strong><small>${calibrated} ativos calibráveis</small></div></div><div class="panel"><div class="panel-title">${icon("calendar-days")}<h3>Agenda de manutenção</h3></div><div class="plan-tabs">${["Mecânica", "Elétrica", "Calibração"].map((d) => `<button class="plan-tab ${d === currentDiscipline ? "active" : ""}" data-discipline="${d}">${d} (${maintenancePlans.filter((p) => p.discipline === d).length})</button>`).join("")}</div><div class="schedule">${plans.length ? plans.map((p) => `<div class="schedule-row"><div><strong>${p.title}</strong><small>${p.asset} · ${p.client}</small></div><div><small>Data planejada</small><br><b>${new Date(`${p.date}T12:00:00`).toLocaleDateString("pt-BR")}</b></div><div><span class="badge ${statusClass(p.status)}">${p.status}</span></div><button class="btn btn-quiet schedule-action" data-reschedule="${p.id}">${icon("calendar-clock")} Reagendar</button></div>`).join("") : '<div class="empty">Nenhum plano cadastrado para esta disciplina.</div>'}</div><div class="date-free">${icon("calendar-plus")} Janela livre identificada: sexta-feira, 11/09. Use “Reagendar” para mover um plano para esse dia.</div></div>`;
}
function technicianAgendaPage() {
  const plans = maintenancePlans.filter(
    (plan) => plan.discipline === currentDiscipline,
  );
  const statusClass = (status) =>
    status === "Atrasado" ? "orange" : status === "Concluído" ? "teal" : "gray";
  return `<div class="panel"><div class="panel-title">${icon("calendar-days")}<h3>Agenda de manutenção</h3><span class="badge teal" style="margin-left:auto">Somente visualização</span></div><div class="plan-tabs">${["Mecânica", "Elétrica", "Calibração"].map((discipline) => `<button class="plan-tab ${discipline === currentDiscipline ? "active" : ""}" data-discipline="${discipline}">${discipline} (${maintenancePlans.filter((plan) => plan.discipline === discipline).length})</button>`).join("")}</div><div class="schedule">${plans.length ? plans.map((plan) => `<div class="schedule-row"><div><strong>${plan.title}</strong><small>${plan.asset} · ${plan.client}</small></div><div><small>Data planejada</small><br><b>${new Date(`${plan.date}T12:00:00`).toLocaleDateString("pt-BR")}</b></div><span class="badge ${statusClass(plan.status)}">${plan.status}</span></div>`).join("") : '<div class="empty">Nenhum plano cadastrado para esta disciplina.</div>'}</div></div>`;
}
const fullDashboardPage = dashboardPage;
dashboardPage = (total) =>
  currentUser?.role === "Técnico"
    ? technicianAgendaPage()
    : fullDashboardPage(total);
function assetsPage() {
  return `<div class="panel"><div class="toolbar"><div class="search">${icon("search")}<input id="asset-search" placeholder="Buscar por tag, descrição ou localização..." /></div><select id="discipline-filter" style="max-width:180px"><option value="">Todas as disciplinas</option><option>Mecânica</option><option>Elétrica</option><option>Calibração</option></select><button id="export-csv" class="btn btn-quiet">${icon("download")} Exportar CSV</button></div><div class="table-wrap"><table><thead><tr><th>Tag</th><th>Descrição</th><th>Localização</th><th>Disciplina</th><th>Categoria</th><th>Valor NF</th><th></th></tr></thead><tbody id="asset-rows"></tbody></table></div></div>`;
}
// Atualiza somente as linhas da tabela de ativos após busca ou filtro.
function renderRows() {
  const rows = document.getElementById("asset-rows");
  if (!rows) return;
  const query = (
    document.getElementById("asset-search")?.value || ""
  ).toLowerCase();
  const discipline = document.getElementById("discipline-filter")?.value || "";
  const filtered = assets.filter(
    (a) =>
      (!query ||
        `${a.tag} ${a.name} ${a.loc} ${a.cat}`.toLowerCase().includes(query)) &&
      (!discipline || a.disc === discipline),
  );
  rows.innerHTML = filtered.length
    ? filtered
        .map(
          (a) =>
            `<tr><td class="tag">${a.tag}</td><td>${a.name}</td><td>${a.loc}</td><td><span class="badge ${a.disc === "Elétrica" ? "teal" : a.disc === "Calibração" ? "gray" : "orange"}">${a.disc}</span></td><td>${a.cat}</td><td><b>${money(a.val)}</b></td><td><button class="btn btn-quiet asset-docs" data-id="${a.id}" title="Abrir ficha e documentos">${icon("folder-open")}</button> <button class="btn btn-danger delete-asset" data-id="${a.id}" title="Excluir ativo">${icon("trash-2")}</button></td></tr>`,
        )
        .join("")
    : '<tr><td class="empty" colspan="7">Nenhum ativo encontrado.</td></tr>';
  refreshIcons();
}
function plansPage() {
  return `<div class="plans"><div class="panel plan"><div class="panel-title">${icon("settings")}<h3>Inspeção mecânica</h3></div><p>Inspeções sistemáticas, lubrificação e acompanhamento de condição.</p><div class="checklist"><div class="check"><span>Revisão interna</span><span class="badge orange">Parada</span></div><div class="check"><span>Vibração e temperatura</span><span class="badge teal">Rodando</span></div><div class="check"><span>Lubrificação</span><span class="badge teal">Em execução</span></div></div></div><div class="panel plan orange"><div class="panel-title">${icon("zap")}<h3>Inspeção elétrica</h3></div><p>Atendimento aos circuitos, painéis e motores críticos da planta.</p><div class="checklist"><div class="check"><span>Reaperto e limpeza</span><span class="badge orange">Parado</span></div><div class="check"><span>Termografia</span><span class="badge teal">Rodando</span></div></div></div><div class="panel plan red"><div class="panel-title">${icon("gauge")}<h3>Rota de calibração</h3></div><p>Garantia metrológica de sensores, manômetros e transmissores.</p><div class="checklist"><div class="check"><span>Manômetros</span><span class="badge teal">Conforme</span></div><div class="check"><span>Transmissores de pressão</span><span class="badge orange">Programado</span></div></div></div></div>`;
}
// Calcula a escala 6x2 de um técnico para uma determinada data.
function isTechnicianWorking(technician, date) {
  const start = new Date("2026-09-01T12:00:00");
  const day = Math.floor((date - start) / 86400000);
  return (((day - technician.shiftStart) % 8) + 8) % 8 < 6;
}
function maintenanceNotesPage() {
  const priorityClass = (priority) =>
    priority === "Muito urgente"
      ? "critical"
      : priority === "Urgente"
        ? "orange"
        : "teal";
  const notes = [...maintenanceNotes].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
  return `<div class="maintenance-notes"><form class="panel maintenance-form" id="maintenance-note-form"><div class="panel-title">${icon("file-plus-2")}<h3>Abrir nota de manutenção</h3></div><div class="form-grid"><div class="field"><label for="note-type">TIPO DE NOTA</label><select id="note-type" name="type" required><option>Corretiva</option><option>Mecânica</option><option>Calibração</option><option>Elétrica</option></select></div><div class="field"><label for="note-priority">PRIORIDADE</label><select id="note-priority" name="priority" required><option>Muito urgente</option><option>Urgente</option><option>Pode esperar</option><option>Programada</option></select></div><div class="field full"><label for="note-equipment">EQUIPAMENTO / TAG</label><input id="note-equipment" name="equipment" required placeholder="Ex.: BMB-ETA-08" /></div><div class="field full"><label for="note-failure">MOTIVO DA FALHA</label><textarea id="note-failure" name="failure" required placeholder="Descreva o que aconteceu, quando começou e quais sinais foram observados."></textarea></div><div class="field full"><label for="note-solution">POSSÍVEL SOLUÇÃO</label><textarea id="note-solution" name="solution" required placeholder="Registre a hipótese de causa e a solução sugerida para o atendimento."></textarea></div><div class="field full"><label for="note-requester">ABERTA POR</label><input id="note-requester" name="requester" required placeholder="Nome do técnico ou analista" /></div></div><div class="modal-actions"><button class="btn btn-primary" type="submit">${icon("send")} Abrir nota</button></div></form><div class="panel"><div class="panel-title">${icon("clipboard-list")}<h3>Notas abertas</h3><span class="badge teal" style="margin-left:auto">${notes.length} registro(s)</span></div><div class="note-list">${notes.length ? notes.map((note) => `<article class="note-card ${priorityClass(note.priority)}"><header><div><h3>${note.equipment}</h3><small>${note.type} · ${note.requester} · ${new Date(note.createdAt).toLocaleString("pt-BR")}</small></div><span class="badge ${note.priority === "Muito urgente" || note.priority === "Urgente" ? "orange" : "teal"}">${note.priority}</span></header><div class="note-meta"><span class="badge gray">${note.type}</span><span class="badge ${note.status === "Concluída" ? "teal" : "gray"}">${note.status}</span></div><p><strong>Falha:</strong> ${note.failure}</p><p><strong>Possível solução:</strong> ${note.solution}</p><div class="note-actions">${note.status !== "Concluída" ? `<button class="btn btn-quiet complete-note" data-id="${note.id}">${icon("check")} Concluir</button>` : ""}<button class="btn btn-danger delete-note" data-id="${note.id}">${icon("trash-2")} Excluir</button></div></article>`).join("") : '<div class="empty">Nenhuma nota de manutenção aberta.</div>'}</div></div></div>`;
}
function techniciansPage() {
  const disciplineTechnicians = technicians.filter(
    (technician) => technician.discipline === currentTechnicianDiscipline,
  );
  const today = new Date("2026-09-04T12:00:00");
  const agenda = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });
  return `<div class="panel"><div class="panel-title">${icon("calendar-days")}<h3>Agenda de disponibilidade · escala 6x2</h3><span class="badge teal" style="margin-left:auto">3 técnicos por equipe</span></div><div class="technician-tabs">${["Elétrica", "Mecânica", "Calibração"].map((discipline) => `<button class="technician-tab ${discipline === currentTechnicianDiscipline ? "active" : ""}" data-technician-discipline="${discipline}">${discipline}</button>`).join("")}</div><div class="table-wrap"><table><thead><tr><th>Data</th>${disciplineTechnicians.map((technician) => `<th>${technician.name}</th>`).join("")}</tr></thead><tbody>${agenda
    .map(
      (date) =>
        `<tr><td><b>${date.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" })}</b></td>${disciplineTechnicians
          .map((technician) => {
            const working = isTechnicianWorking(technician, date);
            return `<td><span class="badge ${working ? "teal" : "orange"}">${working ? "Disponível" : "Folga"}</span></td>`;
          })
          .join("")}</tr>`,
    )
    .join(
      "",
    )}</tbody></table></div></div><div class="technician-grid" style="margin-top:18px">${disciplineTechnicians
    .map((technician) => {
      const working = isTechnicianWorking(technician, today);
      return `<article class="technician-card"><header><h3>${technician.name}</h3><span class="badge ${working ? "teal" : "orange"}">${working ? "Ativo hoje" : "Folga hoje"}</span></header><div class="availability"><span class="availability-dot ${working ? "" : "off"}"></span>${working ? "Disponível para receber planos" : "Em período de folga"}</div><div class="task-list">${technician.tasks.map((task, index) => `<div class="task-item"><span>${task}</span><button class="btn btn-quiet complete-task" data-technician="${technician.id}" data-task="${index}" title="Concluir tarefa">${icon("check")}</button></div>`).join("")}</div></article>`;
    })
    .join("")}</div>`;
}
function assistantPageV2() {
  return `<div class="assistant"><div class="assistant-copy"><span class="eyebrow">Automação inteligente</span><h3>Plano no padrão do cliente</h3><p>Informe o cliente, envie uma foto ou documento do padrão e descreva a necessidade. O agente organiza a resposta no mesmo formato para revisão da equipe.</p><div class="assistant-list"><div>${icon("check-circle-2")} Mantém um padrão por cliente</div><div>${icon("check-circle-2")} Usa foto como referência visual</div><div>${icon("check-circle-2")} Gera roteiro, prioridade e prazo</div></div></div><div class="panel chat-panel"><div class="panel-title">${icon("bot")}<h3>Agente Assistente PCM</h3><span class="badge teal" style="margin-left:auto">Modo demonstração</span></div><div class="reference-box"><label for="client-pattern">PADRÃO DO CLIENTE</label><input id="client-pattern" placeholder="Ex.: Cliente Alpha · Plano padrão v2" /><label for="pattern-file">FOTO OU ARQUIVO DO PADRÃO</label><input id="pattern-file" type="file" accept="image/*,.pdf" /><small id="file-name">Nenhum arquivo enviado. A imagem será usada como referência na demonstração.</small><img id="reference-preview" class="reference-preview" alt="Prévia do padrão enviado" /></div><div class="chat-log" id="chat-log"><div class="chat-message ai">Olá! Envie o padrão do cliente acima e escreva algo como:\n\n“Faça nesse padrão: a bomba BMB-UTIL-01 está vibrando e precisa de inspeção.”</div></div><form class="chat-form" id="chat-form"><input id="chat-input" required placeholder="Descreva o equipamento ou serviço..." /><button class="btn btn-primary" title="Enviar mensagem">${icon("send")}</button></form></div></div>`;
}
// Monta campos de medição de acordo com o tipo de equipamento informado.
function maintenanceMeasurementLines(text) {
  const value = text.toLowerCase();
  if (/corrente|tensão|voltagem|painel/.test(value))
    return "\n     R: _______ A     S: _______ A     T: _______ A\n     Tensão: _______ V     Frequência: _______ Hz";
  if (/temperatura|termograf/.test(value))
    return "\n     Temperatura observada: _______ °C     Limite: _______ °C";
  if (/pressão|hidrául|pneum/.test(value))
    return "\n     Pressão medida: _______ bar     Pressão de referência: _______ bar";
  if (/vibra|alinhamento|eixo/.test(value))
    return "\n     Vibração horizontal: _______ mm/s     Vertical: _______ mm/s     Axial: _______ mm/s";
  return "";
}
function maintenanceChecklistItem(number, subsystem, index) {
  const actions = [
    `Verificar as condições gerais de ${subsystem}, observando integridade, limpeza e ausência de anomalias; corrigir sujeira, danos ou irregularidades, se necessário.`,
    `Inspecionar fixações, conexões e componentes de ${subsystem}, certificando-se de que estejam firmes, sem folgas, aquecimento ou vazamentos; reapertar conexões ou substituir peças, se necessário.`,
    `Testar o funcionamento de ${subsystem}, confirmando operação estável, sem ruído, vibração ou desvio dos parâmetros de referência; ajustar, alinhar ou corrigir a causa encontrada, se necessário.`,
  ];
  const item = `${String(number).padStart(2, "0")} - (  ) ${actions[index % actions.length]}`;
  return item + maintenanceMeasurementLines(subsystem);
}
// Gera o texto final da ordem de serviço a partir do formulário do assistente.
function generateMaintenanceOrder(data) {
  const typeParts = data.orderType.split("|");
  const code = typeParts[0];
  const kind = typeParts[1];
  const subsystems = data.subsystems
    .split(/[,;\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  let number = 1;
  const lines = [
    `Ordem de Serviço Nº ${data.orderNumber || "________________"}`,
    `${code}-Ordem de manutenção ${kind}`,
    "",
    `ATIVO / EQUIPAMENTO: ${data.equipment}`,
    `DATA: ____/____/________     RESPONSÁVEL: ______________________________`,
    "",
    "INSTRUÇÕES DE INSPEÇÃO",
  ];
  subsystems.forEach((subsystem) => {
    lines.push("", subsystem.toUpperCase());
    for (let index = 0; index < 3; index += 1)
      lines.push(maintenanceChecklistItem(number++, subsystem, index));
  });
  if (!subsystems.length)
    lines.push(
      "",
      "SUBSISTEMA A DEFINIR",
      maintenanceChecklistItem(number++, data.equipment, 0),
    );
  lines.push(
    "",
    "OBSERVAÇÕES / SERVIÇOS EXECUTADOS:",
    "________________________________________________________________________________",
    "________________________________________________________________________________",
    "",
    "ASSINATURA DO EXECUTANTE: __________________________    DATA: ____/____/________",
  );
  return lines.join("\n");
}
assistantPageV2 = () =>
  `<div class="assistant"><div class="assistant-copy"><span class="eyebrow">Engenharia de manutenção</span><h3>Gerador de Ordem de Serviço</h3><p>Redija procedimentos e ordens de serviço no padrão técnico corporativo ZPM2 / SAP PM, com subsistemas, checklist contínuo e campos de medição.</p><div class="assistant-list"><div>${icon("check-circle-2")} Cabeçalho padronizado da OS</div><div>${icon("check-circle-2")} Checklist sequencial por subsistema</div><div>${icon("check-circle-2")} Parâmetros quantitativos para preenchimento</div><div>${icon("check-circle-2")} Texto limpo pronto para impressão</div></div></div><div class="panel chat-panel"><div class="panel-title">${icon("clipboard-pen-line")}<h3>Nova ordem de serviço</h3><span class="badge teal" style="margin-left:auto">ZPM2 / SAP PM</span></div><form id="maintenance-order-form"><div class="form-grid"><div class="field"><label for="os-equipment">ATIVO / EQUIPAMENTO</label><input id="os-equipment" name="equipment" required placeholder="Ex.: Compressor de Parafuso" /></div><div class="field"><label for="os-number">CÓDIGO DA OS</label><input id="os-number" name="orderNumber" required placeholder="Ex.: 522282933" /></div><div class="field"><label for="os-type">TIPO DA ORDEM</label><select id="os-type" name="orderType"><option value="ZPM2|preventiva">ZPM2 · Preventiva</option><option value="ZCM2|corretiva">ZCM2 · Corretiva</option><option value="ZPM3|preditiva">ZPM3 · Preditiva</option></select></div><div class="field full"><label for="os-subsystems">SUBSISTEMAS A INSPECIONAR</label><textarea id="os-subsystems" name="subsystems" required placeholder="Um por linha: Motor principal\nPainel de comando\nCircuito hidráulico"></textarea><small style="color:var(--muted);font-size:11px">Separe os conjuntos por linha, vírgula ou ponto e vírgula.</small></div></div><div class="modal-actions"><button class="btn btn-primary" type="submit">${icon("file-output")} Gerar ordem</button><button class="btn btn-quiet" type="button" id="print-maintenance-order">${icon("printer")} Imprimir</button></div></form><pre id="maintenance-order-output" class="maintenance-order-output">Preencha os dados e gere a ordem para visualizar a folha de inspeção.</pre></div></div>`;
function generateUniqueOrderNumber() {
  const key = "pcm-generated-os-numbers";
  let used = [];
  try {
    used = JSON.parse(localStorage.getItem(key) || "[]");
  } catch (error) {
    used = [];
  }
  const registered = new Set(used.map(String));
  let number;
  do {
    number = String(Math.floor(100000000 + Math.random() * 900000000));
  } while (registered.has(number));
  registered.add(number);
  localStorage.setItem(key, JSON.stringify([...registered]));
  return number;
}
const baseAssistantPageV2 = assistantPageV2;
assistantPageV2 = () =>
  baseAssistantPageV2().replace(
    'id="os-number" name="orderNumber" required placeholder="Ex.: 522282933"',
    `id="os-number" name="orderNumber" value="${generateUniqueOrderNumber()}" readonly required`,
  );
function assistantReply(message) {
  const text = message.toLowerCase();
  const priority =
    text.includes("parou") ||
    text.includes("urgente") ||
    text.includes("vazamento")
      ? "Alta"
      : text.includes("vibr") || text.includes("ruído")
        ? "Média"
        : "Programada";
  const type = text.includes("mont")
    ? "Montagem / comissionamento"
    : text.includes("elétr") || text.includes("painel")
      ? "Inspeção elétrica"
      : "Inspeção mecânica";
  const equipment =
    message.match(/[A-Z]{2,}[A-Z0-9-]*/)?.[0] || "equipamento informado";
  return `PLANO GERADO\n\nAtivo: ${equipment}\nTipo: ${type}\nPrioridade sugerida: ${priority}\n\n1. Isolar e sinalizar a área de trabalho.\n2. Conferir histórico, condições e riscos do equipamento.\n3. Executar inspeção visual e registrar evidências.\n4. Corrigir a causa identificada e testar em segurança.\n5. Registrar materiais, responsável e prazo no PCM.\n\nPara concluir, confirme o responsável e a janela de execução.`;
}
function auditPage() {
  return `<div class="panel"><div class="panel-title">${icon("history")}<h3>Alterações realizadas pelos usuários</h3></div><p style="color:var(--muted);font-size:12px">Cada evento registra quem alterou, quando ocorreu e o que foi feito. O desfazimento também fica registrado.</p><div class="audit-list">${auditLog.length ? auditLog.map((log) => `<div class="audit-row"><div><strong>${log.date}</strong><small>${log.user}</small></div><div><strong>${log.action} · ${log.asset}</strong><small>${log.detail}</small></div>${log.before ? `<button class="btn btn-quiet undo-audit" data-id="${log.id}">${icon("undo-2")} Desfazer</button>` : '<span class="badge gray">Informativo</span>'}</div>`).join("") : '<div class="empty">Nenhuma alteração registrada até o momento.</div>'}</div></div>`;
}
// Restaura o estado anterior de um ativo e registra o desfazimento na auditoria.
function undoAudit(id) {
  const password = prompt("Senha de analista para desfazer esta alteração:");
  if (password !== "analista123") {
    showToast("Acesso negado.");
    return;
  }
  const log = auditLog.find((item) => item.id === Number(id));
  if (!log || !log.before) return;
  const current = assets.find((item) => item.id === log.before.id);
  if (current) Object.assign(current, log.before);
  else assets.push(log.before);
  save();
  const restored =
    assets.find((item) => item.id === log.before.id) || log.before;
  recordAudit(
    "Desfazer alteração",
    restored,
    `Estado anterior restaurado para o evento ${log.action} de ${log.date}`,
  );
  render();
  showToast("Alteração desfeita e registrada no histórico.");
}
// Abre o formulário de cadastro de ativo dentro do ponto de montagem modal.
function openModal() {
  document.getElementById("modal-root").innerHTML =
    `<div class="modal-backdrop"><form class="modal" id="asset-form"><div class="modal-head"><div><h2>Novo equipamento</h2><p style="color:var(--muted);font-size:12px;margin:6px 0 0">Inclua os dados principais do ativo.</p></div><button type="button" class="close" id="close-modal">${icon("x")}</button></div><div class="form-grid"><div class="field"><label>TAG DO EQUIPAMENTO</label><input name="tag" required placeholder="Ex.: BMB-UTIL-01" /></div><div class="field"><label>LOCAL DE INSTALAÇÃO</label><input name="loc" required placeholder="Ex.: Casa de máquinas" /></div><div class="field"><label>DISCIPLINA PRINCIPAL</label><select name="disc"><option>Mecânica</option><option>Elétrica</option></select></div><div class="field"><label>CALIBRAÇÃO PERIÓDICA</label><select name="calib"><option>Sim</option><option>Não</option></select></div><div class="field"><label>CATEGORIA FISCAL</label><select name="cat"><option>Produtiva</option><option>Utilidades</option><option>Sobressalente</option></select></div><div class="field"><label>VALOR DA NOTA FISCAL (R$)</label><input name="val" type="number" min="0" step="0.01" required placeholder="50000" /></div><div class="field full"><label>NOTA FISCAL OU DOCUMENTAÇÕES TÉCNICAS</label><input name="documents" type="file" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" /><small style="color:var(--muted);font-size:11px">Você poderá incluir manual, desenho, certificado e nota fiscal na ficha do ativo.</small></div></div><div class="modal-actions"><button type="button" class="btn btn-quiet" id="cancel-modal">Cancelar</button><button class="btn btn-primary" type="submit">${icon("save")} Gravar equipamento</button></div></form></div>`;
  refreshIcons();
  document.getElementById("close-modal").onclick = closeModal;
  document.getElementById("cancel-modal").onclick = closeModal;
  document.getElementById("asset-form").onsubmit = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const documents = await readFiles(event.target.elements.documents.files);
    const asset = { ...data, id: Date.now(), val: Number(data.val), documents };
    delete asset.documents;
    asset.documents = documents;
    assets.unshift(asset);
    save();
    recordAudit(
      "Criação",
      asset,
      `Ativo cadastrado com ${documents.length} documento(s)`,
    );
    closeModal();
    render();
    showToast("Equipamento e documentos registrados.");
  };
}
const originalOpenModal = openModal;
openModal = () => {
  originalOpenModal();
  const form = document.getElementById("asset-form");
  const tagField = form.elements.tag.closest(".field");
  tagField.insertAdjacentHTML(
    "afterend",
    '<div class="field"><label>DESCRIÇÃO DO EQUIPAMENTO</label><input name="name" required placeholder="Ex.: Bomba centrífuga" /></div>',
  );
  form.elements.disc.insertAdjacentHTML(
    "beforeend",
    "<option>Calibração</option>",
  );
  form.elements.cat.outerHTML =
    '<input name="cat" required placeholder="Ex.: Instrumento de Medição" />';
};
function readFiles(files) {
  return Promise.all(
    [...files].map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () =>
            resolve({
              name: file.name,
              type: file.type,
              size: file.size,
              data: reader.result,
            });
          reader.readAsDataURL(file);
        }),
    ),
  );
}
// Exibe documentos, histórico e opções de edição de um ativo específico.
function openAssetDetails(id) {
  const asset = assets.find((item) => item.id === Number(id));
  if (!asset) return;
  const docs = asset.documents || [];
  document.getElementById("modal-root").innerHTML =
    `<div class="modal-backdrop"><div class="modal"><div class="modal-head"><div><h2>${asset.tag}</h2><p style="color:var(--muted);font-size:12px;margin:6px 0 0">Ficha técnica · ${asset.loc}</p></div><button class="close" id="close-modal">${icon("x")}</button></div><div class="reference-box"><strong>Documentos do ativo</strong><small>${docs.length} arquivo(s) vinculado(s). Nota fiscal, manual e certificados ficam organizados nesta ficha.</small><input id="asset-doc-upload" type="file" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" /></div><div class="schedule">${docs.length ? docs.map((doc, index) => `<div class="schedule-row"><div><strong>${doc.name}</strong><small>${Math.ceil(doc.size / 1024)} KB · ${doc.type || "arquivo"}</small></div><a class="btn btn-quiet schedule-action" href="${doc.data}" download="${doc.name}">${icon("download")} Abrir</a><button class="btn btn-quiet schedule-action edit-doc" data-index="${index}">${icon("pencil")} Editar</button></div>`).join("") : '<div class="empty">Nenhum documento anexado.</div>'}</div><div class="panel" style="margin-top:16px;padding:14px;background:#f8fbfa"><strong style="font-size:12px">Histórico de alterações</strong>${
      auditLog
        .filter((log) => log.asset === asset.tag)
        .slice(0, 6)
        .map(
          (log) =>
            `<div style="font-size:11px;color:var(--muted);padding-top:9px">${log.date} · ${log.user} · ${log.action}: ${log.detail}</div>`,
        )
        .join("") ||
      '<div style="font-size:11px;color:var(--muted);padding-top:9px">Nenhuma alteração registrada.</div>'
    }</div><div class="modal-actions"><button class="btn btn-quiet" id="edit-asset">${icon("pencil")} Editar dados (Analista+)</button></div></div></div>`;
  refreshIcons();
  document.getElementById("close-modal").onclick = closeModal;
  document.getElementById("asset-doc-upload").onchange = async (event) => {
    const password = prompt("Senha de analista para anexar documentos:");
    if (password !== "analista123") {
      showToast("Acesso negado.");
      event.target.value = "";
      return;
    }
    const newDocs = await readFiles(event.target.files);
    asset.documents = [...docs, ...newDocs];
    save();
    recordAudit(
      "Inclusão de documento",
      asset,
      newDocs.map((doc) => doc.name).join(", "),
    );
    openAssetDetails(asset.id);
    showToast("Documento anexado e alteração registrada.");
  };
  document
    .querySelectorAll(".edit-doc")
    .forEach(
      (button) =>
        (button.onclick = () =>
          editDocument(asset, Number(button.dataset.index))),
    );
  document.getElementById("edit-asset").onclick = () => editAsset(asset);
}
function editDocument(asset, index) {
  const password = prompt("Senha de analista para editar este arquivo:");
  if (password !== "analista123") {
    showToast("Acesso negado.");
    return;
  }
  const before = JSON.parse(JSON.stringify(asset));
  const doc = asset.documents[index];
  const name = prompt("Novo nome do arquivo:", doc.name);
  if (name && name !== doc.name) {
    doc.name = name;
    recordAudit(
      "Edição de documento",
      asset,
      `${before.documents[index].name} alterado para ${name}`,
      before,
    );
    save();
    openAssetDetails(asset.id);
    showToast("Arquivo atualizado e alteração registrada.");
  }
}
function editAsset(asset) {
  const password = prompt("Senha de analista para editar o ativo:");
  if (password !== "analista123") {
    showToast("Acesso negado.");
    return;
  }
  const before = JSON.parse(JSON.stringify(asset));
  const loc = prompt("Nova localização:", asset.loc);
  if (loc && loc !== asset.loc) {
    asset.loc = loc;
    recordAudit(
      "Edição de ativo",
      asset,
      `Localização alterada de ${before.loc} para ${loc}`,
      before,
    );
    save();
    closeModal();
    render();
    showToast("Ativo atualizado e alteração registrada.");
  }
}
// Fecha qualquer modal atualmente aberto.
function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
}
function bindTechnicianActions() {
  if (currentView !== "technicians") return;
  document.querySelectorAll(".technician-tab").forEach(
    (tab) =>
      (tab.onclick = () => {
        currentTechnicianDiscipline = tab.dataset.technicianDiscipline;
        render();
      }),
  );
  document.querySelectorAll(".complete-task").forEach(
    (button) =>
      (button.onclick = () => {
        const technician = technicians.find(
          (item) => item.id === Number(button.dataset.technician),
        );
        const task = technician.tasks[Number(button.dataset.task)];
        if (technician && task) {
          recordAudit(
            "Conclusão de plano",
            { tag: technician.name },
            `Tarefa concluída: ${task}`,
          );
          technician.tasks.splice(Number(button.dataset.task), 1);
          render();
          showToast("Plano concluído e registrado na auditoria.");
        }
      }),
  );
}
// Redesenha a tela atual e reconecta os eventos dos elementos recém-criados.
function render() {
  document.getElementById("main-content").innerHTML = layout();
  refreshIcons();
  if (currentView === "dashboard") {
    document.querySelectorAll(".plan-tab").forEach(
      (tab) =>
        (tab.onclick = () => {
          currentDiscipline = tab.dataset.discipline;
          render();
        }),
    );
    document.querySelectorAll("[data-reschedule]").forEach(
      (button) =>
        (button.onclick = () => {
          const plan = maintenancePlans.find(
            (item) => item.id === Number(button.dataset.reschedule),
          );
          const date = prompt(
            "Digite a nova data no formato AAAA-MM-DD:",
            "2026-09-11",
          );
          if (plan && date && /^\\d{4}-\\d{2}-\\d{2}$/.test(date)) {
            plan.date = date;
            plan.status = "Pendente";
            savePlans();
            render();
            showToast("Plano reagendado para a nova data.");
          }
        }),
    );
  }
  if (currentView === "audit") {
    document
      .querySelectorAll(".undo-audit")
      .forEach(
        (button) => (button.onclick = () => undoAudit(button.dataset.id)),
      );
  }
  if (currentView === "assets") {
    renderRows();
    document.getElementById("new-asset").onclick = openModal;
    document.getElementById("asset-search").oninput = renderRows;
    document.getElementById("discipline-filter").onchange = renderRows;
    document.getElementById("export-csv").onclick = exportCsv;
    document
      .querySelectorAll(".asset-docs")
      .forEach(
        (button) =>
          (button.onclick = () => openAssetDetails(button.dataset.id)),
      );
    document.querySelectorAll(".delete-asset").forEach(
      (button) =>
        (button.onclick = () => {
          if (confirm("Excluir este ativo da base?")) {
            const asset = assets.find(
              (item) => item.id === Number(button.dataset.id),
            );
            const before = asset ? JSON.parse(JSON.stringify(asset)) : null;
            assets = assets.filter((a) => a.id !== Number(button.dataset.id));
            save();
            if (asset)
              recordAudit("Exclusão", asset, "Ativo removido da base", before);
            renderRows();
            showToast("Ativo removido.");
          }
        }),
    );
  }
  if (currentView === "assistant") {
    const fileInput = document.getElementById("pattern-file");
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      document.getElementById("file-name").textContent = file
        ? `${file.name} anexado como referência.`
        : "Nenhum arquivo enviado.";
      if (file && file.type.startsWith("image/")) {
        const preview = document.getElementById("reference-preview");
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
      }
    };
    document.getElementById("chat-form").onsubmit = (event) => {
      event.preventDefault();
      const input = document.getElementById("chat-input");
      const log = document.getElementById("chat-log");
      const message = input.value.trim();
      const client =
        document.getElementById("client-pattern").value.trim() ||
        "padrão geral PCM";
      log.insertAdjacentHTML(
        "beforeend",
        `<div class="chat-message user"></div>`,
      );
      log.lastElementChild.textContent = message;
      input.value = "";
      log.insertAdjacentHTML(
        "beforeend",
        `<div class="chat-message ai"></div>`,
      );
      log.lastElementChild.textContent = `PADRÃO APLICADO: ${client}\\n\\n${assistantReply(message)}\\n\\nArquivo de referência: ${fileInput.files[0]?.name || "não enviado"}`;
      log.scrollTop = log.scrollHeight;
    };
  }
}
// Converte os ativos em CSV e inicia o download no navegador.
function exportCsv() {
  const header =
    "Tag;Descrição;Localização;Disciplina;Categoria;Valor Nota Fiscal\n";
  const body = assets
    .map((a) => [a.tag, a.name, a.loc, a.disc, a.cat, a.val].join(";"))
    .join("\n");
  const blob = new Blob([header + body], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ativos-pcm.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("CSV exportado.");
}
// Eventos globais: como as telas são recriadas dinamicamente, os listeners
// ficam no document e identificam o formulário ou botão acionado.
document.addEventListener("submit", (event) => {
  if (event.target.id === "maintenance-order-form") {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    document.getElementById("maintenance-order-output").textContent =
      generateMaintenanceOrder(data);
    showToast("Ordem de serviço gerada no padrão técnico.");
    return;
  }
  if (event.target.id !== "maintenance-note-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const note = {
    id: Date.now(),
    type: formData.get("type"),
    priority: formData.get("priority"),
    equipment: formData.get("equipment").trim(),
    failure: formData.get("failure").trim(),
    solution: formData.get("solution").trim(),
    requester: formData.get("requester").trim(),
    status: "Aberta",
    createdAt: new Date().toISOString(),
  };
  maintenanceNotes.unshift(note);
  saveNotes();
  recordAudit(
    "Abertura de nota",
    { tag: note.equipment },
    `${note.type} · prioridade ${note.priority} · ${note.failure}`,
  );
  render();
  showToast("Nota de manutenção aberta e registrada.");
});
document.addEventListener("click", (event) => {
  if (event.target.closest("#print-maintenance-order")) {
    const output = document.getElementById("maintenance-order-output");
    if (output && !output.textContent.startsWith("Preencha os dados"))
      window.print();
    else showToast("Gere a ordem antes de imprimir.");
  }
});
document.addEventListener("click", (event) => {
  const noteButton = event.target.closest(".complete-note, .delete-note");
  if (noteButton) {
    const note = maintenanceNotes.find(
      (item) => item.id === Number(noteButton.dataset.id),
    );
    if (!note) return;
    if (noteButton.classList.contains("complete-note")) {
      note.status = "Concluída";
      saveNotes();
      recordAudit(
        "Conclusão de nota",
        { tag: note.equipment },
        `${note.type} concluída por ${note.requester}`,
      );
      render();
      showToast("Nota concluída e registrada.");
    } else if (confirm("Excluir esta nota de manutenção?")) {
      maintenanceNotes = maintenanceNotes.filter((item) => item.id !== note.id);
      saveNotes();
      recordAudit(
        "Exclusão de nota",
        { tag: note.equipment },
        `${note.type} excluída`,
      );
      render();
      showToast("Nota excluída.");
    }
  }
});
document.addEventListener("click", (event) => {
  const navigationButton = event.target.closest(
    '.nav button[data-view="maintenance-notes"]',
  );
  if (navigationButton)
    document.getElementById("page-title").textContent = "Notas De Manutenção";
});
document.getElementById("login-form").onsubmit = (event) => {
  event.preventDefault();
  const role = document.getElementById("login-role").value;
  const username = document.getElementById("username").value.trim();
  currentUser = { name: username || role, role };
  currentView = "dashboard";
  applyProfileNavigation();
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("app-screen").classList.remove("hidden");
  render();
};
document.querySelectorAll(".nav button").forEach(
  (button) =>
    (button.onclick = () => {
      const allowed = profileViews[currentUser?.role] || [];
      if (!allowed.includes(button.dataset.view)) {
        showToast("Seu perfil não possui acesso a esta área.");
        return;
      }
      currentView = button.dataset.view;
      document
        .querySelectorAll(".nav button")
        .forEach((item) => item.classList.toggle("active", item === button));
      document.getElementById("page-title").textContent =
        currentView === "dashboard"
          ? "Visão geral"
          : currentView === "assets"
            ? "Ativos"
            : currentView === "plans"
              ? "Planos"
              : currentView === "maintenance-notes"
                ? "Notas De Manutenção"
                : currentView === "technicians"
                  ? "Técnicos"
                  : currentView === "audit"
                    ? "Auditoria"
                    : currentView === "settings"
                      ? "Configurações"
                      : "Assistente IA";
      render();
    }),
);
document.getElementById("logout").onclick = () => {
  currentUser = null;
  currentView = "dashboard";
  document.getElementById("app-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  applyProfileNavigation();
};
document.addEventListener("click", (event) => {
  const tab = event.target.closest(".technician-tab");
  if (tab) {
    currentTechnicianDiscipline = tab.dataset.technicianDiscipline;
    render();
  }
  const taskButton = event.target.closest(".complete-task");
  if (taskButton) {
    const technician = technicians.find(
      (item) => item.id === Number(taskButton.dataset.technician),
    );
    const task = technician?.tasks[Number(taskButton.dataset.task)];
    if (technician && task) {
      recordAudit(
        "Conclusão de plano",
        { tag: technician.name },
        `Tarefa concluída: ${task}`,
      );
      technician.tasks.splice(Number(taskButton.dataset.task), 1);
      render();
      showToast("Plano concluído e registrado na auditoria.");
    }
  }
});
// Tela de configurações de cores e fonte da aplicação.
function settingsPage() {
  return `<div class="panel"><div class="panel-title">${icon("sliders-horizontal")}<h3>Aparência do sistema</h3></div><p style="color:var(--muted);font-size:12px">Personalize as cores e a tipografia. As alterações ficam salvas neste navegador.</p><div class="settings-grid"><div class="settings-preview"><strong>Prévia do cabeçalho</strong><span>Gestão Fabril · Centro de operações</span></div><div class="field"><label for="header-color">COR DO CABEÇALHO</label><div class="color-control"><input id="header-color" type="color" value="${theme.header}"><span>Escolha a cor da barra superior.</span></div></div><div class="field"><label for="accent-color">COR PRINCIPAL</label><div class="color-control"><input id="accent-color" type="color" value="${theme.accent}"><span>Usada em botões, ícones e destaques.</span></div></div><div class="field"><label for="font-family">FONTE DO SISTEMA</label><select id="font-family"><option ${theme.font === "DM Sans" ? "selected" : ""}>DM Sans</option><option ${theme.font === "Space Grotesk" ? "selected" : ""}>Space Grotesk</option><option ${theme.font === "Georgia" ? "selected" : ""}>Georgia</option><option ${theme.font === "Verdana" ? "selected" : ""}>Verdana</option></select></div><div class="settings-actions"><button class="btn btn-quiet" id="reset-theme" type="button">${icon("rotate-ccw")} Restaurar padrão</button></div></div></div>`;
}
const maintenanceTypeObserver = new MutationObserver(() => {
  const select = document.getElementById("note-type");
  if (select && !select.dataset.specialized) {
    select.innerHTML =
      "<option>Corretiva Mecânica</option><option>Corretiva Elétrica</option><option>Corretiva Calibração</option><option>Programada Mecânica</option><option>Programada Calibração</option><option>Programada Elétrica</option>";
    select.dataset.specialized = "true";
  }
});
maintenanceTypeObserver.observe(document.getElementById("main-content"), {
  childList: true,
  subtree: true,
});
document.addEventListener("input", (event) => {
  if (event.target.id === "header-color") {
    theme.header = event.target.value;
    applyTheme();
    saveTheme();
  }
  if (event.target.id === "accent-color") {
    theme.accent = event.target.value;
    applyTheme();
    saveTheme();
  }
});
document.addEventListener("change", (event) => {
  if (event.target.id === "font-family") {
    theme.font = event.target.value;
    applyTheme();
    saveTheme();
  }
});
document.addEventListener("click", (event) => {
  if (event.target.closest("#reset-theme")) {
    theme = { ...defaultTheme };
    saveTheme();
    applyTheme();
    render();
    showToast("Aparência padrão restaurada.");
  }
});
const routeTeam = (type) =>
  type.includes("Mecânica")
    ? "Equipe mecânica"
    : type.includes("Elétrica")
      ? "Equipe elétrica"
      : type.includes("Calibração")
        ? "Equipe de calibração"
        : "Equipe de manutenção";
const routePriorityClass = (priority) =>
  priority === "Muito urgente"
    ? "critical"
    : priority === "Urgente"
      ? "urgent"
      : "";
// Lista de notas corretivas abertas para encaminhamento às equipes.
function correctiveRoutesPage() {
  const routes = [...maintenanceNotes]
    .filter(
      (note) =>
        note.type.startsWith("Corretiva") && note.status !== "Concluída",
    )
    .sort(
      (firstNote, secondNote) =>
        new Date(secondNote.createdAt) - new Date(firstNote.createdAt),
    );
  return `<div class="panel"><div class="panel-title">${icon("route")}<h3>Notas de manutenção corretiva abertas</h3><span class="badge teal" style="margin-left:auto">${routes.length} em aberto</span></div><p style="color:var(--muted);font-size:12px">Acompanhe as notas corretivas abertas e encaminhe cada atendimento para a equipe técnica responsável.</p><div class="route-list">${
    routes.length
      ? routes
          .map((note) => {
            const routeStatus = note.routeStatus || note.status;
            return `<article class="route-card ${routePriorityClass(note.priority)}"><header><div><h3>${note.equipment}</h3><small>${note.type} · ${new Date(note.createdAt).toLocaleString("pt-BR")}</small></div><span class="badge ${routeStatus === "Em atendimento" ? "orange" : "teal"}">${routeStatus}</span></header><div class="route-meta"><span class="badge gray">${routeTeam(note.type)}</span><span class="badge gray">${note.priority}</span><small>Aberta por ${note.requester}</small></div><p><strong>Falha:</strong> ${note.failure}<br><strong>Solução sugerida:</strong> ${note.solution}</p><div class="route-actions">${routeStatus === "Aberta" ? `<button class="btn btn-primary start-route" data-id="${note.id}">${icon("play")} Iniciar atendimento</button>` : ""}${routeStatus === "Em atendimento" ? `<button class="btn btn-primary finish-route" data-id="${note.id}">${icon("check")} Concluir nota</button>` : ""}</div></article>`;
          })
          .join("")
      : '<div class="empty">Nenhuma nota de manutenção corretiva aberta.</div>'
  }</div></div>`;
}
function renderCorrectiveRoutes() {
  document.getElementById("main-content").innerHTML =
    `<div class="section-head"><div><h2>Notas de manutenção corretiva abertas</h2><p>Fila de atendimento para as equipes técnicas.</p></div></div>${correctiveRoutesPage()}`;
  refreshIcons();
}
const correctiveRoutesButton = document.createElement("button");
correctiveRoutesButton.dataset.view = "corrective-routes";
correctiveRoutesButton.innerHTML = `${icon("route")}<span>Notas Corretivas Abertas</span>`;
correctiveRoutesButton.onclick = () => {
  currentView = "corrective-routes";
  document
    .querySelectorAll(".nav button")
    .forEach((item) =>
      item.classList.toggle("active", item === correctiveRoutesButton),
    );
  document.getElementById("page-title").textContent =
    "Notas de manutenção corretiva abertas";
  renderCorrectiveRoutes();
};
document.querySelector(".nav").appendChild(correctiveRoutesButton);
const profileViews = {
  Técnico: ["dashboard", "maintenance-notes", "settings", "corrective-routes"],
  Analista: [
    "dashboard",
    "assets",
    "plans",
    "maintenance-notes",
    "technicians",
    "assistant",
    "audit",
    "settings",
    "corrective-routes",
  ],
  Gestão: [
    "dashboard",
    "assets",
    "plans",
    "maintenance-notes",
    "technicians",
    "assistant",
    "audit",
    "settings",
    "corrective-routes",
  ],
};
function applyProfileNavigation() {
  const allowed = profileViews[currentUser?.role] || profileViews.Gestão;
  document.querySelectorAll(".nav button[data-view]").forEach((button) => {
    button.style.display = allowed.includes(button.dataset.view) ? "" : "none";
  });
  document.querySelector(".sidebar .user strong").textContent =
    currentUser?.name || "Usuário";
  document.querySelector(".sidebar .user small").textContent =
    currentUser?.role || "Visitante";
  if (!allowed.includes(currentView)) currentView = "dashboard";
  document
    .querySelectorAll(".nav button")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.view === currentView),
    );
}
document.addEventListener("click", (event) => {
  const startButton = event.target.closest(".start-route");
  const finishButton = event.target.closest(".finish-route");
  const routeButton = startButton || finishButton;
  if (!routeButton) return;
  const note = maintenanceNotes.find(
    (item) => item.id === Number(routeButton.dataset.id),
  );
  if (!note) return;
  if (startButton) {
    note.routeStatus = "Em atendimento";
    recordAudit(
      "Início de rota corretiva",
      { tag: note.equipment },
      `${note.type} encaminhada para ${routeTeam(note.type)}`,
    );
  } else {
    note.routeStatus = "Concluída";
    note.status = "Concluída";
    recordAudit(
      "Conclusão de rota corretiva",
      { tag: note.equipment },
      `${note.type} concluída pela ${routeTeam(note.type)}`,
    );
  }
  saveNotes();
  renderCorrectiveRoutes();
  showToast(startButton ? "Atendimento iniciado." : "Rota concluída.");
});
// Inicialização: aplica preferências e prepara os ícones da interface.
applyTheme();
refreshIcons();
