import axios from 'axios';
const WIKI_BASE_URL = 'https://prices.runescape.wiki/api/v1/osrs/';

export const wikiLatest = async () => {
    // Returns most current high/low prices information.
    // high/lowTime = unix time last trade occurred at.
    // HIGH = High insta-buy price.
    // LOW = Low insta-sell price.
    await axios.get(`${WIKI_BASE_URL}latest`)
    .then(response => {
        return response.data["data"];
    })
    .catch(error => {
        console.error('Error fetching from OSRS Wiki:' + error);
    })
}
    
export const wikiLatestId = async (id) => {
    // Returns most current high/low prices for a specific ID.
    // high/lowTime = unix time last trade occurred at.
    // HIGH = High insta-buy price.
    // LOW = Low insta-sell price.
    return axios.get(`${WIKI_BASE_URL}latest?id=${id}`)
    .then(response => {
        return response.data["data"][id];
    })
    .catch(error => {
        console.error('Error fetching from OSRS Wiki:' + error);
    })
}

export const wiki5Minute = async () => {
    // Returns 5 minute average of item high and low prices, as well as volume traded.
    return axios.get(`${WIKI_BASE_URL}/5m`)
    .then(response => {
        return response.data["data"];
    })
    .catch(error => {
        console.error('Error fetching from OSRS Wiki:' + error);
    })
}

export const wiki10Minute = async () => {
    // Returns 10 minute average of item high and low prices, as well as volume traded.
    return axios.get(`${WIKI_BASE_URL}/10m`)
    .then(response => {
        return response.data["data"];
    })
    .catch(error => {
        console.error('Error fetching from OSRS Wiki:' + error);
    })
}


export const grabItemVolume = async (id) => {
    return axios.get(`http://localhost:5000/api/item/${id}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching volume traded data: ' + error);
    })
}