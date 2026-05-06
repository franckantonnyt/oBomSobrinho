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
};

export const authority = {
  line: "Cada operação tem seu jeito de funcionar",
  sub: "Cardápio do restaurante. Agenda da barbearia. Loja virtual da boutique. Painel do escritório. A gente constrói o que faz sentido pro seu caso.",
  // 12 exemplos cobrem segmentos diferentes — o loop do marquee fica
  // imperceptível e prova visualmente o claim do título.
  examples: [
    { name: "Cardápio digital", segment: "Restaurante", icon: UtensilsCrossed },
    { name: "Agenda automática", segment: "Barbearia", icon: Scissors },
    { name: "Loja virtual", segment: "Boutique", icon: ShoppingBag },
    { name: "Painel financeiro", segment: "Escritório", icon: BarChart3 },
    { name: "App de pedidos", segment: "Pizzaria", icon: Smartphone },
    { name: "Reservas online", segment: "Hotel", icon: BedDouble },
    { name: "Atendimento 24h", segment: "Clínica", icon: Stethoscope },
    { name: "Pré-cadastro", segment: "Imobiliária", icon: Home },
    { name: "CRM customizado", segment: "Consultoria", icon: Users },
    { name: "Bot de qualificação", segment: "Marketing", icon: Bot },
    { name: "Sistema de OS", segment: "Oficina", icon: Wrench },
    { name: "Portal do aluno", segment: "Escola", icon: GraduationCap },
  ] as ExampleItem[],
};
