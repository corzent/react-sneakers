import styles from './Card.module.scss'

function Card(props) {
    const onClickButton = () => {
        alert(123)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageURl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="card-wrapper">
                <div className="sneakers-info">
                    <span>Цена:</span>
                    <b>{`${props.price} руб.`}</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;