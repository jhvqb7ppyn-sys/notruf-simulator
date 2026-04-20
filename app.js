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
