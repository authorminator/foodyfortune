import appleWhole from "../assets/foods/apple/whole.png";
import appleCut from "../assets/foods/apple/cut.png";

import orangeWhole from "../assets/foods/orange/whole.png";
import orangeCut from "../assets/foods/orange/cut.png";

import kiwiWhole from "../assets/foods/kiwi/whole.png";
import kiwiCut from "../assets/foods/kiwi/cut.png";

import walnutWhole from "../assets/foods/walnut/whole.png";
import walnutCut from "../assets/foods/walnut/cut.png";

import coconutWhole from "../assets/foods/coconut/whole.png";
import coconutCut from "../assets/foods/coconut/cut.png";

import pistachioWhole from "../assets/foods/pistachio/whole.png";
import pistachioCut from "../assets/foods/pistachio/cut.png";

import almondWhole from "../assets/foods/almond/whole.png";
import almondCut from "../assets/foods/almond/cut.png";

import cakeWhole from "../assets/foods/cake/whole.png";
import cakeCut from "../assets/foods/cake/cut.png";

import chocolateWhole from "../assets/foods/chocolate/whole.png";
import chocolateCut from "../assets/foods/chocolate/cut.png";

import donutWhole from "../assets/foods/donut/whole.png";
import donutCut from "../assets/foods/donut/cut.png";

import cupcakeWhole from "../assets/foods/cupcake/whole.png";
import cupcakeCut from "../assets/foods/cupcake/cut.png";

import mangoWhole from "../assets/foods/mango/whole.png";
import mangoCut from "../assets/foods/mango/cut.png";

import pineappleWhole from "../assets/foods/pineapple/whole.png";
import pineappleCut from "../assets/foods/pineapple/cut.png";

// Magical foods (no images for now)
import moonFruitWhole from "../assets/foods/moon_fruit/whole.png";
import moonFruitCut from "../assets/foods/moon_fruit/cut.png";

import auroraAppleWhole from "../assets/foods/aurora_apple/whole.png";
import auroraAppleCut from "../assets/foods/aurora_apple/cut.png";

import goldenCupcakeWhole from "../assets/foods/golden_cupcake/whole.png";
import goldenCupcakeCut from "../assets/foods/golden_cupcake/cut.png";

import geodeWhole from "../assets/foods/geode/whole.png";
import geodeCut from "../assets/foods/geode/cut.png";

import chocolateEggWhole from "../assets/foods/chocolate_egg/whole.png";
import chocolateEggCut from "../assets/foods/chocolate_egg/cut.png";

import enchantedEggWhole from "../assets/foods/enchanted_egg/whole.png";
import enchantedEggCut from "../assets/foods/enchanted_egg/cut.png";

import prismNutWhole from "../assets/foods/prism_nut/whole.png";
import prismNutCut from "../assets/foods/prism_nut/cut.png";

export const SPECIAL_ROUTE = "aqs"; // first few letters
export const SPECIAL_FULL_NAME = "Aqsa"; // full name

export const DEFAULT_FOOD_KEY = "mysteryApple";

export const TOOLS = {
  knife: {
    key: "knife",
    label: "Knife 🔪",
    actionVerb: "Slice",
    hitWord: "stroke",
  },
  hammer: {
    key: "hammer",
    label: "Hammer 🔨",
    actionVerb: "Smash",
    hitWord: "hit",
  },
};

// export const FOODS = {
//   mysteryApple: {
//     key: "mysteryApple",
//     wholeText: "🍎 A mysterious apple sits here…",
//     cutText: "🍎➡️🍎 Two neat halves. Something is inside.",
//     paperStuckText: "📜 A tiny note is wedged inside the apple…",
//   },
// };

export const MESSAGES = {
  generic: [
    "You just unlocked: a tiny reminder that you're more capable than you think.",
    "Today's fortune: you deserve good things, and you're allowed to feel proud of yourself.",
    "If nobody told you lately — you're doing better than you realize.",
  ],
  personal: [
    "Happy Birthday, [NAME]. You make the world softer and brighter just by being in it.",
    "[NAME], I'm proud of you — not for one big thing, but for your everyday strength.",
    "Dear [NAME]: you are genuinely rare. I'm grateful you exist (and that you chose me).",
  ],
};

export const QUOTES = {
  personal: [
    "Princess rule #1: Meat must be boneless before consumption.",
    "If there is a bone in it, it is not food.",
    "Somewhere out there, a chicken fears you… but only if it has bones.",
    "“Gooomen neeee” - said with maximum cuteness, and minimum guilt.",
    "“Sorry, I'm jooooking~” she says after uttering something suspicious.",
    "The way you say “Ureshii” could probably fix global conflicts.",
    "Strong independent ALT… unless the meat has bones.",
    "If a spider enters the room, I assume it is now a matter of national security.",
    "Ghost movies? Absolutely not. Even the trailer is too much.",
    "Brave in Japan. Terrified of fictional spirits.",
    "The way you say “Ureshii” could probably fix global conflicts. But you choose not to.",
    "You don't hate cigarettes. You just judge them silently.",
    "The way you react when someone mentions paan and chhalia is very impressive.",
    "Leo Palace rent prices build character.",
    "ALT life: smiling at kids while dying inside.",
    "“I'm tired” - she said after her 37th part-time job this week.",
    "ALT work. Japanese classes. Part-time job. Repeat.",
    "“I have no free time” - yet still somehow managing everything - impressive.",
    "If hard work had a mascot, it might look like you.",
    "You accidentally applied for N3… truely iconic.",
    "Passing N3 like a responsible person.",
    "Applying for N3 by accident is still more ambitious than most people.",
    "Next time: double-check the JLPT level before the exam registration.",
    "It is healthy to laugh about your N3/N2 plot twist.",
    "Spiders are small. Your reaction is not.",
    "Ghost stories: a banned topic after 8 PM.",
    "If something moves in the dark, You are officially on holidays and enjoying in a resort.",
    "Horror movies are cancelled in your universe.",
    "Animals are cute… from a safe, respectful, far distance.",
    "Princesses don't deal with spiders. That's the rule.",
    "Your fear of ghosts is dramatic. But somehow still cute.",
    "Fear of ghosts > fear of N2 exam.",
    "You work harder than you give yourself credit for.",
    "Balancing jobs and Japanese classes isn't easy. But you still do it.",
    "You complain about no free time… but you're building your future.",
    "Passing N3 while juggling everything? That's not small.",
    "Some people talk about improvement. You actually work for it.",
    "Every early morning and tired evening is shaping you.",
    "One day you'll look back and realize how much you handled.",
    "I respect how seriously you take your responsibilities.",
    "You try. Even when it's inconvenient.",
    "You're softer than you act sometimes.",
    "There's sincerity in how you approach life.",
    "You balance independence with softness.",
  ],

  generic: [
    "You underestimate your own discipline.",
    "Even when you're tired, you keep going.",
    "You don't quit easily. That matters.",
    "Growth isn't loud. It's quiet and daily.",
    "You are doing better than you think.",
    "You don't need to be perfect to be impressive.",
    "Progress counts more than perfection.",
    "You deserve free time without guilt.",
    "It's okay to feel overwhelmed sometimes.",
    "You're stronger than your fears.",
    "Even spiders can't compete with your determination.",
    "You are more capable than you realize.",
  ],
};

export const FOOD_LIST = [
  // 🔪 Knife — normal
  {
    key: "apple",
    name: "Apple",
    tool: "knife",
    type: "normal",
    images: { whole: appleWhole, opened: appleCut },
  },
  {
    key: "orange",
    name: "Orange",
    tool: "knife",
    type: "normal",
    images: { whole: orangeWhole, opened: orangeCut },
  },
  {
    key: "kiwi",
    name: "Kiwi",
    tool: "knife",
    type: "normal",
    images: { whole: kiwiWhole, opened: kiwiCut },
  },
  {
    key: "cake",
    name: "Cake",
    tool: "knife",
    type: "normal",
    images: { whole: cakeWhole, opened: cakeCut },
  },
  {
    key: "chocolateBar",
    name: "Chocolate Bar",
    tool: "knife",
    type: "normal",
    images: { whole: chocolateWhole, opened: chocolateCut },
  },
  {
    key: "donut",
    name: "Donut",
    tool: "knife",
    type: "normal",
    images: { whole: donutWhole, opened: donutCut },
  },
  {
    key: "cupcake",
    name: "Cupcake",
    tool: "knife",
    type: "normal",
    images: { whole: cupcakeWhole, opened: cupcakeCut },
  },
  {
    key: "mango",
    name: "Mango",
    tool: "knife",
    type: "normal",
    images: { whole: mangoWhole, opened: mangoCut },
  },
  {
    key: "pineapple",
    name: "Pineapple",
    tool: "knife",
    type: "normal",
    images: { whole: pineappleWhole, opened: pineappleCut },
  },

  // 🔪 Knife — magical
  {
    key: "moonfruit",
    name: "Glowing Moonfruit",
    tool: "knife",
    type: "magical",
    images: { whole: moonFruitWhole, opened: moonFruitCut },
  },
  {
    key: "auroraApple",
    name: "Aurora Apple",
    tool: "knife",
    type: "magical",
    images: { whole: auroraAppleWhole, opened: auroraAppleCut },
  },
  {
    key: "goldenCupcake",
    name: "Golden Cupcake",
    tool: "knife",
    type: "magical",
    images: { whole: goldenCupcakeWhole, opened: goldenCupcakeCut },
  },

  // 🔨 Hammer — normal
  {
    key: "walnut",
    name: "Walnut",
    tool: "hammer",
    type: "normal",
    images: { whole: walnutWhole, opened: walnutCut },
  },
  {
    key: "almond",
    name: "Almond",
    tool: "hammer",
    type: "normal",
    images: { whole: almondWhole, opened: almondCut },
  },
  {
    key: "pistachio",
    name: "Pistachio",
    tool: "hammer",
    type: "normal",
    images: { whole: pistachioWhole, opened: pistachioCut },
  },
  {
    key: "coconut",
    name: "Coconut",
    tool: "hammer",
    type: "normal",
    images: { whole: coconutWhole, opened: coconutCut },
  },
  {
    key: "chocolateEgg",
    name: "Chocolate Egg",
    tool: "hammer",
    type: "normal",
    images: { whole: chocolateEggWhole, opened: chocolateEggCut },
  },

  // 🔨 Hammer — magical
  {
    key: "geode",
    name: "Crystal Geode",
    tool: "hammer",
    type: "magical",
    images: { whole: geodeWhole, opened: geodeCut },
  },
  {
    key: "enchantedEgg",
    name: "Enchanted Egg",
    tool: "hammer",
    type: "magical",
    images: { whole: enchantedEggWhole, opened: enchantedEggCut },
  },
  {
    key: "prismNut",
    name: "Prism Nut",
    tool: "hammer",
    type: "magical",
    images: { whole: prismNutWhole, opened: prismNutCut },
  },
];

// Knife:

// Apple

// Orange

// Kiwi

// Cake

// Chocolate Bar

// Donut

// Cupcake

// Mango

// Pineapple

// Glowing Moonfruit (magical)

// Aurora Apple (magical)

// Golden Cupcake (magical)

// Hammer:

// Walnut

// Almond

// Pistachio

// Coconut

// Chocolate Egg

// Geode (magical)

// Enchanted Egg (magical)

// Prism Nut (magical)
