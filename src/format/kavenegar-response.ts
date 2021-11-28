import { IKavenegarAccountResponse } from '../interfaces/response-account.interface';
import { IKavenegarSmsResponse } from '../interfaces/response-sms.interface';

export class KavenegarResponse {
  readonly return: any;
  readonly entries: any;

  constructor(data: IKavenegarSmsResponse | IKavenegarAccountResponse) {
    this.return = data.return;
    this.entries = data.entries;
  }
}
