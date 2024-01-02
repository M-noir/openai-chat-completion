async function mark() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`Here is the error: ${error}`)
    }
}

mark();
