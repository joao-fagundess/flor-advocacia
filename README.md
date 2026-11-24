# Flor Advocacia — site demonstrativo

Projeto de site institucional desenvolvido com React + Vite.

## Requisitos
- Node.js instalado
- VS Code (opcional, recomendado)

## Executar no computador
1. Extraia o ZIP.
2. Abra a pasta `flor-advocacia` no VS Code.
3. No terminal do VS Code, execute `npm install`.
4. Depois execute `npm run dev`.
5. Abra no navegador o endereço local mostrado no terminal (normalmente http://localhost:5173).

## Gerar versão de produção
Execute `npm run build`. O Vite cria a pasta `dist`.

## Publicar na Vercel
1. Envie a pasta do projeto para um repositório GitHub.
2. Entre em https://vercel.com e importe o repositório.
3. Framework Preset: Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Clique em Deploy.

## Personalizações importantes antes de publicar
- Em `src/App.jsx`, troque `contato@floradvocacia.com.br` pelo e-mail verdadeiro que será usado.
- Troque o telefone demonstrativo `(11) 0000-0000`.
- O formulário usa `mailto:` e abre o aplicativo de e-mail do visitante; ele não envia dados para um servidor.
- O nome, a equipe e a apresentação são demonstrativos. Não anuncie profissionais, registro na OAB, endereço ou serviços que não correspondam ao escritório real.
- A imagem principal e as fontes são carregadas de serviços externos (Unsplash e Google Fonts), então precisam de internet.

Este projeto é um modelo acadêmico e não oferece aconselhamento jurídico.
