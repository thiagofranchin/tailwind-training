export function Menu() {
  return (
    <nav className="text-white">
      <ul className="flex md:justify-end justify-center h-full">
        <li className='h-full'>
          <a href="#" className='hover:bg-slate-500 flex h-full items-center p-4'>Home</a>
        </li>
        <li className='h-full'>
          <a href="#" className='hover:bg-slate-500 flex h-full items-center p-4'>About</a>
        </li>
        <li className='h-full'>
          <a href="#" className='hover:bg-slate-500 flex h-full items-center p-4'>Services</a>
        </li>
        <li className='h-full'>
          <a href="#" className='hover:bg-slate-500 flex h-full items-center p-4'>Blog</a>
        </li>
        <li className='h-full'>
          <a href="#" className='hover:bg-slate-500 flex h-full items-center p-4'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}