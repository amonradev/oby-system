import './titles.css';

export const InfosTitles = ({title, quantity}) => {

    return (
        <div className="infos">
            <label className="title__infos">{title}</label>
            <span className='span__infos'>{quantity}</span>
        </div>
    );
}