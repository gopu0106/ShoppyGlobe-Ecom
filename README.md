# ShoppyGlobe E-commerce Application

## Project Description

ShoppyGlobe is a React-based e-commerce application built with Redux Toolkit and React Router. It allows users to browse products, view details, search, add items to a cart, and proceed to checkout. This project demonstrates core React concepts including component architecture, state management, routing, and API integration.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **CSS** - Styling (no frameworks)
- **DummyJSON API** - Product data source

## Features

- **Product Listing** - Fetch and display products with lazy-loaded images
- **Search Functionality** - Filter products by title using Redux state
- **Product Detail Page** - View detailed information for specific products
- **Cart Management** - Add, remove, and update item quantities
- **Checkout Form** - Simple form with validation and cart clearance
- **Responsive Design** - Works on mobile and desktop devices
- **Performance Optimizations** - Code splitting with React.lazy and Suspense
- **Error Handling** - Graceful handling of API failures and missing images

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/gopu0106/ShoppyGlobe-Ecom.git
cd ShoppyGlobe-Ecom/shoppyglobe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 4. Build for production (optional)

```bash
npm run build
```

## 📁 Folder Structure

```
shoppyglobe/
├── public/               # Static assets
├── src/
│   ├── app/             # Redux store configuration
│   │   └── store.js
│   ├── features/        # Redux slices
│   │   └── cart/
│   │       ├── cartSlice.js       # Cart state & actions
│   │       └── cartSelectors.js   # Memoized selectors
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   ├── NotFound.jsx
│   │   └── Layout.jsx
│   ├── hooks/           # Custom hooks
│   │   ├── useFetchProducts.js
│   │   └── useDocumentTitle.js
│   ├── router/          # Route configuration
│   │   └── router.jsx
│   ├── styles/          # CSS files
│   │   └── main.css
│   ├── config/          # App configuration
│   │   └── config.js
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## GitHub Repository

**Repository URL:** [https://github.com/gopu0106/ShoppyGlobe-Ecom.git](https://github.com/gopu0106/ShoppyGlobe-Ecom.git)

## Developer

- **Name:** Gopal Ramesh Tengale
- **Project:** ShoppyGlobe E-commerce Application
- **Built With:** React, Redux, Vite

---

**© 2024 ShoppyGlobe. All rights reserved.**
