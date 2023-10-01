import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000);
  return <p>Page not found</p>;
};

export default NotFound;
