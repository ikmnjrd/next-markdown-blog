(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{8468:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return n(6509)}])},220:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893),i=n(9008),l=n.n(i);function a(t){let{title:e}=t;return(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"".concat(e," | ikmnjrd.github.io")})})}},6509:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return x}});var r=n(5893),i=n(220),l=n(7294),a=n(4091),d=n(7929),s=n(4127),o=n(9633);let u=(t,e)=>{let n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{var t;let r=null==n?void 0:n.current;if(!r)return;let i=null!==(t=null==n?void 0:n.current.clientWidth)&&void 0!==t?t:640;return e({svg:o.Ys(r),width:i,height:1400}),()=>{o.Ys(r).selectAll("*").remove()}},t),n},c=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];let[t,e]=(0,l.useState)({width:window.innerWidth,height:window.innerHeight});return(0,l.useEffect)(()=>{{let t=()=>{e({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];t&&t.addEventListener&&t.addEventListener(...n)}(window,"resize",t),()=>{!function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];t&&t.removeEventListener&&t.removeEventListener(...n)}(window,"resize",t)}}},[]),t};var h=n(5228),f=function(t){let{width:e}=c(),{isDarkMode:n}=(0,l.useContext)(h.S),i=1400,o=u([e,n,t.nodes,t.links],e=>{let{svg:r,width:l,height:o}=e,u=n?"#808000":"#A0FFFF",c=n?"#fff":"#6E7F8D";i=o;let h=(0,a.Z)().size([l,i]).nodeId(t=>t.id).nodeWidth(20).nodePadding(10).nodeAlign(d.be).extent([[0,10],[l,i-10]])(t);function f(t){return null!=t?t:0}r.append("g").classed("links",!0).selectAll("path").data(h.links).enter().append("path").classed("link",!0).attr("d",(0,s.Z)()).attr("fill","none").attr("stroke",u).attr("stroke-width",t=>t.width||null).attr("stoke-opacity",.5),r.append("g").classed("nodes",!0).selectAll("rect").data(h.nodes).enter().append("rect").classed("node",!0).attr("x",t=>f(t.x0)).attr("y",t=>f(t.y0)).attr("width",t=>f(t.x1)-f(t.x0)).attr("height",t=>f(t.y1)-f(t.y0)).attr("fill",c).attr("opacity",.8),r.append("g").attr("font-family","sans-serif").attr("font-size",12).selectAll("text").data(h.nodes.filter(e=>{var n,r;return(null!==(n=e.x0)&&void 0!==n?n:0)>50||(null!==(r=e.index)&&void 0!==r?r:0)<t.lastIndex})).join("text").attr("x",t=>{var e,n,r;return(null!==(e=t.x0)&&void 0!==e?e:0)<l/2?(null!==(n=t.x1)&&void 0!==n?n:0)+5:(null!==(r=t.x0)&&void 0!==r?r:0)-5}).attr("y",t=>(f(t.y1)+f(t.y0))/2).attr("dy","0.35em").attr("text-anchor",t=>f(t.x0)<l/2?"start":"end").insert("a").attr("xlink:href",t=>t.url).classed("hover:opacity-50 hover:underline active:opacity-30",!0).text(t=>t.name).style("fill",c)});return(0,r.jsx)("svg",{ref:o,style:{height:i,width:"100%",marginRight:"0px",marginLeft:"0px"}})},g=!0;function x(t){var e;let{wholeTags:n,countedTags:l,filesData:a}=t,d=v({wholeTags:n,countedTags:l,filesData:a},"/tag/"),s=d.length,o=((e={wholeTags:n,countedTags:l,filesData:a}).wholeTags.forEach((t,e)=>{d.push({name:t.slug,id:s+e,url:"/blog/"+t.slug})}),e.wholeTags.map(t=>({source:d.findIndex(e=>e.name===t.tag),target:d.findIndex(e=>e.name===t.slug),value:1})));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:"Tag一覧"}),(0,r.jsx)("h1",{className:"text-3xl pt-8 pb-4",children:"Tag一覧"}),(0,r.jsx)(f,{nodes:d,links:o,lastIndex:s})]})}let v=(t,e)=>{let n=[],r=0;for(let[i,l]of Object.entries(t.countedTags))n.push({name:i,id:r,url:e+i}),r++;return n}}},function(t){t.O(0,[168,774,888,179],function(){return t(t.s=8468)}),_N_E=t.O()}]);