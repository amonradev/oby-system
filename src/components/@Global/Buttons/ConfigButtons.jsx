import React from 'react';
import './buttons.css';

export const ConfigButtons = ({name, onClick}) => {

    return (
        <button className="config" onClick={onClick}>{name}</button>
    )
}