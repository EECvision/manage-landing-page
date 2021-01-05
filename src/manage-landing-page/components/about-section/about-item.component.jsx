

const AboutItem =({index, title, subtitle})=>{
    return (
        <div className="w-full flex flex-col mb-12">
            <div className={`w-full lg:bg-white bg-red-100 flex justify-start items-center mb-6`}>
                <div style={{background: 'hsl(12, 88%, 59%)'}} className="w-16 text-white text-center font-bold rounded-full px-4 py-2 mr-8">{index}</div>
                <div className="text-lg text-blue-900 font-bold pt-0 lg:pt-2">{title}</div>
            </div>
            <div className="text-blue-900 opacity-75 pl-24">{subtitle}</div>
        </div>
    )
}
export default AboutItem;
