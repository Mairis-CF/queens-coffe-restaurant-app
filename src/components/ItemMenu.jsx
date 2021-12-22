import React from 'react';

import './ItemMenu.css';
import { addButton } from '../assets/assets';

//Componente base de todos los items del menú
const ItemMenu = (
    { itemImg,
        itemPrice,
        itemName,
        itemId,
        itemType,
        itemOrder,
        setItemOrder,
        orderPrice,
        setOrderPrice }) => {

    //Función que agrega el item del pedido al estado para luego renderizarlo.
    const addItemHandler = () => {
        setItemOrder([...itemOrder, {
            title: itemName,
            price: itemPrice,
            id: itemId
        }])
        //Se actualiza el valor total del pedido cada vez que se agregue un nuevo item a la orden
        setOrderPrice(orderPrice + itemPrice)
    }

    return (
        <div className='item-menu-container'>

            <div className='item-menu'>
                <img src={itemImg} alt={itemName} className='item-menu-img' />

                <div className='item-menu-content'>
                    <p>{itemName}</p>
                    <p>${itemPrice}</p>
                    <button onClick={addItemHandler} className='item-menu-add-btn'>
                        <img src={addButton} alt="add item" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ItemMenu;
