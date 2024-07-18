import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { Button } from "./Button"
import { useDarkMode } from "../../context/DarkModeContext"

function DarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <Button variant="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
    )
}

export default DarkMode