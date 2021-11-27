import { IKavenegarResponse } from '../interfaces/response.sms.interface';

export class KavenegarResponse {
  readonly return: any;
  readonly entries: any;

  constructor(data: IKavenegarResponse) {
    this.return = data.return;
    this.entries = data.entries;
  }
}
