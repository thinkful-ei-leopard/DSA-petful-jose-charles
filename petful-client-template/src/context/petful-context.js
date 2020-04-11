import React from 'react'

const petfulContext = React.createContext({
    pets: [],
    error: null,
    state: {},
    response: null,
    setPets: () => {},
    setResponse: () => {},
    addTouchedKeyToPets: () => {},
    findPetByIdAndToggleTouched: () => {},
})

export default petfulContext

export class PetfulProvider extends React.Component {
    state = {
        pets: [],
        error: null,
        response: null,
    }

    setPets = pets => {
        this.setState({ pets })
    }

    setResponse = () => {
        this.setState({ response: true })
    }

    addTouchedKeyToPets = (arr) => {
        arr.map(item => item.touched = false)
    }

    findPetByIdAndToggleTouched = (id) => {
        const touchedPet = this.state.pets[id]
        touchedPet.touched = true
    }

    render() {
        const value = {
            pets: this.state.pets,
            error: this.state.error,
            setPets: this.setPets,
            response: this.state.response,
            setResponse: this.setResponse,
            state: this.state,
            addTouchedKeyToPets: this.addTouchedKeyToPets,
            findPetByIdAndToggleTouched: this.findPetByIdAndToggleTouched,
        }

        return (
            <petfulContext.Provider value={value}>
                {this.props.children}
            </petfulContext.Provider>
        )
    }
}