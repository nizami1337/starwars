import { useEffect, useState } from "react";
import "./People.css"
import { findDOMNode } from "react-dom";

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

interface ModalProps {
    person: Person,
    isOpen: boolean
}

const PersonModal = ({person, isOpen} : ModalProps) => {
    
    if (!isOpen) return null

    // async function getPeople() {
    //     let urlToFetch = !nextUrl ? "https://swapi.dev/api/people/?format=json" : nextUrl
    //     const r = await fetch(urlToFetch)
    //     const json = await r.json();
    // }

    return (
        <>
            <div className="modalContainer">
                {person.name}
            </div>
        </>
    )
}

export default PersonModal