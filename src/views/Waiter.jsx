import { Link } from 'react-router-dom';

const Waiter = () => {
    return (
        <div>
            <h2>Waiter view</h2>
            <button>
                <Link to='/'>
                    Home
                </Link>
            </button> 
        </div>
    )
}

export default Waiter;
