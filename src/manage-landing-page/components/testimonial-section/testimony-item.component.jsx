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

const TestimonyItem =({name, quote, imageUrl})=>{
    return (
        <div style={{background: 'hsl(0, 0%, 98%)'}} className="w-1/3 flex flex-col items-center text-center px-2 border border-red-700">
            <img className="w-20 h-20 transform -translate-y-1/2" src={avatars[imageUrl]} alt="avatar"/>
            <div className="w-full text-blue-900 text-lg font-bold mb-6">{name}</div>
            <div className="w-full max-w-md text-blue-900 opacity-75">{quote}</div>
        </div>
    )
}

export default TestimonyItem;

