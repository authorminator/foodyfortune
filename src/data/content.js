export const ALLOWED_PERSONAL_ROUTES = ["aqsa"]; // change this

export const DEFAULT_FOOD_KEY = "mysteryApple";

export const TOOLS = {
  knife: {
    key: "knife",
    label: "Knife 🔪",
    actionVerb: "Slice",
    requiredHits: 3,
    hitWord: "stroke",
  },
  hammer: {
    key: "hammer",
    label: "Hammer 🔨",
    actionVerb: "Smash",
    requiredHits: 2,
    hitWord: "hit",
  },
  hands: {
    key: "hands",
    label: "Bare Hands ✋",
    actionVerb: "Open",
    requiredHits: 5,
    hitWord: "tap",
  },
};

export const FOODS = {
  mysteryApple: {
    key: "mysteryApple",
    wholeText: "🍎 A mysterious apple sits here…",
    cutText: "🍎➡️🍎 Two neat halves. Something is inside.",
    paperStuckText: "📜 A tiny note is wedged inside the apple…",
  },
};

export const MESSAGES = {
  generic: [
    "You just unlocked: a tiny reminder that you’re more capable than you think.",
    "Today’s fortune: you deserve good things, and you’re allowed to feel proud of yourself.",
    "If nobody told you lately — you’re doing better than you realize.",
  ],
  personal: [
    "Happy Birthday, [NAME]. You make the world softer and brighter just by being in it.",
    "[NAME], I’m proud of you — not for one big thing, but for your everyday strength.",
    "Dear [NAME]: you are genuinely rare. I’m grateful you exist (and that you chose me).",
  ],
};
