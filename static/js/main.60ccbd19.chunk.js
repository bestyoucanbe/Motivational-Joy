(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n,r=a(26),i=a.n(r),c=a(0),o=a.n(c),s=a(19),l=a(5),u=a(6),d=a(8),h=a(7),m=a(9),f=a(76),v=a(77),p=a(78),y=a(79),E=a(80),g=a(85),b=a(81),k=a(82),C=a(83),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{color:"light",light:!0,expand:"md"},o.a.createElement(v.a,{href:"/"},"Motivation Joy"),o.a.createElement(p.a,{onClick:this.toggle}),o.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(E.a,{className:"ml-auto",navbar:!0},o.a.createElement(g.a,{nav:!0,inNavbar:!0},o.a.createElement(b.a,{nav:!0,caret:!0},"What would you like to do?"),o.a.createElement(k.a,{right:!0},o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/My_Favorites"},"My Favorites")),o.a.createElement(C.a,{divider:!0}),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/My_Photos"},"My Photos")),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/My_Quotes"},"My Quotes")),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/My_Ideas"},"My Ideas")),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/My_Activities"},"My Activities")),o.a.createElement(C.a,{divider:!0}),o.a.createElement(C.a,null,o.a.createElement(s.b,{to:"/logout"},"Logout"))))))))}}]),t}(o.a.Component),O=a(16);a(63);n="https://motivation-joy.herokuapp.com";var S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:""},a.handleFieldChangeUsername=function(e){a.setState({username:e.target.value})},a.handleFieldChangePassword=function(e){a.setState({password:e.target.value})},a.getUser=function(){return fetch("".concat(n,"/users?q=").concat(a.state.username)).then(function(e){return e.json()})},a.findCurrentUser=function(e){e.preventDefault(),console.log("click works"),""===a.state.username||""===a.state.password?window.alert("Please fill in all fields"):a.getUser().then(function(e){e[0]?a.state.username===e[0].username&&a.state.password===e[0].password&&(sessionStorage.setItem("id",e[0].id),a.props.setAuthState(),a.props.history.push("/My_Photos")):window.alert("Please use a valid login or register")})},a.addThisUser=function(e){if(e.preventDefault(),""===a.state.username||""===a.state.password)window.alert("Please fill in all fields");else{var t={username:a.state.username,password:a.state.password};a.getUser().then(function(e){e[0]?a.state.username===e[0].username&&a.state.password===e[0].password?(window.alert("You already exist in our system!"),sessionStorage.setItem("id",e[0].id),a.props.setAuthState(),a.props.history.push("/My_Photos")):a.state.username===e[0].username&&a.state.password!==e[0].password&&window.alert("You already exist in our system. Please enter the correct password and press Login."):a.postUser(t).then(function(e){sessionStorage.setItem("id",e.id),a.props.setAuthState(),a.props.history.push("/My_Photos")})})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"postUser",value:function(e){return fetch("".concat(n,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})}},{key:"render",value:function(){return o.a.createElement("div",{className:"loginform"},o.a.createElement("h2",null,"Welcome to Motivation Joy"),o.a.createElement("div",{className:"usernameinfo"},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",id:"username",onChange:this.handleFieldChangeUsername})),o.a.createElement("div",{className:"passwordinfo"},o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",id:"password",onChange:this.handleFieldChangePassword})),o.a.createElement("button",{onClick:this.findCurrentUser,className:"btn btn-primary mb-5"},"Login"),o.a.createElement("div",{className:"registerinfo"},o.a.createElement("label",{className:"registermessage mr-3"},"Not a user yet? Enter username and password fields above and then"),o.a.createElement("a",{href:"#",className:"btn btn-secondary",onClick:this.addThisUser},"Click Here to Register")))}}]),t}(c.Component),j=Object(O.e)(S),I=a(84),w=a(42),A=(a(64),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={radioSelected:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){!0===e?(sessionStorage.clear(),this.props.setAuthState(),this.props.history.push("/login")):this.props.history.push("/My_Favorites")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"logoutform"},o.a.createElement("h5",null,"Are you sure you want to logout?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))))}}]),t}(c.Component)),M=Object(O.e)(A),U=a(15),F=(a(65),n),_={get:function(e){return fetch("".concat(F,"/photos/").concat(e)).then(function(e){return e.json()})},getAll:function(){return fetch("".concat(F,"/photos")).then(function(e){return e.json()})},getSpecificInfo:function(e){return fetch("".concat(F,"/").concat(e)).then(function(e){return e.json()})},post:function(e){return fetch("".concat(F,"/photos"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},put:function(e){return fetch("".concat(F,"/photos/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},delete:function(e){return fetch("".concat(F,"/photos/").concat(e.id),{method:"DELETE"}).then(function(e){return e.json()})}},q=n,P={get:function(e){return fetch("".concat(q,"/quotes/").concat(e)).then(function(e){return e.json()})},getAll:function(){return fetch("".concat(q,"/quotes")).then(function(e){return e.json()})},getSpecificInfo:function(e){return fetch("".concat(q,"/").concat(e)).then(function(e){return e.json()})},post:function(e){return fetch("".concat(q,"/quotes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},put:function(e){return fetch("".concat(q,"/quotes/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},delete:function(e){return fetch("".concat(q,"/quotes/").concat(e.id),{method:"DELETE"}).then(function(e){return e.json()})}},Q=n,x={get:function(e){return fetch("".concat(Q,"/ideas/").concat(e)).then(function(e){return e.json()})},getAll:function(){return fetch("".concat(Q,"/ideas")).then(function(e){return e.json()})},getSpecificInfo:function(e){return fetch("".concat(Q,"/").concat(e)).then(function(e){return e.json()})},post:function(e){return fetch("".concat(Q,"/ideas"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},put:function(e){return fetch("".concat(Q,"/ideas/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},delete:function(e){return fetch("".concat(Q,"/ideas/").concat(e.id),{method:"DELETE"}).then(function(e){return e.json()})}},B=n,R={get:function(e){return fetch("".concat(B,"/activities/").concat(e)).then(function(e){return e.json()})},getAll:function(){return fetch("".concat(B,"/activities")).then(function(e){return e.json()})},getSpecificInfo:function(e){return fetch("".concat(B,"/").concat(e)).then(function(e){return e.json()})},post:function(e){return fetch("".concat(B,"/activities"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},put:function(e){return fetch("".concat(B,"/activities/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},delete:function(e){return fetch("".concat(B,"/activities/").concat(e.id),{method:"DELETE"}).then(function(e){return e.json()})}},T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).currentUserId=parseInt(sessionStorage.getItem("id")),a.onClickPhotoHandler=function(e){var t=Object(U.a)({},e);t.isfavorite=!t.isfavorite,_.put(t).then(function(){return a.props.getMyFavoritePhotos()})},a.onClickQuoteHandler=function(e){var t=Object(U.a)({},e);t.isfavorite=!t.isfavorite,P.put(t).then(function(){return a.props.getMyFavoriteQuotes()})},a.onClickIdeaHandler=function(e){var t=Object(U.a)({},e);t.isfavorite=!t.isfavorite,x.put(t).then(function(){return a.props.getMyFavoriteIdeas()})},a.onClickActivityHandler=function(e){var t=Object(U.a)({},e);t.isfavorite=!t.isfavorite,R.put(t).then(function(){return a.props.getMyFavoriteActivities()})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getMyFavoritePhotos(),this.props.getMyFavoriteQuotes(),this.props.getMyFavoriteIdeas(),this.props.getMyFavoriteActivities()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingmyfav"},"My Favorites")),o.a.createElement("div",{className:"allitems-container"},this.props.photos.map(function(t){return o.a.createElement("div",{key:t.id,className:"card border border-primary"},o.a.createElement("img",{className:"card-img-top",src:t.url,alt:"favorite pic"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("a",{href:"#",onClick:function(){return e.onClickPhotoHandler(t)},className:"btn btn-danger"},"Remove")))}),this.props.quotes.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-danger mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Quote"),o.a.createElement("p",null,t.quote),o.a.createElement("p",null,t.author),o.a.createElement("a",{href:"#",onClick:function(){return e.onClickQuoteHandler(t)},className:"btn btn-warning"},"Remove")))}),this.props.ideas.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-success mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Idea"),o.a.createElement("p",null,t.idea),o.a.createElement("a",{href:"#",onClick:function(){return e.onClickIdeaHandler(t)},className:"btn btn-danger"},"Remove")))}),this.props.activities.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-primary mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Activity"),o.a.createElement("p",null,t.activity_nickname),o.a.createElement("a",{href:"#",onClick:function(){return e.onClickActivityHandler(t)},className:"btn btn-danger"},"Remove")))})))}}]),t}(c.Component),D={getEventsByTime:function(e){return fetch("".concat("https://www.eventbriteapi.com/v3","/events/search/?location.address=nashville&location.within=10mi&start_date.keyword=").concat(e,"&token=").concat("XIDA57II6OQB3SSLJCVW")).then(function(e){return e.json()})}},J=(a(66),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isfavorite:!0,radioSelected:!0},a.handleOnChangePhotoUrl=function(e){a.setState({value:e.target.value})},a.handleOnClickAddPhotoButton=function(){var e={userid:a.props.currentUserId,url:a.state.value,isfavorite:a.state.isfavorite};_.post(e).then(function(){a.setState({value:""}),a.props.getMyPhotos()})},a.changeMyFavorite=function(e){console.log("selected photo",e);var t=Object(U.a)({},e);t.isfavorite=!t.isfavorite,_.put(t).then(function(){return a.props.getMyPhotos()})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){this.props.getMyPhotos()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingmypho"},"My Photos")),o.a.createElement("div",{className:"photo-page-container"},o.a.createElement("div",{className:"form-container w-25"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"addaphoto"},"Want to add a photo?"),o.a.createElement("textarea",{value:this.state.value,className:"form-control",id:"addaphoto",rows:"3",placeholder:"(Enter image address here...select if you want it in favorites...and then press the Add Photo button)",onChange:this.handleOnChangePhotoUrl})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{disabled:!this.state.value,className:"btn btn-primary",onClick:this.handleOnClickAddPhotoButton},"Add Photo")),o.a.createElement("section",{className:"photo-container w-75"},this.props.photos.map(function(t){return o.a.createElement("div",{key:t.id,className:"card border border-primary"},o.a.createElement("img",{className:"card-img-top",src:t.url,alt:"Card cap"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"favorites-on-cardgroup mb-3"},o.a.createElement("b",{className:"text-danger"},"Favorite:"),o.a.createElement("input",{type:"checkbox",id:"myfavorite",checked:t.isfavorite,onChange:function(){return e.changeMyFavorite(t)}})),o.a.createElement("a",{href:"#",className:"btn btn-danger",onClick:function(){return e.props.deletePhoto(t)}},"Delete")))}))))}}]),t}(c.Component)),L=(a(67),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={quote:"",author:"",isfavorite:!0,radioSelected:!0},a.handleOnChangeQuote=function(e){a.setState({quote:e.target.value})},a.handleOnChangeAuthor=function(e){a.setState({author:e.target.value})},a.handleOnClickAddQuoteButton=function(){if(""===a.state.quote||""===a.state.author)window.alert("Please fill in all fields");else{var e={userid:a.props.currentUserId,quote:a.state.quote,author:a.state.author,isfavorite:a.state.isfavorite};P.post(e).then(function(){a.setState({quote:""}),a.setState({author:""}),a.props.getMyQuotes()})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){this.props.getMyQuotes()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingMyQuo"},"My Quotes")),o.a.createElement("div",{className:"quote-page-container"},o.a.createElement("div",{className:"form-container w-25"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"addaquote"},"Want to add a quote?"),o.a.createElement("textarea",{value:this.state.quote,className:"form-control",id:"addaquote",rows:"3",placeholder:"(Enter quote here...select if you want it in favorites...and then press the Add Quote button)",onChange:this.handleOnChangeQuote}),o.a.createElement("label",{htmlFor:"addaquote"},"Author"),o.a.createElement("textarea",{value:this.state.author,className:"form-control",id:"addaquote",rows:"3",placeholder:"(Enter name of author)",onChange:this.handleOnChangeAuthor})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{disabled:!this.state.quote,className:"btn btn-primary",onClick:this.handleOnClickAddQuoteButton},"Add Quote")),o.a.createElement("section",{className:"quote-container w-75"},this.props.quotes.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-danger mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Quote"),o.a.createElement("p",null,t.quote),o.a.createElement("p",null,t.author),o.a.createElement("a",{href:"#",className:"btn btn-primary mb-2",onClick:function(){e.props.history.push("/My_Quotes/".concat(t.id,"/edit"))}},"Edit"),o.a.createElement("a",{href:"#",className:"btn btn-warning",onClick:function(){return e.props.deleteQuote(t)}},"Delete")))}))))}}]),t}(c.Component)),Y=(a(68),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={quote:"",author:"",isfavorite:!0,radioSelected:!0},a.handleOnChangeQuote=function(e){a.setState({quote:e.target.value})},a.handleOnChangeAuthor=function(e){a.setState({author:e.target.value})},a.updateExistingQuote=function(e){if(e.preventDefault(),""===a.state.quote||""===a.state.author)window.alert("Please fill in all fields");else{var t={id:parseInt(a.props.match.params.quoteId),quote:a.state.quote,author:a.state.author,isfavorite:a.state.isfavorite,userid:a.props.currentUserId};a.props.updateQuote(t).then(function(){return a.props.history.push("/My_Quotes")})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){var e=this;P.get(this.props.match.params.quoteId).then(function(t){e.setState({quote:t.quote,author:t.author})})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"heading"},"Edit a Quote")),o.a.createElement("div",{className:"form-container w-50"},o.a.createElement("form",{className:"quoteForm"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"change-quote"},"Quote"),o.a.createElement("textarea",{value:this.state.quote,className:"form-control",id:"change-quote",rows:"3",onChange:this.handleOnChangeQuote})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"author"},"Author"),o.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleOnChangeAuthor,id:"author",value:this.state.author})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{type:"submit",onClick:this.updateExistingQuote,className:"btn btn-primary"},"Submit")))))}}]),t}(c.Component)),H=(a(69),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={idea:"",isfavorite:!0,radioSelected:!0},a.handleOnChangeIdea=function(e){a.setState({idea:e.target.value})},a.handleOnClickAddIdeaButton=function(){if(""===a.state.idea)window.alert("Please fill in all fields");else{var e={userid:a.props.currentUserId,idea:a.state.idea,isfavorite:a.state.isfavorite};x.post(e).then(function(){a.setState({idea:""}),a.props.getMyIdeas()})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){this.props.getMyIdeas()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingMyIdea"},"My Ideas")),o.a.createElement("div",{className:"idea-page-container"},o.a.createElement("div",{className:"form-container w-25"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"addaidea"},"Want to add an idea?"),o.a.createElement("textarea",{value:this.state.idea,className:"form-control",id:"addaidea",rows:"3",placeholder:"(Enter idea here...select if you want it in favorites...and then press the Add Idea button)",onChange:this.handleOnChangeIdea})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{disabled:!this.state.idea,className:"btn btn-primary",onClick:this.handleOnClickAddIdeaButton},"Add Idea")),o.a.createElement("section",{className:"idea-container w-75"},this.props.ideas.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-success mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Idea"),o.a.createElement("p",null,t.idea),o.a.createElement("a",{href:"#",className:"btn btn-primary mb-2",onClick:function(){e.props.history.push("/My_Ideas/".concat(t.id,"/edit"))}},"Edit"),o.a.createElement("a",{href:"#",className:"btn btn-danger",onClick:function(){return e.props.deleteIdea(t)}},"Delete")))}))))}}]),t}(c.Component)),W=(a(70),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={idea:"",isfavorite:!0,radioSelected:!0},a.currentUserId=parseInt(sessionStorage.getItem("id")),a.handleOnChangeIdea=function(e){a.setState({idea:e.target.value})},a.updateExistingIdea=function(e){if(e.preventDefault(),""===a.state.idea)window.alert("Please fill in all fields");else{var t={id:parseInt(a.props.match.params.ideaId),idea:a.state.idea,isfavorite:a.state.isfavorite,userid:a.currentUserId};a.props.updateIdea(t).then(function(){return a.props.history.push("/My_Ideas")})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){var e=this;x.get(this.props.match.params.ideaId).then(function(t){e.setState({idea:t.idea})})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingIdeaEdit"},"Edit a Idea")),o.a.createElement("div",{className:"form-container w-50"},o.a.createElement("form",{className:"ideaForm"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"change-idea"},"Idea"),o.a.createElement("textarea",{value:this.state.idea,className:"form-control",id:"change-idea",rows:"3",onChange:this.handleOnChangeIdea})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{type:"submit",onClick:this.updateExistingIdea,className:"btn btn-primary"},"Submit")))))}}]),t}(c.Component)),V=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",activity_nickname:"",isfavorite:!0,radioSelected:!0},a.handleOnChangeActivityUrl=function(e){a.setState({value:e.target.value})},a.handleOnChangeActivityNickname=function(e){a.setState({activity_nickname:e.target.value})},a.handleOnClickAddActivityButton=function(){if(""===a.state.activity_url||""===a.state.activity_nickname)window.alert("Please fill in all fields");else{var e={userid:a.props.currentUserId,activity_nickname:a.state.activity_nickname,activity_url:a.state.value,isfavorite:a.state.isfavorite};R.post(e).then(function(){a.setState({value:""}),a.setState({activity_nickname:""}),a.props.getMyActivities()})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){this.props.getMyActivities(),this.setState({value:this.props.eventurl}),this.props.onClickResetEventUrl("")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingmyactivity"},"My Activities")),o.a.createElement("div",{className:"activity-page-container"},o.a.createElement("div",{className:"form-container w-25"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"addaactivity",className:"mr-3"},"Want to add an activity?"),o.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.props.history.push("/My_EventbriteList")}},"Choose from a List"),o.a.createElement("textarea",{value:this.state.value,className:"form-control",id:"addaactivity",rows:"3",placeholder:"(Click the button above or enter web url here)",onChange:this.handleOnChangeActivityUrl}),o.a.createElement("label",{htmlFor:"addanickname"},"Short Description/Title"),o.a.createElement("textarea",{value:this.state.activity_nickname,className:"form-control",id:"addanickname",rows:"3",placeholder:"(Type a short title/description you can easily remember)",onChange:this.handleOnChangeActivityNickname})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{disabled:!this.state.value,className:"btn btn-primary",onClick:this.handleOnClickAddActivityButton},"Add Activity")),o.a.createElement("section",{className:"activity-container w-75"},this.props.activities.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-primary mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Activity"),o.a.createElement("p",null,t.activity_nickname),o.a.createElement("a",{href:"#",className:"btn btn-warning mb-2",onClick:function(){e.props.history.push("/My_Activities/".concat(t.id,"/edit"))}},"Edit"),o.a.createElement("a",{href:"#",className:"btn btn-danger",onClick:function(){return e.props.deleteActivity(t)}},"Delete")))}))))}}]),t}(c.Component)),X=(a(72),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={activity_nickname:"",activity_url:"",isfavorite:!0,radioSelected:!0},a.handleOnChangeActivityNickname=function(e){a.setState({activity_nickname:e.target.value})},a.updateExistingActivity=function(e){if(e.preventDefault(),""===a.state.activity_nickname)window.alert("Please fill in the Activity Title/Description field");else{var t={id:parseInt(a.props.match.params.activityId),activity_nickname:a.state.activity_nickname,activity_url:a.state.activity_url,isfavorite:a.state.isfavorite,userid:a.props.currentUserId};a.props.updateActivity(t).then(function(){return a.props.history.push("/My_Activities")})}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onRadioBtnClick",value:function(e){this.setState({isfavorite:e})}},{key:"componentDidMount",value:function(){var e=this;R.get(this.props.match.params.activityId).then(function(t){console.log("activitytoedit",t),e.setState({activity_url:t.activity_url,activity_nickname:t.activity_nickname})})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingActivityEdit"},"Edit a Activity")),o.a.createElement("div",{className:"form-container w-50"},o.a.createElement("label",null,"Link to the Activity:"),o.a.createElement("form",{className:"activityForm"},o.a.createElement("a",{href:this.state.activity_url,target:"_blank"},this.state.activity_url),o.a.createElement("p",null),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"change-activity"},"Activity Title/Short Description"),o.a.createElement("textarea",{value:this.state.activity_nickname,className:"form-control",id:"change-activity",rows:"3",onChange:this.handleOnChangeActivityNickname})),o.a.createElement("div",null,o.a.createElement("h5",null,"Favorite?"),o.a.createElement(I.a,{className:"mb-3"},o.a.createElement(w.a,{color:"success",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.radioSelected},"Yes"),o.a.createElement(w.a,{color:"danger",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.radioSelected},"No"))),o.a.createElement("button",{type:"submit",onClick:this.updateExistingActivity,className:"btn btn-primary"},"Submit")))))}}]),t}(c.Component)),z=(a(73),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getEventbriteevents()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",{className:"headingmyevents"},"List of Events")),o.a.createElement("div",{className:"events-page-container"},o.a.createElement("section",{className:"events-container"},this.props.events.map(function(t){return o.a.createElement("div",{key:t.id,className:"card text-white bg-dark mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Event"),o.a.createElement("p",null,t.name.text),o.a.createElement("a",{href:t.url,target:"_blank"},t.url),o.a.createElement("a",{href:"#",className:"btn btn-warning mb-2",onClick:function(){e.props.onClickEventChosen(t.url)}},"Choose This")))}))))}}]),t}(c.Component)),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={photos:[],quotes:[],ideas:[],activities:[],events:[],eventurl:""},a.currentUserId=parseInt(sessionStorage.getItem("id")),a.getMyFavoritePhotos=function(){_.getSpecificInfo("photos?userid=".concat(a.currentUserId,"&isfavorite=true")).then(function(e){a.setState({photos:e})})},a.getMyFavoriteQuotes=function(){P.getSpecificInfo("quotes?userid=".concat(a.currentUserId,"&isfavorite=true")).then(function(e){a.setState({quotes:e})})},a.getMyFavoriteIdeas=function(){x.getSpecificInfo("ideas?userid=".concat(a.currentUserId,"&isfavorite=true")).then(function(e){a.setState({ideas:e})})},a.getMyFavoriteActivities=function(){R.getSpecificInfo("activities?userid=".concat(a.currentUserId,"&isfavorite=true")).then(function(e){a.setState({activities:e})})},a.getMyPhotos=function(){_.getSpecificInfo("photos?userid=".concat(a.currentUserId)).then(function(e){a.setState({photos:e})})},a.deletePhoto=function(e){_.delete(e).then(function(){return _.getSpecificInfo("photos?userid=".concat(a.currentUserId))}).then(function(e){a.setState({photos:e})})},a.getMyQuotes=function(){P.getSpecificInfo("quotes?userid=".concat(a.currentUserId)).then(function(e){a.setState({quotes:e})})},a.updateQuote=function(e){return P.put(e).then(function(){return P.getAll()}).then(function(e){a.setState({quotes:e})})},a.deleteQuote=function(e){P.delete(e).then(function(){return P.getSpecificInfo("quotes?userid=".concat(a.currentUserId))}).then(function(e){a.setState({quotes:e})})},a.getMyIdeas=function(){x.getSpecificInfo("ideas?userid=".concat(a.currentUserId)).then(function(e){a.setState({ideas:e})})},a.updateIdea=function(e){return x.put(e).then(function(){return x.getAll()}).then(function(e){a.setState({ideas:e})})},a.deleteIdea=function(e){x.delete(e).then(function(){return x.getSpecificInfo("ideas?userid=".concat(a.currentUserId))}).then(function(e){a.setState({ideas:e})})},a.getMyActivities=function(){R.getSpecificInfo("activities?userid=".concat(a.currentUserId)).then(function(e){a.setState({activities:e})})},a.updateActivity=function(e){return R.put(e).then(function(){return R.getAll()}).then(function(e){a.setState({activities:e})})},a.deleteActivity=function(e){R.delete(e).then(function(){return R.getSpecificInfo("activities?userid=".concat(a.currentUserId))}).then(function(e){a.setState({activities:e})})},a.getEventbriteevents=function(){D.getEventsByTime("this_week").then(function(e){a.setState({events:e.events}),console.log("Eventbrite events",e.events)})},a.onClickEventChosen=function(e){a.setState({eventurl:e}),a.props.history.push("/My_Activities")},a.onClickResetEventUrl=function(e){a.setState({eventurl:e})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{exact:!0,path:"/login",render:function(e){return o.a.createElement(j,e)}}),o.a.createElement(O.a,{exact:!0,path:"/logout",render:function(t){return o.a.createElement(M,Object.assign({},t,{setAuthState:e.props.setAuthState}))}}),o.a.createElement(O.a,{exact:!0,path:"/My_Favorites",render:function(t){return o.a.createElement(T,{photos:e.state.photos,quotes:e.state.quotes,ideas:e.state.ideas,activities:e.state.activities,getMyFavoritePhotos:e.getMyFavoritePhotos,getMyFavoriteQuotes:e.getMyFavoriteQuotes,getMyFavoriteIdeas:e.getMyFavoriteIdeas,getMyFavoriteActivities:e.getMyFavoriteActivities})}}),o.a.createElement(O.a,{exact:!0,path:"/My_Photos",render:function(t){return o.a.createElement(J,{photos:e.state.photos,getMyPhotos:e.getMyPhotos,currentUserId:e.currentUserId,deletePhoto:e.deletePhoto})}}),o.a.createElement(O.a,{exact:!0,path:"/My_Quotes",render:function(t){return o.a.createElement(L,Object.assign({},t,{quotes:e.state.quotes,getMyQuotes:e.getMyQuotes,currentUserId:e.currentUserId,deleteQuote:e.deleteQuote}))}}),o.a.createElement(O.a,{path:"/My_Quotes/:quoteId(\\d+)/edit",render:function(t){return o.a.createElement(Y,Object.assign({},t,{currentUserId:e.currentUserId,updateQuote:e.updateQuote}))}}),o.a.createElement(O.a,{exact:!0,path:"/My_Ideas",render:function(t){return o.a.createElement(H,Object.assign({},t,{ideas:e.state.ideas,getMyIdeas:e.getMyIdeas,currentUserId:e.currentUserId,deleteIdea:e.deleteIdea}))}}),o.a.createElement(O.a,{path:"/My_Ideas/:ideaId(\\d+)/edit",render:function(t){return o.a.createElement(W,Object.assign({},t,{currentUserId:e.currentUserId,updateIdea:e.updateIdea}))}}),o.a.createElement(O.a,{exact:!0,path:"/My_Activities",render:function(t){return o.a.createElement(V,Object.assign({},t,{activities:e.state.activities,getMyActivities:e.getMyActivities,currentUserId:e.currentUserId,deleteActivity:e.deleteActivity,onClickResetEventUrl:e.onClickResetEventUrl,eventurl:e.state.eventurl}))}}),o.a.createElement(O.a,{path:"/My_Activities/:activityId(\\d+)/edit",render:function(t){return o.a.createElement(X,Object.assign({},t,{currentUserId:e.currentUserId,updateActivity:e.updateActivity}))}}),o.a.createElement(O.a,{path:"/My_EventbriteList",render:function(t){return o.a.createElement(z,Object.assign({},t,{events:e.state.events,currentUserId:e.currentUserId,getEventbriteevents:e.getEventbriteevents,onClickEventChosen:e.onClickEventChosen}))}}))}}]),t}(c.Component),K=Object(O.e)(G),Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:sessionStorage.getItem("id")},a.setAuthState=function(){sessionStorage.getItem("id")?a.setState({authenticated:!0}):a.setState({authenticated:!1})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.authenticated?o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(K,{isAuthenticated:this.state.authenticated,setAuthState:this.setAuthState})):o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{setAuthState:this.setAuthState}))}}]),t}(c.Component);a(74);console.log("process env",Object({NODE_ENV:"production",PUBLIC_URL:"/Motivational-Joy"})),i.a.render(o.a.createElement(s.a,null,o.a.createElement(Z,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.60ccbd19.chunk.js.map