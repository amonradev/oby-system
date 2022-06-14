import './style.css';

export const SubmitButton = ({title}, {onclick}) => {
    return (
        <div className="card__button">
            <button onClick={onclick} type="submit" className="button__submit">{title}</button>
        </div>
    );
}