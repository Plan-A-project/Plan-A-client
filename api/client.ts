import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL,
  withCredentials: true,
});

// Intercept any response
client.interceptors.response.use(
  response => {
    // If the response is good, simply return it
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // Optionally, inform the user with a toast or some notification mechanism
      // e.g., toast("Your session has expired. Please log in again.");
    }

    // If it's another kind of error, you might want to do other stuff, or simply reject the promise.
    return Promise.reject(error);
  },
);

export default client;
