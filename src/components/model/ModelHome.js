import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import './model.scss';

class ModelHome extends Component {
    render() {
        return createPortal(
            <div className="model-home">
                <h3>Home</h3>
                <hr />
                <h4>Menu List</h4>
            </div>,
            document.getElementById('model'),
        );
    }
}

export default ModelHome;
