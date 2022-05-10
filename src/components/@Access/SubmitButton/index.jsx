import './style.css';

export const SubmitButton = ({title}, {onclick = 'javascript:void'}) => {
    return (
        <div className="card__button">
            <button type="button" onclick={onclick} className="button__submit">{title}</button>
        </div>
    );
}