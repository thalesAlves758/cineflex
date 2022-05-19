export default function Title({ children, greenColor = false }) {
  return (
    <div className={`title ${greenColor ? 'green' : ''}`}>
      { children }
    </div>
  );
}
