export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn-primary">
      { children }
    </button>
  );
}
