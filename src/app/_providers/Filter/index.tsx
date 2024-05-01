'use client' //bc we'll be using a lot of states

import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

// An interface is a type checker
interface IContextType {
    categoryFilters: string[]
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<SetStateAction<string>>
}

// Keep track of all the currently selected category filter and sorting options
export const INITIAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: () => [], //returns an array
    sort: '',
    setSort: () => '', //returns a string
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({children}: {children: ReactNode}) => {
    const [categoryFilters, setCategoryFilters] = useState([]); // useState(default_value)
    const [sort, setSort] = useState('-createdAt'); // this means it'll show the newest products first. "-" means descending.

    return (
        // "If any component asks for these filters, give them these category and sorting values."
        <FilterContext.Provider value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

// Defines a custom React hook named useFilter.
// Allows components to easily access the filter context that was created using 'createContext' and provided by 'FitlerProvider'.
// The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
// Returns the context value AKA value passed to the closest FilterContext.Provider 
export const useFilter = () => useContext(FilterContext)