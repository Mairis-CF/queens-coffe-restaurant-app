import { useState } from 'react';

import '../render-app/App.css';
import '../index.css';
import './Waiter.css';

import Navbar from '../components/Navbar';
import InputsTable from '../components/InputsTable';
import OrderResume from '../components/OrderResume';

const Waiter = () => {

    const [ itemOrder, setItemOrder ] = useState([]);
    const [ orderPrice, setOrderPrice ] = useState(0);
    const [ clientName, setClientName ] = useState('');
    const [ clientTable, setClientTable ] = useState('');
    const itemQuantity = 1;

    return (
        <section>
            <Navbar
            itemOrder={itemOrder}
            setItemOrder={setItemOrder}
            orderPrice={orderPrice}
            setOrderPrice={setOrderPrice}
            />

            <InputsTable 
            clientName={clientName}
            setClientName={setClientName}
            clientTable={clientTable}
            setClientTable={setClientTable}
            />

            <div className='waiter-header'>
            <p>New Order</p>
            </div>

            <OrderResume 
            orderPrice={orderPrice}
            setOrderPrice={setOrderPrice}
            itemOrder={itemOrder}
            setItemOrder={setItemOrder}
            itemQuantity={itemQuantity}
            setClientName={setClientName}
            setClientTable={setClientTable}
            />

        </section>
    )
}

export default Waiter;
