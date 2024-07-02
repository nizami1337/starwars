import { useEffect, useState } from "react";
import "./Vehicles.css"
import Header from "../Header/Header";

interface Vehicle {
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
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

const Vehicles = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    
    async function getVehicles() {
        let urlToFetch = !nextUrl ? "https://swapi.dev/api/vehicles/?format=json" : nextUrl
        const r = await fetch(urlToFetch)
        const json = await r.json();
        setNextUrl(json.next)
        setVehicles(vehicles.concat(json.results))
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <>
            <Header></Header>
            <div className="container">
                {vehicles.map(item => {
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
            <button className="loadMoreBtn" onClick={() => getVehicles()}>Load More</button>
        </>
    )
}

export default Vehicles