import { SendArrayDTO } from '../lib/dto/send-array.dto';
import { SendDTO } from '../lib/dto/send.dto';
import { Kavenegar } from '../lib/index';

let kavenegar: Kavenegar;
function initializeKavenegar() {
  kavenegar = new Kavenegar('6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D');
}
beforeAll(() => {
  process.env.NODE_ENV = 'test';
  return initializeKavenegar();
});
describe('send array sms test', () => {
  test('send with code 200', () => {
    const sendData: SendArrayDTO = {
      message: ['ممنون', 'خوبی'],
      receptor: ['09013212713', '09122702856'],
      sender: ['0018018949161', '10008663'],
    };
    return kavenegar
      .sendarray(sendData)
      .then((data) => {
        expect(data.return.status).toBe(200);
      })
      .catch((err) => {
        expect(err.return.status).toBe(416);
      });
  });
});
