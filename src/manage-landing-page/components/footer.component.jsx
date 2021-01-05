import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconPinterest from '../images/icon-pinterest.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconYoutube from '../images/icon-youtube.svg';
import {ReactComponent as Logo} from '../images/logo.svg';

const socialMediaIcons = [ iconFacebook, iconYoutube, iconTwitter, iconPinterest, iconInstagram];
const navLinks1 = ['Home','Pricing','Products','About Us']
const navLinks2 = ['Careers','Community','Privacy Policy']

const Footer =()=>{
    return (
        <div className="relative w-full lg:pl-12 lg:pr-32 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-start py-12" style={{background: 'hsl(233, 12%, 13%)',color: 'hsl(0, 0%, 98%)'}}>
            <div className="w-full lg:w-1/5 flex lg:flex-col flex-col-reverse items-center justify-between">
                <Logo className="mb-12 stroke-current text-white"/>
                <div className="w-full max-w-sm inline-flex justify-evenly mb-12">
                    {
                        socialMediaIcons.map((icon, idx) =>(
                            <img className="transform scale-150 lg:scale-100  py-2" key={idx} src={icon} alt="icon"/>
                        ))
                    }
                </div>
            </div>
            <div className="w-full max-w-lg flex justify-around items-start mb-12 lg:mb-0">
                    <div>
                        {
                            navLinks1.map((link, idx)=>(
                                <div className="mb-3" key={idx}>{link}</div>
                            ))
                        }
                    </div>
                    <div>
                        {
                            navLinks2.map((link, idx)=>(
                                <div className="mb-3" key={idx}>{link}</div>
                            ))
                        }
                    </div>

            </div>
            <div className="w-full lg:w-2/5 flex flex-col items-end justify-start">
                <div className="w-full mb-12 flex justify-center lg:justify-end">
                    <input className="w-64 lg:w-auto px-4 py-3 rounded-full text-black text-sm outline-none mr-4" type="text" placeholder="Updates in your inbox…"/>
                    <button style={{background: 'hsl(12, 88%, 59%)'}} className="w-20 text-white font-bold px-4 py-3 rounded-full focus:outline-none transition duration-500 ease-in-out transform hover:scale-105">Go</button>
                </div>
                <div className="hidden lg:block text-xs">Copyright 2020. All Rights Reserved</div>
            </div>
            <div className="absolute lg:hidden -inset-y-0 text-base">Copyright 2020. All Rights Reserved</div>
        </div>
    )
}

export default Footer;

