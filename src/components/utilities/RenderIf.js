export default function ({ children, isTrue }) {
  return (
    <>
      { isTrue ? children : null }
    </>
  );
}
