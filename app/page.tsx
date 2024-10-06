import LoadingContainer from '@/components/global/LoadingContainer'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />} />
      <FeaturedProducts />
    </>
  )
}
export default Home
