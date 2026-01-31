// dfine type alies 
 
type BlogPost ={
    title:string;
    content:string;
    auth:string;
    published:boolean;
    publishedDate?:string
}

const Myblog:BlogPost ={
    title:"Learn js",
    content:"js is best programming lang",
    auth:"monirul",
    published:true,
    publishedDate:"12-01-2024"
}

function printPost (post:BlogPost){
  console.log(`title: ${post.title}`)
  console.log(`des: ${post.content}`)
  console.log(`auth: ${post.auth}`)

  if(post.publishedDate){
    console.log(`date:${post.publishedDate}`)
  }
}

printPost(Myblog)