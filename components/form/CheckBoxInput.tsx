'use client'

import { Checkbox } from '../ui/checkbox'

type CheckBoxInputProps = {
  name: string
  label: string
  defaultChecked?: boolean
}
const CheckBoxInput = ({
  name,
  label,
  defaultChecked = false,
}: CheckBoxInputProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize'
      >
        {label}
      </label>
    </div>
  )
}
export default CheckBoxInput
