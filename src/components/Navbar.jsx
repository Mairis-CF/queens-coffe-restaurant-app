import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css';
import { logoMini, homeButton } from '../assets/assets';
//importando componentes
import ItemMenu from './ItemMenu';
import menuData from '../menu-data/menu.json';
//Accediendo a la data en el archivo json menu.
const menu = menuData.menu;

const Navbar = () => {
    const [menuFilter, setMenuFilter] = useState('');

    return (
        <>
            <section className='navbar'>
                <div className='navbar-logo'>
                    <img src={logoMini} alt='Logo' />
                </div>

                <div className='menu-filter'>
                    <label htmlFor='Coffee'>Coffees</label>
                    <label htmlFor='Dessert'>Desserts</label>
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
            {/*Sección que renderiza el menú usando los filtros por tipo de comida*/}
            <section className='menu-select'>
                <input type='radio' name='radio' value='Coffee' onChange={() => setMenuFilter('Coffee')} id='Coffee' ></input>
                <input type='radio' name='radio' value='Dessert' onChange={() => setMenuFilter('Dessert')} id='Dessert' ></input>
                
                <section className='menu-content'>
                    {
                        menu.filter(item => item.type === menuFilter)
                            .map(item => (
                                <ItemMenu
                                    key={item.title}
                                    itemImg={item.img}
                                    itemPrice={item.price}
                                    itemName={item.title}
                                    itemId={item.id}
                                    itemType={item.type}
                                />
                            ))
                    }
                </section>

            </section>

        </>
    )
}

export default Navbar;
