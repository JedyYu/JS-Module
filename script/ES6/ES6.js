var age=10;
console.log("age(call from outside):"+age);
  
var d=new Date;
console.log("tic:"+d.getTime());

import * as inside from './print_age2.js';

var d=new Date;
console.log("toc_out:"+d.getTime());

inside.print_age();
console.log("age(call from outside):"+age);
console.log("inside.print_age.age(call from outside):"+inside.print_age.age);