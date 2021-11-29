typescript package repository [GitHub Page](https://github.com/keshvarideveloper/ts-kavenegar)

javascript package repository [GitHub page](https://github.com/KaveNegar/kavenegar-node)

# Description

typescript package for kavenegar

# Installation

```
$ npm i --save ts-kavenegar
```

# Usage

## Create instance

```typescript
import { Kavenegar } from '@mk/kavenegar-ts";
const kavenegar: Kavenegar = new Kavenegar("Your Kavenegar API key");
```

## Use it

```typescript
import { SendDTO } from 'ts-kavenegar/lib/dto/send.dto';

const sendData: SendDTO = { message: 'hi..', receptor: '09120000000' };
const result = await kavenegar.send(sendData);
```

## Error handling

```typescript
try {
  const result = await kavenegar.selectoutbox(sendData);
} catch (err: any) {
  if (err instanceof KavenegarError) {
    // handling kavenegar error
    console.log('error name', err.name); // 417
    console.log('error message', err.message); // دسترسی به اطلاعات مورد نظر برای شما امکان پذیر نیست
  }
  //handling other error
}
```

```typescript
kavenegar
  .selectoutbox(sendData)
  .then((res) => {
    // result
  })
  .catch((err) => {
    if (err instanceof KavenegarError) {
      // handling kavenegar error
      console.log('error name', err.name); // 417
      console.log('error message', err.message); // دسترسی به اطلاعات مورد نظر برای شما امکان پذیر نیست
    }
    //handling other error
  });
```
