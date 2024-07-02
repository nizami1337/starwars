import { useEffect, useState } from "react";
import "./Starships.css"
import Header from "../Header/Header";

interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

const Starships = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
    async function getStarships() {
        let urlToFetch = !nextUrl ? "https://swapi.dev/api/starships/?format=json" : nextUrl
        const r = await fetch(urlToFetch)
        const json = await r.json();
        setNextUrl(json.next)
        setStarships(starships.concat(json.results))
    }

    useEffect(() => {
        getStarships()
    }, [])

    return (
        <>
            <Header></Header>
            <div className="container">
                {starships.map(item => {
                    return (
                        <div className="item" key={item.url.split('/')[-1]}>
                            <h2>{item.name}</h2>
                            <span className="item__field"><i>{item.model}</i></span>
                            <span className="item__field">Manufactured by {item.manufacturer}</span>
                            <span className="item__field">Cost: {item.cost_in_credits}</span>
                        </div>
                    )
                })}
            </div>
            <button className="loadMoreBtn" onClick={() => getStarships()}>Load More</button>
        </>
    )
}

export default Starships