(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(9),r=c.n(a),s=(c(6),c(2)),l=c(1);var j=function(){var e=Object(s.f)();return Object(l.jsxs)("div",{className:"centerDivElement min-h-screen",children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"text-5xl",children:"TicTacToe"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button",onClick:function(){console.log("navigate to game now"),e("/TicTacToe/wait")},children:"Create Game"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"textField",placeholder:"Room ID",size:"16"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button",onClick:function(){},children:"Join Game"})})]})};var o=function(){var e=Object(s.f)();return Object(l.jsxs)("div",{className:"centerDivElement min-h-screen",children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"text-5xl",children:"Waiting for the opponent ..."})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"button marginTopPlus",onClick:function(){return e("/TicTacToe")},children:"Back"}),Object(l.jsx)("button",{className:"button marginTopPlus",onClick:function(){return e("/TicTacToe/game")},children:"Load Game"})]})]})},u=c(4);var b=function(e){return Object(l.jsx)("button",{onClick:function(){return e.handleClick(e.index)},children:e.value})};var d=function(e){return e.squares.map((function(t,c){return Object(l.jsx)(b,{index:c,value:t,handleClick:e.handleClick},c)}))};var x=function(){var e=Object(s.f)(),t=Object(n.useState)(!0),c=Object(u.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(Array(9).fill(null)),j=Object(u.a)(r,2),o=j[0],b=j[1],x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(u.a)(t[c],3),i=n[0],a=n[1],r=n[2];if(e[i]&&e[i]===e[a]&&e[i]===e[r])return e[i]}return!1}(o);return Object(l.jsxs)("div",{className:"grid grid-cols-3 grid-rows-4 min-h-screen text-5xl",children:[Object(l.jsx)("div",{className:"centerDivElement col-span-3",children:Object(l.jsx)("p",{children:function(){if(x)e("/TicTacToe/game/rematch:"+x);else if(!o.includes(null))return"Draw!";return i?"X's turn":"O's turn"}()})}),Object(l.jsx)(d,{squares:o,handleClick:function(e){if(!x&&null==o[e]){var t=o;t[e]=i?"X":"O",b(t),a(!i)}}})]})};var h=function(){var e=Object(s.f)();return Object(l.jsxs)("div",{className:"centerDivElement min-h-screen",children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"text-5xl",children:"Waiting for the opponent ..."})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"button marginTopPlus",onClick:function(){return e("/TicTacToe")},children:"Menu"}),Object(l.jsx)("button",{className:"button marginTopPlus",onClick:function(){return e("/TicTacToe/game")},children:"Restart"})]})]})};var O=function(){return Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/TicTacToe",element:Object(l.jsx)(j,{})})," ",Object(l.jsx)(s.a,{exact:!0,path:"/TicTacToe/wait",element:Object(l.jsx)(o,{})}),Object(l.jsx)(s.a,{exact:!0,path:"/TicTacToe/game",element:Object(l.jsx)(x,{})}),Object(l.jsx)(s.a,{exact:!0,path:"/TicTacToe/game/rematch",element:Object(l.jsx)(h,{})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))},T=c(5);r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsxs)(T.a,{children:[" ",Object(l.jsx)(O,{})]})}),document.getElementById("root")),m()},6:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.9ed283a2.chunk.js.map