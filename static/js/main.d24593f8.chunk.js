(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(14),n(1)),i=n.n(s),u=n(2),l=n(3),p=n(4),m=n(6),h=n(5),f=function(e){var t=e.name,n=e.type,a=e.id;return r.a.createElement("div",{className:"tc bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:t,src:a<=721?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/".concat(a,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/".concat(a,".png")}),r.a.createElement("h2",{style:{textTransform:"capitalize"}},"Name: ",t),r.a.createElement("p",null,"Id:#",[function(e){return e<10?[0,0]:e<100?0:void 0}(a),a],r.a.createElement("br",null),"Type/s: ",n))},g=function(e){var t=e.pokemons;return r.a.createElement("div",{className:"bg-gold"},t.filter((function(e){return e.id<=893})).map((function(e,t){return r.a.createElement(f,{key:t,name:e.name,id:e.id,type:e.name})})))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid rgba(86, 148, 209, 0.3)",height:"700px"}},e.children)},k=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Pokemons",onChange:t}))},v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(p.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops, Something went wrong.."):this.props.children}}]),n}(a.Component),b=(n(16),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).fetchPokemons=Object(u.a)(i.a.mark((function t(){var n,a,r,o,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(20*e.state.page,"&limit=20"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.next=8,Promise.all(a.results.map((function(e){return fetch(e.url)})));case 8:return r=t.sent,o=r.map(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=12,Promise.all(o);case 12:c=t.sent,e.setState({pokemons:c});case 14:case"end":return t.stop()}}),t)}))),e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.pageUp=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n&&e.state.page<44)){t.next=5;break}return t.next=3,e.setState({page:e.state.page+1});case 3:t.next=8;break;case 5:if(n||0===e.state.page){t.next=8;break}return t.next=8,e.setState({page:e.state.page-1});case 8:return t.next=10,e.fetchPokemons();case 10:console.log(e.state.pokemons);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={pokemons:[],searchfield:"",page:0},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchPokemons(0);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.pokemons,a=t.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"app tc bg-red"},r.a.createElement("h1",{className:"f1",style:{margin:0}},"Pokedex!"),r.a.createElement("h3",null,"Using the ",r.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank"},"PokeAPI")),r.a.createElement("button",{onClick:function(){e.pageUp(!1)}},"Page down"),r.a.createElement("button",{onClick:function(){e.pageUp(!0)}},"Page up"),r.a.createElement("p",null,"Page: ",this.state.page),r.a.createElement(k,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(g,{pokemons:o}))))}}]),n}(r.a.Component));n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d24593f8.chunk.js.map