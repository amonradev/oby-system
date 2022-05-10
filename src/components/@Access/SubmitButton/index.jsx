import './style.css';

export const SubmitButton = ({title}, {onclick}) => {
    return (
        <div className="card__button">
            <button type="button" onClick={onclick} className="button__submit">{title}</button>
        </div>
    );
}