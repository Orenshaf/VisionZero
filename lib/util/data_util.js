function Data(url) {
    return fetch(url, {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    })
        .then(response => response.json());
}
export default Data;
