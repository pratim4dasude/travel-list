export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start Packing </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All Set to GO !!!"
          : `You have ${numItems} item on list already Packed ${numPacked} [ ${percentage}% ]`}
      </em>
    </footer>
  );
}
