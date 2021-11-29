import { stringify } from 'query-string';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { SendArrayDTO } from './dto/send-array.dto';
import { SendDTO } from './dto/send.dto';
import { StatusDto } from './dto/status.dto';
import { StatusLocalMessageIdDto } from './dto/status-localmessage-id.dto';
import { ActionsEnum, MethodsEnum, RequestOption } from './interfaces/request-option.interface';
import { KavenegarOptions } from './interfaces/kavenegar-options.interface';
import { IKavenegarSmsResponse } from './interfaces/response-sms.interface';
import { SelectOutboxDto } from './dto/select-outbox.dto';
import { LatestOutboxDto } from './dto/latest-outbox.dto';
import { CountOutboxDto } from './dto/count-outbox.dto';
import { CountInboxDto } from './dto/count-inbox.dto copy';
import { CancelDto } from './dto/cancel.dto';
import { ReceiveDto } from './dto/receive.dto';
import { LookupDto } from './dto/lookup.dto';
import { AccountConfigDto } from './dto/account-config.dto';
import { IKavenegarAccountResponse } from './interfaces/response-account.interface';
import { KavenegarResponse } from './format/kavenegar-response';
import { MessageIdDto } from './dto/message-id.dto';
import { KavenegarError } from './error/kavenegar-error';

export class Kavenegar {
  private kavenegarOptions: KavenegarOptions = {};
  private mainPath: string;

  constructor(apikey: string, host: string = 'https://api.kavenegar.com', version: string = 'v1') {
    this.kavenegarOptions.apikey = apikey;
    this.kavenegarOptions.host = host;
    this.kavenegarOptions.version = version;
    this.mainPath = `${this.kavenegarOptions.version}/${this.kavenegarOptions.apikey}`;
  }
  private async request<T, R>(requestOptions: RequestOption<T>): Promise<R | KavenegarResponse> {
    const url = `/${this.mainPath}/${requestOptions.action}/${requestOptions.method}.json`;

    const postData = requestOptions.data ? stringify(requestOptions.data) : undefined;

    const kavenegarReq = axios.create();
    return kavenegarReq
      .post(url, postData, {
        headers: {
          'Content-Length': postData ? postData.length.toString() : '0',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        baseURL: this.kavenegarOptions.host,
      })
      .then((res: any) => {
        return new KavenegarResponse(res?.data);
      })
      .catch((error) => {
        if (error?.response?.data?.return) throw new KavenegarError(error.response.data);
        throw new Error(error);
      });
  }

  async send(data: SendDTO): Promise<IKavenegarSmsResponse> {
    return await this.request<SendDTO, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.SEND,
      data,
    });
  }

  async sendarray(data: SendArrayDTO): Promise<IKavenegarSmsResponse> {
    return await this.request<SendArrayDTO, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.SEND_ARRAY,
      data,
    });
  }

  async status(data: StatusDto): Promise<IKavenegarSmsResponse> {
    return await this.request<StatusDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.STATUS,
      data,
    });
  }

  async statuslocalmessageid(data: StatusLocalMessageIdDto): Promise<IKavenegarSmsResponse> {
    return await this.request<StatusLocalMessageIdDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.STATUS_LOCAL_MESSAGE_ID,
      data,
    });
  }

  async select(data: MessageIdDto): Promise<IKavenegarSmsResponse> {
    return await this.request<MessageIdDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.SELECT,
      data,
    });
  }

  async selectoutbox(data: SelectOutboxDto): Promise<IKavenegarSmsResponse> {
    return await this.request<SelectOutboxDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.SELECT_OUT_BOX,
      data,
    });
  }

  async latestoutbox(data: LatestOutboxDto): Promise<IKavenegarSmsResponse> {
    return await this.request<LatestOutboxDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.LATEST_OUT_BOX,
      data,
    });
  }

  async countoutbox(data: CountOutboxDto): Promise<IKavenegarSmsResponse> {
    return await this.request<CountOutboxDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.COUNT_OUT_BOX,
      data,
    });
  }

  async countinbox(data: CountInboxDto): Promise<IKavenegarSmsResponse> {
    return await this.request<CountInboxDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.COUNT_IN_BOX,
      data,
    });
  }

  async cancel(data: CancelDto): Promise<IKavenegarSmsResponse> {
    return await this.request<CancelDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.CANCEL,
      data,
    });
  }

  async receive(data: ReceiveDto): Promise<IKavenegarSmsResponse> {
    return await this.request<ReceiveDto, IKavenegarSmsResponse>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.RECEIVE,
      data,
    });
  }

  async lookup(data: LookupDto): Promise<IKavenegarSmsResponse> {
    return await this.request<LookupDto, IKavenegarSmsResponse>({
      action: ActionsEnum.VERIFY,
      method: MethodsEnum.LOOKUP,
      data,
    });
  }

  async info(): Promise<IKavenegarAccountResponse> {
    return await this.request<null, IKavenegarAccountResponse>({
      action: ActionsEnum.ACCOUNT,
      method: MethodsEnum.INFO,
    });
  }

  async config(data: AccountConfigDto): Promise<IKavenegarAccountResponse> {
    return await this.request<AccountConfigDto, IKavenegarAccountResponse>({
      action: ActionsEnum.ACCOUNT,
      method: MethodsEnum.CONFIG,
      data,
    });
  }
}
