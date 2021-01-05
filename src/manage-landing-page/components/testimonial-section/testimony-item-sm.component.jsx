import avatarAli from '../../images/avatar-ali.png';
import avatarAnisha from '../../images/avatar-anisha.png';
import avatarRichard from '../../images/avatar-richard.png';
import avatarShanai from '../../images/avatar-shanai.png';

const avatars = {
    ali: avatarAli,
    anisha: avatarAnisha,
    richard: avatarRichard,
    shanai: avatarShanai
}

const TestimonyItemSm =({id, name, quote, imageUrl, onClick})=>{

    return (
        <div className="flex flex-col items-center ">
            <div className="w-full max-w-sm flex flex-col items-center text-center px-10 mb-24 border border-red-700">
            <img className="w-20 h-20 mb-6" src={avatars[imageUrl]} alt="avatar"/>
            <div className="w-full text-blue-900 text-lg font-bold mb-6">{name}</div>
            <div className="w-full text-blue-900 opacity-75">{quote}</div>
            </div>
            <div className="w-24 flex justify-evenly border border-black">
                <div onClick={()=>onClick(0)} className={`w-2 h-2 ${ 1 === id ? 'bg-red-500': 'border border-red-500' } rounded cursor-pointer`}></div>
                <div onClick={()=>onClick(1)} className={`w-2 h-2 ${ 2 === id ? 'bg-red-500': 'border border-red-500' } rounded cursor-pointer`}></div>
                <div onClick={()=>onClick(2)} className={`w-2 h-2 ${ 3 === id ? 'bg-red-500': 'border border-red-500' } rounded cursor-pointer`}></div>
                <div onClick={()=>onClick(3)} className={`w-2 h-2 ${ 4 === id ? 'bg-red-500': 'border border-red-500' } rounded cursor-pointer`}></div>
            </div>

        </div>
    )
}

export default TestimonyItemSm;

