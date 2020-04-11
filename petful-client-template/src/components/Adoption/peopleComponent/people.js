import React from 'react'
import PeopleService from '../../../services/people-service'
import petfulContext from '../../../context/petful-context'

export default class People extends React.Component{
    static contextType = petfulContext

    nameSubmit = e => {
        e.preventDefault();
        console.log(this.context.currentUser)
        PeopleService.addPeople(this.context.currentUser)
        .then(() => {
            PeopleService.getPeople()
            .then( people => this.context.setPeople(people))
        })
        
         
    }
    
    componentDidMount() {
        PeopleService.getPeople()
        .then( people => this.context.setPeople(people))     
    }

    render() {
        return(
            <>
            {this.context.people.map(( person, index) => 
                <li key={index}>
                <p>{person}</p>
                </li>
                )}
                <form onSubmit={this.nameSubmit}>
                    <label htmlFor="text">Add your name to the line</label>
                    <input type="text" onChange={this.context.handleChange}></input>
                    <input type='submit'></input>
                </form>
            </>
        )
    }

}