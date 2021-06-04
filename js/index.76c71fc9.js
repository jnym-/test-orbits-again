(function(t){function i(i){for(var s,a,n=i[0],r=i[1],l=i[2],c=0,u=[];c<n.length;c++)a=n[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(i);while(u.length)u.shift()();return h.push.apply(h,l||[]),e()}function e(){for(var t,i=0;i<h.length;i++){for(var e=h[i],s=!0,a=1;a<e.length;a++){var n=e[a];0!==o[n]&&(s=!1)}s&&(h.splice(i--,1),t=r(r.s=e[0]))}return t}var s={},a={index:0},o={index:0},h=[];function n(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4639":"aafbbfbe","chunk-76e94462":"0f8f8760"}[t]+".js"}function r(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var i=[],e={"chunk-76e94462":1};a[t]?i.push(a[t]):0!==a[t]&&e[t]&&i.push(a[t]=new Promise((function(i,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-2d0c4639":"31d6cfe0","chunk-76e94462":"0616178c"}[t]+".css",o=r.p+s,h=document.getElementsByTagName("link"),n=0;n<h.length;n++){var l=h[n],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===s||c===o))return i()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){l=u[n],c=l.getAttribute("data-href");if(c===s||c===o)return i()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=i,d.onerror=function(i){var s=i&&i.target&&i.target.src||o,h=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");h.code="CSS_CHUNK_LOAD_FAILED",h.request=s,delete a[t],d.parentNode.removeChild(d),e(h)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var s=o[t];if(0!==s)if(s)i.push(s[2]);else{var h=new Promise((function(i,e){s=o[t]=[i,e]}));i.push(s[2]=h);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=n(t);var u=new Error;l=function(i){c.onerror=c.onload=null,clearTimeout(d);var e=o[t];if(0!==e){if(e){var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",u.name="ChunkLoadError",u.type=s,u.request=a,e[1](u)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(i)},r.m=t,r.c=s,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)r.d(e,s,function(i){return t[i]}.bind(null,s));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=i,l=l.slice();for(var u=0;u<l.length;u++)i(l[u]);var d=c;h.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var s=e("85ec"),a=e.n(s);a.a},1:function(t,i){},"23de":function(t,i,e){"use strict";var s=e("4ff5"),a=e.n(s);a.a},"4ff5":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{overflow:"hidden"},attrs:{id:"app"}},[e("iv-visualisation",{attrs:{title:"Orbits",hotspotColumnHeight:"25%"},scopedSlots:t._u([{key:"hotspots",fn:function(){return[e("iv-pane",{attrs:{position:"left",format:"push"}},[e("iv-sidebar-content",{attrs:{showPagination:!1}},[e("iv-sidebar-section",{attrs:{title:"Orbit Energy Regimes",icon:"satellite"}},[e("p",{staticClass:"main-text"},[t._v(" The total energy of a gravitational orbit is the sum of the kinetic energy and the gravitational potential energy of the orbiting body. In polar coordinates, kinetic energy can be broken down into radial and angular components, as shown. ")]),e("iv-equation-box",{staticClass:"main-text",attrs:{equation:"T = \\frac{m}{2} (\\dot{r} \\hat{r} + v_\\phi \\hat{\\phi} )^2  "}}),e("p",{staticClass:"main-text"},[t._v("Since "),e("iv-equation-box",{attrs:{stylise:!1,equation:"L=m  r v_\\phi"}}),t._v(" the total energy can be written as: "),e("iv-equation-box",{staticClass:"main-text",attrs:{equation:"E= \\frac{1}{2} m \\dot{r}^2 + \\frac{L^2}{2 m r^2} - \\frac{GmM}{r} "}})],1),e("p",{staticClass:"main-text"},[t._v(" As a result of the conservation of energy, the total energy is constant. The last two terms are often referred to as the “effective potential”, as this is the potential that the body itself experiences in the rotating frame. The term with the angular momentum is the virtual “centrifugal” potential, and the last term is the gravitational potential. ")]),e("p",{staticClass:"main-text"},[t._v(" If the total energy is greater than zero, then the object will not be in a bound orbit, and so will not follow a closed path, while for negative energies the orbit will be bound. If the object has no radial kinetic energy, then it will lie at the minimum of the effective potential with a fixed radius: this is a circular orbit. However, suppose the object has some radial kinetic energy, but still has an energy less than zero. In that case, it will oscillate within the potential well, between a minimum and a maximum radius: this corresponds to an elliptical orbit. An orbit with a total energy of exactly zero will have a parabolic path since "),e("iv-equation-box",{attrs:{stylise:!1,equation:"\\lim_{r \\to \\infty} \\dot{r} = 0"}}),t._v(", and an orbit with an energy greater than zero corresponds to a hyperbolic path since: "),e("iv-equation-box",{attrs:{stylise:!1,equation:"\\lim_{r \\to \\infty} \\dot{r} > 0"}})],1)],1),e("iv-sidebar-section",{attrs:{title:"Velocity Boosts",theme:"Gold"}},[e("p",{staticClass:"main-text"},[t._v("Gravity only acts radially, so without the influence of any other forces, angular momentum is conserved. If the object can give itself a tangential velocity boost (e.g., with a rocket engine), then it will be able to change its angular momentum and therefore change the shape of its orbit. We can predict how the orbit will change under tangential boosts by considering the effective potential. ")]),e("p",{staticClass:"main-text"},[t._v("With a tangential boost, the gravitational potential part will remain unchanged; however, the centrifugal term will increase or decrease depending on whether the boost was with or against the object’s existing velocity. ")]),e("p",{staticClass:"main-text"},[t._v("If the centrifugal term increases, then the minimum of the effective potential will increase and move to the right of the plot, thus increasing the radius of the rest of the orbit. With a velocity boost opposing the initial velocity, then the minimum of the effective potential plot will become deeper and move to the left of the plot, this corresponds to the radius of the rest of the orbit decreasing. ")])])],1)],1),e("iv-toggle-hotspot",{staticStyle:{background:"none"},attrs:{id:"iv-fixed-hotspot-bottom",position:"bottom",title:"Effective Potential",transparent:""}},[e("EffPot",{ref:"effPlot",staticStyle:{overflow:"hidden"}})],1),e("iv-fixed-hotspot",{attrs:{id:"iv-fixed-hotspot-topleft",position:"topleft",title:"Guidance",transparent:""}},[e("p",{staticStyle:{padding:"1rem","background-color":"sky blue"}},[t._v("Click on the blue dot to change the orbit, or touch and drag on touchscreen.")])]),e("iv-fixed-hotspot",{attrs:{id:"iv-fixed-hotspot-topright",position:"topright",title:"PlayackControls",transparent:""}},[e("label",[t._v("Playback Speed")]),e("iv-slider",{attrs:{min:"0",max:"50",step:"1",init_val:"1"},on:{sliderChanged:t.playSpeed}}),e("iv-button",{staticStyle:{height:"100%"},on:{click:t.resetOrbit}},[t._v("Reset Orbit")]),e("iv-button",{staticStyle:{"margin-top":"1vh",height:"100%"},on:{click:t.elipticOrbit}},[t._v("Eliptical")]),e("iv-button",{staticStyle:{"margin-top":"1vh",height:"100%"},on:{click:t.parabolicOrbit}},[t._v("Parabolic")]),e("iv-button",{staticStyle:{"margin-top":"1vh",height:"100%"},on:{click:t.hyperbolicOrbit}},[t._v("Hyperbolic")])],1)]},proxy:!0}])},[e("Orbits",{ref:"orbits",attrs:{animationSpeed:t.animationSpeed},on:{"path-update":t.updatePlot,"position-update":t.updatePosition,onresize:t.updateSize}})],1)],1)},o=[],h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{height:"100%"},attrs:{id:"parent"},on:{mousemove:t.mouseOver,mouseleave:t.mouseLeave,mousedown:t.activateSelect,mouseup:t.cancelSelect,touchstart:t.touchOn,touchend:t.touchOff,touchmove:t.touchChange}},[e("canvas",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"canvas"}})])},n=[],r=(e("cb29"),e("fb6a"),{name:"iv-orbits",props:{mouse:{default:{x:void 0,y:void 0}},animationSpeed:{default:1},velocitySelect:{default:!1},sunRadius:{default:20},touchSelect:{default:!1},initialTouchPos:{default:{x:void 0,y:void 0}},currentTouchPos:{default:{x:void 0,y:void 0}},circularOrbitSet:{default:!1}},methods:{touchOn:function(t){this.initialTouchPos.x=t.touches[0].pageX,this.initialTouchPos.y=t.touches[0].pageY},touchOff:function(){this.touchSelect=!1,this.currentTouchPos.x=void 0,this.currentTouchPos.y=void 0,this.initialTouchPos.x=void 0,this.initialTouchPos.y=void 0},touchChange:function(t){this.touchSelect=!0,this.currentTouchPos.x=t.touches[0].pageX,this.currentTouchPos.y=t.touches[0].pageY},mouseOver:function(t){this.mouse.x=t.x,this.mouse.y=t.y},mouseLeave:function(){this.mouse.x=void 0,this.mouse.y=void 0},activateSelect:function(){this.velocitySelect=!0},cancelSelect:function(){this.velocitySelect=!1},circularOrbit:function(){this.circularOrbitSet=!0},elipticalOrbit:function(){this.elipticalOrbitSet=!0},parabolicOrbit:function(){this.parabolicOrbitSet=!0},hyperbolicOrbit:function(){this.hyperbolicOrbitSet=!0}},mounted:function(){var t=this,i=document.querySelector("canvas"),e=document.getElementById("parent"),s=e.getBoundingClientRect(),a=e.offsetWidth,o=null,h=null,n=null,r=null,l=i.getContext("2d"),c=1;function u(){i=document.querySelector("canvas"),e=document.getElementById("parent"),s=e.getBoundingClientRect(),i.width=e.offsetWidth*(1/c),i.height=e.offsetHeight*(1/c),l.translate(i.width/2,i.height/2),setTimeout(u,100)}function d(t,i,e){for(var s=0;s<e.length;s++)e[s]=[e[s][0]*Math.cos(t)-e[s][1]*Math.sin(t),e[s][0]*Math.sin(t)+e[s][1]*Math.cos(t)],e[s][0]=i[0]+e[s][0],e[s][1]=i[1]+e[s][1];return e}function p(e,s,a,p,f){this.x=e,this.y=s,this.radius=a,this.pathIndex=0,this.velocitySelect=!1,this.touchInterface=!1,this.timeSinceClick=10,this.buttonStep=.1,this.arrowConfirmed=!1;var v=!1;if(void 0==p||void 0==f){this.dx=0,this.dy=0;for(var g=0;g<w.length;g++)this.dist=Math.pow(Math.pow(this.x-w[g][0],2)+Math.pow(this.y-w[g][1],2),.5),this.dy+=-m*w[g][2]*Math.abs(Math.pow(this.dist,-2))*(w[g][0]-this.x);for(var b=0;b<w.length;b++)this.dist=Math.pow(Math.pow(this.x-w[b][0],2)+Math.pow(this.y-w[b][1],2),.5)}else this.dx=p,this.dy=f;this.path=function(i,e){var s=[this.x,this.y],a=[this.dx,this.dy];console.log(this.velocitySelect),this.velocitySelect||v?a=isNaN(i)||isNaN(e)?[this.x,this.y]:[i,e]:(this.pathVels=[],this.pathCoords=[],this.scale=1);var o=0;this.newCoords=[],this.newVels=[];var h=1;this.closedPath=!0;var n=1;this.maxIterations=1e4,console.log("path drawing");while(Math.pow(Math.pow(this.x-s[0],2)+Math.pow(this.y-s[1],2),.5)>2||o<100){s[0]+=a[0]*n*h,s[1]+=a[1]*n*h;for(var r=0;r<w.length;r++){var l=Math.pow(Math.pow(s[0]-w[r][0],2)+Math.pow(s[1]-w[r][1],2),.5);a[0]=a[0]+n*w[r][2]*Math.abs(Math.pow(l,-3))*(w[r][0]-s[0]),a[1]=a[1]+n*w[r][2]*Math.abs(Math.pow(l,-3))*(w[r][1]-s[1])}if(this.closedPath?this.velocitySelect||v?(this.newCoords.push(s.slice()),this.newVels.push(a.slice())):(this.pathCoords.push(s.slice()),this.pathVels.push(a.slice())):this.velocitySelect||v?(this.newCoords.unshift(s.slice()),this.newVels.unshift(a.slice())):(this.pathCoords.unshift(s.slice()),this.pathVels.unshift(a.slice())),o+=1,o>this.maxIterations||Math.pow(Math.pow(s[0],2)+Math.pow(s[1],2),.5)<t.sunRadius){if(this.maxIterations=o,this.closedPath=!1,this.velocitySelect||v?(s=[this.x,this.y],a=[i,e]):(s=[this.x,this.y],a=[this.dx,this.dy]),o=0,n<0)break;n=-1,console.log("reverse")}}for(var c=0;c<5;c++)this.scaleCanvas();u(),v=!1;var d=0,p=1e7;if(this.newCoords.length>0)for(var f=0;f<this.newCoords.length;f++){var g=Math.pow(Math.pow(this.newCoords[f][0],2)+Math.pow(this.newCoords[f][1],2),.5);g>d&&(d=g),g<p&&(p=g)}else for(var m=0;m<this.pathCoords.length;m++){var b=Math.pow(Math.pow(this.pathCoords[m][0],2)+Math.pow(this.pathCoords[m][1],2),.5);b>d&&(d=b),b<p&&(p=b)}t.$emit("path-update",[s,a,d,p])},this.scaleCanvas=function(){var t=this.pathCoords[0][0],e=this.pathCoords[0][1],s=this.pathCoords[0][0],a=this.pathCoords[0][1];if(this.newCoords.length>0){t=this.newCoords[0][0],e=this.newCoords[0][1],s=this.newCoords[0][0],a=this.newCoords[0][1];for(var o=0;o<this.newCoords.length;o++){var h=this.newCoords[o];h[0]>t?t=h[0]:h[0]<s&&(s=h[0]),h[1]>e?e=h[1]:h[1]<a&&(a=h[1])}}else{t=this.pathCoords[0][0],e=this.pathCoords[0][1],s=this.pathCoords[0][0],a=this.pathCoords[0][1];for(var n=0;n<this.pathCoords.length;n++){var r=this.pathCoords[n];r[0]>t?t=r[0]:r[0]<s&&(s=r[0]),r[1]>e?e=r[1]:r[1]<a&&(a=r[1])}}t<i.width*(1/this.scale)/4&&e<i.height*(1/this.scale)/4&&s>-i.width*(1/this.scale)/4&&a>-i.height*(1/this.scale)/4?(l.scale(1/this.scale,1/this.scale),this.scale=2*this.scale):(t>i.width*(1/this.scale)/2||e>i.height*(1/this.scale)/2||s<-i.width*(1/this.scale)/2||a<-i.height*(1/this.scale)/2)&&(l.scale(1/this.scale,1/this.scale),this.scale=this.scale/2),c=this.scale,u()},this.draw=function(){this.radius=a*(1/this.scale);var i=3*this.radius;l.beginPath(),l.moveTo(this.pathCoords[0][0],this.pathCoords[0][1]);for(var e=1;e<this.pathCoords.length;e++)l.lineTo(this.pathCoords[e][0],this.pathCoords[e][1]);if(this.closedPath&&l.lineTo(this.pathCoords[0][0],this.pathCoords[0][1]),l.lineWidth=1/this.scale*2,l.strokeStyle="black",l.stroke(),this.velocitySelect&&this.newCoords.length>0){l.beginPath(),l.moveTo(this.newCoords[0][0],this.newCoords[0][1]);for(var s=1;s<this.newCoords.length;s++)l.lineTo(this.newCoords[s][0],this.newCoords[s][1]);this.closedPath&&l.lineTo(this.newCoords[0][0],this.newCoords[0][1]),l.lineWidth=1/this.scale*2,l.strokeStyle="blue",l.stroke()}if(l.beginPath(),l.arc(this.x,this.y,this.radius,0,2*Math.PI),l.fillStyle="rgb(0,0,255)",l.fill(),this.velocitySelect){l.beginPath(),l.arc(this.x,this.y,1.5*this.radius,0,2*Math.PI),l.fillStyle="rgb(0,255,0)",l.fill(),this.tanAngle=Math.atan2(this.pathCoords[this.pathIndex+1][1]-this.pathCoords[this.pathIndex-1][1],this.pathCoords[this.pathIndex+1][0]-this.pathCoords[this.pathIndex-1][0]),this.arrowCentres=[];for(var o=0;o<4;o++)this.arrowCentres.push([this.x+4*this.radius*Math.cos(this.tanAngle+o*Math.PI/2),this.y+4*this.radius*Math.sin(this.tanAngle+o*Math.PI/2)]);this.tanPoints1=d(this.tanAngle,[this.x,this.y],[[i,this.radius],[2*this.radius+i,this.radius],[2*this.radius+i,2*this.radius],[3*this.radius+i,0],[2*this.radius+i,2*-this.radius],[2*this.radius+i,-this.radius],[i,-this.radius]]),this.tanPoints2=d(this.tanAngle+Math.PI,[this.x,this.y],[[i,this.radius],[2*this.radius+i,this.radius],[2*this.radius+i,2*this.radius],[3*this.radius+i,0],[2*this.radius+i,2*-this.radius],[2*this.radius+i,-this.radius],[i,-this.radius]]),this.rotPoints1=d(this.tanAngle+Math.PI/2,[this.x,this.y],[[i,this.radius],[2*this.radius+i,this.radius],[2*this.radius+i,2*this.radius],[3*this.radius+i,0],[2*this.radius+i,2*-this.radius],[2*this.radius+i,-this.radius],[i,-this.radius]]),this.rotPoints2=d(this.tanAngle+3*Math.PI/2,[this.x,this.y],[[i,this.radius],[2*this.radius+i,this.radius],[2*this.radius+i,2*this.radius],[3*this.radius+i,0],[2*this.radius+i,2*-this.radius],[2*this.radius+i,-this.radius],[i,-this.radius]]),l.beginPath(),l.moveTo(this.tanPoints1[0][0],this.tanPoints1[0][1]);for(var h=1;h<this.tanPoints1.length;h++)l.lineTo(this.tanPoints1[h][0],this.tanPoints1[h][1]);l.fillStyle="blue",l.fill(),l.beginPath(),l.moveTo(this.tanPoints2[0][0],this.tanPoints2[0][1]);for(var c=1;c<this.tanPoints2.length;c++)l.lineTo(this.tanPoints2[c][0],this.tanPoints2[c][1]);l.fillStyle="blue",l.fill(),l.beginPath(),l.moveTo(this.rotPoints1[0][0],this.rotPoints1[0][1]);for(var u=1;u<this.rotPoints1.length;u++)l.lineTo(this.rotPoints1[u][0],this.rotPoints1[u][1]);l.fillStyle="purple",l.fill(),l.beginPath(),l.moveTo(this.rotPoints2[0][0],this.rotPoints2[0][1]);for(var p=1;p<this.rotPoints2.length;p++)l.lineTo(this.rotPoints2[p][0],this.rotPoints2[p][1]);l.fillStyle="purple",l.fill()}if(t.touchSelect){this.mag=Math.pow(Math.pow(n-this.x,2)+Math.pow(r-this.y,2),.5),this.mag>20*this.radius&&(this.mag=20*this.radius),this.arrowAngle=Math.atan2(r-this.y,n-this.x),this.arrowPoints=d(this.arrowAngle,[this.x,this.y],[[0,0],[this.mag,2*this.radius],[this.mag,6*this.radius],[this.mag+6*this.radius,0],[this.mag,6*-this.radius],[this.mag,2*-this.radius]]),l.beginPath(),l.moveTo(this.x,this.y);for(var f=0;f<this.arrowPoints.length;f++)l.lineTo(this.arrowPoints[f][0],this.arrowPoints[f][1]);l.fillStyle="rgba(0, 255, 0, 0.7)",l.fill(),this.arrowConfirmed=!0}},this.update=function(){if(this.timeSinceClick+=1,this.draw(),this.pathIndex>=this.pathCoords.length&&(this.pathIndex=1),this.velocitySelect||t.touchSelect||(this.x=this.pathCoords[this.pathIndex][0],this.y=this.pathCoords[this.pathIndex][1],this.dx=this.pathVels[this.pathIndex][0],this.dy=this.pathVels[this.pathIndex][1],this.pathIndex+=t.animationSpeed,t.$emit("position-update",[this.x,this.y])),t.velocitySelect&&Math.pow(Math.pow(o-this.x,2)+Math.pow(h-this.y,2),.5)<1.5*this.radius&&this.timeSinceClick>20&&(this.velocitySelect&&this.newCoords.length>0&&(this.pathCoords=this.newCoords,this.pathVels=this.newVels,this.newCoords=[],this.newVels=[],this.pathIndex=1),this.timeSinceClick=0,this.velocitySelect=!this.velocitySelect),this.velocitySelect)for(var i=0;i<this.arrowCentres.length;i++)t.velocitySelect&&Math.pow(Math.pow(o-this.arrowCentres[i][0],2)+Math.pow(h-this.arrowCentres[i][1],2),.5)<2*this.radius&&this.timeSinceClick>20&&(this.timeSinceClick=0,0==i&&(console.log("tangential out"),this.newdx+=this.buttonStep*Math.cos(this.tanAngle),this.newdy+=this.buttonStep*Math.sin(this.tanAngle)),1==i&&(console.log("radial in"),this.newdx+=-this.buttonStep*Math.sin(this.tanAngle),this.newdy+=this.buttonStep*Math.cos(this.tanAngle)),2==i&&(console.log("tangential in"),this.newdx+=-this.buttonStep*Math.cos(this.tanAngle),this.newdy+=-this.buttonStep*Math.sin(this.tanAngle)),3==i&&(console.log("radial out"),this.newdx+=this.buttonStep*Math.sin(this.tanAngle),this.newdy+=-this.buttonStep*Math.cos(this.tanAngle)),console.log("arrow Press"),this.path(this.newdx,this.newdy));else this.newdx=this.dx,this.newdy=this.dy;!t.touchSelect&&this.arrowConfirmed&&(this.newdx=this.dx+Math.cos(this.arrowAngle)*(5e-4*this.mag/this.radius*20),this.newdy=this.dy+Math.sin(this.arrowAngle)*(5e-4*this.mag/this.radius*20),v=!0,this.newCoords=[],this.newVels=[],this.path(this.newdx,this.newdy),this.newCoords.length>0&&(this.pathCoords=this.newCoords,this.pathVels=this.newVels,this.closedPath?this.pathIndex=1:this.pathIndex=Math.round(this.pathCoords.length/2)),this.arrowConfirmed=!1)}}function f(){if(t.circularOrbitSet){Math.sqrt(a/5/w[0][2]);g=[],g[0]=new p(a/5,0,5,void 0,void 0);for(var i=0;i<g.length;i++)g[i].path();t.circularOrbitSet=!1}if(t.elipticalOrbitSet){var e=a/5,s=1.2*Math.sqrt(e/w[0][2]),o=s*w[0][2]*Math.abs(Math.pow(e,-2))*(w[0][0]-e);g=[],g[0]=new p(e,0,5,0,-o);for(var h=0;h<g.length;h++)g[h].path();t.elipticalOrbitSet=!1}if(t.parabolicOrbitSet){var n=a/5,r=Math.sqrt(5800*w[0][2]/Math.pow(n,2)),l=r*w[0][2]*Math.abs(Math.pow(n,-2))*(w[0][0]-n);g=[],g[0]=new p(n,0,5,0,-l);for(var c=0;c<g.length;c++)g[c].path();t.parabolicOrbitSet=!1}if(t.hyperbolicOrbitSet){var u=a/5,d=Math.sqrt(7e3*w[0][2]/Math.pow(u,2)),f=d*w[0][2]*Math.abs(Math.pow(u,-2))*(w[0][0]-u);g=[],g[0]=new p(u,0,5,0,-f);for(var v=0;v<g.length;v++)g[v].path();t.hyperbolicOrbitSet=!1}}function v(){requestAnimationFrame(v),f();for(var e=0;e<g.length;e++)1/g[e].scale>=1?l.clearRect(-i.width*(1/g[e].scale)/2,-i.height*(1/g[e].scale)/2,i.width*(1/g[e].scale),i.height*(1/g[e].scale)):l.clearRect(-i.width/2,-i.height/2,i.width,i.height);o=(t.mouse.x-s.left)*(1/g[0].scale)-i.width/2,h=(t.mouse.y-s.top)*(1/g[0].scale)-i.height/2,n=(t.currentTouchPos.x-s.left)*(1/g[0].scale)-i.width/2,r=(t.currentTouchPos.y-s.top)*(1/g[0].scale)-i.height/2;for(var a=0;a<g.length;a++)g[a].update();for(var c=0;c<w.length;c++)l.beginPath(),l.arc(w[c][0],w[c][1],t.sunRadius,0,2*Math.PI),l.fillStyle="Orange",l.fill()}u(),setTimeout(u,100);var g=[],w=[[0,0,100]],m=Math.sqrt(i.width/5/w[0][2]);g.push(new p(i.width/5,0,5,void 0,void 0));for(var b=0;b<g.length;b++)g[b].path();v()}}),l=r,c=(e("23de"),e("2877")),u=Object(c["a"])(l,h,n,!1,null,null,null),d=u.exports,p=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticStyle:{height:"35vh"},attrs:{id:"potentialPlot"}})])}],v=(e("5698"),e("030a")),g=e.n(v),w={name:"iv-eff-pot",props:{pathVals:{default:[]},redraw:{default:!0},currentRadius:{default:0}},methods:{updatePlot:function(t){this.pathVals=t,this.redraw=!0},updatePosition:function(t){this.currentRadius=Math.pow(Math.pow(t[0],2)+Math.pow(t[1],2),.5)}},mounted:function(){var t=this,i=1,e=100,s=200;function a(){var i=Math.pow(Math.pow(t.pathVals[0][0],2)+Math.pow(t.pathVals[0][1],2),.5),e=(t.pathVals[0][0]*t.pathVals[1][0]+t.pathVals[0][1]*t.pathVals[1][1])/i,s=n(i)+.5*Math.pow(e,2);return console.log("energy = ",s),s}function o(i){var e=Math.pow(Math.pow(t.pathVals[1][0],2)+Math.pow(t.pathVals[1][1],2),.5),s=Math.pow(Math.pow(t.pathVals[0][0],2)+Math.pow(t.pathVals[0][1],2),.5),a=Math.pow(Math.pow(t.pathVals[0][0]+t.pathVals[1][0],2)+Math.pow(t.pathVals[0][1]+t.pathVals[1][1],2),.5),o=Math.acos((Math.pow(s,2)+Math.pow(e,2)-Math.pow(a,2))/(2*s*e)),h=e*s*Math.sin(o);return Math.pow(h,2)/(2*Math.pow(i,2))}function h(t){return-i*e*(1/t)}function n(t){return o(t)+h(t)}function r(){var i=t.pathVals[3],e=Math.min(h(i),o(i)),s=Math.max(h(i),o(i));return[e,s]}function l(){if(requestAnimationFrame(l),t.redraw&&s!==t.pathVals[2]){var i=[],e=[],c=[],u=[],d=[],p=a();s=t.pathVals[2]+50;for(var f=s/50,v=.1;v<s;v+=f)i.push(v),e.push(n(v)),c.push(h(v)),u.push(o(v)),d.push(p);var w={x:i,y:e,type:"lines",name:"Eff Pot"},m={x:i,y:c,type:"lines",name:"Potential"},b={x:i,y:u,type:"lines",name:"Ang Mom"},y={x:i,y:d,name:"Total Energy",line:{dash:"dash",width:1}},x=[y,w,m,b];g.a.newPlot("potentialPlot",x,{xaxis:{range:[0,s],title:"Radius"},yaxis:{range:r()},margin:{t:10,l:20,b:50},plot_bgcolor:"rgba(0,0,0,0)",paper_bgcolor:"rgba(0,0,0,0)"}),t.redraw=!1}var M={x:[t.currentRadius],y:[n(t.currentRadius)],type:"markers",name:"Current Ueff",marker:{color:"rgb(0,0,255)",size:10}};g.a.animate("potentialPlot",{data:[M]},{fromcurrent:!0,transition:{duration:0},frame:{duration:0,redraw:!1}})}l()}},m=w,b=Object(c["a"])(m,p,f,!1,null,"b344395e",null),y=b.exports,x={name:"App",title:"Orbits - ImpVis",components:{Orbits:d,EffPot:y},methods:{updatePlot:function(t){this.$refs.effPlot.updatePlot(t)},updatePosition:function(t){this.$refs.effPlot.updatePosition(t)},updateSize:function(){console.log("resize")},playSpeed:function(t){this.animationSpeed=t},resetOrbit:function(){this.$refs.orbits.circularOrbit()},elipticOrbit:function(){this.$refs.orbits.elipticalOrbit()},parabolicOrbit:function(){this.$refs.orbits.parabolicOrbit()},hyperbolicOrbit:function(){this.$refs.orbits.hyperbolicOrbit()}},props:{animationSpeed:{default:1}}},M=x,C=(e("034f"),Object(c["a"])(M,a,o,!1,null,null,null)),S=C.exports,P=e("fff8");e("f3ff");function O(t){var i=t.$options.title;if(i)return"function"===typeof i?i.call(t):i}var k={created:function(){var t=O(this);t&&(document.title=t)}},T=e("5dea");s["a"].use(P["a"]),s["a"].use(T["a"]),s["a"].mixin(k),s["a"].config.productionTip=!1,s["a"].config.silent=!0,new s["a"]({render:function(t){return t(S)}}).$mount("#app"),press},"85ec":function(t,i,e){}});
//# sourceMappingURL=index.76c71fc9.js.map