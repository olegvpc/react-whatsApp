"use strict";(self.webpackChunkwhatsapp_web_react=self.webpackChunkwhatsapp_web_react||[]).push([[749],{749:function(e,a,s){s.r(a),s.d(a,{default:function(){return h}});var n=s(791),i=s(257),r=s(885),t=s(184),c=function(e){var a=e.id,s=e.name,i=e.onChoice,c=(0,n.useState)(""),o=(0,r.Z)(c,2),d=(o[0],o[1],(0,n.useState)("123")),h=(0,r.Z)(d,2),l=h[0],u=h[1],m="https://avatars.dicebear.com/api/human/".concat(l,".svg");return(0,n.useEffect)((function(){u(Math.floor(5e3*Math.random()))}),[]),(0,t.jsxs)("button",{className:"sidebarChat",onClick:function(){i(a)},children:[(0,t.jsx)("div",{className:"chat_header_icon-avatar-container",children:(0,t.jsx)("img",{className:"chat_header_icon-avatar",src:m,alt:"Avatar of client"})}),(0,t.jsxs)("div",{className:"sidebarChat_info",children:[(0,t.jsx)("h3",{style:{fontSize:"18px",color:"rgb(69 66 66)"},children:s}),(0,t.jsx)("p",{style:{fontSize:"13px",marginLeft:"6px",marginTop:"4px",color:"#3a3838"},children:a})]})]})},o=s(770),d=function(e){var a=e.usersList,s=e.onChoice,n=(0,o.Z)(),i=n.values,r=(n.errors,n.isValid,n.handleChange),c=n.setValues;n.setIsValid;return(0,t.jsx)("div",{className:"sideBar_search",children:(0,t.jsxs)("form",{className:"searchBar_container",onSubmit:function(e){e.preventDefault();var n="".concat(i.phone,"@c.us"),r=a.filter((function(e){return e.id===n}));0!==r.lenght&&s(r[0].id),c("")},children:[(0,t.jsx)("button",{type:"submit",children:(0,t.jsx)("div",{className:"searchBar_icon"})}),(0,t.jsx)("input",{type:"text",name:"phone",placeholder:"Enter phone like: 79031234567",value:(null===i||void 0===i?void 0:i.phone)||"",minLength:11,maxLength:11,pattern:"^\\d+$",onChange:r,required:!0})]})})},h=function(e){var a=e.usersList,s=e.onChoice,r=n.useContext(i.E);return(0,t.jsxs)("div",{className:"sideBar",children:[(0,t.jsxs)("div",{className:"sideBar_header",children:[(0,t.jsx)("div",{className:"chat_header_icon-avatar-container",children:(0,t.jsx)("img",{className:"chat_header_icon-avatar",src:null===r||void 0===r?void 0:r.avatar,alt:"Avatar roomMeeting"})}),(0,t.jsxs)("div",{className:"sidebar_headerRight",children:[(0,t.jsx)("button",{className:"sidebar_header_icon sidebar_header_icon-status"}),(0,t.jsx)("button",{className:"sidebar_header_icon sidebar_header_icon-edit"}),(0,t.jsx)("button",{className:"sidebar_header_icon sidebar_header_icon-dots"})]})]}),(0,t.jsx)(d,{usersList:a,onChoice:s}),(0,t.jsx)("div",{className:"sideBar_chat",children:a.map((function(e){return(0,t.jsx)(c,{name:e.name,id:e.id,onChoice:s},e.id)}))})]})}}}]);
//# sourceMappingURL=749.1f430469.chunk.js.map