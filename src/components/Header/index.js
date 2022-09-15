import styles from './Header.module.scss';

function Header() {
    return (
        <header className="d-flex justify-between p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} alt="logo" src="/img/logo.png" />
                <div className={styles.headerInfo}>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className={styles.headerRight}>
                <li>
                    <img width={18} height={18} alt="cart" src="/img/cart.svg" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} alt="cart" src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
