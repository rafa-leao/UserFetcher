export async function fetchUser(userId) {
    return await fetch(`https://reqres.in/api/users/${userId}`)
     .then(response => response.json());
} 

export default fetchUser
