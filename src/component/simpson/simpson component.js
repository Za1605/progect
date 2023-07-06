import React from 'react';
import 'simpson.css';
const SimpsonComponent = ({name,surname,age,photo}) => {

    return (
        <div className={`member`}>
            <h2>{name} {surname} {age}</h2>
            <img src= "{photo}" alt=""/>
        </div>
    );
};

export default SimpsonComponent;