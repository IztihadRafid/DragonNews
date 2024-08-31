import { useEffect, useState } from "react";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import { SlCalender } from "react-icons/sl";
import moment from 'moment';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
   
    return (
        <div>
            <h2 className="text-2xl">Categories: {categories.length}</h2>
            <h1 className="text-2xl font-poppins font-semibold px-5 py-4 bg-pink-100 rounded-md">National News</h1>
            <div>
                <div>
                    {
                        categories.map(category => <li className="list-none text-2xl px-5 py-4 font-poppins" category={category} key={category.id}>{category.name}</li>)
                    }
                </div>
                <div className="mb-3">
                    <img src={img1} alt="" />
                    <p className="text-xl font-poppins font-semibold">Bayern slams authories Over Flight Delay to club World Cup</p>
                    <div className="flex items-center justify-between">
                    <p>Sports</p>
                    <SlCalender></SlCalender>
                    <p className='text-xl mb-2'>{moment().format(' MMMM D, YYYY')}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <img src={img2} alt="" />
                    <p className="text-xl font-poppins font-semibold">Bayern slams authories Over Flight Delay to club World Cup</p>
                    <div className="flex items-center justify-between">
                    <p>Sports</p>
                    <SlCalender></SlCalender>
                    <p className='text-xl mb-2'>{moment().format(' MMMM D, YYYY')}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <img src={img3} alt="" />
                    <p className="text-xl font-poppins font-semibold">Bayern slams authories Over Flight Delay to club World Cup</p>
                    <div className="flex items-center justify-between">
                    <p>Sports</p>
                    <SlCalender></SlCalender>
                    <p className='text-xl mb-2'>{moment().format(' MMMM D, YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;