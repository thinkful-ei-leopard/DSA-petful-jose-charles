import React from 'react';
import Pets from './petsComponent/pets'

class Adoption extends React.Component{
    render(){
        return (
        <>
            <h2> Adoption </h2>
            <ul>
            <Pets />
            </ul>
        </>
        )
    }
};

export default Adoption;