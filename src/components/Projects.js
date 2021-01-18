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
            
        
                    <article className="relative rounded-lg shadow-sm bg-blue-300 p-10">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a></h3>
                            <br/>
        <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>

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
        
        
        // <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
        //   <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        //   <div class="px-6 py-4">
        //     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        //     <p class="text-grey-darker text-base">
        //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //     </p>
        //   </div>
        //   {/* <div class="px-6 py-4">
        //     <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
        //     <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
        //     <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        //   </div> */}
        // </div>
        

    )
}