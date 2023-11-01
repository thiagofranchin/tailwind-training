export function Menu() {
  return (
    <nav className="text-white">
      <ul className="flex h-full justify-center md:justify-end">
        <li className="h-full">
          <a
            href="#"
            className="flex h-full items-center p-4 hover:bg-slate-500"
          >
            Home
          </a>
        </li>
        <li className="h-full">
          <a
            href="#"
            className="flex h-full items-center p-4 hover:bg-slate-500"
          >
            About
          </a>
        </li>
        <li className="h-full">
          <a
            href="#"
            className="flex h-full items-center p-4 hover:bg-slate-500"
          >
            Services
          </a>
        </li>
        <li className="h-full">
          <a
            href="#"
            className="flex h-full items-center p-4 hover:bg-slate-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
