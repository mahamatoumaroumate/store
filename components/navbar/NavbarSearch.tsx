'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
const NavbarSearch = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  )
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    replace(`/products?${params.toString()}`)
  }, 300)
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('')
    }
  }, [searchParams.get('search')])
  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
    />
  )
}
export default NavbarSearch
