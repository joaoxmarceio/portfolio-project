# Portfólio do João

Projeto pessoal. Não é da BALUARTE: regras e pendências da marca não valem aqui.

Contexto fica no vault (`C:\Vault-Claude`), nota `03-Projetos/Portfolio/Portfolio.md`. Ler no início da sessão, se o vault existir neste computador.

## Sincronização (sempre)
1. Início de sessão: `git pull`. Se houver alteração local sem commit, avisar antes de puxar.
2. Fim de cada tarefa que mexeu em arquivos: `npm run build` precisa passar. Depois, commit e push.
3. `main` é o site no ar: a Vercel publica a cada push. Trabalho grande (redesign) vai numa branch própria, que gera link de prévia na Vercel. Merge em `main` só com OK do João.
4. Nunca subir `.env*`, `.vercel/` ou `node_modules/`.

## Vault
- Notas do portfólio só em `03-Projetos/Portfolio/`. Nunca misturar com as notas da BALUARTE.
- Gravar no vault só com OK do João. No fim de cada sessão com mudança, propor o que atualizar (estado, pendências, decisões).

## Ambiente
- Rodar: `npm install` uma vez, depois `npm run dev`, em `http://localhost:3000`.
- Windows. Comandos de Mac (`lsof`, Homebrew) não valem aqui.
