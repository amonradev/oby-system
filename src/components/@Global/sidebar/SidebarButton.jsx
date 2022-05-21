import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export const SidebarButton = ({name, icon, page, active, to}) => {

    if(page == active) {
        return (
            <Link className="sidebar__link active" to={to}>
                <div className="sidebar__div--button" id={page}>
                        <button className="sidebar__button">
                            <span className="sidebar__icon"><FontAwesomeIcon icon={icon} /></span>
                            <span>{name}</span>
                        </button>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to={to}>
                <div className="sidebar__div--button" id={page}>
                        <button className="sidebar__button">
                            <span className="sidebar__icon"><FontAwesomeIcon icon={icon} /></span>
                            <span>{name}</span>
                        </button>
                </div>
            </Link>
        )
    }
}