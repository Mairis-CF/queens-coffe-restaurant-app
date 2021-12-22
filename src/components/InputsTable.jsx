import './InputsTable.css';

const InputsTable = ({ clientTable, setClientTable, clientName, setClientName  }) => {

    return (
        <div className='inputs-table'>
            <input type='text' onChange={e => setClientName(clientName = e.target.value)} className='order-client' placeholder='Costumer' required />
            <input type='text' onChange={e => setClientTable(clientTable = e.target.value)} className='order-table' placeholder='Nº table'  required />
        </div>
    )
}

export default InputsTable;
