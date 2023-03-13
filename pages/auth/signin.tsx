import Image from 'next/image'

export default function SigninPage() {
  return (
    <div className='w-10/12 px-4 py-10 space-y-2 bg-white rounded-lg shadow-lg'>
      <header className='px-6 mb-6 font-extrabold text-center'>
        <h2 className='-mb-1 text-2xl text-primary'>Nutrition Club</h2>
        <h1 className='text-3xl'>Kusuma</h1>
      </header>
      <main className='space-y-4'>
        <div className='shadow-lg alert alert-error'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='flex-shrink-0 w-6 h-6 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='text-sm'>Password atau Email salah</span>
          </div>
        </div>
        <form className='space-y-4'>
          <div className='flex flex-col space-y-1'>
            <label
              htmlFor='email'
              className='font-medium'
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Masukkan Email'
              className='w-full max-w-full input input-bordered input-secondary input-md'
            />
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
              className='w-full max-w-full input input-bordered input-secondary input-md'
            />
          </div>
          <div className='flex flex-col w-full border-opacity-50'>
            <button
              type='submit'
              className='text-base font-extrabold btn btn-primary btn-md'
            >
              Masuk
            </button>
            <div className='divider'>Masuk atau Mendaftar</div>
            <div className='flex items-center justify-center gap-2 font-bold btn btn-secondary btn-md'>
              <Image
                src='/google.svg'
                width={20}
                height={20}
                alt='google'
              />
              <p>Dengan Google</p>
            </div>
          </div>
        </form>
      </main>
      <footer className='text-xs text-center'>
        <p>
          Anda dapat <span className='font-semibold'>Masuk</span> atau <span className='font-semibold'>Mendaftar</span>{' '}
          dengan akun <span className='font-semibold underline'>Google</span>
        </p>
      </footer>
    </div>
  )
}
