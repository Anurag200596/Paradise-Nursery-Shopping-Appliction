import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css'; 

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2014/12/10/11/18/peace-lily-562866_1280.jpg", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: "$25" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", cost: "$10" }
            ]
        },
        {
            category: "Low Light",
            plants: [
                { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/zz-plant-5939186_1280.jpg", cost: "$22" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816941_1280.jpg", cost: "$10" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/10/aspidistra-2072001_1280.jpg", cost: "$28" },
                { name: "Chinese Evergreen", image: "https://cdn.pixabay.com/photo/2021/07/04/08/32/chinese-evergreen-6385688_1280.jpg", cost: "$15" },
                { name: "English Ivy", image: "https://cdn.pixabay.com/photo/2018/01/09/20/43/ivy-3072517_1280.jpg", cost: "$14" },
                { name: "Philodendron", image: "https://cdn.pixabay.com/photo/2017/09/28/18/05/houseplant-2796393_1280.jpg", cost: "$12" }
            ]
        },
        {
            category: "Succulents",
            plants: [
                { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2015/10/22/15/22/jade-plant-1001332_1280.jpg", cost: "$15" },
                { name: "Echeveria", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", cost: "$8" },
                { name: "Burro's Tail", image: "https://cdn.pixabay.com/photo/2021/01/22/15/15/burros-tail-5940319_1280.jpg", cost: "$18" },
                { name: "Haworthia", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", cost: "$10" },
                { name: "String of Pearls", image: "https://cdn.pixabay.com/photo/2021/06/13/07/28/string-of-pearls-6332467_1280.jpg", cost: "$20" },
                { name: "Zebra Cactus", image: "https://cdn.pixabay.com/photo/2016/08/11/08/11/aloe-vera-1585068_1280.jpg", cost: "$12" }
            ]
        }
    ];

    return (
        <div>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="#" onClick={() => window.location.reload()}>Home</a>
                    <a href="#" onClick={() => setShowCart(false)}>Plants</a>
                </div>
                <div className="cart-icon" onClick={() => setShowCart(true)}>
                    <span className="cart-emoji">🛒</span>
                    <span className="cart-count">{totalItems}</span>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-container">
                    {plantsArray.map(cat => (
                        <div key={cat.category}>
                            <h2 className="category-title">{cat.category}</h2>
                            <div className="product-grid">
                                {cat.plants.map(plant => (
                                    <div className="plant-card" key={plant.name}>
                                        <img src={plant.image} alt={plant.name} className="plant-img" />
                                        <h3>{plant.name}</h3>
                                        <p className="price">{plant.cost}</p>
                                        <button 
                                            className="add-to-cart-btn"
                                            disabled={cart.some(item => item.name === plant.name)}
                                            onClick={() => dispatch(addItem(plant))}
                                        >
                                            {cart.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;