import {ExternalLink, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import type {SolutionItem} from "@/config/solutions";
import {InstallGuideModal} from "../InstallGuideModal";

interface SolutionActionsProps {
    solution: SolutionItem;
}

export function SolutionActions({solution}: SolutionActionsProps) {
    const isMobile = solution.type === 'mobile';

    const ActionButton = (
        <Button
            className="w-full font-semibold shadow-sm cursor-pointer"
            variant="secondary"
        >
            {isMobile ? (
                <>
                    Baixar Aplicativo
                    <Smartphone className="ml-2 h-4 w-4"/>
                </>
            ) : (
                <>
                    Acessar Sistema
                    <ExternalLink className="ml-2 h-4 w-4"/>
                </>
            )}
        </Button>
    );

    if (isMobile) {
        return <InstallGuideModal solution={solution} trigger={ActionButton}/>;
    }

    return (
        <Button asChild className="w-full font-semibold shadow-sm" variant="secondary">
            <a href={solution.url} target="_blank" rel="noopener noreferrer">
                Acessar Sistema
                <ExternalLink className="ml-2 h-4 w-4"/>
            </a>
        </Button>
    );
}