import React, { useState } from 'react';
import UseContextOpenButton from './UseContextOpenButton';
import { Provider } from '../../contexts/model';

import './model.scss';

const UseContextOpen = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const contextValue = { open, toggle };
    return (
        <Provider value={contextValue}>
            <div>
                <UseContextOpenButton />
                {open && <div className="model-home">Some Contents</div>}
            </div>
        </Provider>
    );
};

export default UseContextOpen;