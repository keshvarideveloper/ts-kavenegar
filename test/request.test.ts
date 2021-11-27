import { SendArrayDTO } from '../lib/dto/send-array.dto';
import { SendDTO } from '../lib/dto/send.dto';
import { StatusDto } from '../lib/dto/status.dto';
import { Kavenegar } from '../lib/index';
// test('send one sms with code 200', async () => {
//   const kavenegar = new Kavenegar(
//     '6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D',
//   );
//   const sendData: SendDTO = { message: 'سلام', receptor: '09013212713' };
//   await kavenegar.send;
//   const request = await kavenegar.send(sendData);
//   console.log(request.entries);

//   expect(request.return.status).toBe(200);
// });

// test('send array sms with code 413', async () => {
//   const kavenegar = new Kavenegar(
//     '6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D',
//   );
//   const sendData: SendArrayDTO = {
//     message: ['ممنون', 'خوبی'],
//     receptor: ['09013212713', '09122702856'],
//     sender: ['0018018949161', '10008663'],
//   };

//   const request = await kavenegar.sendarray(sendData);
//   console.log(request.entries);
//   console.log(request.return);

//   expect(request.return.status).toBe(413);
// });

test('check sms status', async () => {
  const kavenegar = new Kavenegar(
    '6169425A2B39323769417969795945795A656C6F416D34686B3538423378384565677836686F46447764303D',
  );
  const sendData: StatusDto = {
    messageid: 355678406,
  };

  const request = await kavenegar
    .select(sendData)
    .then((res) => {
      console.log('ok');
    })
    .catch((err) => {
      console.log('err', err);
    });
  // console.log(request.entries);
  // console.log(request.return);

  // expect(request.return.status).toBe(200);
});
