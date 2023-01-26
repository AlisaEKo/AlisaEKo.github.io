import './style.css'
import { main_page } from './modules/main_page.js'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
// import { login_page } from './modules/login_page.js'
import { dark_mode } from './modules/dark_mode.js'
import { setupNavBar } from './modules/nav_bar.js'


// let logged_in = false;

// if(logged_in){
//   document.querySelector('#app').innerHTML = main_page.outerHTML;
// }else{
//   document.querySelector('#app').innerHTML = login_page.outerHTML;
// }

// setupCounter(document.querySelector('#counter'))
document.querySelector('#app').innerHTML = main_page.outerHTML;
document.querySelector('#app').prepend(dark_mode);

const navbar = document.querySelector('#navbar')
setupNavBar(navbar)