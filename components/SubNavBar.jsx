import React,{useState, useEffect} from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

import {FaHome, FaSitemap} from 'react-icons/fa';
import {AiOutlineTeam} from 'react-icons/ai' 
import {MdOutlineContactSupport, MdOutlinePolicy} from 'react-icons/md'

import Link from 'next/link'



// ================================================
const SubNavBar = () => {


    const Style={
        position: 'relative',
        left: '-1px',
        top:'3px'
    }

    const [showMediaIcons, setShowMediaIcons] = useState(false);
// const [lat, setLat] = useState([]);
// const [long, setLong] = useState([]);
// const [data, setData] = useState([]);

// useEffect(() =>{

//     const fetchData = async () =>{
//     navigator.geolocation.getCurrentPosition(function(position){
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//     });


//      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
//     .then(res => res.json())
//     .then(result =>{
//         setData(result)
//         console.log(result)
//     })
// };
//     fetchData();
// }, [lat, long])

// return

  return (

   <>
    <nav className='main-nav'>

            <div className='hambergmenu' onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                <HiOutlineMenuAlt2 className='hamburgicon'/>
            </div>

        <div className={showMediaIcons ? "menu-link  mobile-menu-link" : "menu-link"}>

           
            <ul>
                <li className='navbtns' htmlFor='home'>
                    <Link href='/' htmlFor='home'> 
                        <a><FaHome size={20} style={Style}/>Home</a>
                    </Link>
                </li>
                
                <li className='navbtns'>
                    <Link href="/about/AboutUs">
                        <a><AiOutlineTeam size={20} style={Style}/>About Us</a>
                    </Link>
                </li>

                <li className='navbtns'>
                    <Link href="/about/ContactUs">
                        <a><MdOutlineContactSupport size={20} style={Style}/>Contact Us</a>
                    </Link>
                </li>

                <li className='navbtns'> 
                    <Link href="/about/PrivacyPolicy">
                        <a><MdOutlinePolicy size={20} style={Style}/>Privacy Policy</a>
                    </Link>
                </li>

            </ul>
        </div>

        <div className=''>
            {/*weather  */}
        </div>

    </nav>
   </>

  )
}

export default SubNavBar