import './InputsTable.css';

const InputsTable = () => {
    return (
        <div className='inputs-table'>
            <input type='text' className='order-client' placeholder='Costumer'/>
            <input type='text' className='order-table' placeholder='Nº table' />
        </div>
    )
}

export default InputsTable;
