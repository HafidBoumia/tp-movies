import { Link } from "react-router-dom";

export default function Home({ movies, filterMovies, search }) {

    return (
        <div className="relative w-full">
            <img src="pic.jpg" className="h-100 object-cover" />
            <div class="relative bg-black bg-opacity-50 min-h-screen p-4">
                <div class="container mx-auto flex flex-wrap justify-center gap-4">
                    {!search ? (
                        movies.slice(-3).map((movie, index) => (
                            <Link
                                to={`/Details/${movie.imdbID}`}
                                className="text-white text-center flex flex-col items-center hover:mb-4 hover:cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                                key={index}
                            >
                                <img src={movie.Poster} className="w-full h-60 object-cover mb-2" alt={movie.Title} />
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold">{movie.Title}</h2>
                                    <span className="mt-1 text-sm">{movie.Year}</span>
                                    <span className="mt-1 text-sm">{movie.Type}</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        movies
                            .filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase()))
                            .map((movie, index) => (
                                <Link
                                    to={`/Details/${movie.imdbID}`}
                                    className="text-white text-center flex flex-col items-center hover:mb-4 hover:cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                                    key={index}
                                >
                                    <img src={movie.Poster} className="w-full h-60 object-cover mb-2" alt={movie.Title} />
                                    <div className="flex flex-col">
                                        <h2 className="text-lg font-bold">{movie.Title}</h2>
                                        <span className="mt-1 text-sm">{movie.Year}</span>
                                        <span className="mt-1 text-sm">{movie.Type}</span>
                                    </div>
                                </Link>
                            ))
                    )}
                </div>
            </div>

        </div>
    )
}