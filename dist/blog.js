"use strict";
// dfine type alies 
Object.defineProperty(exports, "__esModule", { value: true });
const Myblog = {
    title: "Learn js",
    content: "js is best programming lang",
    auth: "monirul",
    published: true,
    publishedDate: "12-01-2024"
};
function printPost(post) {
    console.log(`title: ${post.title}`);
    console.log(`des: ${post.content}`);
    console.log(`auth: ${post.auth}`);
    if (post.publishedDate) {
        console.log(`date:${post.publishedDate}`);
    }
}
printPost(Myblog);
//# sourceMappingURL=blog.js.map