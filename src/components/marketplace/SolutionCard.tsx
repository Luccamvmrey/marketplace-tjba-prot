import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { SolutionItem } from "@/config/solutions";
import { SolutionIcon } from "./card/SolutionIcon";
import { SolutionActions } from "./card/SolutionActions";

interface SolutionCardProps {
    solution: SolutionItem;
}

export function SolutionCard({ solution }: SolutionCardProps) {
    const isMobile = solution.type === 'mobile';

    return (
        <Card className="flex flex-col h-full border-t-4 border-t-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">

                        <SolutionIcon image={solution.image} icon={solution.icon} />

                        <div className="space-y-1">
                            <CardTitle className="text-lg font-bold text-slate-800 line-clamp-1">
                                {solution.title}
                            </CardTitle>
                            <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs font-normal bg-blue-50 text-blue-700 border-blue-200">
                                    {solution.category}
                                </Badge>
                                {isMobile && (
                                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-200">
                                        Android
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {solution.description}
                </CardDescription>

                {isMobile && (
                    <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground border-t pt-4">
                        <span>Versão: {solution.version}</span>
                        <span>Tamanho: {solution.size}</span>
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-2">
                {/* Componente de Ação (Botão/Modal) */}
                <SolutionActions solution={solution} />
            </CardFooter>
        </Card>
    );
}