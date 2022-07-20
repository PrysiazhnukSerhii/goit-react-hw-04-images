export function ButtonMore({ onClick, page }) {
  return (
    <button
      className="button "
      type="button"
      onClick={() => {
        onClick(page + 1);
      }}
    >
      More
    </button>
  );
}
