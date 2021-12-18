import { Link } from 'react-router-dom';

import './Navbar.css';
import { logoMini, homeButton } from '../assets/assets';

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='navbar-logo'>
                <img src={logoMini} alt='Logo' />
            </div>

            <div className='menu-filter'>
                <a href=''>Coffees</a>
                <a href=''>Desserts</a>
            </div>

            <div className='waiter-nav-links'>
                <Link to='/Waiter/Orders'>Orders</Link>
                <Link to='/Waiter'>New Order</Link>
            </div>

            <button className='home-button'>
                <Link to='/'>
                    <img src={homeButton} alt="Home Button" />
                </Link>
            </button> 

        </section>
    )
}

export default Navbar;
