import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface SideBarContextType {
    isOpen: boolean;
    width?: number;
    toggleSideBar: () => void;
}

const SideBarContext = createContext<SideBarContextType | null>(null)

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    console.log(isOpen)
    const toggleSideBar = () => setIsOpen(!isOpen)

    useEffect(() => {
        if (width >= 768) setIsOpen(false)
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width]);

    return (
        <SideBarContext.Provider value={{ isOpen, toggleSideBar, width }}>
            {children}
        </SideBarContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSideBar = (): SideBarContextType => {
    const context = useContext(SideBarContext)
    if (context === undefined) throw new Error("sidebar context error")
    return context!
}