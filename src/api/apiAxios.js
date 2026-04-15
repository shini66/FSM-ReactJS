import api from "../helpers/api";

async function apiUserList() {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching user list:', error);
    }
}

async function apiPostList() {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching post list:', error);
    }
}

export { apiUserList, apiPostList };