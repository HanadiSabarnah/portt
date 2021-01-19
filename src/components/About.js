import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"


import colorful from "../beautiful.jpg"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const [author,setAuthor] = useState(null)

    useEffect(()=>{
        sanityClient
        .fetch(`
        *[_type == "author"]{
            name,
            bio,            
            "authorImage": image.asset->url
                       
        }`)
        .then((data)=>setAuthor(data[0]))
        .catch(console.error)
    },[]);

    if(!author) return <div>Loading....</div>
  
    return(
        <main className="relative">
            <img src={colorful} alt="Colorful Flower"  className="absolute h-full w-full"/>
            <div className="p-10  container mx-auto relative">
                <section className="bg-blue-300 my-10 shadow-2xl lg:flex p-10">
                    <img src={urlFor(author.authorImage).url()} class="w-72 h-92  mx-auto" alt={author.name} />
                    <div className="  font-sans  lg:prose-2xl text-black-300">
                        <h3 className=" pl-10 text-gray-800 text-2xl font-bold mb-2">
                        About Me
                           
                        </h3>
                        <div className=" pl-10 text-justify lg:prose-xl text-black-300">
                       
                        <p >I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me .</p>
                        </div>
                        <br/>
                        <div className="font-sans pl-10 lg:prose-2xl text-black-300">
                        <h3 className="text-gray-800 text-2xl font-bold mb-2   ">Work With Me</h3>
                        
                        <span className="pl-10  lg:prose-xl text-black-300" role="img" aria-label="right pointer"> Email Address: hsabarnah@gmail.com </span> 
                        <br/> 
                             
                            
                            
                            <span  className="pl-10  lg:prose-xl text-black-300"role="img" aria-label="right pointer">  Phone No. +972  597621673</span> 
                            <br/>  
                            
                            
                            <a href="https://drive.google.com/file/d/1iN5QKkstuxL-5Z1q3a2PN_eMRi2tP_uZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                            <span  className="pl-10  lg:prose-xl text-black-300 hover:underline  " role="img" aria-label="right pointer">   Resume </span> 
                             
                            </a>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}