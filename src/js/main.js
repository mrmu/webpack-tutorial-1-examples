// import '../css/style.css';
// import '../css/buttons.css';
// import 'jquery';
import '../scss/_colors.scss';
import '../scss/style.scss';
import '../scss/buttons.scss';

import {myButton, myDesc} from './init';
myDesc.hide();
myButton.on('click', function(e){
    myDesc.toggle();    
});
