import React from "react";
import {faCircleXmark, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Actions = ({id}) => {

    return (
        <div className="actions">
            <FontAwesomeIcon className="actions__delete" icon={faCircleXmark} />
            <FontAwesomeIcon className="actions__edit" icon={faPenToSquare} />
        </div>
    )
}