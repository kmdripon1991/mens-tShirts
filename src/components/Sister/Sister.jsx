import React, { useContext } from 'react';
import { RingContext } from '../../App';


const Sister = () => {
    const angti = useContext(RingContext)
    return (
        <div className='grandpa'>
            <h2>Sister</h2>
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Sister;