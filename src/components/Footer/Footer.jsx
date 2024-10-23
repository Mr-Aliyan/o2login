import React from 'react'
import { IoStorefrontOutline } from "react-icons/io5";
import { LuRadioTower } from "react-icons/lu";
import { FaRegUser,FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BiSearch } from 'react-icons/bi';

const Footer = () => {
    const Data1= [{
        "id": 1,
        "icon": <IoStorefrontOutline/>,
        "title": "Find a store",
    },
    {
        "id": 2,
        "icon": <LuRadioTower/>,
        "title":"Check our network"
    },
    {
        "id": 3,
        "icon": <FaRegUser/>,
        "title": "Sign in to My O2"
    },
    {
        "id": 4,
        "icon": <SlBasket/>,
        "title": "Track my order"
    },
    {
        "id": 5,
        "icon": <BiSearch/>,
        "title": "Search",
    }
    ]
    const Data2= [
        "iPhone 15 Pro Max",
        "iPhone 15 Pro",
        "iPhone 15",
        "Apple Watch Series 9",
        "Apple iPad Pro 13 inch M4",
        "Samsung Galaxy S24 Ultra",
        "Samsung Galaxy S24",
        "Samsung Galaxy Z Fold6",
        "Samsung Galaxy Z Flip6",
        "Google Pixel 8 Pro",
        "irgin Media broadband deals"
    ]
    const Data3= [
        "Help home",
        "Contact us",
        "My O2",
        "Collection and delivery",

    ]
    const Data3_2=[
        "Phones",
        "Tablets",
        "Pay Monthly Sim",
        "Pay As You Go Sim",
        "Virgin Media O2 Joint Venture"
    ] 
    const social = [
        <FaFacebook/>,
        <FaYoutube/>,
        <FaTwitter/>,
        <FaInstagram/>

    ]
    const footer_links1 = [
        "About O2",
        "Better Connections Plan", 
        "Careers",
        "News & PR",
        "Sponsorship",
        " Virgin Media and O2"
    ]
    const footer_links2 = [
        "Accessibility ",
        "Terms & Conditions",
        "Privacy policy",
        " Cookie policy ",
        " Modern Slavery Statement",
        "© 2024 Telefónica UK Limited"
    ]
   

  return (
    <div className='flex justify-center items-center
     w-full bg-gradient-to-b from-blue-950 to-blue-800
    '>
        <div className="container  w-full h-full">
            <div className="row mx-5 lg:px-40 md:my-10 my-6 lg:my-10
            ">

           <div className="flex md:justify-center  w-full h-full bg-bubble bg-no-repeat bg-right-bottom">

           <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-10 ">
            <div className=" w-full h-full lg:mt-8">
                {Data1.map((item)=>(
                    <div key={item.id} className="flex justify-start m-2 gap-3 md:m-4 md:gap-5 items-center">
                        <span className=' md:text-sm text-xl lg:text-xl text-white  border-white border-2 rounded-full p-2'>{item.icon}</span>
                        <span className='text-white md:text-sm lg:text-xl'>
                            <a href="/">{item.title}</a>
                        </span>
                    </div>
                ))} 
                
            </div>
            <div className="w-full my-7 h-full"> 
                <h3 className='text-white  text-xl'>
                Popular in shop
                </h3>
                <div className="text-white">
                    {Data2.map((item,i)=>(
                        <div key={i} className="flex mt-3 justify-start items-center">
                            <a href='/' className='text-white md:text-sm lg:text-lg'>{item}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full my-5"> 
            <h3 className='text-white text-xl'>
            Help and support
                 </h3>
                <div className="text-white mt-5">
                    {Data3.map((item,i)=>(
                        <div key={i} className="flex my-2 justify-start items-center">
                            <a  href='/' className='text-white md:text-sm lg:text-lg'>{item}</a>
                        </div>
                    ))}

                </div>
                <h3 className='text-white mt-5 text-2xl'>
            Shop
                 </h3>
                 <div className="text-white mt-5">
                    {Data3_2.map((item,i)=>(
                        <div key={i} className="flex my-2 justify-start items-center">
                            <a href='/' className='text-white md:text-sm lg:text-lg'>{item}</a>
                        </div>
                    ))}

                </div>
            </div>
           </div>

           
           </div>
          
                   <div className="wrapper md:mx-8 lg:mx-48">
               <div  className="flex justify-start gap-10 items-center mt-5">
            {social.map((item,i)=>(
 <h3 key={i} className='text-white md:text-2xl lg:text-3xl'>
    <a href="/">
               {item}
    </a>
            </h3>
            ))}
            </div>

            <div className="footer_links1 mt-5">
                {footer_links1.map((item,i)=>(
                    <span key={i} className='text-white text-sm'>
                        <a href="/">
                        {item}
                        </a>
                        <span> | </span>
                    </span>
                ))}
            </div>
           
       
            <div className="footer_links2 mt-1">
                {footer_links2.map((item,i)=>(
                    <span key={i} className='text-white text-sm'>
                        <a href="/">
                        {item}
                        </a>
                        <span> | </span>
                    </span>
                ))}
            </div>


            </div>

            <div className="footer_links3 mt-1 text-white text-sm lg:pl-48 md:pl-8">
            In relation to consumer credit, Telefónica UK Limited is authorised and regulated by the Financial Conduct Authority (Reference Number 718822)
            </div>

            </div>
        </div>
    </div>
  )
}

export default Footer