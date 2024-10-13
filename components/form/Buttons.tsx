'use client'
import { SignInButton } from '@clerk/nextjs'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ReloadIcon } from '@radix-ui/react-icons'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
type btnSize = 'default' | 'lg' | 'sm'
type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

const SubmitButton = ({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        </>
      ) : (
        text
      )}
    </Button>
  )
}
export default SubmitButton

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      {pending ? (
        <ReloadIcon className='animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  )
}
