import Button from './button/button.component';

const Values =()=>{
    return (
        <div style={{background: 'hsl(12, 88%, 59%)'}} className="w-full flex flex-col lg:flex-row justify-between items-center font-sans lg:pl-12 lg:pr-32 py-12">
            <div className="w-full lg:max-w-lg mb-8 text-center lg:text-left text-white text-4xl font-bold">
                Simplify how your team works today.
            </div>
            <div className="mb-10"><Button inverted/></div>
        </div>
    )
}

export default Values