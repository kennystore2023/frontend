export interface ApiFetchProps {
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE"
    headers?: any,
    Authorization?: string,
    body?: any,
    options?: any
}

export interface ApiFetchResponse<T> {
    data?: T,
    error? : string
}