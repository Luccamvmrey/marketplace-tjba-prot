import {Briefcase, type LucideIcon, Mail, MessageCircle, Monitor, ScrollText, User, Zap} from "lucide-react";

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
        id: "pje-main",
        title: "PJe - 1º Grau",
        description: "Sistema oficial de tramitação de processos judiciais eletrônicos do CNJ.",
        url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjba-1g&redirect_uri=https%3A%2F%2Fpje.tjba.jus.br%2Fpje%2Flogin.seam&state=40dd6e4b-0894-4573-8742-909f43d7e9a5&login=true&scope=openid",
        category: "Processual",
        type: "web",
        icon: Monitor,
    },
    {
        id: "eproc-main",
        title: "Eproc",
        description: "Novo sistema de processo judicial eletrônico, focado em agilidade e usabilidade.",
        url: "https://www.tjba.jus.br/portaleproc/",
        category: "Processual",
        type: "web",
        icon: Zap,
    },
    {
        id: "projudi-main",
        title: "PROJUDI",
        description: "Sistema de Processo Judicial Digital utilizado nos Juizados Especiais.",
        url: "https://projudi.tjba.jus.br/projudi/",
        category: "Juizados",
        type: "web",
        icon: ScrollText,
    },

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