export default function Sidebar() {
  return (
    <aside className='drawer-side'>
      <label
        htmlFor='my-drawer'
        className='drawer-overlay'
      ></label>
      <ul className='flex flex-col justify-center gap-4 px-4 menu w-80 bg-base-100 text-base-content'>
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </aside>
  )
}
