import{m as g,c as C,j as e,W as x,R as k,X as m,F as S,S as j,r as u,f as I,Y as p,Z as d,C as E}from"./index-SXmnikUd.js";import{K as f,L as n,B as h}from"./Kw-Dq4BIluX.js";import{c as L}from"./date-C55zEQnE.js";const w=g(l=>C({projects:{width:"100%"},line:{maxWidth:"42em"},skillTableWrapper:{overflowX:"auto",width:"100%"},skillTable:{width:"100%",minWidth:"440px"},selectedSkill:{color:l.palette.text.primary},skillIcon:{width:"1.2em",height:"1.2em",display:"inline",marginBottom:"-0.25em"}})),N=l=>e.jsxs(e.Fragment,{children:[l.name," ".repeat(x+1+(l.gap||0)-l.name.length)]}),y=l=>{const s=w(),i=m[l.skillId],o=i.icon,{monthsOfExperience:t}=l,r=t>6?t>=24?t>=36?f:S:j:k.Fragment,c=u.useCallback(()=>{var a;return(a=l.onClick)==null?void 0:a.call(l,l.skillId)},[l.skillId,l.onClick]);return e.jsxs(n,{className:I(s.selectedSkill,l.className),onClick:c,hover:!0,children:[e.jsx(o,{className:s.skillIcon})," ",e.jsx(N,{name:i.name}),"|",t>=120||t===0?" ":" ".repeat(2),e.jsx(r,{children:L(t)||"non-commercial"})]})},b=k.memo(y),A=()=>e.jsx(n,{children:"— ".repeat((x+22)/2)}),K=()=>{const l=w(),{selectedSkills:s,selectedSkillsExperience:i,selectAllSkills:o,unselectSkill:t}=p(),r=u.useMemo(()=>[...s].sort((c,a)=>i[a]-i[c]||d.indexOf(m[c])-d.indexOf(m[a])),[s]);return e.jsxs(E,{className:l.projects,children:[e.jsx(n,{className:l.line,children:"I would like to show you projects in which selected skills were used, but unfortunately I'm not allowed to do this because of NDA-s :("}),e.jsx(h,{}),!s.length&&e.jsxs(n,{className:l.line,children:["Select some ",e.jsx(j,{children:"skills"})," to see my ",e.jsx(S,{children:"expertise"})," in them..."]}),e.jsx(n,{hover:!0,onClick:o,children:e.jsx(f,{children:"Select All Skills"})}),!!s.length&&e.jsx(h,{}),!!s.length&&e.jsx("div",{className:l.skillTableWrapper,children:e.jsxs("div",{className:l.skillTable,children:[e.jsxs(n,{children:[e.jsx(N,{name:"Selected skills",gap:3}),"| ~Experience"]}),e.jsx(A,{}),r.map(c=>e.jsx(b,{skillId:c,monthsOfExperience:i[c],onClick:t},c))]})})]})};export{K as Projects,K as default};