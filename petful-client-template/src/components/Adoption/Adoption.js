import React from 'react';
import Pets from './petsComponent/pets'
import People from './peopleComponent/people'

class Adoption extends React.Component{
    render(){
        return (
        <>
            <h2> Adoption </h2>
            <ul>
            <Pets />
            </ul>
            <ul className="people">
            <People />
            </ul>
        </>
        )
    }
};

export default Adoption;