import React from 'react'

const petfulContext = React.createContext({
    pets: [],
    dogs: [],
    cats: [],
    error: null,
    state: {},
    response: null,
    setPets: () => {},
    setDogs: () => {},
    setCats: () => {},
    addDogType: () => {},
    addCatType: () => {},
    setResponse: () => {},
    // addTouchedKeyToPets: () => {},
    findPetByIdAndToggleTouched: () => {},
    clearResponse: () => {},
})

export default petfulContext

export class PetfulProvider extends React.Component {
    state = {
        pets: [],
        dogs: [],
        cats: [],
        error: null,
        response: null,
    }

    //dogError
    //catError?

    setPets = pets => {
        this.setState({ pets })
    }

    setCats = cats => {
        this.setState({ cats })
    }

    setDogs = dogs => {
        this.setState({ dogs })
    }

    setResponse = () => {
        this.setState({ response: true })
    }

    clearResponse = () => {
        this.setState({ response: false })
    }

    // addTouchedKeyToPets = (arr) => {
    //     arr.map(item => item.touched = false)
    // }

    addDogType = (arr) => {
        arr.map(item => item.type = 'dog')
    }

    addCatType = (arr) => {
        arr.map(item => item.type = 'cat')
    }

    findPetByIdAndToggleTouched = (id) => {
        const touchedPet = this.state.pets[id]
        touchedPet.touched = true
    }

    render() {
        const value = {
            pets: this.state.pets,
            dogs: this.state.dogs,
            cats: this.state.cats,
            error: this.state.error,
            setPets: this.setPets,
            setDogs: this.setDogs,
            setCats: this.setCats,
            response: this.state.response,
            setResponse: this.setResponse,
            state: this.state,
            addDogType: this.addDogType,
            addCatType: this.addCatType,
            // addTouchedKeyToPets: this.addTouchedKeyToPets,
            findPetByIdAndToggleTouched: this.findPetByIdAndToggleTouched,
            clearResponse: this.clearResponse
        }

        return (
            <petfulContext.Provider value={value}>
                {this.props.children}
            </petfulContext.Provider>
        )
    }
}