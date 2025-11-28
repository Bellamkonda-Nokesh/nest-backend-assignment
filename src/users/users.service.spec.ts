import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Sample: create user
  it('should create a user', async () => {
    const user = await service.create({ username: 'unit1', password: 'pass1' });
    expect(user).toHaveProperty('id');
    expect(user.username).toBe('unit1');
  });

  // Sample: prevent duplicate user creation
  it('should throw when username exists', async () => {
    await service.create({ username: 'dupe', password: 'test' });
    await expect(service.create({ username: 'dupe', password: 'test' }))
      .rejects
      .toThrow();
  });

  // Sample: get all users
  it('should return an array of users', async () => {
    const users = await service.findAll();
    expect(Array.isArray(users)).toBe(true);
  });

  // Sample: find one user
  it('should get a user by id', async () => {
    const newUser = await service.create({ username: 'getme', password: 'p' });
    const user = await service.findOne(newUser.id);
    expect(user).toHaveProperty('username', 'getme');
  });

  // Sample: fail to get non-existent user
  it('should throw if user not found', async () => {
    await expect(service.findOne(99999)).rejects.toThrow();
  });
});