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
        <main className="">
            <img src={colorful} alt="Colorful Flower"  className="absolute h-full w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-300 rounded-lg shadow-2xl lg:flex p-10">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className=" font-mono text-5xl text-black-300 mb-4">
                            Hey There. I'm{" "}
                            <span className="text-black-100">{author.name}</span>
                        </h1>
                        <div className="font-sans text-center lg:prose-2xl text-black-300">
                        <BlockContent blocks={author.bio} projectId="9drzfsju" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}