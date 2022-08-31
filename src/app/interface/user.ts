import { Role } from "./role"


export interface User {
    id: number
    username: string
    password: string
    email: string
    verify: Boolean
    roles: Array<Role>
    account_non_locked: Boolean
    failed_attempt: number
    lock_time: Date
}