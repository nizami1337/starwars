import React, { useEffect, useState } from "react";
import "./Movies.css"

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

    async function getMovies() {
        await fetch('https://swapi.dev/api/films').then(x => x.json()).then(x => setMovies(x.results))
    }

    // useEffect(() => {
    //     getMovies()
    // }, [])

    getMovies()
    console.log(movies)

    return (
        <div className="container">
            {movies.map(item => {
                return (
                    <div className="item">
                        <h2>{item}</h2>
                        <span className="item__field">Release Date: 1977-05-25</span>
                        <span className="item__field">Directed by: George Lucas</span>
                        <span className="item__field">Producer(s): Gary Kurtz, Rick McCallum</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Movies