(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{19:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=19},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),i=n.n(a),s=(n(6),n(2)),o=n(9),l=n.n(o),j=n(11),u=n(3),b=n(12),d=n.n(b),O=n(1),x=Object(c.createContext)(),h=function(e){var t=e.children,n=Object(s.f)(),r=Object(c.useState)(null),a=Object(u.a)(r,2),i=a[0],o=a[1],l=Object(c.useState)(new d.a),j=Object(u.a)(l,1)[0],b=Object(c.useState)(null),h=Object(u.a)(b,2),m=h[0],v=h[1],f=Object(c.useState)(!1),T=Object(u.a)(f,2),p=T[0],C=T[1],g=Object(c.useState)(Array(9).fill(null)),N=Object(u.a)(g,2),D=N[0],S=N[1],k={peer:j,conn:i,shape:m,onTurn:p,setOnTurn:C,squares:D,setSquares:S,joinPeer:function(e){v("O"),o(j.connect(e))}};return j.on("connection",(function(e){v("X"),C(!0),o(e),n("/TicTacToe/onlineGame")})),Object(c.useEffect)((function(){k.conn&&i.on("open",(function(){i.on("data",(function(e){"object"==typeof e&&(S(e),C(!0))})),i.on("close",(function(){console.log("Connection Closed")})),i.on("error",(function(e){console.log("ERROR: ",e)}))}))})),Object(O.jsx)(x.Provider,{value:k,children:t})};var m=function(){var e=Object(s.f)(),t=Object(c.useContext)(x),n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1],o=function(){var n=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:""!==a?a!==t.peer.id?(c.preventDefault(),t.joinPeer(a),e("/TicTacToe/onlineGame")):alert("Can't connect to yourself"):alert("Can't be empty");case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"centerDivElementCol min-h-screen",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"text-5xl",children:"TicTacToe"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"button",onClick:function(){e("/TicTacToe/wait")},children:"Create Game"})}),Object(O.jsxs)("form",{className:"centerDivElement",onSubmit:o,children:[Object(O.jsx)("div",{children:Object(O.jsx)("input",{className:"textField",value:a,onChange:function(e){return i(e.target.value)},id:"roomID",placeholder:"Room ID",size:"38",required:!0})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"button",onClick:o,children:"Join Game"})})]})]})},v=n(13);var f=function(){var e=Object(s.f)(),t=Object(c.useContext)(x);return Object(O.jsxs)("div",{className:"centerDivElementCol min-h-screen",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"text-5xl",children:"Waiting for the opponent ..."})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"IDtext",children:"ID: "+t.peer.id})}),Object(O.jsx)("div",{children:Object(O.jsx)(v.CopyToClipboard,{text:t.peer.id,children:Object(O.jsx)("button",{className:"button",children:"COPY"})})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"button",onClick:function(){return e("/TicTacToe/localGame")},children:"Local Game"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"button",onClick:function(){return e("/TicTacToe")},children:"Back"})})]})};var T=function(e){return Object(O.jsx)("button",{className:"squareDim",onClick:function(){return e.handleClick(e.index)},children:e.value})};var p=function(e){return e.squares.map((function(t,n){return Object(O.jsx)(T,{index:n,value:t,handleClick:e.handleClick},n)}))};var C=function(){var e=Object(s.f)(),t=Object(c.useState)(!0),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(Array(9).fill(null)),o=Object(u.a)(i,2),l=o[0],j=o[1],b=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(u.a)(t[n],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}return!1}(l);return Object(O.jsxs)("div",{className:"setScreenSize",children:[Object(O.jsx)("div",{className:"centerDivElement text-5xl",children:Object(O.jsx)("p",{children:(b?e("/TicTacToe/game/rematch/"+b):l.includes(null)||e("/TicTacToe/game/rematch/D"),r?"X's turn":"O's turn")})}),Object(O.jsx)("div",{className:"centerDivElement boardDiv",children:Object(O.jsx)("div",{className:"board grid grid-rows-3 grid-cols-3",children:Object(O.jsx)(p,{squares:l,handleClick:function(e){if(!b&&null==l[e]){var t=l;t[e]=r?"X":"O",j(t),a(!r)}}})})})]})};var g=function(){var e=Object(s.f)(),t=Object(c.useContext)(x),n=Object(c.useState)(0),r=Object(u.a)(n,2),a=r[0],i=r[1],o=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(u.a)(t[n],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}return!1}(t.squares);return Object(O.jsxs)("div",{className:"setScreenSize",children:[Object(O.jsx)("div",{className:"centerDivElement text-5xl",children:Object(O.jsx)("p",{children:(o?(t.setSquares(Array(9).fill(null)),e("/TicTacToe/game/rematch/"+o)):t.squares.includes(null)||(t.setSquares(Array(9).fill(null)),e("/TicTacToe/game/rematch/draw")),t.onTurn?"Your turn":"Opponent's turn")})}),Object(O.jsx)("div",{className:"centerDivElement boardDiv",children:Object(O.jsx)("div",{className:"board grid grid-rows-3 grid-cols-3",children:Object(O.jsx)(p,{squares:t.squares,handleClick:function(e){if(null==t.squares[e]&&t.onTurn){var n=t.squares;n[e]=t.shape,t.setSquares(n),t.onTurn=!1,t.conn.send(n),i(a+1)}}})})})]})};var N=function(){var e=Object(s.f)(),t=Object(c.useContext)(x);return Object(O.jsxs)("div",{className:"centerDivElementCol min-h-screen",children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"text-5xl",children:function(){var e=Object(s.g)().winner;return"draw"!==e?e+" won the game!":"Draw!"}()})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"button marginTopPlus",onClick:function(){e("/TicTacToe")},children:"Menu"}),Object(O.jsx)("button",{className:"button marginTopPlus",onClick:function(){return console.log(t),t.conn||e("/TicTacToe/localGame"),void e("/TicTacToe/onlineGame")},children:"Restart"})]})]})};var D=function(){return Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/TicTacToe",element:Object(O.jsx)(m,{})})," ",Object(O.jsx)(s.a,{exact:!0,path:"/TicTacToe/wait",element:Object(O.jsx)(f,{})})," ",Object(O.jsx)(s.a,{exact:!0,path:"/TicTacToe/localGame",element:Object(O.jsx)(C,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/TicTacToe/onlineGame",element:Object(O.jsx)(g,{})}),Object(O.jsx)(s.a,{path:"/TicTacToe/game/rematch/:winner",element:Object(O.jsx)(N,{})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},k=n(5);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsxs)(k.a,{children:[" ",Object(O.jsx)(h,{children:Object(O.jsx)(D,{})})]})}),document.getElementById("root")),S()},6:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.aad33849.chunk.js.map