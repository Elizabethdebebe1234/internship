import { useCart } from "../context/CartContext";

function Navbar() {
    const { cart } = useCart();
    return(
        <nav>
            <h2>cloth shop</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>Cart ({cart.length})</li>
            </ul>

        </nav>
    )
}

export default Navbar;
