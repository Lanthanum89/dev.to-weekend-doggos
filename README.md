# 🐶 Which Dog Are You Today?

Five daft questions. One inevitable truth about your energy levels.

This is a tiny, silly personality quiz built for the [DEV.to Weekend Doggos challenge](https://dev.to/). Answer questions about your Saturday mornings, your feelings on doorbells, and your ideal compliment — and find out which dog breed you truly are today. (Not forever. Today. Check back tomorrow, you might be a different dog.)

## 🐾 The lineup

| Breed | You are... |
| --- | --- |
| 🟡 Golden Retriever | Boundless joy, zero impulse control |
| 🟠 Corgi | Short legs, tall opinions, runs the house |
| 🔵 Greyhound | Capable of 40mph, choosing 0mph |
| 🟢 Border Collie | Rest is a bug, not a feature |
| 🟣 Pug | Didn't ask to be this glamorous, happened anyway |

Answer 5 questions, scores tally up behind the scenes, and whichever dog you matched hardest with gets crowned your spirit animal (ties broken at random, because chaos is thematically appropriate here).

## 🛠 Stack

- **React 19** + **TypeScript**
- **Vite** for dev/build
- **Tailwind CSS 4** for the bold, hand-drawn look
- **Oxlint** for linting
- Hand-rolled SVG dog faces — no illustration library, just `<DogFace />` and a lot of `transform: rotate()`

## 🚀 Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you and go find out which dog you are.

Other scripts:

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

## 🌐 Deployment

Pushes to `main` automatically build and deploy to **GitHub Pages** via GitHub Actions (see `.github/workflows/deploy.yml`).

## 🎨 Adding your own dogs

Breeds and questions live in [`src/data.ts`](src/data.ts) — add a breed to `BREEDS`, give it a color and ear style, then reference its `id` from any question's `options`. No code changes needed elsewhere.
