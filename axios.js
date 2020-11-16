import axios from "axios";

/* Its a base URL to make requests to the movie database */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


// instance.get('/foo-bar'); this appends foo-bar on instance.

export default instance;