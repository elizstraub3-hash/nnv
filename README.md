# NNV by Neneve — Site da marca de active wear

Landing page moderna e responsiva para a marca de active wear **NNV by Neneve**.
Paleta branco / preto / vermelho. Feita com HTML, CSS e JavaScript puro — sem
dependências ou build.

## Estrutura

```
index.html   → estrutura e conteúdo das seções
styles.css   → estilos, tema escuro e responsividade
script.js    → dados das coleções, render dinâmico e interações
```

## Seções

- **Hero** — chamada principal, estatísticas e destaque visual
- **Coleções** — grade de produtos com preços (dados em `script.js`)
- **Diferenciais** — benefícios dos tecidos e tecnologias
- **Sobre** — história da marca
- **Avaliações** — depoimentos de clientes
- **Newsletter** — captação de e-mail com cupom de desconto
- **Rodapé** — links, redes sociais e informações da empresa

## Como rodar

Basta abrir o `index.html` no navegador. Para servir localmente:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Personalização

- Produtos, benefícios e depoimentos ficam nos arrays no topo do `script.js`.
- Cores e tipografia estão nas variáveis CSS em `:root` no `styles.css`
  (destaque da marca: `--brand`).
