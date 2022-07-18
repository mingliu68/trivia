const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="footer">
            <span className="copyright">&copy;</span>
            <span style={{ paddingRight: "5px" }}>{year} Ming Liu  </span>
            <span className="diamond">&diams;</span>
            <span style={{ padding: "5px" }}>
                <a href="https://mingliudev.com" target="_blank" rel="nofollow noopener" style={{ color: "white", textDecoration: "none" }}>
                    mingliudev.com
                </a>
            </span>
            <span className="diamond">&diams;</span>
            <span style={{ paddingLeft: "5px" }}>  mingliudev</span>
            <span style={{ padding: "3px" }}>@</span>
            {/* <span className="at">@</span> */}
            <span style={{ paddingRight: "5px" }}>gmail.com  </span>
            <span className="diamond">&diams;</span>

            <span style={{ paddingLeft: "5px", paddingRight: "8px" }}> Built in NY with </span>
            <span className="heart">♥</span>
            <span style={{ paddingLeft: "8px" }}> and React</span>
        </div>

    )
}


export default Footer;