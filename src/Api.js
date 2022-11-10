class Api {
    static Post(url, body) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:5000/' + url, {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body)
            })
            .then(result=>result.json())
            .then(result=>resolve(result))
            .catch(err=>reject(err))
        })

    }
}

module.export = Api