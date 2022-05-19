import { Link } from 'react-router-dom';

import RenderIf from './utilities/RenderIf';

function MovieBox({ image, title, small = false }) {
  return (
    <div className={`movie ${small ? 'small' : ''}`}>
      <img src={image} alt={title} />
    </div>
  );
}

export default function Movie ({ id = null, image, title, small = false }) {
  return (
    <>
      <RenderIf isTrue={id}>
        <Link to={`/sessoes/${id}`}>
          <MovieBox image={image} title={title} small={small} />
        </Link>
      </RenderIf>

      <RenderIf isTrue={!id}>
        <MovieBox image={image} title={title} small={small} />
      </RenderIf>
    </>
  );
}
