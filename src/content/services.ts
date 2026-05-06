import type { LucideIcon } from "lucide-react";
import { Bot, Cog, Globe2, Workflow } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  outcome: string;
};

export const services = {
  eyebrow: "O que a gente faz",
  title: "Sistemas que reduzem operação manual — não que adicionam complexidade.",
  subtitle:
    "De cardápio digital a sistema completo, tudo desenhado pro jeito que seu negócio funciona — não pro jeito que uma ferramenta pronta exige.",
  items: [
    {
      icon: Cog,
      title: "Sistemas sob medida",
      outcome:
        "Cardápio do restaurante, agenda da clínica, painel do escritório, app pro seu cliente. Cada operação pede o seu.",
    },
    {
      icon: Workflow,
      title: "Automação de processos",
      outcome:
        "Lembrete, cobrança, relatório, atualização. Tarefas que repetem, executadas sem você precisar lembrar.",
    },
    {
      icon: Globe2,
      title: "Sites & lojas online",
      outcome:
        "Porta de entrada conectada à sua operação. Site, loja, página de agendamento — sempre integrados ao seu sistema.",
    },
    {
      icon: Bot,
      title: "Atendimento conectado",
      outcome:
        "WhatsApp que entende, agenda, orça e cobra — sempre conectado ao sistema central da operação.",
    },
  ] as Service[],
};
