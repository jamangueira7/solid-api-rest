import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mailTrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserUseCase, createUserController };
