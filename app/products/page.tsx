import ProductsContainer from '@/components/products/ProductsContainer'

const Products = async ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string }
}) => {
  const layout = searchParams.layout || 'grid'
  const search = searchParams.search || ''
  return <ProductsContainer layout={layout} search={search} />
}
export default Products
