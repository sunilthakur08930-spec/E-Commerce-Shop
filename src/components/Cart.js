import React from 'react'
import Products from './Products';
import ProductItem from './ProductItem';

const Cart = (props) => {
    // Total price calculate karne ke liye .reduce() ka use
    const totalAmount = props.cart.reduce((total, item) => {
        const cleanPrice = Number(item.price.replace("₹", "").replace(/,/g, ""));
        return total + cleanPrice;
    }, 0);

    return (
        <div className="container my-3">
            {/* Top Section: Your Cart heading on left, Total Amount & Checkout on right */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                <h2 className="fw-bold m-0">Your Cart</h2>
                
                {/* Total Amount & Checkout Button Section */}
                <div className="text-end">
                    <h4 className={`fw-bold m-0 ${props.cart.length === 0 ? "text-danger" : "text-success"}`}>
                        Total Amount: ₹{totalAmount.toLocaleString('en-IN')}
                    </h4>
                    {/* Checkout button sirf tab dikhega jab cart mein items honge */}
                    {props.cart.length > 0 && (
                        <button className="btn btn-success mt-2 px-4 shadow-sm" onClick={props.handleCheckout}>
                            Proceed to Checkout 🚀
                        </button>
                    )}
                </div>
            </div>

            {/* Cart Items or Empty Message */}
            {props.cart.length === 0 ? (
                <div className="text-center my-5 py-5 bg-light rounded-4 border">
                    <h4 className="text-muted">Your Cart is Empty 🛒</h4>
                    <p className="text-secondary px-5 mx-auto" style={{ maxWidth: '600px' }}>
                        The price and availability of items at E-Commerce Shop are subject to change. Add some awesome products from the Products page!
                    </p>
                </div>
            ) : (
                <div className="row">
                    {props.cart.map((item, index) => {
                        return (
                            <div className="col-md-4 mb-4" key={index}>
                                <ProductItem 
                                    isCart={true}
                                    removeFromCart={props.removeFromCart}
                                    index={index}
                                    addToCart={props.addToCart}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Cart;
