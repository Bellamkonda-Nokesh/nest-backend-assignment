"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
describe('UsersService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [users_service_1.UsersService],
        }).compile();
        service = module.get(users_service_1.UsersService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should create a user', async () => {
        const user = await service.create({ username: 'unit1', password: 'pass1' });
        expect(user).toHaveProperty('id');
        expect(user.username).toBe('unit1');
    });
    it('should throw when username exists', async () => {
        await service.create({ username: 'dupe', password: 'test' });
        await expect(service.create({ username: 'dupe', password: 'test' }))
            .rejects
            .toThrow();
    });
    it('should return an array of users', async () => {
        const users = await service.findAll();
        expect(Array.isArray(users)).toBe(true);
    });
    it('should get a user by id', async () => {
        const newUser = await service.create({ username: 'getme', password: 'p' });
        const user = await service.findOne(newUser.id);
        expect(user).toHaveProperty('username', 'getme');
    });
    it('should throw if user not found', async () => {
        await expect(service.findOne(99999)).rejects.toThrow();
    });
});
//# sourceMappingURL=users.service.spec.js.map