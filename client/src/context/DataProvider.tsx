import { createContext, useState } from "react";
import { VIEWS } from '../constants/index';

interface DataProviderProps {
    children: React.ReactNode;
}

interface DataContextValue {
    view: string;
    setView: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataContextValue | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
    const [view, setView] = useState(VIEWS.inbox);

    return (
        <DataContext.Provider value={{ view, setView }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
