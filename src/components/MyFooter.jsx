import { Footer } from 'flowbite-react';


function MyFooter() {
  return (
    <Footer container className='bg-blue-400'>
      <div className="w-full">
        <div className=" justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className=' flex justify-center pl-32'>
            <div className='mr-3 h-6 w-10 sm:h-9 bg-white rounded-full flex justify-center items-center'>
              <h1 className='text-blue-400 font-bold h-6 '>T</h1>
            </div>
            <div>
               <p className=" font-semibold text-white mt-1">Trafalgar</p>
            </div>
            <div className='mt-8 sm:mt-14 sm:ml-6'>
               <p className=' -ml-24 text-white text-xs '> Trafalgar provides progressive, and<br/>affordable healthcare, accessible on<br/> mobile and online 
                 for everyone</p>
               <div className=' mt-5 mb-3'>
                 <p className='-ml-24 text-xs text-white'>©Trafalgar PTY LTD 2020. All rights reserved </p>
               </div>
            </div>
          </div>
          <div className=" text-white grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Company" className='text-white' />
              <Footer.LinkGroup col className=' text-white'>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Testimonials</Footer.Link>
                <Footer.Link href="#">Find a Doctor</Footer.Link>
                <Footer.Link href="#">Apps</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Regions" className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Indonesia</Footer.Link>
                <Footer.Link href="#">Singapore</Footer.Link>
                <Footer.Link href="#">Hongkong</Footer.Link>
                <Footer.Link href="#">Canada</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Help" className=' text-white' />
              <Footer.LinkGroup col className=' text-white'>
                <Footer.Link href="#">Help centre</Footer.Link>
                <Footer.Link href="#">Contact Support</Footer.Link>
                <Footer.Link href="#">Instruction</Footer.Link>
                <Footer.Link href="#">How it works</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
          <div className=' hidden sm:block -ml-7 -mb-7'>
            <img src={'../images/last e.svg'} />
          </div>
      </div>
    </Footer>
  );
}

export default MyFooter;