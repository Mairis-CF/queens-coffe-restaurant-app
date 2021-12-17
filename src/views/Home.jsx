import '../render-app/App.css';
import './Home.css';
import { cover, coffeeBeans, coffeeCup, logo } from './index-views';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-section'>
     
      <div className='cover-img' >
        <img src={cover} alt='cover' />
      </div>

      <section className='home-btns-section'>
       
        <div className='home-logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='home-btns'>
          <button className='waiter-btn'>
            <img src={coffeeCup} alt='coffee cup' />
            <Link to='/Waiter'>Tables</Link>
          </button>

          <button className='cook-btn'>
            <img src={coffeeBeans} alt='coffee beans' />
            <Link to='/Cook'>Cook</Link>
          </button>
        </div>
      
      <p>Developed by <a href='https://github.com/Mairis-CF'>Mairis-CF</a> </p>
      </section>

    </section>
  );
};

export default Home;
