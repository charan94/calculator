import React from 'react';
import CalcBtn from '../CalcBtn';

const Block = (props) => {
    const { value, seperator, dark, value2 } = props;

    return (
        <div className={`d-grid gap-2 custom-brd-radius ${dark ? 'bg-custom-gray' : ''}`}>
            <CalcBtn value={value} seperator={seperator} value2={value2} />
        </div>
    )
}

export default Block;