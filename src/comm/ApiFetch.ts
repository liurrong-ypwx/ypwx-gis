import "whatwg-fetch";

interface IResJson {
    code?: number;
    data?: object | null | undefined;
    msg?: string | null | undefined;
    message?: string | null | undefined;
}

interface IConCurrentParam {
    api: string,
    body: object
}

const defaultHeader = {
    "defaultHeader": "testHeader"
}

let host = "";
interface IApiFetch {
    host: string;
    get: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    post: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    postLogin: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    upload: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    put: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    delete: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
    conCurrentPost: (url: string, param?: object, needDefaultParam?: boolean, header?: object) => Promise<any>,
}

const ApiFetch:IApiFetch={
    host,
    get: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {
        // const params = getParams(url, param);
        // const api = getApi(url, params);
        // if(params&& typeof params === "object" && needDefaultParam){
        //     const 
        // }
    },
    post: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },
    postLogin: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },
    upload: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },
    put: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },
    delete: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },
    conCurrentPost: async (url, param = {}, needDefaultParam = true, header = JSON.parse(JSON.stringify(defaultHeader))) => {

    },

}

export default ApiFetch;