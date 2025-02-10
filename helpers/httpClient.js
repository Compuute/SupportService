export class HttpClient {
    constructor(baseURL) {
        this._url = 'https://support-586e.restdb.io/rest/issues';
} 

async get() {
    try {
        const response = await fetch(this._url,{
            headers: {
                'x-apikey': '67a9efe4020c067e22e653b9',
                'Content-Type': 'application/json'
            }
        })
        if(response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    }catch(error) {
        throw new Error(error);
    }   
}
}