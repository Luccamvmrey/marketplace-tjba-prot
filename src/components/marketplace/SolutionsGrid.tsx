import type {SolutionItem} from "@/config/solutions";
import {SolutionCard} from "./SolutionCard";
import {Button} from "@/components/ui/button";

interface SolutionsGridProps {
    solutions: SolutionItem[];
    searchQuery: string;
    onClearSearch: () => void;
}

export function SolutionsGrid({solutions, searchQuery, onClearSearch}: SolutionsGridProps) {
    if (solutions.length === 0) {
        return (
            <div className="text-center py-20 border border-dashed rounded-lg bg-muted/10">
                <p className="text-muted-foreground">
                    Nenhuma solução encontrada para "<span className="font-medium text-foreground">{searchQuery}</span>".
                </p>
                <Button
                    variant="link"
                    onClick={onClearSearch}
                    className="mt-2"
                >
                    Limpar filtros
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-muted-foreground">
                    Disponíveis <span className="text-foreground ml-1">({solutions.length})</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution) => (
                    <SolutionCard key={solution.id} solution={solution}/>
                ))}
            </div>
        </div>
    );
}