import { AdminLayout } from '@/components/layouts'
import Link from 'next/link'

export default function CreateAnnouncmentPage() {
  return (
    <AdminLayout>
      <section className='text-sm breadcrumbs'>
        <ul>
          <li>
            <a>Admin</a>
          </li>
          <li>Ubah Pengumuman</li>
        </ul>
      </section>
      <section className='px-4 py-6 space-y-2 bg-white shadow-md rounded-box '>
        <header className='mb-6 font-semibold text-center'>
          <h1 className='-mb-1 text-xl'>Mengubah Pengumuman</h1>
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
            <button
              type='submit'
              className='w-full text-base font-extrabold btn btn-primary btn-md'
            >
              Ubah Pengumuman
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
