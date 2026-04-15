async function apiUserList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user list:', error);
    }
}

async function apiPostList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching post list:', error);
    }
}

export { apiUserList, apiPostList };