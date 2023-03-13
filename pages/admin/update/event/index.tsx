import { AdminLayout } from '@/components/layouts'
import Link from 'next/link'

export default function CreateEventPage() {
  return (
    <AdminLayout>
      <section className='text-sm breadcrumbs'>
        <ul>
          <li>
            <a>Admin</a>
          </li>
          <li>Ubah Acara</li>
        </ul>
      </section>
      <section className='px-4 py-6 space-y-2 bg-white shadow-md rounded-box '>
        <header className='mb-6 font-semibold text-center'>
          <h1 className='-mb-1 text-xl'>Mengubah Acara</h1>
        </header>
        <main className='space-y-4'>
          <form className='space-y-4'>
            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='title'
                className='font-medium'
              >
                Judul
              </label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Masukkan Judul Pengumuman'
                className='w-full max-w-full input input-borderedi input-secondary input-md'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='desc'
                className='font-medium'
              >
                Detail
              </label>
              <textarea
                id='desc'
                name='desc'
                className='w-full textarea textarea-bordered textarea-secondary'
                placeholder='Masukkan Detail Pengumuman'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='startdate'
                className='font-medium'
              >
                Tanggal Mulai
              </label>
              <input
                type='date'
                id='startdate'
                name='startdate'
                placeholder='Masukkan Judul Pengumuman'
                className='w-full max-w-full input input-borderedi input-secondary input-md'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='enddate'
                className='font-medium'
              >
                Tanggal Selesai
              </label>
              <input
                type='date'
                id='enddate'
                name='enddate'
                placeholder='Masukkan Judul Pengumuman'
                className='w-full max-w-full input input-borderedi input-secondary input-md'
              />
            </div>
            <button
              type='submit'
              className='w-full text-base font-extrabold btn btn-primary btn-md'
            >
              Ubah Acara
            </button>
          </form>
        </main>
        <footer className='text-center'>
          <Link
            href='/admin/dashboard'
            className='link link-secondary'
          >
            Kembali
          </Link>
        </footer>
      </section>
    </AdminLayout>
  )
}
