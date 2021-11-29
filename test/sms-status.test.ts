// import { StatusDto } from '../lib/dto/status.dto';
// import { Kavenegar } from '../lib/index';

// let kavenegar: Kavenegar;
// function initializeKavenegar() {
//   kavenegar = new Kavenegar('6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D');
// }
// beforeAll(() => {
//   process.env.NODE_ENV = 'test';
//   return initializeKavenegar();
// });
// describe('sms status', () => {
//   test('check with messageid', () => {
//     const sendData: StatusDto = {
//       messageid: 359148536,
//     };
//     return kavenegar
//       .status(sendData)
//       .then((data) => {
//         expect(data.return.status).toBe(200);
//       })
//       .catch((err) => {
//         console.log('err', err);
//       });
//   });
// });
