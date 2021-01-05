import {useState} from 'react';

import AboutItem from './about-item.component';

import Aboutdata from './data.json';

const AboutMenu =()=>{
    const [data] = useState(Aboutdata);

    return(
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start mb-24 px-6">
            <div className="w-full max-w-lg flex flex-col items-center lg:items-start mb-8">
                <h1 className="w-full max-w-md mb-8 lg:mb-12 text-center lg:text-left text-4xl sm:text-4xl text-blue-900 font-bold leading-tight">What’s different about Manage?</h1>
                <p className="w-full max-w-xs mb-8 lg:mb-12 px-2 sm:px-0 text-center lg:text-left text-blue-900 opacity-75">
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                </p>
            </div>
            <div className="w-full max-w-xl">
                {
                    data.map(({id, ...otherProps})=>(
                        <AboutItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        </div>
    )
}



export default AboutMenu;