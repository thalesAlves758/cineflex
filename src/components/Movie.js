import { Link } from 'react-router-dom';

export default function Movie ({ id = null, image, title, small = false }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <div className={`movie ${small ? 'small' : ''}`}>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
}
