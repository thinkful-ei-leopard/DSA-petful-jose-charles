import React from 'react'

const petfulContext = React.createContext({
    pets: [],
    error: null,
    state: {},
    response: null,
    setPets: () => {},
    setResponse: () => {},
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

    render() {
        const value = {
            pets: this.state.pets,
            error: this.state.error,
            setPets: this.setPets,
            response: this.state.response,
            setResponse: this.setResponse,
            state: this.state,
        }

        return (
            <petfulContext.Provider value={value}>
                {this.props.children}
            </petfulContext.Provider>
        )
    }
}