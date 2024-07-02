import { useEffect, useState } from "react";
import "./Planets.css"
import Header from "../Header/Header";

interface Planet {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
}

const Planets = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
    async function getPlanets() {
        let urlToFetch = !nextUrl ? "https://swapi.dev/api/planets/?format=json" : nextUrl
        const r = await fetch(urlToFetch)
        const json = await r.json();
        setNextUrl(json.next)
        setPlanets(planets.concat(json.results))
    }

    useEffect(() => {
        getPlanets()
    }, [])

    return (
        <>
            <Header></Header>
            <div className="container">
                {planets.map(item => {
                    return (
                        <div className="item" key={item.url.split('/')[-1]}>
                            <h2>{item.name}</h2>
                            <span className="item__field">Diameter: {item.diameter}</span>
                            <span className="item__field">Population: {item.population}</span>
                            <span className="item__field">Climate: {item.climate}</span>
                        </div>
                    )
                })}
            </div>
            <button className="loadMoreBtn" onClick={() => getPlanets()}>Load More</button>
        </>
    )
}

export default Planets