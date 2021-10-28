(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{814:function(t,s,a){"use strict";a.r(s);var e=a(113),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"权限介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限介绍"}},[t._v("#")]),t._v(" 权限介绍")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("GET 请求是默认不经过权限控制，如果需要验证权限")]),t._v(" "),a("ul",[a("li",[t._v("需要在方法注释中加入 "),a("code",[t._v("@CatchAuth")]),t._v(" 标识")])])]),t._v(" "),a("li",[a("p",[t._v("超级管理员不经过权限控制,后台默认安装的用户")])])]),t._v(" "),a("h3",{attrs:{id:"数据权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据权限"}},[t._v("#")]),t._v(" 数据权限")]),t._v(" "),a("p",[t._v("关于数据权限的概念，很简单，就是要标记数据的所有者。所以")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你需要数据权限的时候，那么表结构需要默认的 "),a("code",[t._v("creator_id")]),t._v("字段，用来标记数据的所有者。")])]),t._v(" "),a("p",[t._v("一旦使用了数据权限，那么可以使用"),a("code",[t._v("CatchRequest")]),t._v(",使用它可以无缝获取"),a("code",[t._v("creator_id")]),t._v("，这是无感知的。\n当你使用:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("就可以轻松获取到。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[a("code",[t._v("CatchAdmin")]),t._v(" 封装了可用 "),a("code",[t._v("trait")]),t._v(" 来帮助开发者处理数据权限数据，引入 "),a("code",[t._v("trait")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("catchAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("permissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DataRangScopeTrait")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("模型")]),t._v("中使用 "),a("code",[t._v("dataRange")]),t._v(" 方法，该方法接受一个 "),a("code",[t._v("roles")]),t._v(" 对象数组，如果不传，则获取当前登录用户的角色组。")]),t._v(" "),a("p",[t._v("以用户列表为例")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withoutField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'updated_at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catchSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catchLeftJoin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Department")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'department_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'department_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aliasField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paginate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("dataRange 因为它不是"),a("code",[t._v("Query")]),t._v(" 方法，所以它必须放在最前面。而又因为它返回"),a("code",[t._v("Query")]),t._v(" 对象，所以它可以正常使用 Query 的方法。")])]),t._v(" "),a("p",[t._v("数据权限并没有提供全局的方法，所以可以在你需要权限管理的地方引入它。")]),t._v(" "),a("h2",{attrs:{id:"按钮权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮权限"}},[t._v("#")]),t._v(" 按钮权限")]),t._v(" "),a("h3",{attrs:{id:"基于角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于角色"}},[t._v("#")]),t._v(" "),a("code",[t._v("基于角色")])]),t._v(" "),a("p",[t._v("每次新增角色需要有一个唯一标识，角色的按钮权限就是基于这个唯一标识。\n在需要使用的页面引入")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permission "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/directive/permission/index.js'")]),t._v(" // 权限判断指令\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directives: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permission "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在需要判断的按钮上加上")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-tag v-permission"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"['editor']\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"基于action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于action"}},[t._v("#")]),t._v(" "),a("code",[t._v("基于Action")])]),t._v(" "),a("p",[t._v("每个菜单的 Action，也就是按钮都有一个权限标识，以@分割的。Action 的判断就是基于这个。\n在需要使用的页面引入")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" action "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/directive/permission/index.js'")]),t._v(" // 权限判断指令\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directives: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permission "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在需要判断的按钮上加上")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-tag v-action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'job@delete'\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("删除"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<el-tag v-action=\"'job.delete'\">删除</el-tag>\n")])])]),a("p",[t._v("如果模块之间有重复的 Action，那么就需要添加 module 名称来识别了。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-tag v-action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'permissions@job@delete'\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("删除"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<el-tag v-action=\"'permissions.job.delete'\">删除</el-tag>\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);