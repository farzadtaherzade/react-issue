import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | null>(null)

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(getDarkModeLocalstorage(false, "dark-mode"))

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    useEffect(() => {
        localStorage.setItem("dark-mode", JSON.stringify(isDarkMode))
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")
        } else {
            document.documentElement.classList.add("light-mode")
            document.documentElement.classList.remove("dark-mode")
        }
    }, [isDarkMode]);

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error("dark mode contetx was used out of dark mode provider");
    return context!;
};


const getDarkModeLocalstorage = (initValue: unknown, key: string): boolean => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initValue;
}


