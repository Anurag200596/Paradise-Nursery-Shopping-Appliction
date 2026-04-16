# paradise nursery - e-plantshopping application

a full-stack responsive react web application for an online plant nursery. this project was developed as part of the ibm front-end developer professional certificate.

## 🌿 project overview
paradise nursery is a specialized e-commerce platform where users can browse a wide variety of houseplants, learn about their care, and manage a shopping cart. the application focus is on providing a seamless user experience using modern react practices and state management.

## 🚀 features
* **landing page:** immersive introduction with a mission statement and "get started" call-to-action.
* **product listing:** 18+ unique plants organized into categories (air purifying, low light, and succulents).
* **smart cart logic:** * dynamically disable "add to cart" buttons for items already in the cart.
    * real-time quantity updates (increment/decrement).
    * automatic subtotal and total cost calculations.
* **responsive design:** stylized with custom css to ensure compatibility across devices.

## 🛠️ tech stack
* **frontend:** react.js (hooks, functional components)
* **state management:** redux toolkit (slices, store)
* **styling:** custom css3 (flexbox/grid)
* **bundler:** vite
* **deployment:** github

## 📂 project structure
```text
e-plantShopping/
├── src/
│   ├── assets/        # images and static assets
│   ├── components/    # CartItem, ProductList, AboutUs
│   ├── store/         # CartSlice and Redux Store
│   ├── App.jsx        # main entry component
│   └── App.css        # global styles & landing page design
├── public/
├── index.html
└── package.json
