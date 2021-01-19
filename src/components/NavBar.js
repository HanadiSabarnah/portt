import React from "react"
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
import { FaAlignJustify } from "react-icons/fa";

export default function NavBar() {
  const [state, setState] = React.useState(true);
  return (

    <nav class="flex items-center  justify-between flex-wrap bg-blue-300 p-6  ">
     
      <div class="flex items-center flex-no-shrink  mr-6">
        

        <Link to="/" exact>
          <span class="text-5xl  cursive tracking-widest hover:text-white mr-4">Hanadi</span>

        </Link>

      </div>
      
      { state ? (

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link to="/post" class="block mt-4 lg:inline-block lg:mt-0   text-2xl hover:text-white mr-4">
            Blogs
        </Link>
          <Link to="/project" class="block mt-4 lg:inline-block lg:mt-0 text-2xl hover:text-white mr-4">
            Projects
        </Link>
          <Link to="/about" class="block mt-4  lg:inline-block lg:mt-0 text-2xl hover:text-white">
            About Me !
        </Link>
        </div>
        <div className="inline-flex ">
          <SocialIcon url="https://github.com/HanadiSabarnah?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://www.linkedin.com/in/hanadi-sabarnah-a477971b6/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />


        </div>


      </div>
       ):''
      }
      <div className="toggle " onClick={() => setState(!state)}>
          <FaAlignJustify className="block lg:hidden "/>
      </div>
     
    </nav>


  )
}


// import React from 'react'
// import { Link } from 'react-scroll';
// import { FaAlignJustify } from "react-icons/fa";
// function Navbar() {

//     const [state, setState] = React.useState(true);

//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="navbar__container">
//                     { state ? (
//                         <ul className="navbar__right">
//                             <li>
//                                 <Link
//                                     to="home"
//                                     activeClass="active"
//                                     spy={true}
//                                     smooth={true}
//                                 >
//                                     HomePage
//     </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     to="ser"
//                                     activeClass="active"
//                                     spy={true}
//                                     smooth={true}
//                                 >
//                                     Portfolio
//     </Link>

//                             </li>
//                             <li>
//                                 <Link
//                                     to="tecn"
//                                     activeClass="active"
//                                     spy={true}
//                                     smooth={true}
//                                 >
//                                     Technical skills
//     </Link>

//                             </li>
//                             <li>
//                                 <Link
//                                     to="about"
//                                     activeClass="active"
//                                     spy={true}
//                                     smooth={true}
//                                 >
//                                     About
//     </Link>

//                             </li>
//                             <li>
//                                 <Link
//                                     to="contact"
//                                     activeClass="active"
//                                     spy={true}
//                                     smooth={true}
//                                 >
//                                     Contact
//     </Link>
//                             </li>
//                         </ul>
//                     ):''
//             }
//             <div className="toggle" onClick={() => setState(!state)}>
//                 <FaAlignJustify />
//             </div>

//                 </div>
//             </div>
//         </nav>
//     )

// }

// export default Navbar;