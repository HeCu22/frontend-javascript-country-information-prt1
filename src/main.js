import axios from "axios";
import * as url from "url";

// async and await worden altijd samen gebruikt

async function getAllRestCountries() {
     console.log('Script is running');
    try {
        // Request naar een specifiek endpoint
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data[10].name);
    } catch (e) {     // catch vang automatisch eventuele error af
        console.error(e);
    }
}

getAllRestCountries()


