
const posts = [{ title: 'POST1' }, { title: 'POST2' }];
let count = 2;
let last_activity_time;

function createPost() {
    return new Promise((resolve, reject) => {
        posts.push({ title: 'POST' + ++count });
        resolve();
    })
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        last_activity_time = new Date().toLocaleTimeString();
        resolve(last_activity_time);
    }, 1000)
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 1000);
    })
}

function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    })
}

Promise.all([createPost(), updateLastUserActivityTime()])
    .then((arr) => {
        printPost();
        console.log(arr[1]);
        return deletePost();
    })
    .then(() => printPost())
    