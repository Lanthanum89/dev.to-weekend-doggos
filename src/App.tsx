import { useState } from 'react';
import { BREEDS, QUESTIONS } from './data';
import DogFace from './components/DogFace';

type Stage = 'start' | 'quiz' | 'result';

const OPTION_COLORS = ['var(--coral)', 'var(--sky)', 'var(--yellow)', 'var(--grass)', 'var(--grape)'];

function Sunburst({ className }: { className?: string }) {
  const rays = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 400 400" className={className}>
      {rays.map((_, i) => {
        const angle = (360 / rays.length) * i;
        return (
          <rect
            key={i}
            x="196"
            y="0"
            width="8"
            height="200"
            fill="var(--yellow)"
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}
    </svg>
  );
}

export default function App() {
  const [stage, setStage] = useState<Stage>('start');
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState<number[]>(() => BREEDS.map(() => 0));
  const [resultId, setResultId] = useState<number | null>(null);

  function startQuiz() {
    setScores(BREEDS.map(() => 0));
    setQIndex(0);
    setStage('quiz');
  }

  function answer(breedId: number) {
    const next = [...scores];
    next[breedId] += 1;
    setScores(next);

    if (qIndex + 1 < QUESTIONS.length) {
      setQIndex(qIndex + 1);
    } else {
      const max = Math.max(...next);
      const winners = BREEDS.filter((b) => next[b.id] === max);
      const winner = winners[Math.floor(Math.random() * winners.length)];
      setResultId(winner.id);
      setStage('result');
    }
  }

  function reset() {
    setResultId(null);
    setStage('start');
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* background confetti dots */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute w-8 h-8 rounded-full hard-border" style={{ background: 'var(--coral)', top: '8%', left: '8%' }} />
        <div className="absolute w-5 h-5 rounded-full hard-border" style={{ background: 'var(--sky)', top: '18%', right: '12%' }} />
        <div className="absolute w-6 h-6 hard-border" style={{ background: 'var(--yellow)', bottom: '14%', left: '14%', transform: 'rotate(20deg)' }} />
        <div className="absolute w-7 h-7 rounded-full hard-border" style={{ background: 'var(--grass)', bottom: '10%', right: '10%' }} />
        <div className="absolute w-4 h-4 hard-border" style={{ background: 'var(--grape)', top: '50%', left: '4%', transform: 'rotate(45deg)' }} />
      </div>

      {stage === 'start' && (
        <div className="pop-in w-full max-w-md text-center">
          <div className="relative mx-auto mb-6 w-40 h-40 float">
            <DogFace color="var(--coral)" earStyle="floppy" className="w-full h-full drop-shadow-none" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-800 leading-tight mb-3" style={{ fontWeight: 800 }}>
            WHICH DOG<br />ARE YOU TODAY?
          </h1>
          <p className="font-semibold text-base sm:text-lg mb-8 opacity-80">
            Five daft questions. One inevitable truth about your energy levels.
          </p>
          <button
            onClick={startQuiz}
            className="press font-display text-xl sm:text-2xl font-800 text-white px-10 py-4 rounded-2xl hard-border-thick hard-shadow bg-[var(--coral)] transition-transform"
            style={{ fontWeight: 800 }}
          >
            Start the quiz
          </button>
        </div>
      )}

      {stage === 'quiz' && (
        <div className="pop-in w-full max-w-xl">
          {/* progress dots */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full hard-border ${i <= qIndex ? '' : 'opacity-30'}`}
                style={{ background: i < qIndex ? 'var(--grass)' : i === qIndex ? 'var(--coral)' : '#fff' }}
              />
            ))}
          </div>

          <div className="bg-white hard-border-thick hard-shadow rounded-3xl p-6 sm:p-8">
            <p className="font-display text-2xl sm:text-3xl font-700 mb-6" style={{ fontWeight: 700 }}>
              {QUESTIONS[qIndex].prompt}
            </p>
            <div className="flex flex-col gap-3">
              {QUESTIONS[qIndex].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(opt.breed)}
                  className="press text-left font-bold px-5 py-4 rounded-2xl hard-border hard-shadow-sm transition-transform"
                  style={{ background: OPTION_COLORS[i % OPTION_COLORS.length] }}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center font-bold mt-4 opacity-60">
            Question {qIndex + 1} of {QUESTIONS.length}
          </p>
        </div>
      )}

      {stage === 'result' && resultId !== null && (
        <div className="pop-in w-full max-w-md text-center relative">
          <Sunburst className="spin-slow absolute -z-10 w-[420px] h-[420px] -top-24 left-1/2 -translate-x-1/2 opacity-70" />

          <div className="bg-white hard-border-thick hard-shadow rounded-3xl p-6 sm:p-8 relative">
            <p className="font-display font-700 uppercase tracking-wide text-sm mb-2 opacity-60" style={{ fontWeight: 700 }}>
              You are...
            </p>
            <div className="w-36 h-36 mx-auto mb-4">
              <DogFace
                color={BREEDS[resultId].color}
                earStyle={BREEDS[resultId].earStyle}
                className="w-full h-full"
              />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-800 mb-3" style={{ fontWeight: 800 }}>
              {BREEDS[resultId].title}
            </h2>
            <p className="font-semibold text-base opacity-80 mb-6">{BREEDS[resultId].blurb}</p>
            <button
              onClick={reset}
              className="press font-display text-lg font-800 text-white px-8 py-3 rounded-2xl hard-border hard-shadow-sm transition-transform"
              style={{ background: 'var(--ink)', fontWeight: 800 }}
            >
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
