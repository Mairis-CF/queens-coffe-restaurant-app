import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home view</h2>
      <button>
        <Link to='/Waiter'>Tables</Link>
      </button>
      <button>
        <Link to='/Cook'>Cook</Link>
      </button>
    </div>
  );
};

export default Home;
