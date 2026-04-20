const flow = {
  start: {
    text: "Notruf, wo genau ist der Notfallort?",
    next: "situation"
  },

  situation: {
    text: "Was ist passiert?",
    next: "bewusstsein"
  },

  bewusstsein: {
    text: "Ist die Person wach?",
    options: {
      "Ja": "ende",
      "Nein": "atmung"
    }
  },

  atmung: {
    text: "Atmet die Person normal?",
    options: {
      "Ja": "stabile_lage",
      "Nein": "reanimation"
    }
  },

  stabile_lage: {
    text: "Bitte bringen Sie die Person in stabile Seitenlage.",
    next: "ende"
  },

  reanimation: {
    text: "Beginnen Sie sofort mit der Herzdruckmassage!",
    next: "ende"
  },

  ende: {
    text: "Der Rettungsdienst ist unterwegs."
  }
};
