export interface SendDTO {
  readonly receptor: string;
  readonly message: string;
  readonly sender?: string;
  readonly date?: Date;
  readonly type?: string;
  readonly localid?: string;
  readonly hide?: boolean;
}
