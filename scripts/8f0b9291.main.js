$(document).ready(function(){"use strict";console.log("'Allo 'Allo!"),$.stellar(),$("#nav-menu").onePageNav(),$.shifter(),$("a[href='#']").click(function(){$("html, body").animate({scrollTop:0},"slow",function(){$(this).after(function(){})}),console.log("LINK CLICKED")})});