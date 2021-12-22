import './OrderResume.css';

import OrderResumeItem from './OrderResumeItem';


const OrderResume = ({ 
    orderPrice, setOrderPrice,
    itemOrder, setItemOrder, 
    itemQuantity, setClientName,
    setClientTable }) => {

    //Función que elimina el pedido entero, reseteando los estados correspondientes a la orden
    const deleteOrderHandler = () => {
        setItemOrder([]);
        setOrderPrice(0);
        setClientName('');
        setClientTable('');
    }

    return (
        <section className='order-resume'>
            <h4>Order Resume</h4>

            <div className='order-resume-table'>
                {
                    itemOrder.map(item => (
                        <OrderResumeItem
                            key={item.id}
                            itemOrderTitle={item.title}
                            itemOrderPrice={item.price}
                            itemQuantity={itemQuantity}
                            /*La función en deleteAction, elimina el item individual del pedido filtrando el array y
                             resta el valor del item eliminado al precio total de la orden */
                            deleteAction={() => { setItemOrder(itemOrder.filter(el => el.id !== item.id)); setOrderPrice(orderPrice - item.price) }}
                        />
                    ))
                }
                <div className='order-resume-price'>

                    {  //La cuenta del valor total del pedido solo se muestra si es mayor a 0, o sea, si hay algun pedido haciendose
                        orderPrice !== 0 ? (
                            <p> Total price: ${orderPrice} </p>
                        ) : false
                    }

                </div>
            </div>

            <div className='order-resume-btns'>
                <button onClick={deleteOrderHandler} >Delete Order</button>
                <button>Send Order</button>
            </div>
        </section>
    )
}

export default OrderResume;
