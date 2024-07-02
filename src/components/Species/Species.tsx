import { useEffect, useState } from "react";
import "./Species.css"
import Header from "../Header/Header";

interface Specy {
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: string,
    language: string,
    people: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
}

const Species = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [species, setSpecies] = useState<Specy[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
    async function getSpecies() {
        let urlToFetch = !nextUrl ? "https://swapi.dev/api/species/?format=json" : nextUrl
        const r = await fetch(urlToFetch)
        const json = await r.json();
        setNextUrl(json.next)
        setSpecies(species.concat(json.results))
    }

    useEffect(() => {
        getSpecies()
    }, [])

    return (
        <>
            <Header></Header>
            <div className="container">
                {species.map(item => {
                    return (
                        <div className="item" key={item.url.split('/')[-1]}>
                            <h2>{item.name}</h2>
                            <span className="item__field"><i>{item.classification}</i></span>
                            <span className="item__field">Designation: {item.designation}</span>
                            <span className="item__field">Language: {item.language}</span>
                        </div>
                    )
                })}
            </div>
            <button className="loadMoreBtn" onClick={() => getSpecies()}>Load More</button>
        </>
    )
}

export default Species