let nextId = 0;

let tarefa = [];
let tarefasSelecionadas = [];

const inputNome = document.querySelector(".input");
const lista = document.querySelector("ul");
const btnAdd = document.querySelector(".add");
const btnDel = document.querySelector(".del");
const chkAll = document.querySelector(".selAll");

function ordenarTarefas() {
  tarefa.sort((a, b) => a.nome.localeCompare(b.nome));
}

function render() {
  ordenarTarefas();
  lista.innerHTML = "";

  tarefa.forEach((tarefa) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefasSelecionadas.includes(tarefa.id);
    checkbox.addEventListener("change", () => toggleTarefa(tarefa.id));

    const span = document.createElement("span");
    span.textContent = tarefa.nome;
    span.style.textDecoration =
      tarefasSelecionadas.includes(tarefa.id) ? "line-through" : "none";

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
  });
}

function adicionarTarefa() {
  if (!inputNome.value.trim()) return;

  tarefa.push({
    id: nextId++,
    nome: inputNome.value,
    qtde: 1
  });

  inputNome.value = "";
  render();
}

function toggleTarefa(id) {
  if (tarefasSelecionadas.includes(id)) {
    tarefasSelecionadas = tarefasSelecionadas.filter(p => p !== id);
  } else {
    tarefasSelecionadas.push(id);
  }
  render();
}

function deletarSelecionados() {
  tarefa = tarefa.filter(p => !tarefasSelecionadas.includes(p.id));
  tarefasSelecionadas = [];
  render();
}

function selecionarTodos() {
  if (tarefasSelecionadas.length === tarefa.length) {
    tarefasSelecionadas = [];
  } else {
    tarefasSelecionadas = tarefa.map(p => p.id);
  }
  render();
}

btnAdd.addEventListener("click", adicionarTarefa);
btnDel.addEventListener("click", deletarSelecionados);
chkAll.addEventListener("change", selecionarTodos);

inputNome.addEventListener("keydown", (e) => {
  if (e.key === "Enter") adicionarTarefa();
});
