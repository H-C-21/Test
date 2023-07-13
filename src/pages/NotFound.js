
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Import the CSS file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <p className="not-found-text"><Link to='/'><div className='link2'>Go Back To Home</div></Link></p>
    </div>
  );
};

export default NotFoundPage;