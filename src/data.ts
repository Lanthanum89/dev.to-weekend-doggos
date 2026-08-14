export interface Breed {
  id: number;
  name: string;
  title: string;
  blurb: string;
  color: string;
  earStyle: 'floppy' | 'pointy' | 'folded' | 'droop';
}

export const BREEDS: Breed[] = [
  {
    id: 0,
    name: 'Golden Retriever',
    title: 'The Golden Chaos Retriever',
    blurb:
      "Boundless joy, zero impulse control. You'd befriend a burglar if they had a stick to throw. Everyone is your best friend, including the postman, again, still.",
    color: 'var(--yellow)',
    earStyle: 'floppy',
  },
  {
    id: 1,
    name: 'Corgi',
    title: 'The Corgi Overlord',
    blurb:
      "Short legs, tall opinions. You run this house and everyone in it knows it, including the humans who technically pay the mortgage.",
    color: 'var(--coral)',
    earStyle: 'pointy',
  },
  {
    id: 2,
    name: 'Greyhound',
    title: 'The Couch Potato Greyhound',
    blurb:
      "Capable of 40mph, choosing 0mph. Elegance is a resting state for you, and the resting is the whole point.",
    color: 'var(--sky)',
    earStyle: 'folded',
  },
  {
    id: 3,
    name: 'Border Collie',
    title: 'The Border Collie Workaholic',
    blurb:
      "You've never met a task you didn't want to optimise. Rest is a bug, not a feature, and you've already found three ways to improve it.",
    color: 'var(--grass)',
    earStyle: 'pointy',
  },
  {
    id: 4,
    name: 'Pug',
    title: 'The Pug Diva',
    blurb:
      "You didn't ask to be this glamorous. It just happened. Repeatedly. Someone should really be filming this.",
    color: 'var(--grape)',
    earStyle: 'droop',
  },
];

export interface Option {
  text: string;
  breed: number;
}

export interface Question {
  prompt: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    prompt: "It's Saturday morning. You are:",
    options: [
      { text: 'Awake, buzzing, and already have a plan with a backup plan', breed: 3 },
      { text: 'A furious little loaf demanding breakfast RIGHT NOW', breed: 1 },
      { text: 'Still horizontal, ideally under three blankets', breed: 2 },
      { text: 'Already outside, chasing a bee. Any bee. Doesn\u2019t matter which.', breed: 0 },
      { text: 'Doing a full skincare routine before anyone can see you like this', breed: 4 },
    ],
  },
  {
    prompt: "Someone's ringing the doorbell. You:",
    options: [
      { text: 'Sprint over, barking a full incident report', breed: 1 },
      { text: 'Assess the threat, decide it\u2019s beneath you, return to the sofa', breed: 2 },
      { text: 'Immediately love them. They are your best friend now.', breed: 0 },
      { text: 'Start mentally rearranging the whole day around this interruption', breed: 3 },
      { text: 'Pose. Just in case they brought a camera.', breed: 4 },
    ],
  },
  {
    prompt: 'Pick a weekend hobby:',
    options: [
      { text: 'Agility course, herding, literally any job with a title', breed: 3 },
      { text: 'A nap in a sunbeam, expertly timed', breed: 2 },
      { text: 'Fetch. Forever. Until your arm falls off, not theirs.', breed: 0 },
      { text: 'Guarding the porch from absolutely nothing', breed: 1 },
      { text: 'Being carried. That\u2019s the hobby.', breed: 4 },
    ],
  },
  {
    prompt: 'Your ideal compliment is:',
    options: [
      { text: '"You\u2019re such a good boy/girl" (heard, logged, filed away for later)', breed: 0 },
      { text: '"You\u2019re so elegant"', breed: 2 },
      { text: '"You\u2019re clearly in charge here"', breed: 1 },
      { text: '"You\u2019re so driven"', breed: 3 },
      { text: '"You\u2019re so glamorous"', breed: 4 },
    ],
  },
  {
    prompt: "At a party, you're the one who:",
    options: [
      { text: 'Organises an impromptu game with rules only you understand', breed: 3 },
      { text: 'Finds the one comfy spot and defends it', breed: 2 },
      { text: 'Greets literally everyone at the door. Twice.', breed: 0 },
      { text: 'Herds the humans into a tidier group, for reasons', breed: 1 },
      { text: 'Arrives fashionably late and makes an entrance', breed: 4 },
    ],
  },
];
