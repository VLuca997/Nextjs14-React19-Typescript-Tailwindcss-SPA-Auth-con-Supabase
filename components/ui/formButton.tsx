'use client'
import React from 'react'
import { Button } from './button'
import { useFormStatus } from 'react-dom'
import { CgSpinner } from 'react-icons/cg'


interface FormButtonProps {
 text: string,
}
const FormButton = ({ text }:FormButtonProps) => {
  const {pending} = useFormStatus()
  return (
  <Button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
  >
    {text}{pending && <CgSpinner/>}
  </Button>
  )
}

export default FormButton