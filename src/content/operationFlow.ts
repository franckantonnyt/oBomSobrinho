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

export const operationFlow = {
  eyebrow: "Operação em fluxo",
  title: "Sua operação inteira, conversando entre si.",
  subtitle:
    "Atendimento, agenda, financeiro e equipe num fluxo só — sem retrabalho, sem dependência manual, sem setor isolado.",
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
