# COURSES APP

## Coding convention, techical stack

- Quy tắc đặt tên

  - Tên file: kebab-case
  - Tên component: kebab-case
  - Tên biến: camelCase
  - Tên hàm : camelCase

- CSS

  - RSCSS để đặt tên và phân chia component, selector
  - TailwindCSS xử lý style toàn bộ project
  - PurgeCSS: Remove các class không sử dụng, giảm bunder size

- Javascript library

  - @nuxt/date-fns : Xử lý datetime
  - vuex-persistedstate : Xử lý local storage

- Quản lý sourcecode
  - Github
  - Git flow ( mọi nhánh đều tách từ develop, nhánh master chỉ dùng với deployment)

## Build Setup

```bash
# clone project 
$ git clone https://github.com/miguelbui/techvify-course-app.git

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Chi tiết vui lòng tham khảo [Nuxt.js docs](https://nuxtjs.org).
