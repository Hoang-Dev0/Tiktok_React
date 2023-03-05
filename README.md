1. lib customize-cra: đùng để customize Webpack, (thay vì phải eject source)
2. lib babel-plugin-module-resolver: hỗ trợ thay đổi import @/...

-   babel là thư viện chuyển đổi cú pháp, vì thế khi nó thấy dạ import được định nghĩa sẵn, nó sẽ tự động generate sang native import ./../../file
3. jsconfig.json, tsconfig.json: rút ngắn import path
4. lib prettier: setting format code chung cho cả team
5. config CSS, SASS
   -B1: Tạo GlobalStyles component (wrap <App /> )
   -B2: npm i -D sass (production chỉ sử dụng css)
   -B3: reset css: npm install --save normalize.css
5. lib classname: tương tự như clsx
6. css moudle ?
 B1: name of file xxx.module.css or xxx.moudle.scss
 B2: import styles from './xxx.module.css' 
 - tương tự như css, scss, không thể thực thi trực tiếp trên trình duyệt mà cần thông qua các trình biên dịch (Webpack or Browserify)
 - css module -> css moudle compiler -> css, js
