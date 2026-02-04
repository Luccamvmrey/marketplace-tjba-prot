import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchHeroProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchHero({ value, onChange }: SearchHeroProps) {
    return (
        <section className="relative overflow-hidden rounded-xl bg-linear-to-r from-secondary to-[#2c5282] text-white p-8 md:p-12 shadow-lg mt-8">

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                        Catálogo de Soluções
                    </h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Encontre aplicativos, sistemas e ferramentas internas do TJBA.
                    </p>
                </div>

                <div className="w-full max-w-xl relative flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="O que você procura?"
                            className="pl-10 h-14 text-lg bg-white text-foreground border-0 shadow-inner focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </div>
                    <button className="h-14 px-8 bg-destructive hover:bg-destructive/90 text-white font-bold rounded-md shadow-md transition-colors hidden sm:block cursor-pointer">
                        BUSCAR
                    </button>
                </div>
            </div>
        </section>
    );
}