import { UserRepositoryImpl } from "@repositories/implemetations/UserRepositoryImpl";
import { UserService } from "./UserService";
import { UserController } from "./UserController";

const repository = new UserRepositoryImpl()
const service = new UserService(repository)
const userController = new UserController(service)

export {userController}