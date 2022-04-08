import React from "react";

export const Input = ({name, type}) => {
    return (
        <div className="div__input__access">
            <label htmlFor={name} className="label__input__access">{name}</label>
            <input type={type} name={name} placeholder={name} className="input__access" />
        </div>
    );
}