## BUG-01 — Tarefa vazia pode ser adicionada

**Ambiente:** Chrome / Windows  
**Severidade:** Média  
**Status:** Corrigido  

### Passos para reproduzir
1. Abrir a aplicação
2. Clicar em "Adicionar" sem digitar nada

### Resultado esperado
- A tarefa não deve ser adicionada à lista

### Resultado obtido
- Uma tarefa vazia é adicionada à lista

### Correção aplicada
- Validação adicionada para impedir envio de campo vazio

### Evidências
- Teste reexecutado com sucesso
