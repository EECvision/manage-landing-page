const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

const Navigation =()=>{
    return (
        <div className="w-full max-w-md flex flex-col items-center bg-white shadow-2xl rounded border py-8 mb-12">
            {
                navLinks.map((navLink,idx)=>(
                    <div key={idx} className="cursor-pointer px-4 py-2 border-b-2 border-white hover:border-blue-800">{navLink}</div>
                ))
            }
        </div>
    )
}

export default Navigation;