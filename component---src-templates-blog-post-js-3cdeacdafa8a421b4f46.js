(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});n(32);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(148),l=n(156),s=n(153),u=n(154),d=n(149),m=(n(151),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=(this.props.data.site.siteMetadata.title,this.props.pageContext),n=e.previous,a=e.next;return o.a.createElement(s.a,{location:this.props.location,image:t.frontmatter.cover_image&&t.frontmatter.cover_image.childImageSharp?t.frontmatter.cover_image.childImageSharp.sizes:null},o.a.createElement(u.a,{title:t.frontmatter.title,description:t.excerpt}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(c.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,a&&o.a.createElement(c.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →"))))},e}(o.a.Component));e.default=m;var p="1055943642"},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(150),u=n.n(s);n.d(e,"PageRenderer",function(){return u.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return s});var a=n(160),r=n.n(a),i=n(161),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale},150:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},152:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},153:function(t,e,n){"use strict";n(32);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(148),l=n(149),s=n(151),u=n.n(s),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children,i=e.image;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",null,i?o.a.createElement(u.a,{sizes:i,style:{maxHeight:"500px"}}):null,o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,r,o.a.createElement("footer",null,"© 2018, Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(o.a.Component);e.a=d},154:function(t,e,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(162),s=n.n(l),u=n(148);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var m="1025518380"},155:function(t){t.exports={data:{site:{siteMetadata:{title:"ingerslev.io",description:"",author:"Emil Ingerslev"}}}}},156:function(t,e,n){"use strict";n(157);var a=n(159),r=n(0),i=n.n(r),o=n(148),c=n(151),l=n.n(c),s=n(149);var u="614536027";e.a=function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(t){var e=t.site.siteMetadata,n=e.author,a=e.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},t.avatar&&t.avatar.childImageSharp&&i.a.createElement(l.a,{fixed:t.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,n)," who lives and works in Aarhus, Denmark."," ",i.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"You should follow him on Twitter")))},data:a})}},157:function(t,e,n){"use strict";n(158)("fixed",function(t){return function(){return t(this,"tt","","")}})},158:function(t,e,n){var a=n(11),r=n(24),i=n(16),o=/"/g,c=function(t,e,n,a){var r=String(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),a(a.P+a.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},159:function(t){t.exports={data:{site:{siteMetadata:{author:"Emil Ingerslev",social:{twitter:"emilingerslev"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3cdeacdafa8a421b4f46.js.map