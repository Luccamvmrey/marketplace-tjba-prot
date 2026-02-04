import {
    type LucideIcon, Scale, FileText, Gavel, Search, MessageCircle, // Novo
    User,          // Novo
    Briefcase,     // Novo
    Mail
} from "lucide-react";

export type SolutionType = 'web' | 'mobile';

export interface SolutionItem {
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
    type: SolutionType;
    icon?: LucideIcon;
    image?: string;
    version?: string;
    size?: string;
}

export const solutionsList: SolutionItem[] = [
    {
        id: "1",
        title: "Consulta Processual Unificada",
        description: "Busca centralizada de processos em todas as instâncias do TJBA.",
        url: "#",
        category: "Processual",
        type: "web",
        icon: Search,
    },
    {
        id: "2",
        title: "PJe Helper",
        description: "Ferramenta auxiliar para automação de tarefas repetitivas no PJe.",
        url: "#",
        category: "Produtividade",
        type: "web",
        icon: Gavel,
    },
    {
        id: "4",
        title: "Jurisprudência TJBA",
        description: "Base de dados completa de acórdãos e decisões monocráticas.",
        url: "#",
        category: "Jurídico",
        type: "mobile",
        icon: Scale,
        version: "1.0.0",
        size: "84.3Mb",
    },
    {
        id: "3",
        title: "Diário da Justiça Eletrônico",
        description: "Acesso rápido às publicações e editais recentes.",
        url: "#",
        category: "Consultas",
        type: "web",
        icon: FileText,
    },
    {
        id: "5",
        title: "Queixa Cidadã",
        description: "Assistente virtual para registro de queixas e denúncias nos Juizados Especiais.",
        url: "#", // Aqui iria o link do APK
        category: "Atendimento",
        type: "mobile",
        icon: MessageCircle,
        version: "2.1.0",
        size: "35MB"
    },
    {
        id: "6",
        title: "TJBA Cidadão",
        description: "Acesso rápido a serviços essenciais, certidões e pautas de audiência.",
        url: "#",
        category: "Cidadania",
        type: "mobile",
        icon: User,
        version: "1.4.5",
        size: "42MB"
    },
    {
        id: "7",
        title: "TJBA Servidor",
        description: "Portal do servidor: contracheque, frequência e funcionalidades administrativas.",
        url: "#",
        category: "Administrativo",
        type: "mobile",
        icon: Briefcase,
        version: "3.0.2",
        size: "58MB"
    },
    {
        id: "8",
        title: "TJBA Intimações",
        description: "Recebimento e gestão de intimações e citações eletrônicas com segurança.",
        url: "#",
        category: "Processual",
        type: "mobile",
        icon: Mail,
        version: "1.0.8",
        size: "28MB"
    },
];