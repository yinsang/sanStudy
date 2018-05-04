import "./index.css";
import san from "san";
import {router} from 'san-router'
import item2_1 from './pages/item2_1';
router.add({rule: '/item2_1', Component: item2_1, target: '#app'});
router.start();
