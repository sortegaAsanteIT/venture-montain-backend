import { IUseCaseCommand } from '../../../IUseCase';
import { SignUpRequest } from './SignUpRequest';
import { User } from '../../User';

export class SignUpUseCase implements IUseCaseCommand<SignUpRequest> {
  async execute(request: SignUpRequest): Promise<void> {
    const user = new User();
    user.firstName = request.firstName;
    user.lastName = request.lastName;
  }
}
