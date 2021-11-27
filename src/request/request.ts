import { stringify } from 'query-string';
import { MessageIdDto } from '../dto/message.id.dto';
import { SendArrayDTO } from '../dto/send-array.dto';
import { SendDTO } from '../dto/send.dto';
import { StatusDto } from '../dto/status.dto';
import { statusLocalMessageIdDto } from '../dto/status.localmessage.id.dto';
import { KavenegarResponse } from '../error/error';
const axios = require('axios').default;

import { ActionsEnum, MethodsEnum, RequestOption } from '../interfaces/request.option.interface';
import { KavenegarOptions } from '../interfaces/request.options.type';
import { IKavenegarResponse } from '../interfaces/response.sms.interface';

export class Kavenegar {
  private kavenegarOptions: KavenegarOptions = {};
  private mainPath: string;
  constructor(apikey: string, host: string = 'https://api.kavenegar.com', version: string = 'v1') {
    this.kavenegarOptions.apikey = apikey;
    this.kavenegarOptions.host = host;
    this.kavenegarOptions.version = version;
    this.mainPath = `${this.kavenegarOptions.version}/${this.kavenegarOptions.apikey}`;
  }
  private async request<T>(requestOptions: RequestOption<T>): Promise<IKavenegarResponse> {
    const url = `/${this.mainPath}/${requestOptions.action}/${requestOptions.method}.json`;
    const postData = stringify(requestOptions.data);
    console.log(postData);

    const kavenegarReq = axios.create();
    return kavenegarReq
      .post(url, postData, {
        headers: {
          'Content-Length': postData.length,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        port: '443',
        baseURL: this.kavenegarOptions.host,
      })
      .then((res: any) => {
        return new KavenegarResponse(res?.data);
      })
      .catch((error: any) => {
        throw new KavenegarResponse(error?.response?.data);
      });
  }

  async send(data: SendDTO): Promise<IKavenegarResponse> {
    return await this.request<SendDTO>({ action: ActionsEnum.SMS, method: MethodsEnum.SEND, data });
  }

  async sendarray(data: SendArrayDTO): Promise<IKavenegarResponse> {
    return await this.request<SendArrayDTO>({ action: ActionsEnum.SMS, method: MethodsEnum.SEND_ARRAY, data });
  }

  async status(data: StatusDto): Promise<IKavenegarResponse> {
    return await this.request<StatusDto>({ action: ActionsEnum.SMS, method: MethodsEnum.STATUS, data });
  }

  async statuslocalmessageid(data: statusLocalMessageIdDto): Promise<IKavenegarResponse> {
    return await this.request<statusLocalMessageIdDto>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.STATUS_LOCAL_MESSAGE_ID,
      data,
    });
  }

  async select(data: MessageIdDto): Promise<IKavenegarResponse> {
    return await this.request<MessageIdDto>({
      action: ActionsEnum.SMS,
      method: MethodsEnum.SELECT,
      data,
    });
  }
}
