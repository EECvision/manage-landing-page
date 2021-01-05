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
        <div className={`w-full flex items-center justify-between lg:justify-evenly px-6 lg:px-0 ${toggleNavbar ? 'py-12' : 'py-16'} lg:pb-24 `}>
            <Logo className=""/>
            {
                toggleNavbar 
                ?
                <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={iconClose} alt="icon"/>
                :
                <img onClick={()=>handleClick()} className="md:hidden cursor-pointer" src={iconHamburger} alt="icon"/>
            }
            <div className="hidden md:flex text-black text-sm border border-black">
                {
                    navLinks.map((navLink,idx)=>(
                        <span key={idx} className="border px-4 py-2 border-red-500">{navLink}</span>
                    ))
                }
            </div>
            <div className="hidden md:flex"><Button/></div>
        </div>
    )
}

export default Header;