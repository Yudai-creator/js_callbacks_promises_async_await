const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

// Same example with promises
function createPost(post){
    // Promise takes a callback with to parameters, resolve and reject
    // when the promise result is succesful, you call resolve
    // when something goes wrong, you call reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            } else{
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}

// createPost({title:'Post Three', body:'This is the promise'}).then(getPosts);

// Async / Await

async function init(){
    await createPost({title:'Post Three', body:'This is the promise'});

    getPosts();
}

init();



// Async/Await/Fetch
// fetch api, the first promise that is returned, we need to covert it to json

async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    console.log(data);
}

fetchUsers();