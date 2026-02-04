import { LayoutGrid } from "lucide-react";

function Header() {
    return (
        <div className="sticky top-0 z-50 flex flex-col w-full">
            {/* Faixa decorativa superior estilo Gov */}
            <div className="w-full h-1.5 bg-linear-to-r from-secondary via-primary to-secondary" />

            <header className="w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex h-20 items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center">
                            <img
                                src="/logo-tjba.png"
                                alt="Logo TJBA"
                                className="h-12 w-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <LayoutGrid className="h-10 w-10 text-primary hidden" />
                        </div>

                        <div className="h-10 w-px bg-border/60 mx-1" />

                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-xl leading-none tracking-tight text-foreground mb-1">
                                Marketplace
                            </span>
                            <span className="text-sm font-medium text-muted-foreground leading-none">
                                Tribunal de Justiça da Bahia
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Placeholder para itens futuros */}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;