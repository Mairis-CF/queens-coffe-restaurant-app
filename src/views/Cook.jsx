import { Link } from 'react-router-dom';

const Cook = () => {
    return (
        <div>
            <h2>Cook view</h2>
            <button>
                <Link to='/'>
                    Home
                </Link>
            </button>
        </div>
    )
}

export default Cook;
