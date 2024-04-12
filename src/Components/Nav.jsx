import headerLogo from '../assets/images/header-logo.svg'
// import {hamburger} from '../assets/icons'

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
            <ul className='flex flex-1 justify-center items-center max-lg:hidden'>
                <p>h</p>
            </ul>
            {/* <img src={hamburger}></img> */}
        </nav>
    </header>
  )
}

export default Nav