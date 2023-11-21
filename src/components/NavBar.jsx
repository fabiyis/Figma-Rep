import { Navbar } from 'flowbite-react';

function NavBar() {
  return (
    <Navbar fluid rounded className='bg-white fixed z-30 w-full'>
      <Navbar.Brand href=".">
        <div className='mr-3 h-6 w-10 sm:h-9 bg-blue-600 rounded-full flex justify-center items-center'>
          <h1 className='text-white'>T</h1>
        </div>
        <span className="self-center whitespace-nowrap text-l font-normal dark:text-white">Trafalgar</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='text:var(--1f1534-hyphen, #1F1534)'>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Find a doctor</Navbar.Link>
        <Navbar.Link href="#">Apps</Navbar.Link>
        <Navbar.Link href="#">Testimonials</Navbar.Link>
        <Navbar.Link href="#">About us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar;
