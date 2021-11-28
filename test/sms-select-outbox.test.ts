import { SelectOutboxDto } from '../lib/dto/select-outbox.dto';
import { Kavenegar } from '../lib/index';
let kavenegar: Kavenegar;
function initializeKavenegar() {
  kavenegar = new Kavenegar('6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D');
}
beforeAll(() => {
  process.env.NODE_ENV = 'test';
  return initializeKavenegar();
});
describe('sms selectoutbox', () => {
  test('set sms selectoutbox', () => {
    expect.assertions(1);
    const sendData: SelectOutboxDto = {
      startdate: Math.floor(Date.now() / 1000),
    };
    return kavenegar.selectoutbox(sendData).catch((e) => {
      console.log('eeeee', e);

      expect(e).toEqual({
        return: {
          status: '407',
        },
      });
    });

    // console.log('errasdasdasdas', err);
    // expect(err.return.status).toBe(407);
  });
});
