var lessons = [
  {
    id: 0,
    title: "O que e Git?",
    desc: "Entenda o que e controle de versao",
    xp: 20,
    teoria: [
      "Git e um sistema de controle de versao. Ele salva o historico de tudo que voce faz no seu projeto, como um checkpoint em um videogame.",
      "Com Git voce pode voltar para qualquer versao anterior do seu codigo, trabalhar em equipe sem baguncar o projeto e ver quem alterou o que e quando.",
      "GitHub e um site que armazena seus projetos Git na nuvem. Pense no Git como a ferramenta e no GitHub como o lugar onde voce guarda e compartilha seu trabalho.",
      "Para usar Git, voce instala ele no computador e usa comandos no terminal. Os principais comandos comecam sempre com a palavra git."
    ],
    comandos: [
      "git --version",
      "git config --global user.name SeuNome",
      "git config --global user.email seu@email.com"
    ],
    respostas: [
      "git version 2.40.0",
      "Configuracao salva com sucesso!",
      "Email configurado com sucesso!"
    ],
    quiz: [
      { q: "O que e Git?", opts: ["Um site para guardar fotos","Um sistema de controle de versao","Um editor de codigo","Uma linguagem de programacao"], c: 1, ok: "Certo! Git e um sistema de controle de versao.", err: "Errado. Git e um sistema de controle de versao de codigo." },
      { q: "Qual e a diferenca entre Git e GitHub?", opts: ["Sao a mesma coisa","Git e o site, GitHub e a ferramenta","Git e a ferramenta, GitHub e o site","Nenhuma diferenca"], c: 2, ok: "Certo! Git e a ferramenta local e GitHub e o site na nuvem.", err: "Errado. Git e a ferramenta instalada no PC e GitHub e o site." }
    ]
  },
  {
    id: 1,
    title: "Seu primeiro repositorio",
    desc: "git init, add e commit",
    xp: 25,
    teoria: [
      "Um repositorio e a pasta do seu projeto sendo monitorada pelo Git. Para criar um, voce usa o comando git init dentro da pasta.",
      "Depois de criar ou editar arquivos, voce precisa avisar o Git quais arquivos quer salvar. Isso se chama staging e se faz com git add.",
      "O commit e o momento em que voce salva oficialmente as mudancas com uma mensagem descrevendo o que fez. E como tirar uma foto do seu projeto naquele momento.",
      "Sempre escreva mensagens de commit claras e objetivas para que outras pessoas entendam o que foi feito."
    ],
    comandos: [
      "git init",
      "git add index.html",
      "git commit -m \"primeira versao do site\""
    ],
    respostas: [
      "Initialized empty Git repository in /projeto/.git/",
      "Arquivo adicionado ao staging!",
      "[main (root-commit)] primeira versao do site - 1 file changed"
    ],
    quiz: [
      { q: "O que o comando git init faz?", opts: ["Envia o projeto para o GitHub","Cria um repositorio Git na pasta atual","Baixa um repositorio","Apaga o historico"], c: 1, ok: "Certo! git init cria um repositorio na pasta atual.", err: "Errado. git init cria um repositorio Git local." },
      { q: "Para que serve o git add?", opts: ["Salvar definitivamente","Criar uma branch","Selecionar arquivos para o proximo commit","Apagar arquivos"], c: 2, ok: "Certo! git add prepara os arquivos para o commit.", err: "Errado. git add seleciona arquivos para incluir no commit." }
    ]
  },
  {
    id: 2,
    title: "Historico e versoes",
    desc: "git log, status e diff",
    xp: 30,
    teoria: [
      "Depois de fazer varios commits, voce pode ver todo o historico do projeto com o comando git log. Ele mostra cada commit com data, autor e mensagem.",
      "O comando git status mostra o estado atual do projeto: quais arquivos foram modificados, quais estao prontos para commit e quais ainda nao foram adicionados.",
      "O git diff mostra exatamente o que mudou em um arquivo desde o ultimo commit. Linhas em verde foram adicionadas e linhas em vermelho foram removidas.",
      "Esses tres comandos sao os mais usados no dia a dia para entender o que esta acontecendo no seu projeto."
    ],
    comandos: [
      "git status",
      "git log",
      "git log --oneline"
    ],
    respostas: [
      "On branch main - nothing to commit, working tree clean",
      "commit a1b2c3d - Author: Tiago - Date: hoje - primeira versao do site",
      "a1b2c3d primeira versao do site"
    ],
    quiz: [
      { q: "Qual comando mostra o historico de commits?", opts: ["git status","git history","git log","git show"], c: 2, ok: "Certo! git log mostra o historico de commits.", err: "Errado. O comando correto e git log." },
      { q: "O que o git status mostra?", opts: ["O historico completo","O estado atual dos arquivos","As diferencas entre versoes","Os colaboradores do projeto"], c: 1, ok: "Certo! git status mostra o estado atual dos arquivos.", err: "Errado. git status mostra o estado atual dos arquivos no projeto." }
    ]
  },
  {
    id: 3,
    title: "Conectando ao GitHub",
    desc: "git remote, push e pull",
    xp: 35,
    teoria: [
      "Para enviar seu projeto ao GitHub, primeiro voce cria um repositorio vazio no site do GitHub e depois conecta ele ao seu projeto local com git remote add.",
      "O comando git push envia seus commits locais para o GitHub. E como fazer upload do seu projeto para a nuvem.",
      "O comando git pull faz o contrario: baixa as atualizacoes do GitHub para o seu computador. Muito util quando voce trabalha em equipe.",
      "O origin e o nome padrao que se da ao repositorio remoto do GitHub. Voce pode ter mais de um remoto com nomes diferentes."
    ],
    comandos: [
      "git remote add origin https://github.com/usuario/projeto.git",
      "git push -u origin main",
      "git pull origin main"
    ],
    respostas: [
      "Repositorio remoto conectado com sucesso!",
      "Branch main enviada para o GitHub com sucesso!",
      "Already up to date."
    ],
    quiz: [
      { q: "Qual comando envia seus commits para o GitHub?", opts: ["git pull","git send","git push","git upload"], c: 2, ok: "Certo! git push envia os commits para o GitHub.", err: "Errado. O comando para enviar e git push." },
      { q: "Para que serve o git pull?", opts: ["Apagar o repositorio remoto","Enviar arquivos","Baixar atualizacoes do repositorio remoto","Criar uma branch"], c: 2, ok: "Certo! git pull baixa as atualizacoes do repositorio remoto.", err: "Errado. git pull baixa atualizacoes do GitHub para o seu PC." }
    ]
  },
  {
    id: 4,
    title: "Branches",
    desc: "Criando e unindo ramificacoes",
    xp: 40,
    teoria: [
      "Branch e uma ramificacao do seu projeto. Imagine que voce quer testar uma nova funcionalidade sem estragar o que ja funciona. Voce cria uma branch separada para isso.",
      "O comando git branch cria uma nova branch e git checkout troca para ela. No Git moderno voce pode fazer os dois de uma vez com git checkout -b.",
      "Quando a nova funcionalidade estiver pronta, voce une ela de volta a branch principal com o comando git merge.",
      "A branch principal se chama main. E uma boa pratica nunca trabalhar diretamente nela, mas sim em branches separadas para cada tarefa."
    ],
    comandos: [
      "git branch nova-funcionalidade",
      "git checkout nova-funcionalidade",
      "git checkout main",
      "git merge nova-funcionalidade"
    ],
    respostas: [
      "Branch nova-funcionalidade criada!",
      "Switched to branch nova-funcionalidade",
      "Switched to branch main",
      "Merge feito com sucesso! Fast-forward"
    ],
    quiz: [
      { q: "Para que serve uma branch?", opts: ["Apagar arquivos antigos","Trabalhar em paralelo sem afetar o projeto principal","Enviar arquivos ao GitHub","Ver o historico de commits"], c: 1, ok: "Certo! Branch permite trabalhar em paralelo com seguranca.", err: "Errado. Branch serve para trabalhar em paralelo sem afetar o projeto principal." },
      { q: "Qual comando une uma branch a branch principal?", opts: ["git join","git push","git merge","git pull"], c: 2, ok: "Certo! git merge une as branches.", err: "Errado. O comando para unir branches e git merge." }
    ]
  }
];

var achievements = [
  { id: "first_lesson", icon: "🌟", name: "Primeira Aula!" },
  { id: "terminal", icon: "💻", name: "Usou o Terminal" },
  { id: "quiz_master", icon: "🎯", name: "Quiz Master" },
  { id: "half_way", icon: "🏅", name: "Na Metade!" },
  { id: "git_hero", icon: "🦸", name: "Git Hero" },
  { id: "xp_100", icon: "⚡", name: "100 XP!" }
];

var state = {
  xp: 0,
  completedLessons: [],
  unlockedAchievements: [],
  terminalUsed: 0,
  quizCorrects: 0,
  currentLesson: null,
  currentQuizIdx: 0,
  quizAnswered: false,
  currentCmdIdx: 0
};

function init() { renderTrail(); renderAchievements(); updateXP(); }

function renderTrail() {
  var container = document.getElementById("trailContainer");
  container.innerHTML = "";
  for (var i = 0; i < lessons.length; i++) {
    var lesson = lessons[i];
    var completed = state.completedLessons.indexOf(lesson.id) >= 0;
    var locked = i > 0 && state.completedLessons.indexOf(lessons[i - 1].id) < 0;
    var card = document.createElement("div");
    card.className = "lesson-card" + (completed ? " completed" : "") + (locked ? " locked" : "");
    (function(l, lk) {
      card.onclick = function() {
        if (lk) { showToast("Complete a aula anterior primeiro!"); }
        else { openLesson(l); }
      };
    })(lesson, locked);
    var badgeClass = completed ? "badge-done" : locked ? "badge-locked" : "badge-free";
    var badgeText = completed ? "Feito" : locked ? "Bloqueado" : "Iniciar";
    card.innerHTML =
      "<div class='lesson-icon'>" + (locked ? "🔒" : (i + 1)) + "</div>" +
      "<div class='lesson-info'><h3>" + lesson.title + "</h3><p>" + lesson.desc + " - +" + lesson.xp + " XP</p></div>" +
      "<span class='lesson-badge " + badgeClass + "'>" + badgeText + "</span>";
    container.appendChild(card);
  }
  var done = state.completedLessons.length;
  document.getElementById("progressText").textContent = done + " de " + lessons.length + " aulas concluidas";
  document.getElementById("progressFill").style.width = ((done / lessons.length) * 100) + "%";
}

function openLesson(lesson) {
  state.currentLesson = lesson;
  state.currentQuizIdx = 0;
  state.quizAnswered = false;
  state.currentCmdIdx = 0;
  document.getElementById("modalTitle").textContent = lesson.title;

  var teoriaHTML = "<div class='lesson-content'>";
  for (var i = 0; i < lesson.teoria.length; i++) {
    teoriaHTML += "<p>" + lesson.teoria[i] + "</p>";
  }
  teoriaHTML += "<div class='tip-box'>" + lesson.comandos.join("\n") + "</div>";
  teoriaHTML += "</div>";
  teoriaHTML += "<br><button class='btn-run' onclick=\"switchTab('pratica', document.querySelectorAll('.tab')[1])\">Ir para o Terminal</button>";
  document.getElementById("tab-teoria").innerHTML = teoriaHTML;

  renderTerminal(lesson);
  renderQuizQuestion();

  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabs.length; i++) { tabs[i].classList.toggle("active", i === 0); }
  for (var i = 0; i < contents.length; i++) { contents[i].classList.toggle("active", i === 0); }
  document.getElementById("modalOverlay").classList.add("active");
}

function renderTerminal(lesson) {
  var html = "<p style='color:#999;font-size:0.85rem;margin-bottom:12px'>Digite o comando abaixo e pressione Enter ou clique em Executar:</p>";
  html += "<div class='terminal' id='terminalOutput'><span class='info'>// Terminal Git simulado - pratique os comandos da aula!</span></div>";
  html += "<div class='terminal-input-row'>";
  html += "<span class='terminal-prompt'>$ </span>";
  html += "<input class='terminal-input' id='terminalInput' type='text' placeholder='Digite um comando git...' onkeydown='checkEnter(event)' />";
  html += "</div>";
  html += "<button class='btn-run' onclick='runCommand()'>Executar</button>";
  html += "<button class='btn-clear' onclick='clearTerminal()'>Limpar</button>";
  html += "<div style='margin-top:15px;padding:12px;background:rgba(247,129,102,0.08);border-radius:8px;border-left:3px solid #f78166;'>";
  html += "<p style='color:#f78166;font-size:0.85rem;font-weight:700;margin-bottom:6px'>Comandos desta aula:</p>";
  for (var i = 0; i < lesson.comandos.length; i++) {
    html += "<p style='color:#ccc;font-family:monospace;font-size:0.85rem;margin:2px 0'>$ " + lesson.comandos[i] + "</p>";
  }
  html += "</div>";
  document.getElementById("tab-pratica").innerHTML = html;
}

function checkEnter(event) {
  if (event.key === "Enter") { runCommand(); }
}

function runCommand() {
  var input = document.getElementById("terminalInput");
  var output = document.getElementById("terminalOutput");
  if (!input || !output) { return; }
  var cmd = input.value.trim();
  if (!cmd) { return; }

  var line = document.createElement("div");
  line.innerHTML = "<span class='cmd'>$ " + cmd + "</span>";
  output.appendChild(line);

  var lesson = state.currentLesson;
  var found = false;
  for (var i = 0; i < lesson.comandos.length; i++) {
    if (cmd === lesson.comandos[i]) {
      var resp = document.createElement("div");
      resp.className = "out";
      resp.textContent = lesson.respostas[i];
      output.appendChild(resp);
      found = true;
      state.terminalUsed++;
      if (state.terminalUsed === 1) { unlockAchievement("terminal"); }
      showToast("Comando executado!");
      break;
    }
  }

  if (!found) {
    if (cmd.indexOf("git") === 0) {
      var sugest = document.createElement("div");
      sugest.className = "out";
      sugest.textContent = "Comando git reconhecido. Tente os comandos da lista desta aula.";
      output.appendChild(sugest);
    } else {
      var errLine = document.createElement("div");
      errLine.className = "err";
      errLine.textContent = "Comando nao reconhecido. Use comandos que comecam com git.";
      output.appendChild(errLine);
    }
  }

  input.value = "";
  output.scrollTop = output.scrollHeight;
}

function clearTerminal() {
  var output = document.getElementById("terminalOutput");
  if (output) { output.innerHTML = "<span class='info'>// Terminal limpo.</span>"; }
}

function closeModal() { document.getElementById("modalOverlay").classList.remove("active"); }

function switchTab(name, btn) {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabs.length; i++) { tabs[i].classList.remove("active"); }
  for (var i = 0; i < contents.length; i++) { contents[i].classList.remove("active"); }
  if (btn) { btn.classList.add("active"); }
  document.getElementById("tab-" + name).classList.add("active");
}

function renderQuizQuestion() {
  var lesson = state.currentLesson;
  var q = lesson.quiz[state.currentQuizIdx];
  var total = lesson.quiz.length;
  var html = "<p style='color:#999;font-size:0.85rem;margin-bottom:15px'>Pergunta " + (state.currentQuizIdx + 1) + " de " + total + "</p>";
  html += "<div class='quiz-question'>" + q.q + "</div>";
  html += "<div class='quiz-options' id='quizOptions'>";
  for (var i = 0; i < q.opts.length; i++) {
    html += "<button class='quiz-option' onclick='answerQuiz(" + i + ")'>" + q.opts[i] + "</button>";
  }
  html += "</div>";
  html += "<div class='quiz-feedback' id='quizFeedback'></div>";
  var nextLabel = state.currentQuizIdx < total - 1 ? "Proxima pergunta" : "Concluir Aula";
  html += "<button class='btn-next-quiz' id='btnNextQuiz' onclick='nextQuizQuestion()'>" + nextLabel + "</button>";
  document.getElementById("tab-quiz").innerHTML = html;
}

function answerQuiz(idx) {
  if (state.quizAnswered) { return; }
  state.quizAnswered = true;
  var q = state.currentLesson.quiz[state.currentQuizIdx];
  var opts = document.querySelectorAll(".quiz-option");
  var feedback = document.getElementById("quizFeedback");
  for (var i = 0; i < opts.length; i++) { opts[i].disabled = true; }
  opts[q.c].classList.add("correct");
  if (idx === q.c) {
    feedback.className = "quiz-feedback show ok";
    feedback.textContent = q.ok;
    state.quizCorrects++;
  } else {
    opts[idx].classList.add("wrong");
    feedback.className = "quiz-feedback show err";
    feedback.textContent = q.err;
  }
  document.getElementById("btnNextQuiz").classList.add("show");
}

function nextQuizQuestion() {
  var total = state.currentLesson.quiz.length;
  if (state.currentQuizIdx < total - 1) {
    state.currentQuizIdx++;
    state.quizAnswered = false;
    renderQuizQuestion();
  } else {
    completeLesson(state.currentLesson);
  }
}

function completeLesson(lesson) {
  if (state.completedLessons.indexOf(lesson.id) < 0) {
    state.completedLessons.push(lesson.id);
    addXP(lesson.xp);
    showToast("+" + lesson.xp + " XP! Aula concluida!");
    if (state.completedLessons.length === 1) { unlockAchievement("first_lesson"); }
    if (state.completedLessons.length >= Math.floor(lessons.length / 2)) { unlockAchievement("half_way"); }
    if (state.completedLessons.length === lessons.length) { unlockAchievement("git_hero"); }
    if (state.quizCorrects >= 5) { unlockAchievement("quiz_master"); }
  }
  renderTrail();
  closeModal();
}

function addXP(amount) {
  state.xp += amount;
  if (state.xp >= 100) { unlockAchievement("xp_100"); }
  updateXP();
}

function updateXP() {
  var lvl = Math.floor(state.xp / 100) + 1;
  var current = state.xp % 100;
  document.getElementById("xpFill").style.width = current + "%";
  document.getElementById("xpText").textContent = current + " / 100";
  document.getElementById("nivelLabel").textContent = "Nivel " + lvl;
}

function unlockAchievement(id) {
  if (state.unlockedAchievements.indexOf(id) >= 0) { return; }
  state.unlockedAchievements.push(id);
  for (var i = 0; i < achievements.length; i++) {
    if (achievements[i].id === id) {
      showToast("Conquista: " + achievements[i].name + "!");
      renderAchievements();
      break;
    }
  }
}

function renderAchievements() {
  var html = "";
  for (var i = 0; i < achievements.length; i++) {
    var a = achievements[i];
    var unlocked = state.unlockedAchievements.indexOf(a.id) >= 0;
    html += "<div class='achievement" + (unlocked ? " unlocked" : "") + "'>";
    html += "<div class='ach-icon'>" + a.icon + "</div>";
    html += "<div class='ach-name'>" + a.name + "</div>";
    html += "</div>";
  }
  document.getElementById("achievementsGrid").innerHTML = html;
}

function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() { t.classList.remove("show"); }, 2800);
}

function scrollToTrail() {
  document.getElementById("trilha").scrollIntoView({ behavior: "smooth" });
}

init();