import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarButton = ({name, icon, page, action}) => {

    return (
        <div className="sidebar__div--button" id={page}  onClick={action}>
            <button className="sidebar__button">
                <span className="sidebar__icon"><FontAwesomeIcon icon={icon} /></span>
                <span>{name}</span>
            </button>
        </div>
    )
}