import React, { useEffect, useState } from "react";
import "./Movies.css"
import Header from "../Header/Header";

interface Movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: string[],
    planets: string[],
    starships: string[],
    vehicles: string[],
    species: string[],
    created: string,
    edited: string,
    url: string
}

const Movies = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    let nexturl : any = ''
    async function getMovies() {
        const r = await fetch(!nexturl ? "https://swapi.dev/api/films/?format=json" : nexturl+"?format=json")
        const json = await r.json();
        nexturl = json.next
        console.log(nexturl)
        console.log(json.results)
        setMovies(json.results)
    }

    // useEffect(() => {
    //     getMovies()
    // }, [])
    getMovies()

    return (
        <>
        <Header></Header>
        <div className="container">
            {movies.map(item => {
                return (
                    <div className="item">
                        <h2>{item.title}</h2>
                        <span className="item__field">Release Date: {item.release_date}</span>
                        <span className="item__field">Directed by {item.director}</span>
                        <span className="item__field">Producer(s): {item.producer}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Movies