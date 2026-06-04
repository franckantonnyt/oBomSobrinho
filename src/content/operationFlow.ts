import type { LucideIcon } from "lucide-react";
import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  DollarSign,
  Globe,
  Mail,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

export type ChannelNode = {
  icon: LucideIcon;
  label: string;
  meta?: string;
};

export type DestinationNode = {
  icon: LucideIcon;
  label: string;
  meta?: string;
};

export type BenefitItem = {
  label: string;
};

export type SystemStep = {
  number: string;
  title: string;
  line: string;
};

export const operationFlow = {
  eyebrow: "Operação em fluxo",
  title: "Sua operação inteira, conversando entre si.",
  subtitle:
    "Atendimento, agenda, financeiro e equipe num fluxo só, sem retrabalho, sem dependência manual, sem setor isolado.",
  entryChannels: [
    { icon: MessageCircle, label: "WhatsApp", meta: "Atendimento" },
    { icon: Globe, label: "Site", meta: "Formulário" },
    { icon: Mail, label: "E-mail", meta: "Inbox" },
  ] as ChannelNode[],
  systemNode: {
    label: "Sistema OBS",
    sub: "Lógica central da operação",
  },
  destinations: [
    { icon: CalendarCheck, label: "Agenda", meta: "Slot reservado" },
    { icon: DollarSign, label: "Financeiro", meta: "Cobrança automática" },
    { icon: Users, label: "Equipe", meta: "Notificação interna" },
    { icon: Bell, label: "Notificação", meta: "Lembrete agendado" },
  ] as DestinationNode[],
  loopback: {
    label: "Confirmação automática",
    sub: "Cliente recebe lembrete · sem ninguém precisar lembrar",
  },
  // Os 5 passos que o sistema executa sozinho — narrativa de "o que ele faz",
  // não de "onde ele está". Demonstra capacidade em vez de só afirmar.
  stepsTitle: "O que o sistema faz sozinho, passo a passo",
  systemSteps: [
    {
      number: "01",
      title: "Recebe",
      line: "Mensagem, pedido ou formulário entra por qualquer canal: WhatsApp, site ou e-mail.",
    },
    {
      number: "02",
      title: "Entende",
      line: "Lê o que o cliente quer e classifica na hora, sem ninguém ler manualmente.",
    },
    {
      number: "03",
      title: "Organiza",
      line: "Joga cada coisa no lugar certo: agenda, financeiro, fila de atendimento.",
    },
    {
      number: "04",
      title: "Executa",
      line: "Confirma, agenda, cobra e responde sozinho, na hora, sem você lembrar.",
    },
    {
      number: "05",
      title: "Chama a equipe",
      line: "Quando precisa de gente, avisa a pessoa certa com o contexto pronto.",
    },
  ] as SystemStep[],
  benefits: [
    { label: "Reduz tarefas repetitivas" },
    { label: "Elimina gargalos operacionais" },
    { label: "Conecta setores que viviam isolados" },
    { label: "Acelera atendimento sem aumentar equipe" },
    { label: "Reduz dependência manual" },
    { label: "Organiza fluxo interno" },
  ] as BenefitItem[],
  systemIcon: Sparkles,
  successIcon: CheckCircle2,
};
