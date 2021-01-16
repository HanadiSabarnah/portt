import React,{useEffect,useState} from "react"
import sanityClient from "../client.js"
import colorful from "../beautifull.jpg"

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
            tags                   
                       
        }`)
        .then((data)=>setProjectData(data))
        .catch(console.error)
    },[]);

    return (
        <main className="relative">
            <img src={colorful} alt="Colorful Flower"  className="absolute h-full w-full"/>
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid grid-cols-2 gap-10">
                {projectData && projectData.map((project,index)=>(
                    <article className="relative rounded-lg shadow-xl bg-blue-300 p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a></h3>
                            <br/>
                        <div  className="text-grey-500 text-xs space-x-6">
                            <span>
                                <strong className="font-bold">Finished on </strong>:{""}
                                {new Date(project.date).toLocaleDateString()}
                                 </span>  
                           
                            <span>
                            <strong className="font-bold">Type </strong>:{""}
                            {project.projectType}
                                 </span>  
                            <p className="my-6 text-black-700  text-justify text-lg leading-relaxed">{project.description}</p>
                            
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View Source Code{" "}
                            <span role="img" aria-label="right pointer"> 👉 </span>  
                            </a>
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