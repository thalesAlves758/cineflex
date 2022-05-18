export default function Movie ({ id = null, image, title, small = false }) {
  return (
    <div className={`movie ${small ? 'small' : ''}`}>
      <img src={image} alt={title} />
    </div>
  );
}
