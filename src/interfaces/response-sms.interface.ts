export interface IKavenegarSmsResponse {
  readonly return: {
    readonly message: number;
    readonly status: number;
  };
  readonly entries: {
    readonly messageid: number;
    readonly message: number;
    readonly status: number;
    readonly statustext: string;
    readonly sender: string;
    readonly receptor: string;
    readonly date: Date;
  };
}
