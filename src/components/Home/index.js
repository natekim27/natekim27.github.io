import { Link } from 'react-router-dom';
import './index.scss';
import background from '../../assets/images/background.jpeg';

const Home = () => {
    const homeStyles = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    }

    return (
        <div className="home-page" style={homeStyles}>
            <div className="text-zone" style={{left: '30%'}}>
                <h1>
                    Nate Kim
                </h1>
                <h2>Computer Science @ Georgia Institute of Technology</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home