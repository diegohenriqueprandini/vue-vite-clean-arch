export default interface HttpClient {
    
    get(url: string): Promise<any>

    post(url: string, body: any): Promise<void>

    put(url: string, body: any): Promise<void>

    delete(url: string): Promise<void>
}