import { ComponentWithChildren } from '@/types/props'
import Footer from '../footer'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

export default function AdminLayout({ children }: ComponentWithChildren) {
  return (
    <div className='drawer'>
      <input
        id='my-drawer'
        type='checkbox'
        className='bg-red-300 drawer-toggle'
      />
      <div className='drawer-content'>
        <Navbar />
        <div className='px-4 pt-20 pb-24 -z-50'>{children}</div>
        <Footer />
      </div>
      <Sidebar />
    </div>
  )
}
