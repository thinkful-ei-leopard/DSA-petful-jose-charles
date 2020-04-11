import React from 'react'

const petfulContext = React.createContext({
    pets: [],
    error: null,
    state: {},
    response: null,
    setPets: () => {},
    setResponse: () => {},
    nameSubmit: () => {},
    people: [],
    setPeople: () => {},
    handleChange: () => {},
    currentUser: []

})

export default petfulContext

export class PetfulProvider extends React.Component {
    state = {
        pets: [],
        error: null,
        response: null,
        people: [],
        currentUser: []
    }

    setPets = pets => {
        this.setState({ pets })
    }

    setPeople = people => {
        this.setState({ people })
    }

    setResponse = () => {
        this.setState({ response: true })
    }



    handleChange = e => {
        this.setState({currentUser: e.target.value})
    }

    render() {
        const value = {
            pets: this.state.pets,
            error: this.state.error,
            setPets: this.setPets,
            response: this.state.response,
            setResponse: this.setResponse,
            state: this.state,
            people: this.state.people,
            setPeople: this.setPeople,
            nameSubmit: this.nameSubmit,
            handleChange: this.handleChange,
            currentUser: this.state.currentUser
        }

        return (
            <petfulContext.Provider value={value}>
                {this.props.children}
            </petfulContext.Provider>
        )
    }
}