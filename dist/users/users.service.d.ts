import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(data: CreateUserDto): Promise<Omit<User, 'password'>>;
    findAll(): Promise<Omit<User, 'password'>[]>;
    findOne(id: number): Promise<Omit<User, 'password'>>;
    update(id: number, data: UpdateUserDto): Promise<Omit<User, 'password'>>;
    remove(id: number): Promise<void>;
    findByUsername(username: string): Promise<User | null>;
}
