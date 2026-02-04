import {AlertTriangle, FileDown, ShieldCheck, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import type {SolutionItem} from "@/config/solutions";
import * as React from "react";

interface InstallGuideModalProps {
    solution: SolutionItem;
    trigger: React.ReactNode; // O botão que abre o modal
}

export function InstallGuideModal({solution, trigger}: InstallGuideModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-150">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <Smartphone className="h-5 w-5 text-primary"/>
                        Instalação do {solution.title}
                    </DialogTitle>
                    <DialogDescription>
                        Como este é um aplicativo interno, você precisará autorizar a instalação manualmente.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* Passo 1 */}
                    <div className="flex gap-4 items-start">
                        <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold border border-blue-200">
                            1
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium leading-none">Baixe o Arquivo</h4>
                            <p className="text-sm text-muted-foreground">
                                Clique no botão de download abaixo. O arquivo
                                <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded mx-1">.apk</span>
                                será salvo no seu dispositivo.
                            </p>
                        </div>
                    </div>

                    {/* Passo 2 */}
                    <div className="flex gap-4 items-start">
                        <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold border border-amber-200">
                            2
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium leading-none">Permitir Fonte Desconhecida</h4>
                            <p className="text-sm text-muted-foreground">
                                Ao abrir o arquivo, o Android pode bloquear a instalação. Clique em
                                <strong> Configurações</strong> e ative <strong>"Permitir desta fonte"</strong>.
                            </p>
                            <div
                                className="mt-2 flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded border border-amber-100">
                                <AlertTriangle className="h-4 w-4"/>
                                <span>Isso é normal para apps corporativos fora da Play Store.</span>
                            </div>
                        </div>
                    </div>

                    {/* Passo 3 */}
                    <div className="flex gap-4 items-start">
                        <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold border border-green-200">
                            3
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium leading-none">Concluir Instalação</h4>
                            <p className="text-sm text-muted-foreground">
                                Volte e clique em <strong>Instalar</strong>. O app estará pronto para uso.
                            </p>
                        </div>
                    </div>
                </div>

                <DialogFooter className="sm:justify-between items-center border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-green-600"/>
                        Aplicativo verificado pelo TJBA
                    </div>
                    <Button className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90" asChild>
                        <a href={solution.url} download>
                            <FileDown className="mr-2 h-4 w-4"/>
                            Baixar APK {solution.version && `(v${solution.version})`}
                        </a>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}