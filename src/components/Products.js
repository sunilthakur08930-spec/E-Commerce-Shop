import React from 'react'
import ProductItem from './ProductItem';

const Products = (props) => {
    const products = [
        { id: 1, title: "Apple iPhone 18 Pro 2 TB", price: "₹3,14,900", image: "https://th.bing.com/th/id/OPAC.ugNBJwpkESBEZA474C474?w=400&h=400&r=0&o=5&dpr=1.3&pid=21.1" },
        { id: 2, title: "Apple Watch Ultra 3GPS + Cellular - 49mm", price: "₹1,07,888.00", image: "https://th.bing.com/th/id/OPAC.PLmBnBYVAtwfWw474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1" },
        { id: 3, title: "Apple Macbook Pro 14 (1TB SSD, M2 Max, 32GB) Laptop - Space Gray ", price: "₹3,83,526.00", image: "https://th.bing.com/th/id/OPAC.CHpxC2SzUckNCg474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1" },
        { id: 4, title: "Meta Ray-Ban (Gen 2), Wayfarer, Shiny Black | Smart AI Glasses For Men, Women - 2X Battery Life - 3K Ultra", price: "₹4,418.00", image: "https://th.bing.com/th/id/OPAC.cXb0awr2cwd8aw474C474?w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1" },
        { id: 5, title: "USA Model New In SEALED Apple Airpods In-Ear Official Air Pods Genuine Airpod", price: "₹29,861.00", image: "https://th.bing.com/th/id/OPAC.oA7uNGRDTH14sw474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1" },
        { id: 5, title: "Amazon Echo Studio (Newest Gen), Compact Design, Immersive Spatial Audio And Dolby Atmos,", price: "₹38,234.00", image: "https://th.bing.com/th/id/OPAC.vzSyukjE973xNA474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1" }
    ];

    return (
        <div className="container my-3">
            <h2>Our Products</h2>
            <div className="row">
                {products.map(product => {
                    return (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <ProductItem isCart={false}
                            addToCart={props.addToCart}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Products;
