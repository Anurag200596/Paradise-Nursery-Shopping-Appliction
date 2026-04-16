import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { additem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

function productlist() {
    const [showcart, setshowcart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalitems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsarray = [
        {
            category: "air purifying",
            plants: [
                { name: "snake plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "spider plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" },
                { name: "peace lily", image: "https://cdn.pixabay.com/photo/2014/12/10/11/18/peace-lily-562866_1280.jpg", cost: "$18" },
                { name: "boston fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", cost: "$20" },
                { name: "rubber plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: "$25" },
                { name: "aloe vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", cost: "$10" }
            ]
        },
        {
            category: "low light",
            plants: [
                { name: "zz plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/zz-plant-5939186_1280.jpg", cost: "$22" },
                { name: "pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816941_1280.jpg", cost: "$10" },
                { name: "cast iron plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/10/aspidistra-2072001_1280.jpg", cost: "$28" },
                { name: "chinese evergreen", image: "https://cdn.pixabay.com/photo/2021/07/04/08/32/chinese-evergreen-6385688_1280.jpg", cost: "$15" },
                { name: "english ivy", image: "https://cdn.pixabay.com/photo/2018/01/09/20/43/ivy-3072517_1280.jpg", cost: "$14" },
                { name: "philodendron", image: "https://cdn.pixabay.com/photo/2017/09/28/18/05/houseplant-2796393_1280.jpg", cost: "$12" }
            ]
        },
        {
            category: "succulents",
            plants: [
                { name: "jade plant", image: "https://cdn.pixabay.com/photo/2015/10/22/15/22/jade-plant-1001332_1280.jpg", cost: "$15" },
                { name: "echeveria", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", cost: "$8" },
                { name: "burro's tail", image: "https://cdn.pixabay.com/photo/2021/01/22/15/15/burros-tail-5940319_1280.jpg", cost: "$18" },
                { name: "haworthia", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", cost: "$10" },
                { name: "string of pearls", image: "https://cdn.pixabay.com/photo/2021/06/13/07/28/string-of-pearls-6332467_1280.jpg", cost: "$20" },
                { name: "zebra cactus", image: "https://cdn.pixabay.com/photo/2016/08/11/08/11/aloe-vera-1585068_1280.jpg", cost: "$12" }
            ]
        }
    ];

    const handleaddtocart = (plant) => {
        dispatch(additem(plant));
    };

    return (
        <div>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="#" onClick={() => window.location.reload()}>home</a>
                    <a href="#" onClick={() => setshowcart(false)}>plants</a>
                </div>
                <div className="cart-icon" onClick={() => setshowcart(true)}>
                    <span className="cart-emoji">🛒</span>
                    <span className="cart-count">{totalitems}</span>
                </div>
            </nav>

            {!showcart ? (
                <div className="product-container">
                    {plantsarray.map((cat) => (
                        <div key={cat.category}>
                            <h2 className="category-title">{cat.category}</h2>
                            <div className="product-grid">
                                {cat.plants.map((plant) => (
                                    <div className="plant-card" key={plant.name}>
                                        <img src={plant.image} alt={plant.name} className="plant-img" />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.cost}</p>
                                        <button 
                                            className="add-to-cart-btn"
                                            disabled={cart.some(item => item.name === plant.name)}
                                            onClick={() => handleaddtocart(plant)}
                                        >
                                            {cart.some(item => item.name === plant.name) ? "added" : "add to cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem oncontinueshopping={() => setshowcart(false)} />
            )}
        </div>
    );
}

export default productlist;