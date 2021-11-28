export interface SelectOutboxDto {
  readonly startdate: number;
  readonly enddate?: number;
  readonly sender?: string;
}
