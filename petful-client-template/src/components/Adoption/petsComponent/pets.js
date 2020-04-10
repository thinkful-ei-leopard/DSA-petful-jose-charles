import React from 'react'
import PetfulService from '../../../services/petful-service'
import petfulContext from '../../../context/petful-context'

export default class Pets extends React.Component {
    static contextType = petfulContext

    componentDidMount() {

    PetfulService.getPets()
    .then(pets => this.context.setPets(pets))
    }

    getType = (key) => {
        PetfulService.removePet(key)
        .then(res => res.ok ? this.context.setResponse() : Promise.reject(res))
        .then(() => {
            PetfulService.getPets()
            .then(pets => this.context.setPets(pets))
        })
    }

    render() {
        console.log(this.context.state)
        return (
            <>
            {this.context.pets.map((item, index) => 
            <li key={index}>
            <h3>{item.name}</h3>
            <img src={item.imageURL} alt='pet' />
            <p>{item.description}</p>
            <p>Pet's story: {item.story}</p>
            <div>
            <span>Breed: {item.breed} |</span>
            {' '}
            <span>Gender: {item.gender} |</span>
            {' '}
            <span>Age: {item.age}</span>
            </div>
            <button onClick={() => this.getType(index)}> Adopt Me!</button>
            </li>)}
            </>
        )
    }
}