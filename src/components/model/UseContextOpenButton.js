import React, { useContext } from 'react';
import Button from 'devextreme-react/button';
import context from '../../contexts/model';

const UseContextOpenButton = () => {
    const { open, toggle } = useContext(context);
    return <Button onClick={toggle}>
        {open ? 'Close' : 'Open'}
    </Button>
};

export default UseContextOpenButton;