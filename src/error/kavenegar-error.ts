import { KavenegarResponse } from '../format/kavenegar-response';

export class KavenegarError extends Error {
  readonly entries: any;

  constructor(data: KavenegarResponse) {
    super(data.return.message);
    this.name = data.return.status;
    this.entries = data.entries;
    Object.setPrototypeOf(this, KavenegarError.prototype);
  }
}
