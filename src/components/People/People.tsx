import { useEffect, useState } from "react";
import "./People.css"
import Header from "../Header/Header";

interface Person {
    birth_year: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: string[],
    starships: string[]
    url: string,
    vehicles: string[]
}

const People = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [people, setPeople] = useState<Person[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
    async function getPeople() {
        let urlToFetch = !nextUrl ? "https://swapi.dev/api/people/?format=json" : nextUrl
        const r = await fetch(urlToFetch)
        const json = await r.json();
        setNextUrl(json.next)
        setPeople(people.concat(json.results))
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <>
            <Header></Header>
            <div className="container">
                {people.map(item => {
                    return (
                        <div className="item" key={item.url.split('/')[-1]}>
                            <h2>{item.name}</h2>
                            <span className="item__field">Gender: {item.gender}</span>
                            <span className="item__field">Born in {item.birth_year}</span>
                            <span className="item__field">Height: {item.height}</span>
                        </div>
                    )
                })}
            </div>
            <button className="loadMoreBtn" onClick={() => getPeople()}>Load More</button>
        </>
    )
}

export default People