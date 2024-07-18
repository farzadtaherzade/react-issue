import { BiExit } from "react-icons/bi"
import { Button } from "../../ui/Button"
import { useLogout } from "../../../hooks/useLogout"
import MiniLoader from "../../ui/MiniLoader"

function Logout() {
    const { mutate, isLoading } = useLogout()

    return (
        <Button variant="icon" onClick={() => mutate()} disabled={isLoading}>
            {isLoading ? <MiniLoader /> : <BiExit />}
        </Button>
    )
}

export default Logout