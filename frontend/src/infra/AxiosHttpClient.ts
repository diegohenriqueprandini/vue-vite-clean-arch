import HttpClient from "./HttpClient";
import axios from "axios";

export default class AxiosHttpClient implements HttpClient {

    async get(url: string): Promise<any> {
        await axios.get(url)
    }

    async post(url: string, body: any): Promise<void> {
        await axios.post(url, body);
    }

    async put(url: string, body: any): Promise<void> {
        await axios.put(url, body);
    }

    async delete(url: string): Promise<void> {
        await axios.delete(url);
    }   
}