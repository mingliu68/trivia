const Header = (props) => {

    const { setSelectionMode, setGameMode, setDashboard } = props

    const handleClick = (e, type) => {
        setSelectionMode(false);
        setGameMode(false);
        if (type === "dashboard") {
            setDashboard(true);
        } else if (type === "logo") {
            setDashboard(false);
        }
    }

    return (
        <header className="header">
            <h1 onClick={e => handleClick(e, "logo")} style={{ cursor: "pointer" }}>TRIVIAAAAAAA!!!</h1>
            <div className="avatar" onClick={e => handleClick(e, "dashboard")}>M</div>
        </header>
    )
}

export default Header;