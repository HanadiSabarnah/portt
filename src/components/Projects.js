import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import colorful from "../beautifull.jpg"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
export default function Project(){
    const [projectData,setProjectData] = useState(null);
    useEffect(()=>{
        sanityClient
        .fetch(`
        *[_type == "project"]{
            title,
            date,            
            description,
            projectType,
            link,
            link1,
            tags ,
            "projectImage": mainImage.asset->url      
                       
        }`)
        .then((data)=>setProjectData(data))
        .catch(console.error)
    },[]);

    return (
        <main className="relative my-8">
            {/* <img src={colorful} alt="Colorful Flower"  className="absolute h-full w-full"/> */}
            <section className="container  mx-auto">
                {/* <h1 className="text-5xl flex justify-center cursive">My Projects</h1> */}
                <h2 className="text-5xl text-gray-600 flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid grid-cols-3 gap-10">
                {projectData && projectData.map((project,index)=>(
            
        
                    <article className="relative  rounded-lg shadow-sm bg-blue-300 p-10">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a></h3>
                            <br/>
        <img class="w-screen h-1/4" src={urlFor(project.projectImage).url()}  />

        <br/>
                        <div  className="text-grey-500  space-x-6">
                            <span>
                                <strong className="font-bold">Finished on </strong>:{""}
                                {new Date(project.date).toLocaleDateString()}
                                 </span>  
                           
                             
                            <p className="my-6 text-4sl font-semibold text-gray-900  text-justify text-lg leading-relaxed">{project.description}</p>
                            
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View Source Code{" "}
                            <span role="img" aria-label="right pointer"> 👉 </span>  
                            </a><br/>
                            <a href={project.link1} target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View Demo{" "}
                            <span role="img" aria-label="right pointer">  👉 </span>  
                            </a>

                            
                            

                            
                        </div>
                    </article>
                ))}
                </section>
            </section>
        </main>
       
        
        

    )
}