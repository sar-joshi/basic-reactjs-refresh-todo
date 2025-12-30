import { IProduct } from "@src/type/Product";

interface ProductRowProps {
  product: IProduct;
}

export default function ProductRow({ product }: ProductRowProps) {
  const styledName = product.stocked ? product.name : 
    <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr>
      <td>{styledName}</td>
      <td>{product.price}</td>
    </tr>
  )
}