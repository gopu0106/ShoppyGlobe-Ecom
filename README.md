# ShoppyGlobe E-commerce Application

ShoppyGlobe is a React-based e-commerce application built with Redux Toolkit and React Router. It allows users to browse products, view details, search, add items to a cart, and proceed to checkout.

## Tech Stack

- **React 18**
- **Vite**
- **Redux Toolkit** (State Management)
- **React Router DOM** (Routing)
- **CSS** (Styling)
- **DummyJSON API** (Data Source)

## Features

- **Product Listing:** Fetch and display products with lazy loaded images.
- **Search:** Filter products by title using Redux state.
- **Product Detail:** View detailed information for a specific product.
- **Cart Management:** Add, remove, and update quantities of items.
- **Checkout:** Simple checkout form with cart clearance.
- **Responsive Design:** Works on mobile and desktop.
- **Performance:** Implements `React.lazy` and `Suspense` for code splitting.

## Setup Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gopu0106/ShoppyGlobe-Ecom.git
   cd shoppyglobe
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure

```
shoppyglobe/
├── src/
│   ├── app/ (Redux Store)
│   ├── features/ (Redux Slices)
│   ├── components/ (React Components)
│   ├── hooks/ (Custom Hooks)
│   ├── router/ (Router Configuration)
│   ├── styles/ (CSS Files)
│   ├── App.jsx
│   └── main.jsx
```

## GitHub Repository

[https://github.com/gopu0106/ShoppyGlobe-Ecom.git](https://github.com/gopu0106/ShoppyGlobe-Ecom.git)
