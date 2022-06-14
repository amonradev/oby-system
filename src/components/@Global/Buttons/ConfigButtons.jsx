import React from 'react';
import './buttons.css';

export const ConfigButtons = ({name, action}) => {

    return (
        <button onClick={action} className="config">{name}</button>
    )
}