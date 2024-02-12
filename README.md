# 🛠️ Project Setup

_**In order to get the app running with the expected behaviour you'll need these:**_

## 🟢 Node 20.11.0 *(LTS)*
You can use the node binary from the official package or a node package manager (such as [NVM](https://github.com/nvm-sh/nvm), [FNM](https://github.com/Schniz/fnm), [N](https://github.com/tj/n))

## 🐱 PNPM

With Node LTS Installed, you can enable corepack...

```shell
corepack enable
```

...then install the dependencies with pnpm

```shell
pnpm install
```

---
## ⚡ Development Server

You can start the dev server by using...

```shell
pnpm dev
```
---

## 📈 Build

You can use this to build into the production version of the app...

```shell
pnpm build
```

---

# 🧠 Proccess

- First I started by defining the styles system, since I had to use plain CSS I created partials for all the tokens related to typography, colors, etc...

- Basically after that it was just a matter of building the landing page and using them.

- I didn't give much use to creating components since I considered it wasn´t really necesary for a landing page.

- I just had the design for desktop so I had to improvise a bit for other screens.

- Finally I just had to make some improvements for accesibility, performance and SEO.
---