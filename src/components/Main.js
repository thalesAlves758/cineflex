export default function Main ({ children, withMarginBottom = false }) {
  return (
    <main className={`${withMarginBottom ? 'margin-bottom' : ''}`}>
      { children }
    </main>
  );
}
