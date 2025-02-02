import { FaStar } from 'react-icons/fa'

const ProductRating = async ({ productId }: { productId: string }) => {
  const rating = 4.2
  const count = 25
  const className = `flex gag-1 items-center text-md mt-1 mb-4`
  const countValue = `(${count}) reviews`
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue + productId}
    </span>
  )
}
export default ProductRating
