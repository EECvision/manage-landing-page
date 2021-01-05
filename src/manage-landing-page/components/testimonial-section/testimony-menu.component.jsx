import {useState} from 'react';

import TestimonyItem from './testimony-item.component';
import TestimonyItemSm from './testimony-item-sm.component';

import testimonyData from './testimony-data.json';
import Button from '../button/button.component';

const TestimonyMenu =({width})=>{
    const [data] = useState(testimonyData);
    const [imageToDisplay, setImageToDisplay] = useState(0);

    const handleClick=(value)=>{
        setImageToDisplay(value)
    }

    return(
        <div className="w-full flex flex-col items-center mb-48 border border-blue-500">
            <div className="text-blue-900 text-4xl font-bold mb-20">
                What they’ve said
            </div>
            <div  className="mb-20">
                { width < 768 
                    ?
                    <div>
                        {
                            data
                            .filter((itm, idx)=>(idx === imageToDisplay))
                            .map ( datum =>(
                                <TestimonyItemSm key={datum.id} {...datum} onClick={handleClick}/>
                            ))
                        }
                    </div>
                    :
                    <div  className="flex justify-center mb-20">
                        {
                            data
                            .filter((itm, idx)=>(idx < 3))
                            .map(({id, ...otherProps})=>(
                                <TestimonyItem key={id} {...otherProps}/>
                            ))
                        }
                    </div>
                }
            </div>
            <Button/>
        </div>
    )
}

export default TestimonyMenu;