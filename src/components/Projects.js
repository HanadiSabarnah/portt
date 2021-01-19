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
            <img src={colorful} alt="Colorful Flower"  className=" absolute object-cover w-full h-full"/>
            <section className="container  mx-auto">
                {/* <h1 className="text-5xl flex justify-center cursive">My Projects</h1> */}
                <h2 className="text-5xl text-gray-600 flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData && projectData.map((project,index)=>(







            
        
                    <article className="bg-white hover:shadow-xl relative  rounded-lg  shadow-sm bg-blue-300 p-10">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a></h3>
                            <br/>
        <img class="h-56 w-full   hover:opacity-25" src={urlFor(project.projectImage).url()} alt="project.projectImage"  />

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
       
       
        // <section class="py-12">
        //         <div class="container mx-auto">
        //             {/* <h1 className="text-5xl flex justify-center cursive">My Projects</h1> */}
        //     <h2 className="text-5xl text-gray-600 flex justify-center mb-12">Welcome to my projects page</h2>
        //     <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        //     {projectData && projectData.map((project,index)=>(
                   
                    // <div class="flex flex-wrap px-6">
                    //     <div class="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
                    //         <div class="bg-white hover:shadow-xl">
                    //             <div class="">
                    //                 <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                    //                     class="h-56 w-full border-white border-8 hover:opacity-25"/>
                    //             </div>
                    //             <div class="px-4 py-4 md:px-10">
                    //                 <h1 class="font-bold text-lg">
                    //                     UI,UX Concepts
                    //                 </h1>
                    //                 <p class="py-4">
                    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                    //                     voluptate
                    //                     earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                    //                     distinctio
                    //                     perferendis tempore nemo sequi eos accusantium.
                    //                 </p>
                    //                 <div class="flex flex-wrap pt-8">
                    //                     <div class="w-full md:w-1/3 text-sm font-medium">
                    //                         NOVEMBER 1,2019
                    //                     </div>
                    //                     <div class="2/3">
                    //                         <div class="text-sm font-medium">
                    //                             SHARE:
                    //                             <a href="" class="text-blue-700 px-1 ">
                    //                                 FACEBOOk
                    //                             </a>
                    //                             <a href="" class="text-blue-500 px-1 ">
                    //                                 TWITTER
                    //                             </a>
                    //                             <a href="" class="text-red-600 px-1 ">
                    //                                 GOOGLE+
                    //                             </a>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>

                      
                    // </div>
        //             ))}
        //                     </section>     
        
        //         </div>
        //     </section>
        
        

    )
}