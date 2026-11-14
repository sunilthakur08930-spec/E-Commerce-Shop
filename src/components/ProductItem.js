import React from 'react'

const ProductItem = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.image} className="card-img-top" alt={props.title} style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                <div className="card-body"> 
                    {/* Yahan se extra ₹ hata diya hai kyunki props.price mein ₹ pehle se hai */}
                    {props.price}
                    <h5 className="card-title mt-2">"{props.title}"</h5>
                    
                    {props.isCart ? (
                        <button type="button" className="btn btn-danger mt-2" onClick={() => props.removeFromCart(props.index)}>Remove</button>
                    ) : (
                        <button type="button" className="btn btn-primary mt-2" onClick={() => props.addToCart({ title: props.title, price: props.price, image: props.image })}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
