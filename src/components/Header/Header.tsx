import "./Header.css"

const Header = () => {

    return (
        <nav>
            <img src="/src/assets/logo.png"/>
            <ul className="nav__links">
                <li className="nav__link"><a href="/movies">Movies</a></li>
                <li className="nav__link"><a href="/people">People</a></li>
                <li className="nav__link"><a href="/planets">Planets</a></li>
                <li className="nav__link"><a href="/species">Species</a></li>
                <li className="nav__link"><a href="/starships">Starships</a></li>
                <li className="nav__link"><a href="/vehicles">Vehicles</a></li>
                {/* <li className="nav__link"><Link to={'/movies'}>Movies</Link></li>
                <li className="nav__link"><Link to={"/people"}>People</Link></li>
                <li className="nav__link"><Link to={"/planets"}>Planets</Link></li>
                <li className="nav__link"><Link to={"/species"}>Species</Link></li>
                <li className="nav__link"><Link to={"/starships"}>Starships</Link></li>
                <li className="nav__link"><Link to={"/vehicles"}>Vehicles</Link></li> */}
            </ul>
        </nav>
    )
}

export default Header