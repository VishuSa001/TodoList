import React from 'react'

export default function Footer() {

let footerStyle={
  position: "relative",
  top:"70vh",
  width:"100%"
} 

  return (
    <footer className='bg-dark text-light  my-2  py-3' style={footerStyle}>
<p className='text-center mx-2'>
No Copyright &copy : MyTodosList!
</p>
    </footer>
  )
}
