(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},43:function(e,t,a){},70:function(e,t){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(34),r=a.n(i),c=(a(42),a(3)),o=a(4),s=a(7),u=a(5),m=a(1),p=a(6),d=(a(43),function(){return l.a.createElement("div",{className:"tp-navigation"},l.a.createElement("h1",null,l.a.createElement("a",{href:"#",className:"tp-brand"},"Poseidon")))}),h=function(e){var t=e.totalSignedUp;return l.a.createElement("div",{className:"tp-main"},l.a.createElement("h2",null,"Total for"),l.a.createElement("div",{className:"tp-real-time-data"},l.a.createElement("div",{className:"tp-total"},l.a.createElement("h2",null,"Game"),l.a.createElement("h3",null,t||0))))},g=a(12),b=a(35),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.updateGameObject=e.updateGameObject.bind(Object(m.a)(e)),e.state={game:{question:"",options:"",totalwinners:0,date:"",answer:""}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state.game;this.setState({game:Object(b.a)({},t,Object(g.a)({},e.target.id,e.target.value))})}},{key:"updateGameObject",value:function(e){e.preventDefault();var t=this.state.game,a=this.props.updateGameObject;a(t)}},{key:"render",value:function(){this.props.updateGameObject;var e=this.state.game,t=e.question,a=e.options,n=e.totalwinners,i=e.date,r=e.answer;return l.a.createElement("div",{className:"tp-create-game"},l.a.createElement("h3",{style:{padding:10,paddingLeft:0}},"Create a new game"),l.a.createElement("form",{onSubmit:this.updateGameObject},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"tp-input-field",placeholder:"question",id:"question",required:!0,value:t,onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"tp-input-field",placeholder:"options",value:a,required:!0,id:"options",onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("input",{type:"number",placeholder:"total winners",value:n,className:"tp-input-field",id:"totalwinners",required:!0,onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Answer",value:r,className:"tp-input-field",id:"answer",required:!0,onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("input",{type:"date",id:"date",className:"tp-input-field",placeholder:"Choose date",onChange:this.handleInputChange,value:i})),l.a.createElement("div",null,l.a.createElement("button",{className:"tp-auth-btn"},"Create game"))))}}]),t}(n.Component),f=function(){var e=[].length?e.map(function(e){return null}):l.a.createElement("p",{className:"tp-no-winner"},"No winners to be paid");return l.a.createElement("div",{className:"tp-winners"},l.a.createElement("h2",null,"Winners"),e)},v=new(a(36))("https://topner.herokuapp.com"),O={getgameobject:"GET-GAME",setgameobject:"SET-GAME",turngameonoroff:"TURN-ON-OFF",updategameobject:"UPDATE-GAME-OBJECT",newuserjoined:"NEW-USER"},j=O.setgameobject,N=O.newuserjoined,w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.socket,a=e.setGameObject,n=e.updateTotalNumberOfSignedUpUser;t.on(j,function(e){a(e)}),t.on(N,function(e){n(e)})}},{key:"render",value:function(){return null}}]),t}(n.Component),G=function(e){var t=e.game,a=e.setGameState;return t?l.a.createElement("div",{className:"tp-game"},l.a.createElement("h2",null,t.question.question),l.a.createElement("h4",null,t.question.option.toString()),l.a.createElement("h4",null,t.question.answer),l.a.createElement("h2",{style:{paddingTop:20}},t.gameison?l.a.createElement("span",{className:"tp-indicator tp-game-on"}):l.a.createElement("span",{className:"tp-indicator tp-game-off"})),l.a.createElement("label",null,"Set game on/off"," ",l.a.createElement("input",{type:"checkbox",checked:t.gameison,onChange:a}))):l.a.createElement("h3",null,"No game is on")},S=O.getgameobject,k=O.turngameonoroff,y=O.updategameobject,C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={game:null,totalSignedUp:null},e.setGameObject=e.setGameObject.bind(Object(m.a)(e)),e.updateTotalNumberOfSignedUpUsers=e.updateTotalNumberOfSignedUpUsers.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setGameObject",value:function(e){this.setState({game:e})}},{key:"updateGameObject",value:function(e){v.emit(y,e)}},{key:"setGameState",value:function(e){e.target.checked?v.emit(k,!0):v.emit(k,!1)}},{key:"componentDidMount",value:function(){v.emit(S)}},{key:"updateTotalNumberOfSignedUpUsers",value:function(e){this.setState({totalSignedUp:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"tp-main"},l.a.createElement(d,null),l.a.createElement(h,{totalSignedup:this.state.totalSignedUp}),l.a.createElement(f,null),l.a.createElement(G,{game:this.state.game,setGameState:this.setGameState}),l.a.createElement(E,{updateGameObject:this.updateGameObject}),l.a.createElement(w,{socket:v,setGameObject:this.setGameObject,updateTotalNumberOfSignedUpUsers:this.updateTotalNumberOfSignedUpUsers})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.6faa4c06.chunk.js.map