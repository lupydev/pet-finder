declare namespace Express {
    export interface Request {
        id: string
        admin: boolean
    }
}

declare module '*.json' {
    const value: unknown
    export default value
}
