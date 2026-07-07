export type Step = {
  number: string;
  title: string;
  line: string;
};

export const howItWorks = {
  eyebrow: "Como começa",
  title: "Do primeiro 'oi' no WhatsApp à operação rodando.",
  subtitle:
    "Sem reunião de 2 horas pra discutir tabela. Você chama, a gente entende o gargalo e coloca pra rodar.",
  steps: [
    {
      number: "01",
      title: "Você chama no WhatsApp",
      line: "Sem formulário, sem pitch. Conta em uma mensagem o que mais trava na sua operação.",
    },
    {
      number: "02",
      title: "A gente mapeia o gargalo",
      line: "Diagnóstico gratuito: mostramos o que ainda é manual e o que dá pra rodar sozinho.",
    },
    {
      number: "03",
      title: "Colocamos pra rodar",
      line: "Desenhamos o sistema no seu jeito, ligamos as automações e treinamos a equipe.",
    },
  ] as Step[],
};
