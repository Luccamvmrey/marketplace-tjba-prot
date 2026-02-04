import Header from "@/components/marketplace/Header";
import {SearchHero} from "@/components/marketplace/SearchHero";
import {SolutionsGrid} from "@/components/marketplace/SolutionsGrid";
import {FilterBar} from "@/components/marketplace/FilterBar";
import {useSolutions} from "@/hooks/useSolutions";

function App() {
    const {
        searchQuery,
        setSearchQuery,
        activeFilter,
        setActiveFilter,
        filteredSolutions,
        clearFilters
    } = useSolutions();

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header/>

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
                <SearchHero
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                <FilterBar
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <SolutionsGrid
                    solutions={filteredSolutions}
                    searchQuery={searchQuery}
                    onClearSearch={clearFilters}
                />
            </main>
        </div>
    );
}

export default App;