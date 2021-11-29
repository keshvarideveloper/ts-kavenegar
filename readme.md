This site was built using [GitHub Pages](https://pages.github.com/).

# Description

typescript package for kavenegar

# Installation

    $ npm i --save ts-kavenegar

# Usage

## Create instance

```
import { Kavenegar } from '@mk/kavenegar-ts";
const kavenegar: Kavenegar = new Kavenegar("Your Kavenegar API key");
```

## Use it

    const sendData:SendDTO = { message:  'hi..', receptor:  '09120000000' };
    const result = await kavenegar.send(sendData)
