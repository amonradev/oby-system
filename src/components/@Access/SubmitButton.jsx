import React from "react";

export const SubmitButton = (title, onclick) => {
    return (
        <button onclick={onclick} className="button__submit">{title}</button>
    );
}