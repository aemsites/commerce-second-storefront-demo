import{jsx as h,Fragment as Z,jsxs as U}from"@dropins/tools/preact-jsx-runtime.js";import{useState as R,useCallback as v,useRef as H,useEffect as P}from"@dropins/tools/preact-hooks.js";import*as $ from"@dropins/tools/preact-compat.js";import{memo as W,useCallback as _}from"@dropins/tools/preact-compat.js";import{initReCaptcha as G}from"@dropins/tools/recaptcha.js";import{useText as j}from"@dropins/tools/i18n.js";import{classes as L}from"@dropins/tools/lib.js";import{Field as w,Picker as q,Input as X,InputDate as C,Checkbox as z,TextArea as B,Button as J}from"@dropins/tools/components.js";const Ir=r=>{if(!r)return null;const t=new FormData(r);if(t&&typeof t.entries=="function"){const n=t.entries();if(n&&typeof n[Symbol.iterator]=="function")return JSON.parse(JSON.stringify(Object.fromEntries(n)))||{}}return{}},Dr=r=>typeof r=="function",Y=r=>$.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},$.createElement("g",{clipPath:"url(#clip0_841_1324)"},$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),$.createElement("defs",null,$.createElement("clipPath",{id:"clip0_841_1324"},$.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),K=r=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),Q=r=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),$.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),g={success:h(K,{}),warning:h(Y,{}),error:h(Q,{})},xr=()=>{const[r,t]=R({}),n=v(l=>{if(!l||!l.type){t({});return}const c=g[l.type];t({...l,icon:c})},[]);return{inLineAlertProps:r,handleSetInLineAlertProps:n}};var m=(r=>(r.BOOLEAN="BOOLEAN",r.DATE="DATE",r.DATETIME="DATETIME",r.DROPDOWN="DROPDOWN",r.FILE="FILE",r.GALLERY="GALLERY",r.HIDDEN="HIDDEN",r.IMAGE="IMAGE",r.MEDIA_IMAGE="MEDIA_IMAGE",r.MULTILINE="MULTILINE",r.MULTISELECT="MULTISELECT",r.PRICE="PRICE",r.SELECT="SELECT",r.TEXT="TEXT",r.TEXTAREA="TEXTAREA",r.UNDEFINED="UNDEFINED",r.VISUAL="VISUAL",r.WEIGHT="WEIGHT",r.EMPTY="",r))(m||{});const rr=W(({loading:r,values:t,fields:n=[],errors:l,className:c="",onChange:u,onBlur:p,onFocus:A})=>{const s=`${c}__field`,f=_((e,o,a)=>{var T;const E=(T=e.options.find(N=>N.isDefault))==null?void 0:T.value;return h(w,{error:a,className:L([s,`${s}--${e.id}`,[`${s}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r||e.disabled,children:h(q,{name:e.customUpperCode,floatingLabel:`${e.label} ${e.required?"*":""}`,placeholder:e.label,"aria-label":e.label,options:e.options,onBlur:p,handleSelect:u,defaultValue:E??o??e.defaultValue,value:E??o??e.defaultValue})},e.id)},[c,r,s,p,u]),D=_((e,o,a)=>h(w,{error:a,className:L([s,`${s}--${e.id}`,[`${s}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:h(X,{type:"text",name:e.customUpperCode,value:o??e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:u,onFocus:A})},e.id),[c,r,s,p,u,A]),x=_((e,o,a)=>h(w,{error:a,className:L([s,`${s}--${e.id}`,[`${s}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r||e.disabled,children:h(C,{type:"text",name:e.customUpperCode,value:o||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:u,disabled:r||e.disabled})},e.id),[c,r,s,p,u]),b=_((e,o,a)=>h(w,{error:a,className:L([s,`${s}--${e.id}`,[`${s}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:h(z,{name:e.customUpperCode,checked:o||e.defaultValue,placeholder:e.label,label:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:u})},e.id),[c,r,s,p,u]),M=_((e,o,a)=>h(w,{error:a,className:L([s,`${s}--${e.id}`,[`${s}--${e.id}-hidden`,e.isHidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:r,children:h(B,{type:"text",name:e.customUpperCode,value:o??e.defaultValue,label:`${e.label} ${e.required?"*":""}`,onBlur:p,onChange:u})},e.id),[c,r,s,p,u]);return n.length?h(Z,{children:n.map(e=>{const o=l==null?void 0:l[e.customUpperCode],a=t==null?void 0:t[e.customUpperCode];switch(e.fieldType){case m.TEXT:return e.options.length?f(e,a,o):D(e,a,o);case m.MULTILINE:return D(e,a,o);case m.SELECT:return f(e,a,o);case m.DATE:return x(e,a,o);case m.BOOLEAN:return b(e,a,o);case m.TEXTAREA:return M(e,a,o);default:return null}})}):null}),er=r=>r.reduce((t,{customUpperCode:n,required:l,defaultValue:c})=>(l&&n&&(t.initialData[n]=c||"",t.errorList[n]=""),t),{initialData:{},errorList:{}}),tr=r=>r.reduce((t,n)=>({...t,[n.name]:n.value}),{}),ar=r=>/^\d+$/.test(r),nr=r=>/^[a-zA-Z0-9\s]+$/.test(r),or=r=>/^[a-zA-Z0-9]+$/.test(r),lr=r=>/^[a-zA-Z]+$/.test(r),sr=r=>/^[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+(\.[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(r),cr=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)&&!isNaN(Date.parse(r)),dr=(r,t,n)=>{const l=new Date(r).getTime()/1e3;return!(isNaN(l)||l<0||typeof t<"u"&&l<t||typeof n<"u"&&l>n)},k=r=>{if(!r||r.trim()==="")return"";const t=parseInt(r,10);if(!isNaN(t)){const c=new Date(t*1e3);return isNaN(c.getTime())?"":c.toISOString().split("T")[0]}const n=new Date(r);if(isNaN(n.getTime()))return"";const l=parseInt(r.split("-")[1],10);return l>12||l<1?"":n.toISOString().split("T")[0]},ur=r=>/^(https?|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i.test(r),ir=(r,t,n)=>{const l=r.length;return l>=t&&l<=n},O=(r,t,n,l)=>{var y,F;const{requiredFieldError:c,lengthTextError:u,numericError:p,alphaNumWithSpacesError:A,alphaNumericError:s,alphaError:f,emailError:D,dateError:x,urlError:b,dateLengthError:M,dateMaxError:e,dateMinError:o}=n,a=t==null?void 0:t.customUpperCode,E={[a]:""};if(l[a]&&delete l[a],t!=null&&t.required&&!r)return{[a]:c};if(!(t!=null&&t.required)&&!r||!((y=t==null?void 0:t.validateRules)!=null&&y.length))return E;const T=tr(t==null?void 0:t.validateRules),N=T.MIN_TEXT_LENGTH??1,I=T.MAX_TEXT_LENGTH??255,d=T.DATE_RANGE_MIN,i=T.DATE_RANGE_MAX;if(!ir(r,+N,+I)&&!(d||i))return{[a]:u.replace("{min}",N).replace("{max}",I)};if(!dr(r,+d,+i)&&(d||i)){if(d&&d)return{[a]:M.replace("{min}",k(d)).replace("{max}",k(i))};if(typeof d>"u"||typeof i>"u")return{[a]:i?e.replace("{max}",k(i)):o.replace("{min}",k(d))}}const V={numeric:{validate:ar,error:p},"alphanum-with-spaces":{validate:nr,error:A},alphanumeric:{validate:or,error:s},alpha:{validate:lr,error:f},email:{validate:sr,error:D},date:{validate:cr,error:x},url:{validate:ur,error:b}}[T.INPUT_VALIDATION];return V&&!V.validate(r)&&!((F=l[a])!=null&&F.length)?{[a]:V.error}:E},pr=({fieldsConfig:r,onSubmit:t})=>{const n=j({requiredFieldError:"Auth.FormText.requiredFieldError",lengthTextError:"Auth.FormText.lengthTextError",numericError:"Auth.FormText.numericError",alphaNumWithSpacesError:"Account.FormText.alphaNumWithSpacesError",alphaNumericError:"Auth.FormText.alphaNumericError",alphaError:"Auth.FormText.alphaError",emailError:"Auth.FormText.emailError",dateError:"Auth.FormText.dateError",dateLengthError:"Auth.FormText.dateLengthError",dateMaxError:"Auth.FormText.dateMaxError",dateMinError:"Auth.FormText.dateMinError",urlError:"Auth.FormText.urlError"}),l=H(null),c=H(!1),[u,p]=R({}),[A,s]=R({}),f=v(()=>{let e=!0;const o={...A};let a=null;for(const[E,T]of Object.entries(u)){const N=r==null?void 0:r.find(d=>{var i;return(i=d==null?void 0:d.customUpperCode)==null?void 0:i.includes(E)}),I=O(T.toString(),N,n,o);I[E]&&(Object.assign(o,I),e=!1),a||(a=Object.keys(o).find(d=>o[d])||null)}if(s(o),a&&l.current){const E=l.current.elements.namedItem(a);E==null||E.focus()}return e},[A,r,u,n]);P(()=>{if(r!=null&&r.length){const{initialData:e,errorList:o}=er(r);p(a=>({...e,...a})),s(o)}},[JSON.stringify(r)]);const D=v(async()=>{c.current||(await G(0),c.current=!0)},[]),x=v(e=>{const{name:o,value:a,type:E,checked:T}=e==null?void 0:e.target,N=E==="checkbox"?T:a;p(i=>({...i,[o]:N}));const I=r==null?void 0:r.find(i=>{var S;return(S=i==null?void 0:i.customUpperCode)==null?void 0:S.includes(o)});let d={...A};if(I){const i=O(N.toString(),I,n,d);i&&Object.assign(d,i),s(d)}},[r,A,n]),b=v(e=>{const{name:o,value:a,type:E,checked:T}=e==null?void 0:e.target,N=E==="checkbox"?T:a,I=r==null?void 0:r.find(d=>d.customUpperCode===o);if(I){const d={...A},i=O(N.toString(),I,n,d);i&&Object.assign(d,i),s(d)}},[A,r,n]),M=v(e=>{e.preventDefault();const o=f();t==null||t(e,o)},[f,t]);return{formData:u,errors:A,formRef:l,handleChange:x,handleBlur:b,handleSubmit:M,handleFocus:D}},br=({name:r,loading:t,children:n,className:l="defaultForm",fieldsConfig:c=[],onSubmit:u})=>{const{formData:p,errors:A,formRef:s,handleChange:f,handleBlur:D,handleSubmit:x,handleFocus:b}=pr({onSubmit:u,fieldsConfig:c});return U("form",{className:l,onSubmit:x,name:r,ref:s,onFocus:b,children:[h(rr,{className:l,onFocus:b,fields:c,onChange:f,onBlur:D,errors:A,values:p,loading:t}),n]})},mr=({type:r,buttonText:t,variant:n,className:l="",enableLoader:c=!1,onClick:u,style:p,icon:A,...s})=>{const f=v(x=>{u==null||u(x)},[u]);return U(J,{icon:A,style:p,type:r,variant:n,className:L(["auth-button",l,c?"enableLoader":""]),onClick:f,...s,children:[h("span",{className:"auth-button__text",children:t}),c?h("div",{className:"auth-button__wrapper",children:h("span",{className:"auth-button__loader"})}):null]})};export{mr as B,br as F,Dr as c,Ir as g,xr as u};