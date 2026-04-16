const URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

async function apiUserList() {
    try {
        const response = await fetch(`${URL}/users`);
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
        const response = await fetch(`${URL}/posts`);
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