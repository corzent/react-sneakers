import styles from './Drawer.module.scss';

function Drawer() {
    return (
        <div style={{display:'none'}} className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина{' '}
                    <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className={styles.items}>
                    <div className={styles.cartItem}>
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                            className={styles.cartItemImg}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className={styles.cartItem}>
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                            className={styles.cartItemImg}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 345 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1071 руб.</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>
                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
