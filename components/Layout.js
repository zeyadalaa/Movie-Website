
import { Inter } from 'next/font/google'

import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout(props) {
  return (
    <>
    <Navbar/>
        {props.children}
    
    </>
  )
}
