export interface SendArrayDTO {
  readonly receptor: string[];
  readonly message: string[];
  readonly sender: string[];
  readonly date?: Date;
  readonly type?: string[];
  readonly localmessageids?: string[];
  readonly hide?: boolean;
}
