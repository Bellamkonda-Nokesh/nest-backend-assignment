import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: CreateUserDto): Promise<Omit<import("./user.entity").User, "password">>;
    findAll(): Promise<Omit<import("./user.entity").User, "password">[]>;
    findOne(id: string): Promise<Omit<import("./user.entity").User, "password">>;
    update(id: string, body: UpdateUserDto): Promise<Omit<import("./user.entity").User, "password">>;
    remove(id: string): Promise<void>;
}
