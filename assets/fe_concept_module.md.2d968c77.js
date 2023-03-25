import{_ as s,o as n,c as a,R as l}from"./chunks/framework.606a5e25.js";const u=JSON.parse('{"title":"模块化","description":"","frontmatter":{},"headers":[],"relativePath":"fe/concept/module.md","lastUpdated":null}'),o={name:"fe/concept/module.md"},p=l(`<h1 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">什么是模块化？</p><p>百度百科中的解释: 模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。</p><p>在编程中 模块化是将一个复杂的应用程序，按照一定的规则拆分成若干个文件(代码块)，并进行组合。文件内部的数据与实现都是私有的，只是对外暴露一些接口(方法、变量)与其他模块进行通信</p></div><p>模块化的好处</p><ul><li>避免命名空间的冲突</li><li>提高代码的复用性</li><li>提高维护性</li><li>更好的分离，实现按需加载</li></ul><p>目前前端主流的模块规范是</p><ul><li><code>CommonJS</code></li><li><code>ESModule</code></li><li><code>AMD</code></li><li><code>CMD</code></li><li><code>UMD</code></li></ul><h2 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h2><p><a href="https://www.commonjs.org/" target="_blank" rel="noreferrer"><code>CommonJS</code></a> 规范是一种同步加载模块的方式，其主要用于服务端，即 <code>Node</code> 中的</p><ul><li><code>module.exports</code> 用于规定当前模块对外输出的接口</li><li><code>exports</code> 是 <code>module.exports</code> 属性的引用</li><li><code>require</code> 用于加载模块文件(读入并执行一个 <code>JavaScript</code> 文件并返回该模块的 <code>exports</code> 对象)</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* util.js */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* index.js */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> util </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./util.js)</span></span>
<span class="line"><span style="color:#A6ACCD;">util</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">exports 和 module.exports</p><ul><li><code>exports</code> 是 <code>module</code> 对象的一个属性</li><li><code>exports</code> 是 <code>module.exports</code> 的一个引用，在默认情况下 <code>module.exports</code> 和 <code>exports</code> 指向<strong>同一个空对象</strong></li><li>模块导出的是 <code>module.exports</code></li></ul></div><div class="tip custom-block"><p class="custom-block-title">CommonJS 模块的特点</p><ul><li>所有代码都运行在模块作用域，不会污染全局作用域</li><li>模块可以多次加载，但只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载时就直接读取缓存结果。要想让模块再次运行必须清除缓存</li><li>模块加载的顺序按其在代码中出现的顺序</li></ul></div><h2 id="esmodule" tabindex="-1">ESModule <a class="header-anchor" href="#esmodule" aria-label="Permalink to &quot;ESModule&quot;">​</a></h2><p><code>ESModule</code> 是 <code>ES6</code> 在语言标准的层面上实现的模块功能，主要由 <code>export</code> 和 <code>import</code> 构成</p><ul><li><code>export</code> 命令用于规定模块的对外接口</li><li><code>import</code> 命令用于输入其他模块提供的功能</li></ul><p><a href="/wendoudou-blog/fe/es6/#esmodule">ES6 常用知识 —— ESModule</a></p><div class="tip custom-block"><p class="custom-block-title">ESModule 与 CommonJS 的差异</p><ul><li><code>CommonJS</code> 是动态语法可以写在判断里；<code>ESModule</code> 静态语法只能写在顶层</li><li><code>CommonJS</code> 模块输出的是一个值的拷贝；<code>ESModule</code> 输出的是值的引用 <ul><li><code>CommonJS</code> 模块一旦输出一个值模块内部的变化就影响不到这个值</li><li><code>ESModule</code> 模块在 <code>JavaScript</code> 引擎对脚本静态分析时，遇到模块加载命令 <code>import</code>，就会生成一个只读引用，等到脚本真正执行时再根据这个只读引用到被加载的那个模块里面去取值(<code>ESModule</code> 是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块)</li></ul></li><li><code>CommonJS</code> 模块是运行时加载；<code>ESModule</code> 是编译时输出接口。 <ul><li><code>CommonJS</code> 加载的是一个对象（即 <code>module.exports</code> 属性），该对象只有在脚本运行完才会生成</li><li><code>ESModule</code> 不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成</li></ul></li><li><code>CommonJS</code> 模块的 <code>require()</code> 是同步加载模块；<code>ESModule</code> 的 <code>import</code> 命令是异步加载，有一个独立的模块依赖的解析阶段。</li><li>顶层的 <code>this</code> 指向不同 <ul><li><code>CommonJS</code> 模块中的顶层 <code>this</code> 指向模块本身</li><li><code>ESModule</code> 模块中的顶层 <code>this</code> 指向 <code>undefined</code></li></ul></li><li>模块的循环加载 <ul><li><code>CommonJS</code> 模块在加载模块后就会执行整个脚本并在内存生成一个对象，当出现某个模块被&quot;循环加载&quot;，就只输出已经执行的部分，还未执行的部分不会输出</li><li><code>ESModule</code> 根本不会关心是否发生了&quot;循环加载&quot;，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。</li></ul></li></ul></div><h2 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-label="Permalink to &quot;AMD&quot;">​</a></h2><p><code>AMD</code> 规范全称是 Asynchronous Module Definition，即异步模块定义，主要用于浏览器。<br><code>AMD</code> 规范完整描述了模块的定义、依赖关系、引用关系以及加载机制。其代表库是 <a href="https://requirejs.org/" target="_blank" rel="noreferrer">RequireJS</a></p><h3 id="相关-api-及使用" tabindex="-1">相关 api 及使用 <a class="header-anchor" href="#相关-api-及使用" aria-label="Permalink to &quot;相关 api 及使用&quot;">​</a></h3><ul><li><code>define()</code>: 定义模块</li><li><code>require()</code>: 调用模块</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 先通过 script 加载 RequireJS */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 定义模块 utils.js */</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">log</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    log</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 调用模块 */</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">utils</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-label="Permalink to &quot;CMD&quot;">​</a></h2><p><code>CMD</code> 规范全称是 Common Module Definition，即通用模块定义，其代表库是 <a href="https://seajs.github.io/seajs/docs/" target="_blank" rel="noreferrer">SeaJS</a></p><blockquote><p><code>CMD</code> 规范是在 <code>AMD</code> 规范的基础上改进的一种规范，其解决了 <code>AMD</code> 规范对依赖模块的执行时机的问题</p></blockquote><h3 id="相关-api-及使用-1" tabindex="-1">相关 api 及使用 <a class="header-anchor" href="#相关-api-及使用-1" aria-label="Permalink to &quot;相关 api 及使用&quot;">​</a></h3><ul><li><code>define()</code>: 定义模块</li><li><code>seajs.use()</code>: 调用模块</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 先通过 script 加载 SeaJS */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 定义模块 utils.js */</span></span>
<span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">exports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">log</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    log</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 调用模块 */</span></span>
<span class="line"><span style="color:#A6ACCD;">seajs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./utils.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">utils</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">AMD 和 CMD 的区别</p><ul><li><code>AMD</code><ul><li>依赖前置: 在定义模块的时需要声明其依赖的模块</li><li>在加载模块完成后就会执行该模块，当所有模块都加载执行完后会进入 require 的回调函数执行主逻辑</li></ul></li><li><code>CMD</code><ul><li>就近依赖: 只有当用到某个具体模块时再去加载</li><li>加载完某个依赖模块后并不执行，当所有依赖模块加载完成后进入主逻辑，遇到 require 语句的时候才执行对应的模块</li></ul></li></ul><p>两者最大的区别是对依赖模块的执行时机处理不同</p></div><h2 id="umd" tabindex="-1">UMD <a class="header-anchor" href="#umd" aria-label="Permalink to &quot;UMD&quot;">​</a></h2><p><code>UMD</code> 只是一种通用的写法，是为了解决当时存在多种流行而不统一的规范而产生的一种通用规范<br><code>UMD</code> 实际是 <strong><code>AMD + CommonJS + 全局变量</code></strong> 这三种规范的结合</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">factory</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// CommonJs 模块规范 Node 环境</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">module.exports</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">factory</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// AMD 模块规范</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amd</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">define</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">factory</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 挂载全局变量(global 即全局对象)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">returnExports</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">factory</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">jQuery</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(</span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">$</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定义属性</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定义方法</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">log</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//    暴露公共方法</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">log</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000017878394" target="_blank" rel="noreferrer">深入 CommonJs 与 ES6 Module</a></p>`,34),e=[p];function c(r,t,i,y,D,F){return n(),a("div",null,e)}const A=s(o,[["render",c]]);export{u as __pageData,A as default};
