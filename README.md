# Harmonia Estética Avançada — site

Next.js 14 + Tailwind + Framer Motion. Página única (landing institucional).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
```

## Onde mudar o conteúdo

Tudo fica em `src/data/site.ts`:

- **Dados da clínica** (telefone, endereço, Instagram, link do Gendo): `clinic`.
- **Fotos das seções**: `images`. Arquivos em `public/images`.
- **Vídeos**: `videos.hero` e o campo `video` de cada item de `treatments`. Arquivos em `public/videos`.
  Cada vídeo precisa de um poster (primeiro quadro) com o mesmo nome + `-poster.jpg`.
  Gerar com: `ffmpeg -i video.mp4 -frames:v 1 -q:v 4 video-poster.jpg`
- **Tratamentos**: array `treatments`. Remover, trocar ou incluir itens após validar com a proprietária.
- **Galeria**: `gallery`. Só marque `kind: "real"` para fotos reais e autorizadas.
- **Depoimentos**: `testimonialsConfig.show = false` oculta a seção; troque os textos de exemplo por depoimentos reais.
- **Crédito do desenvolvedor** no rodapé: `developerCredit`.

## Imagem de pré-visualização (WhatsApp, Instagram, Facebook, X)

`src/app/opengraph-image.jpg` (e a cópia `twitter-image.jpg`), 1200×630. O Next gera as tags sozinho.
Para trocar: substitua os dois arquivos e ajuste o texto alternativo em `*.alt.txt`.
Com domínio próprio, defina a variável `NEXT_PUBLIC_SITE_URL` na Vercel (Settings → Environment Variables),
por exemplo `https://www.clinica.com.br`, para o link da imagem usar o domínio certo.
Depois de publicar, teste o link no WhatsApp; ele guarda a prévia antiga em cache por um tempo.

## Antes de publicar

- As fotos e vídeos desta versão são **ilustrativos, gerados por IA**, e não representam o espaço real da clínica.
  Trocar por material real e remover "Imagens ilustrativas" do rodapé (`src/components/Footer.tsx`).
- Substituir o logotipo provisório (`src/components/Logo.tsx`) pelo arquivo oficial.
- Confirmar com a proprietária: "5 anos de estética avançada" (hero) e a lista de tratamentos.
