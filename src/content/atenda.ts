export type AtendaFaq = { q: string; a: string };

/** Uma conversa já existente na lista da tela simulada. */
export type AtendaListItem = { name: string; preview: string; time: string };

/** Um segmento da demo do hero: UMA troca só (cliente pergunta, Atenda responde). */
export type AtendaSegment = {
  label: string;
  business: string;
  customer: string;
  question: string;
  answer: string;
  /** Conversas que já estavam na lista antes da nova chegar. */
  others: AtendaListItem[];
};

export type AtendaFunnelCard = { name: string; topic: string };

export type AtendaPlan = {
  name: string;
  priceBRL: number;
  /** "Até X clientes atendidos por mês". */
  clients: number;
  /** Atendentes inclusos, sem contar o dono. */
  seats: number;
  /** Recursos a mais deste plano (`features` de PLANS). */
  extras?: string[];
  /** Plano de entrada: o card dele lista tudo e os outros abrem com "Tudo do Essencial, mais:". */
  base?: boolean;
  highlight?: boolean;
};

/** Página do Atenda (/atenda): toda a copy da página mora aqui. */
export const atenda = {
  name: "Atenda",
  signupUrl: "https://atendimento.obomsobrinho.com.br/cadastro",
  /** Botão do cabeçalho nesta página (no lugar do "Diagnóstico gratuito"). */
  headerCta: "Testar grátis",

  meta: {
    title: "Atenda: a central inteligente do seu WhatsApp",
    description:
      "O Atenda atende, qualifica e organiza cada cliente do seu WhatsApp até a venda. Teste grátis por 7 dias, sem cartão e sem reunião.",
  },

  hero: {
    eyebrow: "Atenda · um produto OBS",
    titleLead: "A central inteligente",
    titleAccent: "do seu WhatsApp.",
    subtitle: "Atende, qualifica e organiza cada cliente até a venda.",
    primaryCta: "Testar grátis por 7 dias",
    secondaryCta: "Falar com a gente",
    whatsappMessage: "Oi! Vim pela página do Atenda e quero entender como funciona.",
    micro: "7 dias grátis · sem cartão",
  },

  /** Seção 2: a tela do Atenda atendendo, um segmento por ciclo. */
  demo: {
    ariaLabel: "Demonstração: uma mensagem chega no WhatsApp e o Atenda responde",
    segmentsLabel: "Escolha um tipo de negócio",
    listTitle: "Conversas",
    aiOn: "IA ligada",
    typing: "digitando…",
    now: "agora",
    composer: "Escreva uma mensagem",
    // Negócios e clientes fictícios. A IA nunca agenda nada aqui.
    segments: [
      {
        label: "Loja",
        business: "Bella Moda",
        customer: "Juliana Prado",
        question: "Tem a blusa azul no M?",
        answer: "Tem sim! R$ 79,90. Quer que eu separe?",
        others: [
          { name: "Fernanda Lopes", preview: "Chegou certinho, obrigada!", time: "9:41" },
          { name: "Diego Martins", preview: "Vocês entregam no centro?", time: "9:12" },
          { name: "Camila Reis", preview: "Qual o prazo de troca?", time: "8:57" },
        ],
      },
      {
        label: "Clínica",
        business: "Clínica Vida Plena",
        customer: "Marcos Andrade",
        question: "Atendem pelo convênio Saúde Mais?",
        answer: "Atendemos sim, é só trazer a carteirinha.",
        others: [
          { name: "Luciana Freitas", preview: "Onde fica o estacionamento?", time: "9:38" },
          { name: "Roberto Dias", preview: "Obrigado pela informação!", time: "9:20" },
          { name: "Patrícia Gomes", preview: "Precisa de pedido médico?", time: "8:49" },
        ],
      },
      {
        label: "Advocacia",
        business: "Moura Advocacia",
        customer: "Thiago Ferreira",
        question: "Fui demitido e não recebi a rescisão. Vocês atendem?",
        answer: "Atendemos. Quando foi a demissão?",
        others: [
          { name: "Sílvia Costa", preview: "Mandei os documentos agora.", time: "9:35" },
          { name: "André Nunes", preview: "Vocês fazem inventário?", time: "9:04" },
          { name: "Helena Ramos", preview: "Certo, fico no aguardo.", time: "8:40" },
        ],
      },
      {
        label: "Serviços",
        business: "Clima Frio Serviços",
        customer: "Renata Alves",
        question: "Fazem limpeza de ar-condicionado?",
        answer: "Fazemos! Split até 12 mil BTUs sai R$ 150.",
        others: [
          { name: "Jorge Batista", preview: "Atendem em Contagem?", time: "9:44" },
          { name: "Mariana Teixeira", preview: "Ficou ótimo, obrigada!", time: "9:15" },
          { name: "Eduardo Pires", preview: "Aceita Pix?", time: "8:52" },
        ],
      },
    ] as AtendaSegment[],
  },

  /** Seção 3: o time entra quando precisa e o cliente anda no funil (Advocacia). */
  team: {
    eyebrow: "Por dentro do Atenda",
    title: "A IA atende e só te chama quando precisa de você.",
    business: "Moura Advocacia",
    conversationsTab: "Conversas",
    pipelineTab: "Pipeline",
    handoff: {
      title: "Você entra quando precisa",
      text: "Quando o cliente pede algo que só o seu time decide, o Atenda avisa você no WhatsApp e passa a sua resposta adiante.",
      ariaLabel:
        "Demonstração: o cliente pede algo que só o time decide, o Atenda abre um pedido, avisa o dono e repassa a orientação",
      customer: "Paulo Mendes",
      question: "Consigo falar com o doutor hoje?",
      holding: "Vou verificar com ele e já te aviso.",
      pedidoOpened: "Pedido de ajuda aberto · aviso enviado ao seu WhatsApp",
      notifyApp: "WhatsApp",
      // Mesmo desenho do aviso real (crm/lib/avisos.ts, textoDoAviso).
      notifyTitle: "A IA pediu sua ajuda",
      notifyLines: ["Cliente: Paulo Mendes", "Pedido: quer falar com o Dr. Ricardo hoje."],
      orientLabel: "Orientar a IA",
      orientPlaceholder: "Diga à IA o que responder ao cliente",
      orientation: "Avise que eu ligo para ele hoje às 16h, neste mesmo número.",
      orientSend: "Enviar orientação",
      orientSent: "Orientação enviada à IA",
      answer: "O Dr. Ricardo te liga hoje às 16h, neste mesmo número.",
      takeOver: "Prefere responder você? Escreva na conversa e ela passa a ser sua.",
    },
    funnel: {
      title: "Cada cliente no lugar certo",
      text: "Conforme a conversa avança, o cliente anda sozinho no funil. Você abre e já sabe em que pé está cada um.",
      ariaLabel:
        "Demonstração: o card de Paulo Mendes passa de Novo para Qualificado conforme a conversa avança",
      // Etapas do funil padrão do app (pipeline_stages).
      stages: ["Novo", "Qualificado", "Aguardando atendimento", "Fechado"],
      moving: { name: "Paulo Mendes", topic: "Quer falar com o doutor" } as AtendaFunnelCard,
      /** Cards parados, por etapa (mesma ordem de `stages`). */
      cards: [
        [{ name: "Ana Lúcia", topic: "Revisão de contrato" }],
        [{ name: "Carla Souza", topic: "Rescisão trabalhista" }],
        [{ name: "Rafael Lima", topic: "Pensão alimentícia" }],
        [
          { name: "Sérgio Alves", topic: "Inventário" },
          { name: "Beatriz Rocha", topic: "Divórcio consensual" },
        ],
      ] as AtendaFunnelCard[][],
    },
  },

  /** Seção 4. Fonte: `crm/lib/billing.ts` (`PLANS`). Mudou lá, muda aqui. */
  plans: {
    eyebrow: "Planos",
    title: "Escolha pelo tamanho do seu atendimento.",
    badge: "Para começar",
    perMonth: "/mês",
    clients: (n: number) => `Até ${n.toLocaleString("pt-BR")} clientes atendidos por mês`,
    seats: (n: number) => `${n} ${n === 1 ? "atendente" : "atendentes"} além do dono`,
    cta: "Testar grátis por 7 dias",
    note: "Todos os planos começam com 7 dias grátis, sem cartão.",
    /** Abre a lista dos planos acima do Essencial, que mostram só o que muda. */
    inherits: "Tudo do Essencial, mais:",
    // O que todo plano tem (listado inteiro só no Essencial). Só recurso que o app já faz.
    included: [
      "1 número de WhatsApp",
      "IA que responde só com o que você ensinou",
      "Tom de voz e objetivo do atendimento do seu jeito",
      "Pedido de ajuda com aviso no seu WhatsApp",
      "Suas orientações viram regra para a próxima vez",
      "Funil com cada cliente na etapa certa",
      "Painel com os resultados do atendimento",
    ],
    items: [
      { name: "Essencial", priceBRL: 197, clients: 400, seats: 1, base: true, highlight: true },
      {
        name: "Profissional",
        priceBRL: 347,
        clients: 1000,
        seats: 3,
        extras: ["Transferir conversas entre atendentes"],
      },
      {
        name: "Avançado",
        priceBRL: 597,
        clients: 3000,
        seats: 6,
        extras: ["Transferir conversas entre atendentes", "Suporte prioritário"],
      },
    ] as AtendaPlan[],
  },

  final: {
    /** Uma frase por linha. */
    title: ["Teste em 1 clique.", "Sem reunião, sem cartão."],
    text: "Simples de testar, simples de confiar.",
    points: ["7 dias grátis", "Seu número de sempre", "Você vê tudo o que a IA responde"],
    cta: "Testar grátis por 7 dias",
  },

  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        q: "Preciso trocar meu número de WhatsApp?",
        a: "Não. Você conecta o número que a sua empresa já usa, lendo um QR code.",
      },
      {
        q: "E se a IA não souber responder?",
        a: "Ela não inventa. Responde que vai verificar, abre um pedido para o seu time e segue atendendo enquanto isso.",
      },
      {
        q: "Posso assumir uma conversa?",
        a: "Pode. É só escrever na conversa pelo Atenda: a IA para de responder e a conversa fica com você.",
      },
      {
        q: "Preciso de reunião para começar?",
        a: "Não. Você cria a conta, conecta o WhatsApp e testa por 7 dias, sem cartão.",
      },
    ] as AtendaFaq[],
  },
};
