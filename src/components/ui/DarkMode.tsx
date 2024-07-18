import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { Button } from "./Button"
import { DarkModeContextType, useDarkMode } from "../../context/DarkModeContext"

function DarkMode() {
    const { isDarkMode, toggleDarkMode }: DarkModeContextType = useDarkMode()
    return (
        <Button variant="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
    )
}

export default DarkMode