import LoginForm from '../Components/LoginForm'

export default function Login() {
  window.scrollTo(0, 0);
  return (
    <div className='w-[100%] h-[100%] bg-primary'>
      {/* Left image side */}
        <div className='w-full h-16 bg-transparent flex items-center justify-between px-10 mb-[4.7rem]'>
            <img src="/logo.svg" alt="logo" className='w-8 md:w-10 text-white' />
            <img  src="/sun.svg" alt="sun_logo" className='w-4 md:w-6 cursor-pointer hover:rotate-12' />
        </div>
        <div className='flex-col flex md:flex-row w-full h-full'>
          <div className='w-full md:w-[50%] h-[100%] bg-transparent flex justify-center items-center'>
            <img src="/Screenshot 2024-01-05 124813.png" alt="" className='w-[60%] md:w-[80%] h-auto'/>
          </div>
          {/* Login form side */}
          <div className='w-full md:w-[50%] h-[100%] bg-transparent p-16 gap-14 flex flex-col justify-between items-center'>
            <p className='text-center text-sm md:text-lg text-white'>"Welcome to the future of restaurant reporting! We're serving up a approach to streamline your restaurant management, marketing data delicious easy to digest."</p>
            <LoginForm/>
          </div>
        </div>
    </div>
  )
}
