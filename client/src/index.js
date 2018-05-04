import "./index.css";
import san from "san";
import {router} from 'san-router'
import item1_1 from './pages/item1_1';
import item1_2 from './pages/item1_2';
import item2_1 from './pages/item2_1';
router.add({rule: '/item1_1', Component: item1_1, target: '#app'});
router.add({rule: '/item1_2', Component: item1_2, target: '#app'});
router.add({rule: '/item2_1', Component: item2_1, target: '#app'});
router.start();
