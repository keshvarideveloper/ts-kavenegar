export interface CountInboxDto {
  readonly startdate: number;
  readonly enddate?: number;
  readonly linenumber?: string;
  readonly isread?: number;
}
