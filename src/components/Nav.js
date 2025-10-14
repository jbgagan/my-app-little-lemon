function Nav () {
    return (
        <>
        <nav>
            <a href="home">
            <img src="./icons_assets/Logo.svg" alt="Logo" className="logo" />
            </a>
            <ul>
                <li>
                <a href="home">Home</a>
                </li>
                <li>
                     <a href="about">About</a>
                </li>
                <li>
                 <a href="munu">Menu</a>
                 </li>
                <li>
                     <a href="reservation">Reservation</a>
                     </li>
                <li>
                     <a href="order online">Order online</a>
                     </li>
                <li>
                     <a href="login">Login</a>
                </li>
            </ul>
        </nav>
        </>
    );
};
export default Nav;
