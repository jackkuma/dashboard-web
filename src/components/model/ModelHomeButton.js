import React, { Component, Fragment } from 'react';
import Button from 'devextreme-react/button';

import ModelHome from './ModelHome';

class HomeMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailVisible: false  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({detailVisible: !this.state.detailVisible})
    }

    render() {
        const { detailVisible } = this.state;
        return(
            <Fragment>
                <Button icon="home" stylingMode="text" onClick={this.toggleMenu} />
                {detailVisible && <ModelHome />}
            </Fragment>
        );
    }
}

export default HomeMenu;