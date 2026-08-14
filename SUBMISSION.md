*This is a submission for [Weekend Challenge: Dog Days Edition](https://dev.to/challenges/weekend-2026-08-13)*

## What I Built

**Which Dog Are You Today?** — a tiny, silly personality quiz. Five daft questions about your Saturday mornings, your feelings on doorbells, and your ideal compliment, and you get crowned as one of five dog breeds: Golden Retriever, Corgi, Greyhound, Border Collie, or Pug. The goal was pure low-stakes fun with no login, no backend, no tracking — just open it, answer five questions, and get told which dog you are today. (Not forever. Today. Check back tomorrow — you might be a different dog.)

## Demo

🔗 [Live demo](https://lanthanum89.github.io/dev.to-weekend-doggos/)

🐾 The lineup:

| Breed | You are... |
| --- | --- |
| 🟡 Golden Retriever | Boundless joy, zero impulse control |
| 🟠 Corgi | Short legs, tall opinions, runs the house |
| 🔵 Greyhound | Capable of 40mph, choosing 0mph |
| 🟢 Border Collie | Rest is a bug, not a feature |
| 🟣 Pug | Didn't ask to be this glamorous, happened anyway |

## Code

{% github Lanthanum89/dev.to-weekend-doggos %}

## How I Built It

The stack is deliberately small: **React 19 + TypeScript**, **Vite** for dev/build, and **Tailwind CSS 4** for the bold, hand-drawn look. Deploys happen automatically to **GitHub Pages** on every push to `main` via GitHub Actions.

A few decisions worth calling out:

- **Scoring is a simple tally, not a decision tree.** Each answer bumps a per-breed counter (`scores[breedId]++`), and after the last question the breed(s) with the highest score win. It's a flat array of five integers — easy to reason about and easy to extend with a new breed.
- **Ties are broken at random**, not by array order, because letting the "first" breed always win on a tie felt thematically wrong for a quiz about chaos and personality.
- **No illustration library.** The dog faces are hand-rolled SVGs (`<DogFace />`) that take a `color` and an `earStyle` (`floppy` | `pointy` | `folded` | `droop`) as props, so each breed gets a distinct face just by composing the same component differently — mostly `transform: rotate()` on ear paths.
- **Content is fully data-driven.** Breeds and questions live in `src/data.ts` as plain arrays/objects. Adding a new dog means adding a `Breed` entry and referencing its `id` from question options — no component changes needed.
- **Oxlint** for fast linting, keeping the toolchain lightweight for a weekend build.

## Prize Categories

Not submitting to any prize categories.

<!-- Thanks for participating! -->
