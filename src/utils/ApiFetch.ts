import "whatwg-fetch";

const ApiFetch = {

    get: async (url: string) => {
        return doFetch(url, "GET");
    }
}

const doFetch = async (url: string, method: string) =>
    new Promise<object>((resolve: any, reject: any) => {
        fetch(url)
            .then((res: any) => res)
            .then((myJson: any) => { return myJson.json().then((tJson: any) => resolve(tJson)); })
            .catch((err: any) => { console.log("err", err); })
    })

export default ApiFetch;