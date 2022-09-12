import { Request, Response, Router } from 'express';
import { SignUpUseCase } from '../core/user/useCases/signUp/SignUpUseCase';
import { SignUpRequest } from '../core/user/useCases/signUp/SignUpRequest';
import { RequestValidatorService } from '../core/validation/RequestValidatorService';

const router = Router();
const requestValidatorService = new RequestValidatorService();

router.post('/sign-up', async (req: Request, res: Response) => {
  await requestValidatorService.wrapper(async () => {
    await new SignUpUseCase().execute(new SignUpRequest(req.body));
  }, res);
});

export const userRouter = router;
