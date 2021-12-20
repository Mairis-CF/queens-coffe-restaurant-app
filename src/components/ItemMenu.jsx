import React from 'react';

import './ItemMenu.css';
import { addButton } from '../assets/assets';


const ItemMenu = ({ itemImg, itemPrice, itemName, itemId, itemType }) => {

    const addItemHandler = () => console.log('hola');
    return (
        <div className='item-menu-container'>

            <div className='item-menu'>
                <img src={itemImg} alt={itemName} className='item-menu-img' />

                <div className='item-menu-content'>
                    <p>{itemName}</p>
                    <p>{itemPrice}</p>
                    <button onClick={addItemHandler} className='item-menu-add-btn'>
                        <img src={addButton} alt="add item" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ItemMenu;
