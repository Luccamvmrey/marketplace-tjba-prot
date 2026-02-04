import {useMemo, useState} from "react";
import {solutionsList, type SolutionType} from "@/config/solutions";

export type FilterType = 'all' | SolutionType;

export function useSolutions() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredSolutions = useMemo(() => {
        let result = solutionsList;

        if (activeFilter !== 'all') {
            result = result.filter((app) => app.type === activeFilter);
        }

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(
                (app) =>
                    app.title.toLowerCase().includes(lowerQuery) ||
                    app.description.toLowerCase().includes(lowerQuery) ||
                    app.category.toLowerCase().includes(lowerQuery)
            );
        }

        return result;
    }, [searchQuery, activeFilter]);

    const clearFilters = () => {
        setSearchQuery("");
        setActiveFilter("all");
    };

    return {
        searchQuery,
        setSearchQuery,
        activeFilter,
        setActiveFilter,
        filteredSolutions,
        clearFilters
    };
}