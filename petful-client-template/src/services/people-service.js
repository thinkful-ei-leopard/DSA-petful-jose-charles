import config from "../config"

const PeopleService = {
    getPeople() {
        return fetch(`${config.API_ENDPOINT}/people`)
        .then(res => res.json())
        //.then(res => console.log(res))
    },
    dequeuePeople() {
            return fetch(`${config.API_ENDPOINT}/people`, {
            method: "DELETE",
            })
    },

    addPeople(per) {
        return fetch(`${config.API_ENDPOINT}/people`, {
        method: "Post",
        headers:{
            "content-type": "application/jason"
        },
        body: JSON.stringify({
            person: per,
        })
        
        })
        
    }
    
}  



export default PeopleService;