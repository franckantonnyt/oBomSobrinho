import type { LucideIcon } from "lucide-react";
import { Bot, Cog, Globe2, Workflow } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  outcome: string;
};

export const services = {
  eyebrow: "O que a gente faz",
  title: "Cada tarefa repetitiva da sua operação tem uma versão que roda sozinha.",
  subtitle:
    "De cardápio digital a sistema completo, tudo desenhado pro jeito que seu negócio funciona, não pro jeito que uma ferramenta pronta exige.",
  items: [
    {
      icon: Cog,
      title: "Sua operação inteira num lugar só",
      outcome:
        "Cardápio, agenda, painel, app do cliente: feito pro jeito que seu negócio funciona, não pro jeito que uma ferramenta pronta exige.",
    },
    {
      icon: Workflow,
      title: "Tarefas que você esquece, feitas sozinhas",
      outcome:
        "Lembrete, cobrança, relatório, confirmação. O que repete toda semana passa a acontecer sem ninguém precisar lembrar.",
    },
    {
      icon: Globe2,
      title: "Cliente entra e já cai na sua operação",
      outcome:
        "Site, loja, página de agendamento: o que o cliente faz online entra direto no seu fluxo, sem alguém copiando à mão.",
    },
    {
      icon: Bot,
      title: "WhatsApp que atende mesmo quando você fechou",
      outcome:
        "Entende, agenda, orça e cobra, e avisa a equipe quando precisa de gente. Ligado ao resto da operação, sempre.",
    },
  ] as Service[],
};
