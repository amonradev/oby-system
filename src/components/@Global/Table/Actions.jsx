import React from "react";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Actions = ({id}) => {

    return (
        <div className="dropdown">
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <div className="dropdown-content">
                ehheeh
            </div>
        </div>
    )
}