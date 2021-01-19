
import image from "../hand-painted.jpg"
import {Link} from "react-router-dom";


import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
// import imageUrlBuilder from "@sanity/image-url"


import BlockContent from "@sanity/block-content-to-react"


// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source){
//     return builder.image(source)
// }
export default function Home(){
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
  

    return (
      
        <main className="relative ">
           
            <img src={image} alt="Colorful Garden" className=" bg-cover absolute object-cover w-full h-full"/>

                <section className="relative flex min-h-screen p-12  justify-cente   ">
                <div class="sm:text-center lg:text-left my-20">
                {/* <br/><br/>
                <img class="w-52 h-52 rounded-full mx-auto" src={urlFor(author.authorImage).url()} alt={author.name} width="384" height="512"/> */}
               
          <h1 class="text-8xl text-gray-900  font-bold text-center  lg-leading-snug ">
          {author.name}
          </h1>
          <br/><br/>
          <p class="text-6xl text-gray-900 font-bold text-center lg-leading-snug">
          Software Developer
          </p>
          <br/><br/>
          <p class="text-4xl text-gray-900 font-bold text-center lg-leading-snug">
          <BlockContent blocks={author.bio} projectId="9drzfsju" dataset="production" />
          
          </p>
          <br/><br/>
          <div class="flex justify-center">
          <Link  to="/about" class="bg-blue-500 text-3xl rounded-full font-bold text-black px-6 py-4 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
          Contact me
        </Link> 
          
</div>
         
         
        </div>
      
      
              
      
      
            </section>
          
            </main>

            
             
        
        
        
    
      
  
    )
}