export type Step = {
  number: string;
  title: string;
  line: string;
};

export const howItWorks = {
  eyebrow: "Como entregamos",
  title: "Da operação atual à operação inteligente — em 3 passos.",
  subtitle:
    "Sem reunião de 2 horas pra discutir tabela. Entendemos o gargalo, desenhamos a lógica, implementamos o fluxo.",
  steps: [
    {
      number: "01",
      title: "Diagnóstico operacional",
      line: "Mapeamos o que trava, o que repete e onde a operação perde tempo.",
    },
    {
      number: "02",
      title: "Estruturação da solução",
      line: "Desenhamos a lógica do sistema e como cada setor vai conectar.",
    },
    {
      number: "03",
      title: "Implementação",
      line: "Sistema rodando, equipe treinada, automações ligadas — sob medida.",
    },
  ] as Step[],
};
