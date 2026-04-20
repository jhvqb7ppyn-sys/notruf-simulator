let current = "start";

const chat = document.getElementById("chat");
const answers = document.getElementById("answers");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showStep() {
  const step = flow[current];

  addMessage(step.text, "dispatcher");
  answers.innerHTML = "";

  if (step.options) {
    Object.keys(step.options).forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;

      btn.onclick = () => {
        addMessage(option, "user");
        current = step.options[option];
        setTimeout(showStep, 500);
      };

      answers.appendChild(btn);
    });
  } else if (step.next) {
    const btn = document.createElement("button");
    btn.innerText = "Weiter";

    btn.onclick = () => {
      current = step.next;
      showStep();
    };

    answers.appendChild(btn);
  }
}

// Start
showStep();
let current = "start";
let chatHistory = [];

const chat = document.getElementById("chat");
const answers = document.getElementById("answers");
const input = document.getElementById("userInput");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;

  chatHistory.push({ sender, text });
}

function normalize(text) {
  return text.toLowerCase();
}

function sendText() {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  const step = flow[current];

  if (step.options) {
    const norm = normalize(userText);

    if (norm.includes("ja")) {
      current = step.options["Ja"];
    } else if (norm.includes("nein")) {
      current = step.options["Nein"];
    } else {
      addMessage("Ich habe Sie nicht verstanden. Bitte antworten Sie mit Ja oder Nein.", "dispatcher");
      return;
    }

    setTimeout(showStep, 500);
  } else if (step.next) {
    current = step.next;
    setTimeout(showStep, 500);
  }
}

function showStep() {
  const step = flow[current];

  addMessage(step.text, "dispatcher");
  answers.innerHTML = "";

  // Buttons optional behalten
  if (step.options) {
    Object.keys(step.options).forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;

      btn.onclick = () => {
        addMessage(option, "user");
        current = step.options[option];
        setTimeout(showStep, 500);
      };

      answers.appendChild(btn);
    });
  }
}

// PDF Export
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;

  doc.setFontSize(12);

  chatHistory.forEach(entry => {
    const line = (entry.sender === "dispatcher" ? "Leitstelle: " : "Ich: ") + entry.text;

    doc.text(line, 10, y);
    y += 8;

    if (y > 280) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save("notruf-protokoll.pdf");
}

// Enter-Taste aktivieren
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendText();
  }
});

// Start
showStep();
