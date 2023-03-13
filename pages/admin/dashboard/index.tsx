import { AdminLayout } from '@/components/layouts'
import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <main className='w-full space-y-5 overflow-hidden'>
        <section className='text-sm breadcrumbs'>
          <ul>
            <li>
              <a>Admin</a>
            </li>
            <li>Dashboard</li>
          </ul>
        </section>
        <section className='p-4 bg-white shadow-md rounded-box'>
          <h1 className='mb-4 text-xl font-semibold'>Informasi Penjualan</h1>
          <div className='w-full text-center bg-white stats stats-vertical'>
            <div className='stat hover:bg-base-100'>
              <div className='stat-title'>Customer</div>
              <div className='stat-value'>149</div>
              <div className='stat-desc'>↗︎ 400 (22%)</div>
            </div>

            <div className='stat hover:bg-base-100'>
              <div className='stat-title'>Terjual</div>
              <div className='stat-value'>1.210</div>
              <div className='stat-desc'>Jan 1st - Feb 1st</div>
            </div>

            <div className='stat hover:bg-base-100'>
              <div className='stat-title'>Pesanan Selesai</div>
              <div className='stat-value text-success'>149</div>
              <div className='stat-desc'>↗︎ 400 (22%)</div>
            </div>

            <div className='stat hover:bg-base-100'>
              <div className='stat-title'>Pesanan Pending</div>
              <div className='stat-value text-error'>149</div>
              <div className='stat-desc'>↗︎ 400 (22%)</div>
            </div>
          </div>
        </section>
        <section className='p-4 bg-white shadow-md rounded-box'>
          <div className='flex items-center justify-between'>
            <h1 className='mb-4 text-xl font-semibold'>Pengumuman</h1>
            <Link
              href='/admin/create-announcment'
              className='-mt-4 btn btn-primary btn-sm'
            >
              buat
            </Link>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Hari Libur Nasional</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Kenaikan Harga Produk</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Promo Shaker Cantik</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </section>
        <section className='p-4 bg-white shadow-md rounded-box'>
          <div className='flex items-center justify-between'>
            <h1 className='mb-4 text-xl font-semibold'>Acara</h1>
            <Link
              href='/admin/create-event'
              className='-mt-4 btn btn-primary btn-sm'
            >
              buat
            </Link>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Slim Marathon Periode 9</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Piknik Pantai Wonosari</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className='bg-white collapse collapse-arrow rounded-box'
          >
            <div className='text-base font-medium collapse-title'>Slim Marathon Periode 8</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </section>
      </main>
    </AdminLayout>
  )
}
