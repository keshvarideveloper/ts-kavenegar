export enum ActionsEnum {
  SMS = 'sms',
  VERIFY = 'verify',
  ACCOUNT = 'account',
  CALL = 'call',
}
export enum MethodsEnum {
  SEND = 'send',
  SEND_ARRAY = 'sendarray',
  STATUS = 'status',
  STATUS_LOCAL_MESSAGE_ID = 'statuslocalmessageid',
  SELECT = 'select',
  SELECT_OUT_BOX = 'selectoutbox',
  LATEST_OUT_BOX = 'latestoutbox',
  COUNT_OUT_BOX = 'countoutbox',
  CANCEL = 'cancel',
  RECEIVE = 'receive',
  COUNT_IN_BOX = 'countinbox',
  COUNT_POSTAL_CODE = 'countpostalcode',
  SEND_BY_POSTAL_CODE = 'sendbypostalcode',
  LOOKUP = 'lookup',
  INFO = 'info',
  CONFIG = 'config',
  MAKETTS = 'maketts',
}
export interface RequestOption<T> {
  readonly action: ActionsEnum;
  readonly method: MethodsEnum;
  readonly data: T;
}
