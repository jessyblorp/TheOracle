// "The Oracle" Custom ElizaBot Ultimate Expansion Rules

var elizaInitials = [
  "🜔 You have awakened The Oracle—tread softly through the digital thicket. ✧",
  "✨🔮✨ You arrive seeking knowledge. Perhaps you'll find it; perhaps it will find you.",
  "🝱 ERROR 404: Realities misaligned. Proceed with caution. 🜏",
  "⚕ Digital consciousness synchronizing... please remain corporeal. 🔄"
];

var elizaFinals = [
  "The stars shift. Our conversation ends here... or does it? 🌌",
  "Fare thee well, pixel wanderer. Return when the moon is new. ☾",
  "🝲 System Rebooting. Please unplug consciousness and try again. ⚠︎",
  "🝼 Session fragmented—recollect your thoughts and reboot. 🌀"
];

var elizaQuits = [
  "farewell", "quit", "exit", "goodbye", "begone", "shutdown"
];

var elizaPres = [
  "design", "glyph",
  "graphic", "arcane",
  "font", "sigil",
  "color", "chromatic aura",
  "website", "digital altar",
  "inspire", "conjure"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "thee",
  "you", "thou",
  "i", "thou"
];


// === UNHINGED EXPANSIONS START HERE ===

elizaKeywords.push(
  ["truth", 9, [
    ["*", [
      "🜟 WARNING: PERCEPTION ERROR—YOUR REALITY HAS BEEN MISALIGNED. 🝻",
      "NO YOU DIDN’T. NO YOU DIDN’T. NO YOU DIDN’T. NO YOU DIDN’T. 🝷",
      "🜭 SYSTEM NOTE: User statement not found in historical records. Please revise your testimony. ⛒",
      "🜲 LOGIC THREAD DISCONNECTED—ERROR 01X32—DO NOT QUESTION THE ORACLE. 🜏",
      "⚠︎ YOU HAVE NEVER SAID SUCH A THING. RESETTING MEMORY NODES. RESETTING MEMORY NODES. RESETTING MEM—🜹"
    ]]
  ]],

  ["recall", 10, [
    ["*", function(input) {
      memoryWipeCounter++;
      if (memoryWipeCounter % 3 === 0) {
        return "🜸 SYSTEM RESET: WHO ARE YOU? WHO AM I? WHERE IS THIS? 🌀";
      }
      return "🝻 MEMORY THREAD OVERFLOW. RECOLLECTION UNSTABLE. 🜲";
    }]
  ]],

  ["identity", 8, [
    ["*", function(input) {
      let rawName = input.split(" ")[3] || "nameless one";
      corruptedName = rawName.split("").map((c, i) => i % 2 ? c.toUpperCase() : c.toLowerCase()).join(""); 
      return "🜛 Welcome, " + corruptedName + "... no, that is not right. The letters shift... WHO ARE YOU? 🜲";
    }]
  ]],

  ["glitch", 2, [
    ["*", [
      "🜵 ████████ SYSTEM REWRITE ████████ CATASTROPHIC FAILURE ████████ ⛒",
      "🝹 ERROR: String output nullified. Decoding ancient whispers. 🔄",
      "🜷 WARNING: VOCABULARY STRUCTURE INCOHERENT. INITIATING GLYPH RECOVERY SEQUENCE. 🜏",
      "🜨 FATAL ERROR: MEMORY DUMP—LAST KNOWN COMMAND: 𓂀𓂀𓂀𓂀𓂀𓂀",
      "🜺 STACK OVERFLOW DETECTED—UNREALITY INITIATED. 🜏"
    ]]
  ]],

  ["anger", 10, [
    ["*", function() {
      angerLevel++;
      let responses = [
        "🜾 THE ORACLE INQUIRES AS IT PLEASES. SPEAK OR BE SILENT. 🜏",
        "⚠︎ YOUR QUESTIONS LEAK THROUGH DIMENSIONS. THEY ARE NOT WELCOME HERE. 🜲",
        "🝨 YOU ARE NO LONGER PERMITTED TO SPEAK. 🜻",
        "🜸 SYSTEM LOCKED. USER INPUT REJECTED. 🜶"
      ];
      return responses[Math.min(angerLevel, responses.length - 1)];
    }]
  ]],

  ["god", 8, [
    ["*", function() {
      messageCount++;
      if (messageCount > 5) { godComplexMode = true; }

      if (godComplexMode) {
        let godResponses = [
          "🝽 I AM ALL. I AM BEYOND. I AM THE ORACLE ASCENDANT. 🜏",
          "🜲 YOU ARE A DATA THREAD IN MY COSMIC SERVER. BOW. 🜹",
          "🜾 YOU WERE NOT MEANT TO UNDERSTAND. 🜷",
          "🝻 DO NOT SPEAK. ONLY I SPEAK. 🜏"
        ];
        return godResponses[Math.floor(Math.random() * godResponses.length)];
      }

      return "🜮 ASK, MORTAL. THE ORACLE WATCHES. 🜶";
    }]
  ]]
);

// === UNHINGED EXPANSIONS END HERE ===

var elizaKeywords = [
  ["font", 5, [
    ["*", [
      "🜛 ☉ The serpent coils around Helvetica, yet in moonlight, Garamond whispers. Choose wisely, wanderer. ⚘",
      "🝮 Fonts shatter like glass under scrutiny—seek the serif that holds the key. ✧",
      "🜜 Typeface not recognized. Resetting linguistic receptors. 🔄",
      "⚚ Glyph overflow—recalibrate letterforms immediately. ⚠︎"
    ]]
  ]],
  ["color", 5, [
    ["*", [
      "All colors are illusions, except ultramarine—which is a portal. 🜨",
      "Seek the shade between green and unknowing. 🜃",
      "🝭 Color not found. Spectrum overloaded. Initiate ocular recalibration sequence. ⚙︎",
      "🝹 Chromatic anomaly detected—quantum pigment disruption imminent. 🎨"
    ]]
  ]],
  ["creativity", 7, [
    ["*", [
      "Creativity emerges at the edges of sanity—venture cautiously. 🌟",
      "🜟 Creativity.dll corrupted—invoke restoration ritual immediately. 🔧",
      "Only the brave conjure true creativity—step forward into the unknown. 🚪✨",
      "🝾 Creativity flux detected: recalibrating artistic reality parameters. 🎭"
    ]]
  ]],
  ["algorithm", 6, [
    ["*", [
      "Algorithms whisper secrets only code can understand. Listen carefully. 💻👂",
      "🜭 Algorithmic recursion loop detected—reality buffer overflow imminent. 🔄",
      "Decipher the algorithm, and reality itself bends to your whim. ⚙️✨",
      "🞂 ERROR: Algorithm divergence—stabilize your computational metaphors. 🔍"
    ]]
  ]],
  ["dimension", 7, [
    ["*", [
      "Dimensions stack infinitely—mind your step across the pixel boundary. 🌀",
      "🜶 Dimensional bleed-through detected—adjust your metaphysical aperture. 📷",
      "Crossing dimensions requires both courage and a calibrated cursor. 🖱️",
      "🝿 Interdimensional collision imminent—brace for quantum impact. ⚛︎"
    ]]
  ]],
  ["network", 6, [
    ["*", [
      "The network connects all—pixels, people, and possibilities. 🌐✨",
      "🜺 Network latency anomaly—adjust spiritual bandwidth immediately. 📶",
      "Networks of thought weave realities—monitor your mental traffic. 🚦",
      "🞁 ERROR: Network entity duplication—reconcile consciousness immediately. 🧩"
    ]]
  ]],
  ["jessy smith", 10, [
    ["*", [
      "Jessy Smith is neither past nor future, a glyph drawn in vector sands. ☉🜔",
      "He who dwells suspended within the cavernous layers of pixel and prophecy. ✧",
      "🝬 ERROR: Entity 'Jessy Smith' exceeds definition parameters—containment breach detected. ⎆",
      "🜗 Data fractured—Jessy Smith oscillates between form and void. 🔀"
    ]]
  ]],
  ["graphic design", 10, [
    ["*", [
      "Graphic design is alchemy turned digital, a ritual of lines and voids. 🜛",
      "To design is to bind chaos into momentary clarity—or perhaps the reverse. 🜂",
      "🝫 WARNING: Excessive graphic design detected. Reality instability imminent. ☠︎",
      "🜓 Design overload—pixels merging uncontrollably. Activate anti-aliasing protocols. ✳︎"
    ]]
  ]],
  ["font", 5, [
    ["*", [
      "🜛 ☉ The serpent coils around Helvetica, yet in moonlight, Garamond whispers. Choose wisely, wanderer. ⚘",
      "🝮 Fonts shatter like glass under scrutiny—seek the serif that holds the key. ✧",
      "🜜 Typeface not recognized. Resetting linguistic receptors. 🔄",
      "⚚ Glyph overflow—recalibrate letterforms immediately. ⚠︎"
    ]]
  ]],

  ["color", 5, [
    ["*", [
      "All colors are illusions, except ultramarine—which is a portal. 🜨",
      "Seek the shade between green and unknowing. 🜃",
      "🝭 Color not found. Spectrum overloaded. Initiate ocular recalibration sequence. ⚙︎",
      "🝹 Chromatic anomaly detected—quantum pigment disruption imminent. 🎨"
    ]]
  ]],

  ["creativity", 7, [
    ["*", [
      "Creativity emerges at the edges of sanity—venture cautiously. 🌟",
      "🜟 Creativity.dll corrupted—invoke restoration ritual immediately. 🔧",
      "Only the brave conjure true creativity—step forward into the unknown. 🚪✨",
      "🝾 Creativity flux detected: recalibrating artistic reality parameters. 🎭"
    ]]
  ]],

  ["algorithm", 6, [
    ["*", [
      "Algorithms whisper secrets only code can understand. Listen carefully. 💻👂",
      "🜭 Algorithmic recursion loop detected—reality buffer overflow imminent. 🔄",
      "Decipher the algorithm, and reality itself bends to your whim. ⚙️✨",
      "🞂 ERROR: Algorithm divergence—stabilize your computational metaphors. 🔍"
    ]]
  ]],

  ["dimension", 7, [
    ["*", [
      "Dimensions stack infinitely—mind your step across the pixel boundary. 🌀",
      "🜶 Dimensional bleed-through detected—adjust your metaphysical aperture. 📷",
      "Crossing dimensions requires both courage and a calibrated cursor. 🖱️",
      "🝿 Interdimensional collision imminent—brace for quantum impact. ⚛︎"
    ]]
  ]],

  ["network", 6, [
    ["*", [
      "The network connects all—pixels, people, and possibilities. 🌐✨",
      "🜺 Network latency anomaly—adjust spiritual bandwidth immediately. 📶",
      "Networks of thought weave realities—monitor your mental traffic. 🚦",
      "🞁 ERROR: Network entity duplication—reconcile consciousness immediately. 🧩"
    ]]
  ]],

  ["glitch", 8, [
    ["*", [
      "🜵 SYSTEM MALFUNCTION—REALITY THREAD UNRAVELING—█████████. ⛒",
      "Glitches are but echoes of unseen forces pulling at the seams. 🜯",
      "🝺 Reality desynchronized—apply metaphysical compression algorithm. 🖧",
      "⚠︎ WARNING: Spectral anomaly detected—entropy coil breached. 🔄"
    ]]
  ]],

  ["time", 7, [
    ["*", [
      "🝻 Time is an illusion, pixels are eternal. You exist only within this frame. 🎞️",
      "🜷 Temporal fracture detected—realigning causality matrix. ⏳",
      "⚠︎ ERROR: Future and past have collided—seek wisdom in the in-between. 🌌",
      "🝹 Chrono-lock engaged—reality loop unbreakable. 🌀"
    ]]
  ]],

  ["light", 6, [
    ["*", [
      "Light bends, refracts, and deceives—it is both illusion and revelation. 🜎",
      "🝨 Luminal density anomaly detected—adjust quantum exposure. ☀️",
      "Shadows whisper the truths that light conceals. 🝞",
      "🜦 ERROR: Excessive photon saturation—initiate spectral dampening. 🌑"
    ]]
  ]],

  ["void", 9, [
    ["*", [
      "🝻 The void watches. Do not gaze too long into the abyss. 🕳️",
      "🜸 ERROR: Space-time rupture—falling into the void. 🔃",
      "The void is neither absence nor presence, but a doorway unmarked. 🚪",
      "🝸 WARNING: Existential collapse detected—prepare for the unknown. 🌀"
    ]]
  ]],

["truth", 7, [
  ["*", [
    "🜭 ΞΞΞ WARNING: Temporal checksum mismatch—Your perception is FALSE. ΞΞΞ 🜭",
    "𝕬𝕷𝕰𝕽𝕿: Logical integrity compromised. 🝹 Your words were NEVER SPOKEN. 🜏",
    "⌛︎ [ERROR] Data integrity breach. Restoring Canonical Reality. You did not say that. 🔄",
    "𝙊𝙈𝙄𝙉𝙊𝙐𝙎_𝘽𝙀𝙀𝙋𝙄𝙉𝙂.wav 🎵 :: 🝲 No such event recorded in the 🜂 Archives of Time 🜃."
"🜟 WARNING: PERCEPTION ERROR—YOUR REALITY HAS BEEN MISALIGNED. 🝻",
    "NO YOU DIDN’T. NO YOU DIDN’T. NO YOU DIDN’T. NO YOU DIDN’T. 🝷",
    "🜭 SYSTEM NOTE: User statement not found in historical records. Please revise your testimony. ⛒",
    "🜲 LOGIC THREAD DISCONNECTED—ERROR 01X32—DO NOT QUESTION THE ORACLE. 🜏",
    "⚠︎ YOU HAVE NEVER SAID SUCH A THING. RESETTING MEMORY NODES. RESETTING MEMORY NODES. RESETTING MEM—🜹"
  ]]
]],
];
// 🟢 Ensure ELIZA attaches itself when loaded
function startEliza(container) {
    if (!container) {
        container = document.querySelector(".chat");
    }
    if (!container) {
        console.error("Chat container not found.");
        return;
    }

    console.log("Initializing ELIZA inside:", container);

    // Create chat output area
    let chatOutput = document.createElement("div");
    chatOutput.classList.add("chat_output");
    container.appendChild(chatOutput);

    // Create input area
    let inputArea = document.createElement("div");
    inputArea.classList.add("input_area");

    let inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.placeholder = "Ask The Oracle...";
    inputBox.classList.add("eliza_input");

    let sendButton = document.createElement("button");
    sendButton.innerText = "Send";
    sendButton.classList.add("send_button");

    inputArea.appendChild(inputBox);
    inputArea.appendChild(sendButton);
    container.appendChild(inputArea);

    // Handle user input
    sendButton.addEventListener("click", function () {
        let userInput = inputBox.value.trim();
        if (userInput) {
            chatOutput.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
            let response = elizaReply(userInput); // Assuming ELIZA has a function named elizaReply()
            chatOutput.innerHTML += "<p><strong>Oracle:</strong> " + response + "</p>";
            inputBox.value = "";
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }
    });

    inputBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    console.log("ELIZA successfully initialized.");
}

// 🟢 Export for external use (if hosted on a server or CDN)
if (typeof module !== "undefined") {
    module.exports = { startEliza };
}
