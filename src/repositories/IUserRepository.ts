import { User } from "@entities/User";

export interface IUserRepository {

    insert(user: User): Promise<void>
    update(user: User): Promise<void>
    delete(id: number): Promise<void>

    findById(id: number): Promise<User>
    findByEmail(email: string): Promise<User>

}