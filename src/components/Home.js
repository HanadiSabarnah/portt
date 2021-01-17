
import image from "../hand-painted.jpg"
// import imagee from "../imagee.jpg"
import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"

import BlockContent from "@sanity/block-content-to-react"


const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
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
        <main>
           
            <img src={image} alt="Colorful Garden" className=" bg-cover absolute object-cover w-full h-full"/>

                <section className="relative flex justify-center min-h-screen ">
                <div class="sm:text-center lg:text-left">
                <br/><br/>
                <img class="w-52 h-52 rounded-full mx-auto" src={urlFor(author.authorImage).url()} alt="" width="384" height="512"/>
                <br/><br/>
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
         
        </div>
      
      
                {/* <h1 className="text-8xl text-gray-900  font-bold cursive leading-none lg-leading-snug home-name">Hi. I'm Hanadi</h1>
               
                <p className="  text-6xl text-gray-900 font-bold cursive lg-leading-snug ">Software Developer</p>  */}
      
      
            </section>
             
         </main>
    //     <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            
        // <div class="sm:text-center lg:text-left">
        //   <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        //     <span class="block xl:inline">Data to enrich your</span>
        //     <span class="block text-indigo-600 xl:inline">online business</span>
        //   </h1>
        //   <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        //     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        //   </p>
        //   <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        //     <div class="rounded-md shadow">
        //       <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        //         Get started
        //       </a>
        //     </div>
        //     <div class="mt-3 sm:mt-0 sm:ml-3">
        //       <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
        //         Live demo
        //       </a>
        //     </div>
        //   </div>
        // </div>
       
    //   </main>
   
      
  
    )
}