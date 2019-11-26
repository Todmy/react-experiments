(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{46:function(e,n,t){e.exports=t(64)},52:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(33),o=t.n(c),l=("undefined"===typeof window.IntersectionObserver&&t.e(3).then(t.t.bind(null,67,7)),t(16)),s=t(15),i=t(23),m=t(19),u=t(66),d=t(34),p=t.n(d),E=function(e){var n=e.loading,t=e.error,a=e.success,c=e.data,o=c.loading,l=c.error,s=c.data;return o&&p()(s)?r.a.cloneElement(n,c):l?r.a.cloneElement(t,c):r.a.cloneElement(a,c)};E.displayName="QuerySwitch";var f=E,v=(t(52),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),b=function(e){var n=e.error;return r.a.createElement("div",null,"Error! ".concat(n.message))},g=t(44),h=t(37),k=function(e){var n=e.data,t=e.fetchMore,c=e.children,o=Object(a.useState)(!1),s=Object(g.a)(o,2),i=s[0],m=s[1];return r.a.createElement("div",{className:"pokemons-list"},n.pokemons.map((function(e,n){return r.a.createElement(l.b,{to:"/pokemons/".concat(e.id),className:"list-item",key:n},r.a.cloneElement(c,{data:e}))})),n.pokemons.length&&!i&&r.a.createElement(h.a,{as:"div",className:"loader",onChange:function(e){return e?void t({variables:{limit:n.pokemons.length+25},updateQuery:function(e,n){var t=n.fetchMoreResult;return t.pokemons.length-e.pokemons.length<25&&m(!0),t}}).catch(console.warn):null}}))};k.displayName="List";var y=k,w=(t(57),function(e){var n=e.set,t=e.label;return n?r.a.createElement("div",{className:"".concat(t," badge-set")},r.a.createElement("div",{className:"badge-set-name"},t,": "),r.a.createElement("div",{className:"badge-set-content"},n.map((function(e,n){return r.a.createElement("span",{className:"badge",key:n},e)})))):null});w.displayName="BadgesSet";var O=w,N=function(e){var n=e.data,t=e.loading,a=e.short,c=void 0!==a&&a;return r.a.createElement("div",{className:"pokemons-details"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n.image,")")},className:"image image-container",alt:n.name}),r.a.createElement("div",{className:"number"},n.number),r.a.createElement("div",{className:"name"},n.name),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{set:n.types,label:"types"}),r.a.createElement(O,{set:n.resistant,label:"resistant"}),r.a.createElement(O,{set:n.weaknesses,label:"weaknesses"})),t&&r.a.createElement(v,null))};N.displayName="Details";var j=N;t(58);function P(){var e=Object(i.a)(["\n  query Pokemons($limit: Int!) {\n    pokemons(first: $limit) {\n      id\n      name\n      image\n      number\n    }\n  }\n"]);return P=function(){return e},e}var q=Object(m.b)(P()),D=function(){return r.a.createElement("div",{className:"pokemons-list-page"},r.a.createElement("h2",{className:"heading"},"Pokemons"),r.a.createElement(u.a,{query:q,variables:{limit:25},displayName:"LoadAllPokemons"},(function(e){return r.a.createElement(f,{data:e,loading:r.a.createElement(v,null),error:r.a.createElement(b,null),success:r.a.createElement(y,null,r.a.createElement(j,{short:!0}))})})))},S=t(42),$=t(43),B=t.n($);t(61);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function x(){var e=Object(i.a)(["\n  query Pokemon($id: String!) {\n    pokemon(id: $id) {\n      id\n      name\n      image\n      number\n      types\n      resistant\n      weaknesses\n    }\n  }\n"]);return x=function(){return e},e}var L=Object(m.b)(x()),Q=function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(t,!0).forEach((function(n){Object(S.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{data:e.data.pokemon})},C=function(){var e=Object(s.g)().id;return r.a.createElement("div",{className:"pokemons-details-page"},r.a.createElement("div",{className:"navigation"},r.a.createElement(l.b,{to:"/pokemons"},"Back")),r.a.createElement(u.a,{query:L,variables:{id:e},returnPartialData:!0},B()([Q,function(e){return r.a.createElement(f,{data:e,loading:r.a.createElement(v,null),error:r.a.createElement(b,null),success:r.a.createElement(j,null)})}])))},J=function(e){var n=e.path;return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:n,component:D}),r.a.createElement(s.b,{exact:!0,path:"".concat(n,"/:id"),component:C}))},M=function(){return r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(J,{path:"/pokemons"}),r.a.createElement(s.a,{to:"/pokemons"})))};t(62);var R=function(){return r.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(5),_=t(17),A=new m.a({uri:"https://graphql-pokemon.now.sh/graphql",cache:new _.a({cacheRedirects:{Query:{pokemon:function(e,n,t){return(0,t.getCacheKey)({__typename:"Pokemon",id:n.id})}}}})});t(63);o.a.render(r.a.createElement((function(e){return r.a.createElement(W.a,{client:A},e.children)}),null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.2537888e.chunk.js.map