import React, { Component } from 'react';
import Product from './Product';

const webApi = '';

class productList extends Component {
    state = {
        products: [],
    };
    componentDidMount() {
        fetch(webApi)
            .then((rs) => rs.json())
            .then((data) => {
                this.setState({
                    products: data.products,
                });
            });
    }
    render() {
        const { products } = this.state;
        return (
            <div>
                {products.map((product) => (
                    <Product key={product.id} {...course} />
                ))}
            </div>
        )
    }
}

export default productList;