(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{8468:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return e(9289)}])},1990:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(5893),a=e(9008),i=e.n(a);function u(t){var n=t.title;return(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"".concat(n," | ikmnjrd.github.io")})})}},9289:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return f},default:function(){return h}});var r=e(603),a=e(5893),i=e(1990),u=e(7294),l=e(9633),o=e(4091),s=e(7929),c=e(4127);var d=function(t){var n=function(t){return null!==t&&void 0!==t?t:0},e=640,r=1400,i=function(t,n){var e=(0,u.createRef)();return(0,u.useEffect)((function(){var t=e.current;return n(l.Ys(t)),function(){l.Ys(t).selectAll("*").remove()}}),t),e}([t.nodes,t.links],(function(a){var i,u,l,d,f,h=(0,o.Z)().size([e,r]).nodeId((function(t){return t.id})).nodeWidth(20).nodePadding(10).nodeAlign(s.be).extent([[0,10],[e,1390]])(t);a.append("g").classed("links",!0).selectAll("path").data(h.links).enter().append("path").classed("link",!0).attr("d",(0,c.Z)()).attr("fill","none").attr("stroke","#A0FFFF").attr("stroke-width",(function(t){return t.width||null})).attr("stoke-opacity",.5),a.append("g").classed("nodes",!0).selectAll("rect").data(h.nodes).enter().append("rect").classed("node",!0).attr("x",(function(t){return n(t.x0)})).attr("y",(function(t){return n(t.y0)})).attr("width",(function(t){return n(t.x1)-n(t.x0)})).attr("height",(function(t){return n(t.y1)-n(t.y0)})).attr("fill","#6E7F8D").attr("opacity",.8),a.append("g").attr("font-family","sans-serif").attr("font-size",12).selectAll("text").data(h.nodes.filter((function(n){return(null!==(i=n.x0)&&void 0!==i?i:0)>50||(null!==(u=n.index)&&void 0!==u?u:0)<t.lastIndex}))).join("text").attr("x",(function(t){return(null!==(l=t.x0)&&void 0!==l?l:0)<320?(null!==(d=t.x1)&&void 0!==d?d:0)+5:(null!==(f=t.x0)&&void 0!==f?f:0)-5})).attr("y",(function(t){return(n(t.y1)+n(t.y0))/2})).attr("dy","0.35em").attr("text-anchor",(function(t){return n(t.x0)<320?"start":"end"})).insert("a").attr("xlink:href",(function(t){return t.url})).classed("hover:opacity-50 hover:underline active:opacity-30",!0).text((function(t){return t.name})).style("fill","#6E7F8D")}));return(0,a.jsx)("svg",{ref:i,style:{height:r,width:"100%",marginRight:"0px",marginLeft:"0px"}})},f=!0;function h(t){var n,e=t.wholeTags,r=t.countedTags,u=t.filesData,l=g({wholeTags:e,countedTags:r,filesData:u},"/tag/"),o=l.length,s=((n={wholeTags:e,countedTags:r,filesData:u}).wholeTags.forEach((function(t,n){l.push({name:t.slug,id:o+n,url:"/blog/"+t.slug})})),n.wholeTags.map((function(t){return{source:l.findIndex((function(n){return n.name===t.tag})),target:l.findIndex((function(n){return n.name===t.slug})),value:1}})));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"Tag\u4e00\u89a7"}),(0,a.jsx)("h1",{className:"text-3xl pt-8 pb-4",children:"Tag\u4e00\u89a7"}),(0,a.jsx)(d,{nodes:l,links:s,lastIndex:o})]})}var g=function(t,n){var e=[],a=0,i=!0,u=!1,l=void 0;try{for(var o,s=Object.entries(t.countedTags)[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=(0,r.Z)(o.value,2),d=c[0];c[1];e.push({name:d,id:a,url:n+d}),a++}}catch(f){u=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(u)throw l}}return e}}},function(t){t.O(0,[427,774,888,179],(function(){return n=8468,t(t.s=n);var n}));var n=t.O();_N_E=n}]);