


/*

const asyncFn = async () =>{
    return ("Success!");
} 

asyncFn();

*/

/*

const asyncFn = async () =>{
    return 10;
} 

asyncFn();

*/

/*

const asyncFn = async () =>{
    return 10;
} 

asyncFn()
.then(value => console.log(value))

*/

/*

const asyncFn = async () => {
    throw new Error ("Big Error")
    
}
asyncFn();

*/

/*

const timerPromise = () => 
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 3000))

/*

const asyncFn = async () => {
    console.log("Timer starts");
    await timerPromise();
    console.log("Timew ends")
}

*/

/*

const asyncFn = async () => {
    console.log("Timer starts");
    const startTimer = performance.now()
    await timerPromise();
    const endTimer = performance.now();
    //console.log("Timer ends", (endTimer - startTimer) / 1000);
    const timerResult = (endTimer - startTimer) / 1000;
    console.log(`Timer worked for ${timerResult} seconds`);
}

asyncFn();

*/

/*

const getData = (url) =>
    new Promise ((resolve, reject) => 
    fetch(url)
    .then(response => response.json())
    .then(json = resolve(json))
    .catch(error => reject(error))
    )

getData("https://jsonplaceholder.typicode.com/todos")
.then(data => console.log(data))
.then(error => console.log(error.message))    

*/

const getData = async (url) =>{
    const res = await fetch(url);
    const json = res.json();
    console.log(json);
}

getData("https://jsonplaceholder.typicode.com/todos")
.then(data => console.log(data))
.catch(error => console.log(error.message))