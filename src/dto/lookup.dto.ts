enum LookupTypeEnum {
  CALL = 'call',
  SMS = 'sms',
}
export interface LookupDto {
  readonly receptor: string;
  readonly token: string;
  readonly token2?: string;
  readonly token3?: string;
  readonly template: string;
  readonly type?: LookupTypeEnum;
}
