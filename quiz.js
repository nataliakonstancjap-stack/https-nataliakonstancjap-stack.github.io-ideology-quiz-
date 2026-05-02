const quizQuestions = [
  {
    question: "How do you feel about government intervention in the economy?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 0 }
  },
  {
    question: "Should taxes be raised on the wealthy?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 0 }
  },
  {
    question: "Free markets lead to economic growth.",
    effects: { econ: 1, dipl: 0, govt: -1, scty: 0 }
  },
  {
    question: "Government should provide universal healthcare.",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Do you support military intervention to protect human rights?",
    effects: { econ: 0, dipl: 1, govt: 0, scty: 1 }
  },
  {
    question: "Is censorship necessary to maintain social order?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: -1 }
  },
  {
    question: "How should the government address climate change?",
    effects: { econ: -1, dipl: 1, govt: 1, scty: 1 }
  },
  {
    question: "Should drug use be decriminalized?",
    effects: { econ: 0, dipl: 0, govt: -1, scty: 1 }
  },
  {
    question: "Do you believe in stronger regulation of corporations?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 0 }
  },
  {
    question: "Should the voting age be lowered to 16?",
    effects: { econ: 0, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "Is it the government’s responsibility to reduce income inequality?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 0 }
  },
  {
    question: "Do you support open borders for immigration?",
    effects: { econ: 1, dipl: 1, govt: -1, scty: 1 }
  },
  {
    question: "Should education be free for everyone?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "How do you view the social safety net?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is it necessary to monitor communications for national security?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: -1 }
  },
  {
    question: "Should religion play a role in government?",
    effects: { econ: 0, dipl: 0, govt: 0, scty: -1 }
  },
  {
    question: "Is capitalism the best economic system?",
    effects: { econ: 1, dipl: 0, govt: -1, scty: 0 }
  },
  {
    question: "Do you believe in universal basic income?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should the government regulate internet privacy?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is international trade beneficial for your country?",
    effects: { econ: 1, dipl: 1, govt: 0, scty: 0 }
  },
  {
    question: "Should police have more accountability?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "How important is it to protect civil liberties?",
    effects: { econ: 0, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "Should the government support the arts?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Do you support increased funding for public transportation?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is affordable housing a human right?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should the government intervene to protect endangered species?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Do you believe in meritocracy?",
    effects: { econ: 1, dipl: 0, govt: -1, scty: 0 }
  },
  {
    question: "Should people be required to vote?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is affirmative action necessary to ensure equality?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should the legal drinking age be lowered?",
    effects: { econ: 0, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "How should governments address immigration?",
    effects: { econ: 1, dipl: 1, govt: 1, scty: 1 }
  },
  {
    question: "Should historical monuments be removed if they are offensive?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is it important to have a diverse media landscape?",
    effects: { econ: 0, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "Should the government fund scientific research?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Are strict gun laws necessary?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is a strong military essential for national security?",
    effects: { econ: 0, dipl: 1, govt: 1, scty: 0 }
  },
  {
    question: "Should all citizens have access to high-speed internet?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should education be standardized across the country?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Are environmental regulations harming businesses?",
    effects: { econ: 1, dipl: 0, govt: -1, scty: 0 }
  },
  {
    question: "Should the government provide a social safety net for the poor?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is nationalism a threat to global peace?",
    effects: { econ: 0, dipl: -1, govt: 0, scty: 0 }
  },
  {
    question: "Should there be limits to free speech?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: -1 }
  },
  {
    question: "Is the welfare state sustainable in the long term?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 0 }
  },
  {
    question: "Should public transportation be subsidized?",
    effects: { econ: -1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is it acceptable to use military force for humanitarian reasons?",
    effects: { econ: 0, dipl: 1, govt: 0, scty: 1 }
  },
  {
    question: "Should education focus on vocational training?",
    effects: { econ: 1, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "Should parents have the right to choose their child’s school?",
    effects: { econ: 1, dipl: 0, govt: 0, scty: 1 }
  },
  {
    question: "Is it important to have representation of all identities in government?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "How should countries address global poverty?",
    effects: { econ: 1, dipl: 1, govt: 0, scty: 1 }
  },
  {
    question: "Should there be laws protecting whistleblowers?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should people have the right to die with dignity?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Is it the government's responsibility to provide affordable housing?",
    effects: { econ: 1, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should businesses be held accountable for environmental damage?",
    effects: { econ: 0, dipl: 0, govt: 1, scty: 1 }
  },
  {
    question: "Should international agreements prioritize environmental issues?",
    effects: { econ: 0, dipl: 1, govt: 0, scty: 1 }
  },
];

export default quizQuestions;
