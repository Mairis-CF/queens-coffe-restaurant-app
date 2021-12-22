import './OrderResumeItem.css';

import { deleteItemButton} from '../assets/assets';

const OrderResumeItem = ({ itemOrderTitle, itemOrderPrice, itemQuantity, deleteAction }) => {

    return (
        <div className='order-resume-item'>
            <p>{itemQuantity}</p>
            <p> {itemOrderTitle} </p>
            <p> ${itemOrderPrice} </p>
            <button onClick={deleteAction}>
                <img src={deleteItemButton} alt='Delete Item' />
            </button>
        </div>
    )
}

export default OrderResumeItem;
