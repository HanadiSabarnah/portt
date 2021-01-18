export default {
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
            name:"title",
            type:"string",
        },
        {
            name: 'mainImage',
     
      type: 'image',
        },
        {
            name:"date",
            type:"datetime",
        },
        
        {
            name:"description",
            type:"text",
        },
        {
            name:"projectType",
            title:"Project type",
            type:"string",
            options:{
                list:[
                   { value:"personal",title:"Personal"},
                   { value:"client",title:"Client"},
                   { value:"rbk",title:"RBK"},                  

                ],
            },
        },
        {
            name:"link",
            type:"url",
        },
        {
            name:"link1",
            type:"url",
        },
        {
            name:"tags",
            type:"array",
            of:[
                {
                    type:"string",
                },
            ],
            options:{
                layout:"tags"
            },
        },
    ],
};