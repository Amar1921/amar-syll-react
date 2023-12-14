import axios from "axios";

export const changeStyleOnCopie = (id) => {
    let style = document.getElementById(id)
    setTimeout(() => {
        style.style.background = "inherit"
    }, 500)
    style.style.background = "green"
}


async function getData(URL, methode = 'get', data = null) {
    let response;
    let configuration = {
        method: methode,
        url: URL,
        headers: {
            'Access-Control-Request-Headers': 'application/json',
            'Accept-Encoding': 'multipart/encrypted'
        },
        data: data
    };
    try {
        response = await axios.request(configuration);
    } catch (error) {
        console.log(error);
    }

    return response
}


export default getData


