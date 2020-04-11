import config from "../config"

const PetfulService = {
    getPets() {
        return fetch(`${config.API_ENDPOINT}/pets`)
        .then(res => res.json())
    },
    removePet(type) {
        if(type === 'dog') {
            type = 'dogs'
        } else {
            type = 'cats'
        }
        return fetch(`${config.API_ENDPOINT}/pets`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                type: type,
            })
        })
    },
    getDogs() {
        return fetch(`${config.API_ENDPOINT}/pets/dogs`)
        .then(res => res.json())
    },
    getCats() {
        return fetch(`${config.API_ENDPOINT}/pets/cats`)
        .then(res => res.json())
    },
}

export default PetfulService