import {ReactComponent as Logo} from '../images/logo.svg'
import iconHamburger from '../images/icon-hamburger.svg';
import iconClose from '../images/icon-close.svg';

import Button from './button/button.component';

const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

const Header =({toggleNavbar, clickToggleNavbar })=>{

    const handleClick=()=>{
        clickToggleNavbar()
    }

    return (
        <div className={`w-full flex items-center justify-between px-4 lg:px-32 ${toggleNavbar ? 'py-12' : 'py-16'} lg:pb-24 `}>
            <Logo className=""/>
            {
                toggleNavbar 
                ?
                <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={iconClose} alt="icon"/>
                :
                <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={iconHamburger} alt="icon"/>
            }
            <div className="hidden md:flex text-black text-sm">
                {
                    navLinks.map((navLink,idx)=>(
                        <span key={idx} className="cursor-pointer px-4 py-2 border-b-2 border-white hover:border-blue-800">{navLink}</span>
                    ))
                }
            </div>
            <div className="hidden md:flex"><Button/></div>
        </div>
    )
}

export default Header;