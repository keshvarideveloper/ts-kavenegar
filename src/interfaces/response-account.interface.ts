export interface IKavenegarAccountResponse {
  readonly return: {
    readonly message: number;
    readonly status: number;
  };
  readonly entries: {
    readonly remaincredit: number;
    readonly expiredate: Date;
    readonly type: string;
    readonly apilogs: string;
    readonly dailyreport: string;
    readonly debugmode: string;
    readonly defaultsender: string;
    readonly mincreditalarm: number;
    readonly typresendfailede: string;
  };
}
