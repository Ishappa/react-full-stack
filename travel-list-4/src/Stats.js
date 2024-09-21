export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to packing list..🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? " 🧳️you got everything!.. Ready to Go ✈️"
          : `🧳️ You have ${numItems} items in your List, and you already packed
        ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
