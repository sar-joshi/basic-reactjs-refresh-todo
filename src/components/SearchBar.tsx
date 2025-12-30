interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: (filterText: string) => void;
  setInStockOnly: (inStockOnly: boolean) => void;
}

export default function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }: SearchBarProps) {
  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }

  const handleInStockOnlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInStockOnly(e.target.checked);
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <label>
        <input 
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockOnlyChange}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}