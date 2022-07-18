const Header = (props) => {

    const { handleAvatarClick, setSelectionMode, setGameMode, setDashboard } = props

    const handleLogoClick = e => {
        setSelectionMode(false);
        setGameMode(false);
        setDashboard(false);
    }

    return (
        <header className="header">
            <h1 onClick={handleLogoClick} style={{ cursor: "pointer" }}>TRIVIAAAAAAA!!!</h1>
            <div className="avatar" onClick={handleAvatarClick}>M</div>
        </header>
    )
}

export default Header;