import React from 'react';

function Detail(props) {

    return (
        <div>
            { props.productImg
                ? <div>
                    <img src={props.productImg} className='detailImage' />
                    <p>${props.productPrice}.00</p>
                    <button onClick={() => props.addToCart()}>Add to Cart</button>
                    </div>
                : null
            }
            
        </div>
    )
}

export default Detail;