import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageURl: '/img/sneakers/1.jpg',
    },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 16500, imageURl: '/img/sneakers/2.jpg' },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageURl: '/img/sneakers/1.jpg',
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageURl: '/img/sneakers/1.jpg',
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />

            <Header />
            <div className="content">
                <div className="title-search">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>
                <div className="d-flex">
                    {arr.map((obj) => {
                        return <Card title={obj.title} price={obj.price} imageURl={obj.imageURl} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
