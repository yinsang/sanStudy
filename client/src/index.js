import "./index.css";
import san from "san";
const MyApp = san.defineComponent({
  template: `<div>hello world , san</div>`
});
let myApp = new MyApp({
  data: {
    name:'San'
  }
});
myApp.attach(document.body)

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log("index");
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);
