

import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer.js";
import { Link ,useNavigate} from 'react-router-dom';

function Subtotal() {
   const navigate = useNavigate();
     const [{ basket, user }, dispatch] = useStateValue();
 
    const handleCheckout = () => {
        if (user) {
            navigate('/payment');
        } else {
            navigate('/login');
        }
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' />This order contains a gift
                    </small>
                </>
            )}

                decimalScale={2} 
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={handleCheckout} >Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;