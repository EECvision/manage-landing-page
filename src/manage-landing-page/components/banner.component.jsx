// import BgDesktop from '../images/bg-simplify-section-desktop.svg';
import illustrationIntro from '../images/illustration-intro.svg';
import Button from './button/button.component';
import Navigation from './navlink.component';

const Banner =({toggleNavbar, width})=>{
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center mb-24">
            <div className="w-full lg:max-w-lg flex flex-col  items-center lg:items-start justify-evenly">
                <h1 className="mb-4 lg:mb-12 text-center lg:text-left text-4xl sm:text-5xl text-blue-900 font-bold leading-tight">Bring everyone <br/> together to build <br/> better products.</h1>
                <p className="w-full max-w-xs mb-8 lg:mb-12 px-2 sm:px-0 text-center lg:text-left text-gray-700">
                    Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                </p>
                <Button/>
            </div>
            {
                toggleNavbar && width <= 768
                ?
                <Navigation/>
                :
                <img className="w-full max-w-xl" src={illustrationIntro} alt="illustration"/>
            }
        </div>
    )
}

export default Banner;
