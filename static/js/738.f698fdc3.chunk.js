"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[738],{1738:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(9434),a=t(2791),o=t(824),i=t(3634),s=t(4808),l=t(4389),c=function(e){return e.contacts.items},d=function(e){return e.filters.filter},u=t(1397),m=t(9055),x=t(7322),h=t(184),p=function(){var e=(0,n.v9)(c),r=(0,n.v9)(d).toLowerCase(),t=(0,n.I0)(),a=r&&""!==r?e.filter((function(e){return e.name.toLowerCase().includes(r)})):e;return(0,h.jsx)(o.xu,{maxW:"400px",mt:1,height:"auto",borderRadius:"5px",boxShadow:"dark-lg",p:"2",children:(0,h.jsx)(u.aV,{children:a.map((function(e){return(0,h.jsxs)(u.HC,{children:[(0,h.jsx)(u.DE,{as:x.b9P,color:"green"}),e.name,": ",(0,h.jsx)("span",{children:e.number}),(0,h.jsx)(m.z,{colorScheme:"yellow",variant:"ghost",onClick:function(){return function(e){t((0,i.GK)(e.id))}(e)},children:"Delete"})]},e.id)}))})})},f=function(){var e=(0,n.I0)();return(0,h.jsxs)(o.xu,{maxW:"600px",mx:"auto",mt:1,bgGradient:["linear(to-tr, #FFFFFF, #E0E0E0)","linear(to-t, #E0E0E0, #D3D3D3)","linear(to-b, #D3D3D3, #F2F2F2)"],height:"auto",borderRadius:"5px",boxShadow:"dark-lg",p:"6",rounded:"md",children:[(0,h.jsxs)("label",{children:["Find contact by the name",(0,h.jsx)(l.I,{type:"text",name:"filter",onChange:function(r){e((0,s.l)(r.target.value))},placeholder:"Search Contact"})]}),(0,h.jsx)(p,{})]})},b="Form_list__eEr4Y",g=t(9085),j=function(){var e=(0,n.v9)(c),r=(0,n.I0)();return(0,h.jsx)(o.xu,{maxW:"600px",mx:"auto",mt:24,bgGradient:["linear(to-tr, gray.400, gray.200)","linear(to-t, gray.200, gray.100)","linear(to-b, gray.100, gray.300)"],height:300,borderRadius:"5px",boxShadow:"dark-lg",p:"6",rounded:"md",children:(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target,a=n.name.value,o=n.number.value;if(e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return g.Am.warn("".concat(a," is alredy in contacts."));r((0,i.uK)({name:a,number:o})),n.reset()},children:[(0,h.jsxs)("ul",{className:b,children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"Name"}),(0,h.jsx)(l.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"name",variant:"flushed",borderBottom:"1px solid grey"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:"Contact"}),(0,h.jsx)(l.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone number",variant:"flushed",borderBottom:"1px solid grey"})]})]}),(0,h.jsx)(m.z,{type:"submit",colorScheme:"orange",mx:"80px",mt:4,children:"Save"})]})})},F="ContactPage_container__2go0r",y=function(){var e=(0,n.I0)();return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,h.jsxs)(o.xu,{bgGradient:["linear(to bottom, #F8F8F8, #E8E8E8)","linear(to top, #E8E8E8, #F8F8F8)"],pb:"120px",pt:"30px",className:F,children:[(0,h.jsx)(j,{}),(0,h.jsx)(f,{})]})}}}]);
//# sourceMappingURL=738.f698fdc3.chunk.js.map