//imitating how blog post are pull from a server and then create the blog post

// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];


// // getting the posts from the "server"
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output
//     }, 1000);
// }

// // here we use the callback to make the getPosts function to wait until the posts are created
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }



//createPost({title: 'Post Three', body: 'This is post three'}, getPosts);