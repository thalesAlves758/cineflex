export default function Movie ({ image, title }) {
  return (
    <div className="movie">
      <img src={image} alt={title} />
    </div>
  );
}
