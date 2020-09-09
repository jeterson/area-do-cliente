import { IUserRepository } from "@repositories/IUserRepository";
import { User } from "@entities/User";
import {db} from '@config/db'

export class UserRepositoryImpl implements IUserRepository {

    async insert(user: User): Promise<void> {
        await db('user').insert(user)
    }
    async update(user: User): Promise<void> {
        await db('user').update(user).where({id: user.id})
    }
    async delete(id: number): Promise<void> {
        const user = await this.findById(id)
        user.enabled = false
        this.update(user)
    }
    async findById(id: number): Promise<User> {
       const user = await db<User>('user').where({id: id}).first()
       return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await db<User>('user').where({email: email}).first()
        return user;
    }

}