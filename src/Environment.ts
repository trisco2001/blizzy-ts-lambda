
export class Environment {
    key: string
    secret: string
    
    constructor() {
        this.key = process.env["KEY"]!
        this.secret = process.env["SECRET"]!
    }
}