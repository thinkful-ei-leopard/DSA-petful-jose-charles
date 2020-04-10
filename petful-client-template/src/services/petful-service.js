import config from "../config"

const PetfulService = {
    getPets() {
        return fetch(`${config.API_ENDPOINT}/pets`)
        .then(res => res.json())
    },
    removePet(type) {
        if(type === 0) {
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
}

export default PetfulService