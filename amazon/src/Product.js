// import React from 'react'
// import './Product.css'
// function Product(title,image,price,rating) {
//   return (
//     <div className="product">
//       <div className="product_info">
//           <p>{title}</p>
//           <p className="product_price">
//               <small>$</small>
//               <strong>{price}</strong>
//           </p>
//           <div className="product_rating">
              
//           {Array(rating).fill().map((_, i) => (
//                                 <p> ⭐ </p>
//                             ))}
//           </div>
//       </div>
//     <img className="home_containerImage"
//          src={image}
//          alt=""
//     />

//     <button>Add to cart</button>
//     </div>
//   )
// }

// export default Product

import React from 'react';

import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    const  [{basket},dispatch] = useStateValue();

    
const addToBasket = () => {
    //dispatch the item into data layers
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id:id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });

}

    return (
        <div className='product'>
                 
                    <div className='product_info'>
                        <p>{title}</p>
                        <p className='product_price'>
                            <strong>{price}</strong>
                        </p>
                        <div className='product_rating'>
                            {Array(rating).fill().map((_, i) => (
                                <p> ⭐ </p>
                            ))}
                        </div>
                    </div>
               

            

            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product