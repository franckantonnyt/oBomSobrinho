import {
  BarChart3,
  BedDouble,
  Bot,
  GraduationCap,
  Home,
  Scissors,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  UtensilsCrossed,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExampleItem = {
  name: string;
  segment: string;
  icon: LucideIcon;
  // Resultado operacional concreto — o que muda na rotina do negócio.
  result: string;
};

export const authority = {
  line: "Cada operação tem seu jeito de funcionar",
  sub: "Cardápio do restaurante. Agenda da barbearia. Loja virtual da boutique. Painel do escritório. A gente constrói o que faz sentido pro seu caso.",
  // 12 exemplos cobrem segmentos diferentes — o loop do marquee fica
  // imperceptível e prova visualmente o claim do título.
  examples: [
    { name: "Cardápio digital", segment: "Restaurante", icon: UtensilsCrossed, result: "pedido cai direto na cozinha" },
    { name: "Agenda automática", segment: "Barbearia", icon: Scissors, result: "zero horário vago por esquecimento" },
    { name: "Loja virtual", segment: "Boutique", icon: ShoppingBag, result: "vende fora do horário" },
    { name: "Painel financeiro", segment: "Escritório", icon: BarChart3, result: "fim da planilha na mão" },
    { name: "App de pedidos", segment: "Pizzaria", icon: Smartphone, result: "pedido sem ligação" },
    { name: "Reservas online", segment: "Hotel", icon: BedDouble, result: "reserva confirmada sozinha" },
    { name: "Atendimento 24h", segment: "Clínica", icon: Stethoscope, result: "responde de madrugada" },
    { name: "Pré-cadastro", segment: "Imobiliária", icon: Home, result: "lead chega qualificado" },
    { name: "CRM customizado", segment: "Consultoria", icon: Users, result: "nenhum contato perdido" },
    { name: "Bot de qualificação", segment: "Marketing", icon: Bot, result: "só lead bom chega na equipe" },
    { name: "Sistema de OS", segment: "Oficina", icon: Wrench, result: "ordem aberta em segundos" },
    { name: "Portal do aluno", segment: "Escola", icon: GraduationCap, result: "secretaria desafogada" },
  ] as ExampleItem[],
};
