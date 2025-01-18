import { useEffect, useState } from "react";
const KEY = "3ad6d6f9";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        function () {
            //only call if its exists
            // callback?.();

          const controller = new AbortController();
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
                { signal: controller.signal }
              );
              if (!res.ok)
                throw new Error("Something Went Wrong while fetching the Movies!");
    
              const data = await res.json();
              if (data.Response === "False") throw new Error("Movie not found...!");
    
              setMovies(data.Search);
              setError("");
            } catch (err) {
              if (err.name !== "AbortError") setError(err.message);
              console.error(err.message);
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
    
          // handleCloseMovie();  used callback function for this
          fetchMovies();
    
          // Clean up function to abort fetch request-------------
          return function () {
            controller.abort();
          };
        },
        [query]
      );
    return {movies, isLoading, error}
}