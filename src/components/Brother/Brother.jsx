import React, { useContext } from 'react';
import { MoneyContext } from '../../App';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='grandpa'>
            <h2>Brother</h2>
            <p><small>MOney: {money}</small></p>
            <button onClick={()=>setMoney(money+ 100)}>Increase money</button>
        </div>
    );
};

export default Brother;