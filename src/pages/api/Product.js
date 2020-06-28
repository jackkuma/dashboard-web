import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { title, subtitle } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        );
    }
}

export default Product;