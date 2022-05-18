export default function Seat({ name = null, isAvailable, selected = false }) {
  return (
    <div className={`seat ${!isAvailable ? 'unavailable' : ''} ${selected ? 'selected' : ''}`}>
      { name }
    </div>
  );
}
