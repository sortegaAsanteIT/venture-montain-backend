import { Response } from 'express';
export class RequestValidatorService {
  async wrapper(callbackFunction: Function, res: Response): Promise<any> {
    try {
      const response = await callbackFunction();
      res.status(200).json(response ? { data: response } : undefined);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorCode: 'INTERNAL_ERROR' });
    }
  }
}
