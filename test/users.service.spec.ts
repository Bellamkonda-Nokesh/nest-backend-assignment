// Users service test
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../src/users/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../src/users/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let repo: any;

  beforeEach(async () => {
    repo = {
      find: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: repo },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should create a new user', async () => {
    repo.findOne.mockResolvedValue(undefined);
    repo.save.mockResolvedValue({ id: 1, username: 'foo', role: 'user' });
    expect(await service.create({ username: 'foo', password: 'barbaz' })).toHaveProperty('username', 'foo');
  });

  it('should throw NotFoundException when user not found', async () => {
    repo.findOne.mockResolvedValue(undefined);
    await expect(service.findOne(99)).rejects.toThrow();
  });
});