import React from "react"
import image from "../hand-painted.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Colorful Garden" className=" bg-cover absolute object-cover w-full h-full"/>

                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-8xl text-gray-900  font-bold cursive leading-none lg-leading-snug home-name">Hi. I'm Hanadi</h1>
               
                <p className="  text-6xl text-gray-900 font-bold cursive lg-leading-snug ">Software Developer</p> 
      
      
            </section> 
         </main>
    )
}