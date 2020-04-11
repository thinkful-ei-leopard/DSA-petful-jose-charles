import React from 'react'
import PetfulService from '../../../services/petful-service'
import petfulContext from '../../../context/petful-context'
import './pets.css'

export default class Pets extends React.Component {
    static contextType = petfulContext

    componentDidMount() {
    this.context.clearResponse()

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

    getType = (key) => {

        PetfulService.removePet(key)
        .then(() => {
            this.context.setResponse()
        })
    }

    componentWillUnmount() {
        this.context.clearResponse()
    }

    render() {
        let cat = this.context.cats[0] || {}
        let dog = this.context.dogs[0] || {}

        return (
            <>
            {dog.name ? this.context.dogs.map((item, index) =>
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
            {this.context.response === false ? <button onClick={() => this.getType(item.type)}> Adopt Me!</button> : 
            null}
            </li>) : <p>No more doggos to adopt!</p>}

            {cat.name ? this.context.cats.map((item, index) =>
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
            {this.context.response === false ? <button onClick={() => this.getType(item.type)}> Adopt Me!</button> : 
            null}
            </li>) : <p>No more cats to adopt!</p>}
            </>
        )
    }
}