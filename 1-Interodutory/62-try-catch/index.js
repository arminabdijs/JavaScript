// try/catch
/*
async function f5() {

    try {
        let response = await fetch('https://jsonplaceholder.org');
    } catch(err) {
         console.log("err");

    }
}

f5();*/

// ===========================================================

/*
async function f6() {
    try {
        let results = await Promise.all([
            fetch("url1"),
            fetch("url2"),
        ]);
    } catch (e) {
        console.log("something wrong");
    }
}

f6();*/

// ===========================================================

//get api Async/await
/*async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.org/posts/10")
        const data = await response.json()
        console.log(data)
    }catch (e) {
        console.log("Error fetching data")
    }
}

fetchData()*/


// ===========================================================

const fetchData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.org/posts/10")
        const data = await response.json()
        console.log(data)
    }catch (e) {
        console.log("Error fetching data")
    }
}

fetchData()
