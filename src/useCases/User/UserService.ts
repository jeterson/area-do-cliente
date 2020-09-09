import { IUserRepository } from "@repositories/IUserRepository";
import { User } from "@entities/User";

export class UserService {
   

    constructor(private repository: IUserRepository) {}

    insert(user: User) {
        return this.repository.insert(user)    
    }
    update(user: User) {
        return this.repository.update(user)
    }
    delete(id: number) {
        return this.repository.delete(id)
    }
    findById(id: number) {
        return this.repository.findById(id)
    }
    findByEmail(email: string) {
        return this.repository.findByEmail(email)
    }
}