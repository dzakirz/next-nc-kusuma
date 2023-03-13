export default function SignupPage() {
  return (
    <div className='w-10/12 px-4 py-10 space-y-2 bg-white rounded-lg shadow-lg'>
      <header className='px-6 mb-6 font-extrabold text-center'>
        <h2 className='-mb-1 text-2xl text-primary'>Nutrition Club</h2>
        <h1 className='text-3xl'>Kusuma</h1>
      </header>
      <main className='space-y-4'>
        <div className='shadow-lg alert alert-info'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='flex-shrink-0 w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span className='text-sm'>Selesaikan Pembuatan Akun</span>
          </div>
        </div>
        <form className='space-y-4'>
          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='name'
              className='font-medium'
            >
              Nama Lengkap
            </label>
            <input
              disabled
              type='text'
              id='name'
              name='name'
              value='Dzaki Rozaan'
              className='w-full max-w-full input input-borderedi input-secondary input-md'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='email'
              className='font-medium'
            >
              Email
            </label>
            <input
              disabled
              type='text'
              id='email'
              name='email'
              value='Dzaki@gmail.com'
              className='w-full max-w-full input input-borderedi input-secondary input-md'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='password'
              className='font-medium'
            >
              Alamat
            </label>
            <textarea
              className='w-full textarea textarea-bordered textarea-secondary'
              placeholder='Masukkan Alamat'
            />
          </div>
          <div className='flex w-full gap-4'>
            <div className='flex flex-col flex-1 space-y-1'>
              <label
                htmlFor='city'
                className='font-medium'
              >
                Kota
              </label>
              <input
                type='city'
                id='city'
                name='city'
                placeholder='Kota'
                className='w-full max-w-full input input-borderedi input-secondary input-md'
              />
            </div>
            <div className='flex flex-col flex-1 space-y-1'>
              <label
                htmlFor='postcode'
                className='font-medium'
              >
                Kodepos
              </label>
              <input
                type='postcode'
                id='postcode'
                name='postcode'
                placeholder='Kodepos'
                className='w-full max-w-full input input-borderedi input-secondary input-md'
              />
            </div>
          </div>
          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='password'
              className='font-medium'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Masukkan Password'
              className='w-full max-w-full input input-borderedi input-secondary input-md'
            />
          </div>

          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='confpassword'
              className='font-medium'
            >
              Konfirmasi Password
            </label>
            <input
              type='confpassword'
              id='confpassword'
              name='confpassword'
              placeholder='Masukkan Konfirmasi Password'
              className='w-full max-w-full input input-borderedi input-secondary input-md'
            />
          </div>
          <button
            type='submit'
            className='w-full text-base font-extrabold btn btn-primary btn-md'
          >
            Mendaftar
          </button>
        </form>
      </main>
      <footer className='text-center link link-secondary'>
        <p>Kembali</p>
      </footer>
    </div>
  )
}
