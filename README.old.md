# todo-list
### 一、代码压缩
在 package.json 的脚本指令中，只要加上环境变量，系统会针对生产环境的代码进行压缩，如 'build' 指令对应 `webpack --mode=production` ，那么打包出来的代码就是经过压缩后的。以上情况至针对 webpack 4.x

### 二、react
#### 1、资源
[react 中文网](https://doc.react-china.org)

#### 2、初始化项目

* `sudo npm install -g create-react-app`  全局安装
* `create-react-app project-name` 初始化项目 project-name
* `npm run start`

create-react-app 内置了 webpack 的所有功能，不需要我们配置，我们只需要运行 yarn run start 或者 yarn run build 就行了