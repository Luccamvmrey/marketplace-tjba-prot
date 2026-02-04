import {Briefcase, type LucideIcon, Mail, MessageCircle, User} from "lucide-react";

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
        id: "2",
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
        id: "3",
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
        id: "4",
        title: "TJBA Intimações",
        description: "Recebimento e gestão de intimações e citações eletrônicas com segurança.",
        url: "#",
        category: "Processual",
        type: "mobile",
        icon: Mail,
        version: "1.0.8",
        size: "28MB"
    },
    {
        id: "5",
        title: "TJzEla",
        description: "Cadastro de medidas protetivas de urgência",
        url: "#",
        category: "Cidadania",
        type: "mobile",
        image: "/icons/TJZELA.png",
    }
];