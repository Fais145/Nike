import headerLogo from '../assets/images/header-logo.svg'
import {hamburger} from '../assets/icons'
import { navLinks } from '../Constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex flex-row justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} 
                alt='logo'
                width={130} 
                height={29}>
                </img>
            </a>
            <ul className='flex flex-1 justify-center gap-16 items-center max-lg:hidden'>
                {navLinks.map((item)=>(
                  <li key={item.label}>
                    <a 
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            <div className='lg:hidden'>
            <img 
            src={hamburger}
            alt='hamburger menu'
            width={25}
            height={25}>
            </img>
            </div>
        </nav>
    </header>
  )
}

export default Nav