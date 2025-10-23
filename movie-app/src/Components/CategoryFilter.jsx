export default function CategoryFilter({ categories, setCategory }) {
  return (
    <select 
      onChange={(e) => setCategory(e.target.value)} 
      className="w-full p-2 border rounded mb-4"
    >
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}