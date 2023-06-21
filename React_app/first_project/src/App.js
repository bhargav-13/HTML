import { useEffect } from "react";

//API key:  b41222e3          (temporory)

const API_URL = 'http://www.omdbapi.com?apikey=b41222e3';


const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('inception');
    }, [])

    return (
        <h1>hello</h1>
    );
}

export default App;
