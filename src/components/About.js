import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"

import BlockContent from "@sanity/block-content-to-react"
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
                    <div className="  text-lg flex flex-col justify-center">
                        <h1 className=" pl-10 font-mono text-5xl text-black-300 mb-4">
                            Hey There. I'm{" "}
                            <span className="text-black-100">{author.name}</span>
                        </h1>
                        <div className=" pl-10  lg:prose-2xl text-black-300">
                        <BlockContent blocks={author.bio} projectId="9drzfsju" dataset="production" />
                        <p >As A software Developer , my objective is to make appositive impact on client, coworker, using my skills to design compelling and attractive websites.








</p>
                        </div>
                        <div className="font-sans text-center lg:prose-2xl text-black-300">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 ">Contact</h3>
                        <a  target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                        <span role="img" aria-label="right pointer"> 📧 </span>  hsabarnah@gmail.com
                             
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                            <span role="img" aria-label="right pointer">  📞 </span>  00970 597621673
                            
                            </a>
                            <a href="https://drive.google.com/file/d/1iN5QKkstuxL-5Z1q3a2PN_eMRi2tP_uZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                            <span role="img" aria-label="right pointer"> 📜 </span>  Resume
                             
                            </a>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}