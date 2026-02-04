import type {LucideIcon} from "lucide-react";

interface SolutionIconProps {
    image?: string;
    icon?: LucideIcon;
}

export function SolutionIcon({image, icon: Icon}: SolutionIconProps) {
    return (
        <div
            className="p-3 bg-secondary rounded-lg text-white shadow-sm group-hover:bg-primary transition-colors flex items-center justify-center h-12 w-12 shrink-0 overflow-hidden">
            {image ? (
                <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain"
                />
            ) : Icon ? (
                <Icon className="h-6 w-6"/>
            ) : null}
        </div>
    );
}