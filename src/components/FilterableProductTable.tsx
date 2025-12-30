import { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { IProduct } from '@src/type/Product'

interface FilterableProductTableProps {
  products: IProduct[];
}

export default function FilterableProductTable({ products }: FilterableProductTableProps) {

  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <h1>Filterable Product Table</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  )
}