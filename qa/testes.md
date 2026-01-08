## CT-01 — Adicionar tarefa válida

**Pré-condição:** aplicação carregada  
**Passos:**
1. Digitar "Limpar móveis" no campo
2. Clicar em "Adicionar"

**Resultado esperado:**
- Tarefa aparece na lista
- Campo é limpo

**Status:** Aprovado

## CT-02 — Não adicionar tarefa vazia

**Passos:**
1. Não digitar nada
2. Clicar em "Adicionar"

**Resultado esperado:**
- Tarefa não é adicionada

**Status:** Aprovado
**Observações:** Bug BUG-01 corrigido e retestado

## CT-03 — Selecionar tarefa

**Passos:**
1. Marcar checkbox da tarefa

**Resultado esperado:**
- Tarefa fica riscada

**Status:** Aprovado

## CT-04 — Deletar tarefas selecionadas

**Passos:**
1. Selecionar uma tarefa
2. Clicar em "Deletar"

**Resultado esperado:**
- Tarefa removida da lista

**Status:** Aprovado

## CT-DEPLOY-01 — Aplicação carrega no GitHub Pages

**Passos:**
1. Acessar a URL do projeto

**Resultado esperado:**
- Página carrega corretamente
- Funcionalidades operam normalmente
