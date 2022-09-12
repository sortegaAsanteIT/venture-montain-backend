export class SignUpRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(request: any) {
    this.id = request.id || '';
    this.firstName = request.firstName || '';
    this.lastName = request.lastName || '';
    this.email = request.email || '';
  }
}
