import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../../entitites/user.entity").User>;
    findAll(): Promise<import("../../entitites/user.entity").User[]>;
    findOne(correo: string): Promise<import("../../entitites/user.entity").User>;
}
