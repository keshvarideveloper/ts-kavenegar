// import { LookupDto } from '../lib/dto/lookup.dto';
// import { Kavenegar } from '../lib/index';

// let kavenegar: Kavenegar;
// function initializeKavenegar() {
//   kavenegar = new Kavenegar('6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D');
// }
// beforeAll(() => {
//   process.env.NODE_ENV = 'test';
//   return initializeKavenegar();
// });
// describe('sms lookup', () => {
//   test('lookup with one token', () => {
//     const sendData: LookupDto = {
//       receptor: '09013212713',
//       token: '123456',
//       template: 'tonet-verify-code',
//     };
//     return kavenegar
//       .lookup(sendData)
//       .then((data) => {
//         console.log('ok', data);

//         expect(data.return.status).toBe(200);
//       })
//       .catch((err) => {
//         console.log('err', err);
//       });
//   });
// });
