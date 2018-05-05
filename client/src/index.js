import "./index.css";
import {router} from 'san-router'
import pages from './pages'
import main from './pages/main'
for (let key in pages) {
  router.add({rule: `/${key}`, Component: pages[key], target: '#app'});
}
router.start();
const Main = new main();
Main.attach(document.body.querySelector("#nav"));