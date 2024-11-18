// components/Navbar.tsx
import Link from 'next/link'
import LogoIcon from './logo/LogoIcon'
import MenuIcon from './icons/MenuIcon'
import ArrowIcon from './icons/ArrowIcon'

const Navbar = () => {
  return (
    <div className="fixed z-[9999] flex w-full items-center justify-center">
      {/* Apply frosted glass effect to the navbar, including border */}
      <div className="mt-4 flex w-11/12 gap-6 rounded-2xl border border-solid border-white/20 bg-gray-800 p-1 shadow-xl md:w-fit backdrop-blur-lg bg-white/10">
        <div className="flex h-9 w-full items-center justify-between gap-0 md:justify-start">
          <Link href="/">
            <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500">
              <div style={{ ease: 'easeOut', duration: '0.2px', type: 'tween', transform: 'none' }}>
                <LogoIcon />
              </div>
            </div>
          </Link>
          <div className="flex h-full w-fit items-center gap-x-2 md:hidden">
            <nav className="flex h-9 w-9 items-center justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-gray-700/[0.8]">
                <MenuIcon />
              </div>
            </nav>
          </div>
          <div className="hidden md:inline">
            <div className="flex cursor-default items-center">
              <span className="body-small flex h-full items-center px-3 text-white">Product</span>
              <div className="-ml-2" style={{ transform: 'rotate(180deg) translateZ(0)' }}>
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div className="hidden md:inline">
            <div className="flex cursor-default items-center">
              <span className="body-small flex h-full items-center px-3 text-white">Resources</span>
              <div className="-ml-2" style={{ transform: 'rotate(180deg) translateZ(0)' }}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

