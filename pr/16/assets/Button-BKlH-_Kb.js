import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{g as y}from"./index-DJO9vBfz.js";var l={exports:{}},f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=f,h=b;function u(){}function c(){}c.resetWarningCache=u;var g=function(){function e(n,p,s,T,k,m){if(m!==h){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:u};return o.PropTypes=o,o};l.exports=g();var v=l.exports;const r=y(v),a=({primary:e,backgroundColor:t,size:o,label:n,...p})=>{const s=e?"storybook-button--primary":"storybook-button--secondary";return d.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${o}`,s].join(" "),style:t&&{backgroundColor:t},...p,children:n})};a.propTypes={primary:r.bool,backgroundColor:r.string,size:r.oneOf(["small","medium","large"]),label:r.string.isRequired,onClick:r.func};a.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};a.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}};export{a as B,r as P};
