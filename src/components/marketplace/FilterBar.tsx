import {Globe, LayoutGrid, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import type {FilterType} from "@/hooks/useSolutions";

interface FilterBarProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <FilterButton
                isActive={activeFilter === 'all'}
                onClick={() => onFilterChange('all')}
                icon={LayoutGrid}
                label="Todos"
            />
            <FilterButton
                isActive={activeFilter === 'web'}
                onClick={() => onFilterChange('web')}
                icon={Globe}
                label="Sistemas Web"
            />
            <FilterButton
                isActive={activeFilter === 'mobile'}
                onClick={() => onFilterChange('mobile')}
                icon={Smartphone}
                label="Apps Android"
            />
        </div>
    );
}

function FilterButton({ isActive, onClick, icon: Icon, label }: any) {
    return (
        <Button
            variant={isActive ? "default" : "outline"}
            onClick={onClick}
            className="rounded-full px-6 h-9 transition-all"
        >
            <Icon className="mr-2 h-4 w-4" />
            {label}
        </Button>
    );
}