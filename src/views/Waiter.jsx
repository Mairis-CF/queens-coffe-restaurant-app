import '../render-app/App.css';
import '../index.css';
import './Waiter.css';

import Navbar from '../components/Navbar';
import InputsTable from '../components/InputsTable';
import OrderResume from '../components/OrderResume';

const Waiter = () => {
    return (
        <section>
            <Navbar />
            <InputsTable />
            <div className='waiter-header'>
            <p>New Order</p>
            </div>
            <OrderResume />

        </section>
    )
}

export default Waiter;
