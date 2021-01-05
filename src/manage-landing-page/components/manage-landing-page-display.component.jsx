import {useState} from 'react';

import Banner from './banner.component';
import Header from './header.component';
import AboutMenu from './about-section/about-menu.component';
import TestimonyMenu from './testimonial-section/testimony-menu.component';
import Values from './values.component';
import Footer from './footer.component';
import useScreenWidth from './withScreenWidth-HOC.component';

const ManageDisplay =()=>{
    const {width} = useScreenWidth();

    const [toggleNavbar, setToggleNavbar] = useState(false);

    const handleClick=()=>{
        setToggleNavbar(!toggleNavbar)
    }

    return (
        <div className="flex flex-col items-center">
            {
                toggleNavbar && width <= 768 
                ?
                <>
                    <Header toggleNavbar={toggleNavbar} clickToggleNavbar={handleClick}/>
                    <Banner toggleNavbar={toggleNavbar} width={width}/>
                </>
                :
                <>
                    <Header toggleNavbar={toggleNavbar} clickToggleNavbar={handleClick}/>
                    <Banner toggleNavbar={toggleNavbar} width={width}/>
                    <AboutMenu/>
                    <TestimonyMenu width={width}/>
                    <Values/>
                    <Footer/>
                </>
            }
        </div>
    )
}

export default ManageDisplay;