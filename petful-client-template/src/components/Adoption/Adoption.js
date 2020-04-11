import React from 'react';
import Pets from './petsComponent/pets'
import petfulContext from '../../context/petful-context'
import PetfulService from '../../services/petful-service'
import './adoption.css'

class Adoption extends React.Component{
    static contextType = petfulContext

    componentDidMount() {
        this.context.clearResponse()
    }

    nextPets = () => {
        this.context.clearResponse()

        PetfulService.getPets()
        .then(pets => this.context.setPets(pets))
        PetfulService.getDogs()
        .then(dogs => {
            this.context.addDogType(dogs)
            this.context.setDogs(dogs)
        })

        PetfulService.getCats()
        .then(cats => {
            this.context.addCatType(cats)
            this.context.setCats(cats)
        })
    }

    componentWillUnmount() {
        this.context.clearResponse()
    }

    render(){
        return (
        <>
            <h2> Adoption </h2>
            <ul className="petsUL">
            <Pets />
            </ul>
            {this.context.response && <p className="adopted">A pet has been adopted!</p>}
            {this.context.response && 
            <button onClick={this.nextPets} className="adoptedButton">Next Pets!</button>}
        </>
        )
    }
};

export default Adoption;