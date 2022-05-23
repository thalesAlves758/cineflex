export default function Button({ children, onClick = null}, type = "button") {
  return (
    <button onClick={onClick} className="btn-primary">
      { children }
    </button>
  );
}
