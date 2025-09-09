import axios from "axios"

const API_URL = 'https://emkc.org/api/v2/piston';

const API = axios.create({
    baseURL: API_URL
})

const LANGUAGE = "java";

const VERSION = "15.0.2";

export type RunCodeResponse = {
    run: {
        stdout: string;
        stderr: string;
        code: number;
        output: string;
    }
};
export type PistonError = {
    message: string;
    code: number;
};
export const runCode = async (code: string): Promise<RunCodeResponse> => {
    const response = await API.post("/execute", {
        language: LANGUAGE,
        version: VERSION,
        files: [
            {
                content: code
            }
        ]
    });
    return response.data;
}
