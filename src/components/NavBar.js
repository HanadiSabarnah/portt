import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        <header className="bg-blue-300">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact
                   
                     className="inflex-flex items-center py-6 px-3 mr-6 text-white  text-5xl  cursive tracking-widest">
                        Hanadi
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6  text-2xl rounded text-white font-serif	">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6  text-2xl rounded text-white font-serif	">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 text-2xl rounded text-white font-serif	">
                        About Me !
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/HanadiSabarnah?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/hanadi-sabarnah-a477971b6/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
           
                </div>
            </div>
        </header>
    )
}