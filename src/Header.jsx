import Image1 from './assets/react.png'

function Header() {
  return (
    <div className='flex justify-center'>
        <img className='w-40 mr-6 mt-6' src={Image1} alt='ImageOne'/>
        <h1 className='mt-20 text-8xl text-white font-mono'>The React Quize</h1>
    </div>
  )
}
export default Header