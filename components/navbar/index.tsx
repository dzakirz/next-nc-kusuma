import { HamburgerMenuIcon } from '../icons'

export default function Navbar() {
  return (
    <nav className='fixed z-50 flex items-center justify-between w-full h-16 px-4 bg-white shadow-md'>
      <div className='text-center'>
        <h2 className='text-xs font-bold text-primary'>Nutrition Club</h2>
        <h1 className='font-extrabold'>Kusuma</h1>
      </div>
      <div>
        <label
          htmlFor='my-drawer'
          className='drawer-button'
        >
          <HamburgerMenuIcon size={30} />
        </label>
      </div>
    </nav>
  )
}
