import axios from "axios";

// axios is an import: A Promise based HTTP client for the browser and node.js
// axios converts data into JSON unlike fetch which would require a .then((res) => res.json()) after api call to break it down

export const baseUrl = 'https://bayut.p.rapidapi.com'

// baseUrl is the where were getting the API data from

// async is going to accept the (url) which will be the information passed in when called 

//EXAMPLE:  const propertyForRent = await fetchApi(https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6); ---- The headers allows use for apikey



export const fetchApi = async (url) =>
{
    const {data} = await axios.get((url), {

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'a95fa6200amsh981981a3c49e130p1f8674jsn5a307a8c8c21'
        }

        // HTTP Headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. Headers carry information for: Request and Response Body. Request Authorization.


    })
    return data;
}

// We made the const { data } an object because we are passing the properties we want (propertyForSale, etc...) through when returning it

// we are getting data from axios.get(url) => url is data passed through the when fetchApi is called. Once the information is turned into a json and the header metadata is confirmed, we return the data specified when fetchapi is called.
