import React from "react"
import {Link} from "react-router-dom";
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        // <header className="bg-blue-300">
        //     <div className="container mx-auto flex justify-between">
        //         <nav>
        //             <NavLink to="/" exact
                   
        //              className="inflex-flex items-center py-6 px-3 mr-6 text-white  text-5xl  cursive tracking-widest">
        //                 Hanadi
        //             </NavLink>
        //             <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6  text-2xl rounded text-white font-serif	">
        //                 Blog Post
        //             </NavLink>
        //             <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6  text-2xl rounded text-white font-serif	">
        //                 Projects
        //             </NavLink>
        //             <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 text-2xl rounded text-white font-serif	">
        //                 About Me !
        //             </NavLink>
        //         </nav>
        //         <div className="inline-flex py-3 px-3 my-6">
        //             <SocialIcon url="https://github.com/HanadiSabarnah?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
        //             <SocialIcon url="https://www.linkedin.com/in/hanadi-sabarnah-a477971b6/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
           
        //         </div>
        //     </div>
        // </header>
        <nav class="flex items-center justify-between flex-wrap bg-blue-300 p-6">
  <div class="flex items-center flex-no-shrink  mr-6">
  <Link to="/" exact>
  <span class="text-5xl  cursive tracking-widest hover:text-white mr-4">Hanadi</span>

  </Link>
    
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <Link  to="/post" class="block mt-4 lg:inline-block lg:mt-0   text-2xl hover:text-white mr-4">
        Blogs
        </Link>
      <Link  to="/project" class="block mt-4 lg:inline-block lg:mt-0 text-2xl hover:text-white mr-4">
        Projects
        </Link>
      <Link  to="/about" class="block mt-4  lg:inline-block lg:mt-0 text-2xl hover:text-white">
        About Me !
        </Link>
    </div>
    <div className="inline-flex ">
                    <SocialIcon url="https://github.com/HanadiSabarnah?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/hanadi-sabarnah-a477971b6/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    
           
                </div>
    
  </div>
</nav>


    )
}