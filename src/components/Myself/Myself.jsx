import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className='grandpa'>
            <h2 className='text-center'>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;