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

## Skills de design
Em `.claude/skills/` (origem em `FONTES.md`). Papel de cada uma:
- `build-awwwards-quality-sites`: direção de arte e narrativa do scroll.
- `gsap-*`: execução das animações.
- `emil-design-eng`, `animate`, `review-animations`: critério de movimento.
- `redesign-existing-projects`: filtro final contra visual genérico.

Estas regras do projeto valem mais que as das skills:
- Só entram trabalhos e imagens do João. Nada de banco de imagem (picsum, Aura.build), ícones externos (Iconify) nem imagem gerada.
- Nada de dado inventado: números, datas, clientes, depoimentos.
- A primeira tela (`portfolio-hero` em `src/app/page.tsx`) não muda.
- Nenhum projeto sai do site.

## Ambiente
- Rodar: `npm install` uma vez, depois `npm run dev`, em `http://localhost:3000`.
- Windows. Comandos de Mac (`lsof`, Homebrew) não valem aqui.
