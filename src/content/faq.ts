export type FaqItem = {
  q: string;
  a: string;
};

export const faq = {
  eyebrow: "Antes de você perguntar",
  title: "Dúvidas que aparecem em quase toda conversa.",
  subtitle:
    "Se a sua não está aqui, manda no WhatsApp, a gente responde direto.",
  items: [
    {
      q: "Quanto demora pra entregar?",
      a: "Entre 30 e 60 dias do briefing à entrega, dependendo do escopo. Casos pequenos (uma automação ou agente) saem em 2–3 semanas. Sistema completo costuma ficar perto dos 60 dias.",
    },
    {
      q: "Quanto custa em média?",
      a: "Varia conforme o escopo. Não trabalhamos com mensalidade fixa de plataforma. É projeto fechado, preço único. Na primeira conversa de 30 minutos a gente já consegue te dar uma faixa realista pro seu caso.",
    },
    {
      q: "Vocês atendem negócio pequeno ou só corporação?",
      a: "Trabalhamos com PMEs. Clínica de 2 pessoas, escritório com 5 advogados, e-commerce iniciante, todos cabem. O que pedimos é processo claro o suficiente pra modelar (mesmo que ainda esteja no caderno).",
    },
    {
      q: "Já uso uma ferramenta pronta (Trello, Bitrix, etc). Vale trocar?",
      a: "Depende. A gente avalia junto o que você já tem. Às vezes a melhor solução é conectar com o que você já usa em vez de trocar. Honestidade aqui é parte do jogo: se não fizer sentido mudar, a gente fala.",
    },
    {
      q: "E o suporte depois da entrega?",
      a: "Pós-entrega inclui treinamento da equipe, suporte técnico dedicado e roadmap de evolução. Não é “entregamos e somem”: sistemas bons crescem com o negócio, e a gente continua junto.",
    },
    {
      q: "Posso mudar/expandir depois?",
      a: "Sim, é desenhado pra isso. Sistema é seu, modular, com código que você pode auditar. Se quiser trazer outro fornecedor depois, leva tudo.",
    },
  ] as FaqItem[],
};
