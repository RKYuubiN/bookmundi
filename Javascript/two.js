async function postRequest(url, postData) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });

    if (response.ok) {
        let result = await response.json();
        console.log("request")
        console.log(result)
    } else {
        console.log(`Error while making post request ${response.status}`)
    }
}

let data = {
    title: 'Understanding promises',
    body: 'Promises and promises and promises',
    userId: 500
};

(
    async () => {
        await Promise.all(
            [
                postRequest('https://jsonplaceholder.typicode.com/posts', data),
                postRequest('https://jsonplaceholder.typicode.com/posts', data),
                postRequest('https://jsonplaceholder.typicode.com/posts', data)
            ]
        )
    }
)()