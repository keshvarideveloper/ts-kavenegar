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
describe('send sms test', () => {
  test('send sms with code 200', () => {
    const sendData: SendDTO = { message: 'سلام', receptor: '09013212713' };
    return kavenegar
      .send(sendData)
      .then((data) => {
        expect(data.return.status).toBe(200);
      })
      .catch((err) => {});
  });
});
