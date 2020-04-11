import React from 'react'
import PetfulService from '../../../services/petful-service'
import petfulContext from '../../../context/petful-context'

export default class Pets extends React.Component {
    static contextType = petfulContext

    componentDidMount() {
    PetfulService.getPets()
    .then(pets => {
        this.context.addTouchedKeyToPets(pets)
        this.context.setPets(pets)
    })
    }

    getType = (key) => {
        // this.context.findPetByIdAndToggleTouched(key)

        PetfulService.removePet(key)
        .then(() => {
            // PetfulService.getPets()
            // .then(pets => this.context.setPets(pets))
            this.context.setResponse()
        })
    }

    nextPets = () => {
        PetfulService.getPets()
        .then(pets => this.context.setPets(pets))
    }

    // add next button to re - render pets

    render() {
        // let pets = this.context.pets
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
            {this.context.response && <p>A pet has been adopted!</p>}
            {this.context.response === true ? <button onClick={this.nextPets}>Next Pets!</button> : 
            <button onClick={() => this.getType(index)}> Adopt Me!</button>}
            </li>)}
            </>
        )
    }
}