export function fetchRequest(path: string, params = '') {
    const url = product_url + "\/" + path;

    console.log("request url:", url, JSON.stringify(params));

    return new Promise(function (succeed, failed) {
        let req;
        if (params === '') {
            req = {
                method: 'POST',
            }
        } else {
            req = {
                method: 'POST',
                body: JSON.stringify(params)
            }
        }

        if (token === null || token.length === 0) {
            req.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        } else {
            req.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cookie': '65_customer=' + token,
                'Origin': 'http://www.65emall.net'
            }
        }

        fetch(url, req)
            .then((response) => response.json())
            .then((response) => {
                console.log("response:", url, response);
                succeed(response)
            })
            .catch((error) => {
                console.log("error:", error);
                failed(error)
            })
    })

}
let product_url = 'http://pdt.65daigou.com/api/Delivery';
export function setToken(t: string) {
    token = t
}

export function getToken() {
    return token
}

let token = '';