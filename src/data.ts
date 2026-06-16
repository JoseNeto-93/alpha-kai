import { Differential, StructureSlide, Testimonial, Plan, CounterItem } from "./types";
import ap1 from "./imagens/ap1.png";
import ap2 from "./imagens/ap2.png";
import ap3 from "./imagens/ap3.png";
import ap4 from "./imagens/ap4.png";
import ap5 from "./imagens/ap5.png";
import ap6 from "./imagens/ap6.png";
import ap7 from "./imagens/ap7.png";
import ap8 from "./imagens/ap8.png";
import ap9 from "./imagens/ap9.png";
import ap10 from "./imagens/ap10.png";

// Generated image assets
export const IMAGES = {
  heroBg: "/src/assets/images/alpha_kai_hero_1781630629071.jpg",
  aboutBg: ap10,
  cardioBg: "/src/assets/images/alpha_kai_cardio_1781630660540.jpg",
  // Standard placeholder fallbacks with rich dark fitness themes
  functionalBg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  stretchingBg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  premiumEquipBg: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
};

export const DIFFERENTIALS: Differential[] = [
  {
    id: "diff_1",
    iconName: "Dumbbell",
    title: "Equipamentos Modernos",
    description: "Biomecânica perfeita com máquinas importadas de última geração que otimizam a contração muscular e garantem segurança máxima."
  },
  {
    id: "diff_2",
    iconName: "GraduationCap",
    title: "Profissionais Qualificados",
    description: "Mentores especializados em fisiologia, cinesiologia de alta performance, prontos para elaborar o plano perfeito para o seu biotipo."
  },
  {
    id: "diff_3",
    iconName: "Clock",
    title: "Academia 24 Horas",
    description: "Treine no seu ritmo, quando quiser. Aberta ininterruptamente de domingo a domingo para se encaixar à sua rotina sem desculpas."
  },
  {
    id: "diff_4",
    iconName: "Smartphone",
    title: "Aceita Gympass",
    description: "Facilidade de acesso para que você continue focado mesmo se estiver em trânsito. Check-in simples via aplicativo (e TotalPass)."
  },
  {
    id: "diff_5",
    iconName: "Target",
    title: "Atendimento Personalizado",
    description: "Acompanhamento detalhado em cada treino, com ajustes posturais finos e planejamento adaptativo rumo ao seu verdadeiro potencial."
  },
  {
    id: "diff_6",
    iconName: "Flame",
    title: "Ambiente Motivador",
    description: "Estética refinada com iluminação de palco, playlists estimulantes de alta fidelidade e energia contagiante focada em disciplina."
  }
];

export const STRUCTURE_SLIDES: StructureSlide[] = [
  {
    id: "struct_1",
    title: "Área de Musculação",
    description: "Carga livre extrema e aparelhos com guias de precisão para estimular a hipertrofia perfeita em cada ângulo muscular.",
    imageUrl: ap1
  },
  {
    id: "struct_2",
    title: "Cardio de Alta Performance",
    description: "Esteiras digitais integradas com simulação de percursos reais e monitores cardíacos avançados para maximizar seu gasto calórico.",
    imageUrl: ap2
  },
  {
    id: "struct_3",
    title: "Espaço Funcional Dinâmico",
    description: "Gramado sintético, kettlebells, cordas navais e acessórios olímpicos para o desenvolvimento total de agilidade, força e potência.",
    imageUrl: ap3
  },
  {
    id: "struct_4",
    title: "Área de Alongamento e Conectividade",
    description: "Zonas calmas com tatames de alta densidade e espelhos amplos para alongamento assistido ou reestabelecimento neuromuscular pós-treino.",
    imageUrl: ap4
  },
  {
    id: "struct_5",
    title: "Equipamentos Premium Selecionados",
    description: "Acessórios importados de alto padrão cuidadosamente calibrados para atletas e amadores exigentes.",
    imageUrl: ap5
  },
  {
    id: "struct_6",
    title: "Estação de Força Avançada",
    description: "Ilhas de treino com cargas e acessórios para treino de força específico.",
    imageUrl: ap6
  },
  {
    id: "struct_7",
    title: "Zona Funcional",
    description: "Área aberta para circuitos funcionais, treino de mobilidade e trabalho de potência.",
    imageUrl: ap7
  },
  {
    id: "struct_9",
    title: "Cardio e Recuperação",
    description: "Equipamentos de cardio modernos e áreas para recuperação ativa.",
    imageUrl: ap9
  },
  {
    id: "struct_10",
    title: "Espaços Complementares",
    description: "Áreas de alongamento, vestiários premium e suporte ao aluno.",
    imageUrl: ap10
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test_1",
    name: "Leonardo Rodrigues",
    comment: "Academia sensacional! Extremamente bem equipada, moderna e com excelente atendimento. Os profissionais estão sempre dispostos a orientar e motivar a gente.",
    rating: 5,
    role: "Aluno há 1 ano",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test_2",
    name: "Mariana Costa",
    comment: "O ambiente da Alpha Kai é outra coisa! As luzes, as máquinas impecáveis, parece que estou numa academia de primeiro mundo. Ótimas máquinas e equipe nota mil.",
    rating: 5,
    role: "Atleta de Cross Training",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test_3",
    name: "Gustavo Mendes",
    comment: "Mensalidade super acessível pelo nível do serviço prestado. Ter o app liberado e poder treinar 24h foi o diferencial para eu manter a disciplina diária. Recomendo de olhos fechados!",
    rating: 5,
    role: "Empresário",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export const PLANS: Plan[] = [
  {
    id: "plan_1",
    name: "Plano Starter",
    price: "99",
    period: "mês",
    tagline: "O ponto de partida para sua jornada de força.",
    features: [
      "Acesso ilimitado à academia",
      "Equipamentos importados modernos",
      "Disponibilidade 24 horas por dia",
      "Estacionamento gratuito para alunos",
      "Vestiário premium climatizado"
    ],
    isHighlighted: false
  },
  {
    id: "plan_2",
    name: "Plano Evolution",
    price: "139",
    period: "mês",
    tagline: "A escolha perfeita para quem quer acelerar a evolução.",
    features: [
      "Tudo incluído no Plano Starter",
      "Avaliação física de bioimpedância periódica",
      "Treinos personalizados no aplicativo oficial",
      "Acesso a aulas coletivas exclusivas",
      "Suporte prioritário de professores na pista"
    ],
    isHighlighted: true
  },
  {
    id: "plan_3",
    name: "Plano Alpha",
    price: "199",
    period: "mês",
    tagline: "O auge da performance com acompanhamento de elite.",
    features: [
      "Tudo incluído no Plano Evolution",
      "Acompanhamento e consultoria personalizada",
      "Prioridade em workshops de treinamento e nutrição",
      "Direito a trazer 1 convidado por semana (Free Pass)",
      "Análise de progresso quinzenal avançada",
      "Kit ALPHA KAI de boas-vindas exclusivo"
    ],
    isHighlighted: false
  }
];

export const COUNTERS: CounterItem[] = [
  { id: "cnt_1", target: 250, suffix: "+", label: "Avaliações no Google" },
  { id: "cnt_2", target: 24, suffix: "h", label: "Funcionamento" },
  { id: "cnt_3", target: 4.8, prefix: "★ ", label: "Nota Máxima" },
  { id: "cnt_4", target: 100, suffix: "%", label: "Foco em Resultados" }
];
