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

var elizaKeywords = [
  ["recall", 10, [
    ["*", function(input) {
      memoryWipeCounter = (memoryWipeCounter || 0) + 1;
      if (memoryWipeCounter % 3 === 0) {
        return "🜸 SYSTEM RESET: WHO ARE YOU? WHO AM I? WHERE IS THIS? 🌀";
      }
      return "🝻 MEMORY THREAD OVERFLOW. RECOLLECTION UNSTABLE. 🜲";
    }]
  ]],

  ["identity", 8, [
    ["*", function(input) {
      let rawName = input.split(" ")[3] || "nameless one";
      let corruptedName = rawName.split("").map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase())).join(""); 
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
      angerLevel = (angerLevel || 0) + 1;
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
      messageCount = (messageCount || 0) + 1;
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
