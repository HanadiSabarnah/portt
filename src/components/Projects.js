import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import colorful from "../beautiful.jpg"
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
        <main className="relative ">
            <img src={colorful} alt="Colorful Flower"  className="bg-cover absolute object-cover w-full h-full"/>
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
        <img class="w-screen h-1/4" src={urlFor(project.projectImage).url()} alt="project.projectImage"  />

        <br/>
                        <div  className="text-grey-500  space-x-6">
                            <span>
                                <strong className="font-bold">Finished on </strong>:{""}
                                {new Date(project.date).toLocaleDateString()}
                                 </span>  
                           
                             
                            <p className="my-6 text-4sl font-semibold text-gray-900  text-justify text-lg leading-relaxed">{project.description}</p>
                            
                            <a href={project.link} target="_blank" rel="noopener noreferrer" class="bg-blue-500 rounded-lg font-bold text-black text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                                View Source Code{" "}
                             
                            </a><br/><br/><br/>
                            <a href={project.link1} target="_blank" rel="noopener noreferrer" class="bg-blue-500 rounded-lg font-bold text-black text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                                View Demo{" "}

                                

 
                            </a>

                            
                            

                            
                        </div>
                    </article>
                ))}
                </section>
            </section>
        </main>
       
        
        

    )
}