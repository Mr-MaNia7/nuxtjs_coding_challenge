import{_ as o}from"./8-O37tRS.js";import{d as l,H as s,Z as d,h as f}from"./MQ35G8DM.js";import"./Dnd51l0P.js";const x=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,u,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(u=t==null?void 0:t.value)==null?void 0:u._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,c;const n=d(),{value:e,excerpt:u,tag:a}=t,r=u?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((i=r==null?void 0:r.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:u,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:u,tag:a,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((c=r==null?void 0:r.children)!=null&&c.length)?f(o,{value:e,excerpt:u,tag:a,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:u,tag:a},null,2))}});export{x as default};
