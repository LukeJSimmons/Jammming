async function UsernameGetter() {
    const endpoint = 'https://api.spotify.com/v1/me';
    try {
        const response = await fetch(endpoint);
        if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

export default UsernameGetter;