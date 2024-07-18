import styled from "styled-components";
import { useUser } from "../../../hooks/useUser";

const UserAvatarStyled = styled.div`
    display:flex;
    align-items:center;
    gap:12px;
    padding: .4rem .7rem;
    border-radius:12px;
    color: var(--color-grey-900);
`

const AvatarStyled = styled.img`
    display: block;
    width:2.5rem;
    height:2.5rem;
    object-fit:cover;
    object-position: center;
    border-radius:6px;
    outline:1px solid var(--color-grey-100);
    padding:.2rem;
`

function UserAvatar({ name = true }: { name?: boolean }) {
    const { user } = useUser()
    const { avatar, fullName } = user!.user_metadata
    return (
        <UserAvatarStyled>
            <AvatarStyled src={avatar || "logo.png"} alt={fullName} />
            {name && <span>{fullName}</span>}
        </UserAvatarStyled>
    )
}

export default UserAvatar