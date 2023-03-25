import{_ as s,o as l,c as e,R as o}from"./chunks/framework.606a5e25.js";const m=JSON.parse('{"title":"类型转换","description":"","frontmatter":{},"headers":[],"relativePath":"fe/javascript/conversions.md","lastUpdated":null}'),n={name:"fe/javascript/conversions.md"},a=o(`<h1 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>阅读<a href="https://www.ituring.com.cn/book/1563" target="_blank" rel="noreferrer">《你不知道的 JavaScript（中卷）》</a>和各个大佬的文章所归纳的总结，<strong>如有异议按你的理解为主</strong></p></div><p>将值从一种类型转换为另一种类型称为<strong>类型转换</strong> <br> 在 <code>JavaScript</code> 中进行类型转换时，根据调用形式的不同可以分为以下两种:</p><ul><li><strong>显式类型转换</strong></li><li><strong>隐式类型转换</strong></li></ul><h2 id="抽象操作-内部的类型转换规则" tabindex="-1">抽象操作 (内部的类型转换规则) <a class="header-anchor" href="#抽象操作-内部的类型转换规则" aria-label="Permalink to &quot;抽象操作 (内部的类型转换规则)&quot;">​</a></h2><p>在了解类型转换前我们需要知道 <code>JavaScript</code> 的 <strong>抽象操作</strong> (类型转换规则)</p><blockquote><p><strong>抽象操作</strong> 是指仅供内部使用的操作</p></blockquote><ul><li><code>ToPrimitive</code> 将引用类型转换成相应的基本类型值</li><li><code>ToString</code> 将非字符串值转换成字符串</li><li><code>ToBoolean</code> 将非布尔值转换成布尔值</li><li><code>ToNumber</code> 将非数字值转换成数字值</li></ul><h3 id="toprimitive" tabindex="-1">ToPrimitive <a class="header-anchor" href="#toprimitive" aria-label="Permalink to &quot;ToPrimitive&quot;">​</a></h3><p><code>ToPrimitive</code> 用来处理引用类型到基本类型的类型转换</p><div class="tip custom-block"><p class="custom-block-title">ToPrimitive 转换规则</p><ul><li>检查是否存在 <code>Symbol.toPrimitive()</code><ul><li>基本类型直接返回</li><li>引用类型抛出 <code>TypeError</code> 错误</li></ul></li><li>检查是否存在 <code>valueOf()</code><ul><li>基本类型直接返回</li><li>引用类型则继续调用 <code>toString()</code></li></ul></li><li>调用 <code>toString()</code><ul><li>基本类型直接返回</li><li>引用类型抛出 <code>TypeError</code> 错误</li></ul></li></ul></div><div class="warning custom-block"><p class="custom-block-title">注意点</p><ul><li>使用 <code>Object.create(null)</code> 创建的对象没有原型，即不存在 <code>valueOf()</code> 和 <code>toString()</code>，当对其进行类型转换时会抛出 <code>TypeError</code> 错误</li><li>在做显式类型转换时 <code>valueOf()</code> 和 <code>toString()</code> 的调用顺序会根据转换目标不同去做相应调整 <ul><li>默认情况下都是先调用 <code>valueOf()</code> 再调用 <code>toString()</code></li><li>当需要转换的目标为字符串时，会先调用 <code>toString()</code> 再调用 <code>valueOf()</code></li></ul></li></ul></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toString</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">valueOf</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">valueOf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2021</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toString</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">valueOf</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">valueOf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 显式类型转换 */</span></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(obj1)    </span><span style="color:#676E95;font-style:italic;">// valueOf              =&gt; 2021</span></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(obj2)    </span><span style="color:#676E95;font-style:italic;">// valueOf   toString   =&gt; NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(obj1)    </span><span style="color:#676E95;font-style:italic;">// toString  valueOf    =&gt; &#39;2021&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(obj2)    </span><span style="color:#676E95;font-style:italic;">// toString             =&gt; &#39;maomao&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 隐式类型转换 */</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> obj1        </span><span style="color:#676E95;font-style:italic;">// valueOf              =&gt; 2022</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> obj2        </span><span style="color:#676E95;font-style:italic;">// valueOf   toString   =&gt; &#39;1maomao&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> obj1  </span><span style="color:#676E95;font-style:italic;">// valueOf              =&gt; &#39;str: 2021&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> obj2  </span><span style="color:#676E95;font-style:italic;">// valueOf   toString   =&gt; &#39;str: maomao&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="tostring" tabindex="-1">ToString <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;ToString&quot;">​</a></h3><p><code>ToString</code> 用来处理非字符串到字符串的类型转换</p><div class="tip custom-block"><p class="custom-block-title">ToString 转换规则</p><ul><li>基本类型 <ul><li><code>undefined</code> =&gt; <code>&#39;undefined&#39;</code></li><li><code>null</code> =&gt; <code>&#39;null&#39;</code></li><li><code>true</code> =&gt; <code>&#39;true&#39;</code></li><li><code>false</code> =&gt; <code>&#39;false&#39;</code></li><li><code>number</code><ul><li>普通数值直接加引号</li><li>极小和极大的数字将转换成指数形式的字符串</li><li><code>+0 0 -0</code> =&gt; <code>&#39;0&#39;</code></li><li><code>Infinity</code> =&gt; <code>&#39;Infinity&#39;</code></li></ul></li></ul></li><li>引用类型会先调用 <code>ToPrimitive</code> 逻辑将其转换成基本类型，如果返回的基本类型不是字符串，再遵循以上规则进行转换</li></ul></div><h3 id="toboolean" tabindex="-1">ToBoolean <a class="header-anchor" href="#toboolean" aria-label="Permalink to &quot;ToBoolean&quot;">​</a></h3><p><code>ToBoolean</code> 用来处理非布尔值到布尔值的类型转换，在 <code>JavaScript</code> 中，布尔类型分为真值(<code>true</code>)和假值(<code>false</code>)</p><ul><li><strong>假值</strong>：可以被强制类型转换为 <code>false</code> 的值</li><li><strong>真值</strong>：除假值之外的值</li></ul><div class="tip custom-block"><p class="custom-block-title">ToBoolean 转换规则</p><ul><li>以下值会被转换成假值(<code>false</code>) <ul><li><strong><code>undefined</code></strong></li><li><strong><code>null</code></strong></li><li><strong><code>false</code></strong></li><li><strong><code>+0 0 -0 NaN</code></strong></li><li><strong><code>&#39;&#39;</code></strong></li></ul></li><li>除假值之外的值都会被转换成真值(<code>true</code>)</li></ul></div><h3 id="tonumber" tabindex="-1">ToNumber <a class="header-anchor" href="#tonumber" aria-label="Permalink to &quot;ToNumber&quot;">​</a></h3><p><code>ToNumber</code> 用来处理非数字值到数字值的类型转换</p><div class="tip custom-block"><p class="custom-block-title">ToNumber 转换规则</p><ul><li>基本类型 <ul><li><code>undefined</code> =&gt; <code>NaN</code></li><li><code>null</code> =&gt; <code>0</code></li><li><code>true</code> =&gt; <code>1</code></li><li><code>false</code> =&gt; <code>0</code></li><li><code>string</code><ul><li>空字符串(<code>&#39;&#39;</code>) =&gt; <code>0</code></li><li>非数字字符串 =&gt; <code>NaN</code></li></ul></li></ul></li><li>引用类型会先调用 <code>ToPrimitive</code> 逻辑将其转换成基本类型，如果返回的基本类型不是数值，再遵循以上规则进行转换</li></ul></div><h2 id="显式类型转换" tabindex="-1">显式类型转换 <a class="header-anchor" href="#显式类型转换" aria-label="Permalink to &quot;显式类型转换&quot;">​</a></h2><p>显式类型转换是指显式的去调用类型转换方法</p><ul><li>转换成布尔值 <ul><li><code>Boolean()</code></li></ul></li><li>转换成数值 <ul><li><code>Number()</code></li><li><code>parseInt()</code></li><li><code>parseFloat()</code></li></ul></li><li>转换成字符串 <ul><li><code>String()</code></li></ul></li></ul><div class="warning custom-block"><p class="custom-block-title">注意点</p><ul><li><code>Number()</code> 转换的是整个值</li><li><code>parseInt()</code> 和 <code>parseFloat()</code> 转换的是部分值，是对字符串逐个进行解析和转换，如果传入的参数不是字符串，会先对其进行字符串的转换</li></ul></div><h2 id="隐式类型转换" tabindex="-1">隐式类型转换 <a class="header-anchor" href="#隐式类型转换" aria-label="Permalink to &quot;隐式类型转换&quot;">​</a></h2><p>隐式类型转换是指在执行过程中，当实际操作的值与 <code>JavaScript</code> 内部期望得到的值不同时，就会对其做隐式类型转换(即不易察觉的类型转换)<br> 在 <code>JavaScript</code> 中有以下场景会发生隐式类型转换</p><ul><li>相等运算符 (<code>==</code>)</li><li>四则运算符 (<code>+ - * /</code>)</li><li>关系运算符 (<code>&gt; &lt; &gt;= &lt;=</code>)</li><li>逻辑操作符 (<code>&amp;&amp; ||</code>)</li><li>条件判断语句 <ul><li><code>if()</code></li><li><code>while()</code></li><li>三元运算符</li></ul></li></ul><h3 id="相等运算符运算规则-重点" tabindex="-1">相等运算符运算规则（重点） <a class="header-anchor" href="#相等运算符运算规则-重点" aria-label="Permalink to &quot;相等运算符运算规则（重点）&quot;">​</a></h3><p><strong>为什么 <code>0 == null</code> 是 <code>false</code> ？</strong></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison" target="_blank" rel="noreferrer">ECMA-262 规范 7.2.12 小节对相等运算符的描述</a></p><ol><li>如果 <code>x</code> 不是正常值（比如抛出一个错误），中断执行；</li><li>如果 <code>y</code> 不是正常值，中断执行；</li><li>如果 <code>Type(x)</code> 与 <code>Type(y)</code> 相同，执行严格相等运算 <code>x === y</code>；</li><li>如果 <code>x</code> 是 <code>null</code>，<code>y</code> 是 <code>undefined</code>，返回 <code>true</code>；</li><li>如果 <code>x</code> 是 <code>undefined</code>，<code>y</code> 是 <code>null</code>，返回 <code>true</code>；</li><li>如果 <code>Type(x)</code> 是数值，<code>Type(y)</code> 是字符串，返回 <code>x == ToNumber(y)</code> 的结果；</li><li>如果 <code>Type(x)</code> 是字符串，<code>Type(y)</code> 是数值，返回 <code>ToNumber(x) == y</code> 的结果；</li><li>如果 <code>Type(x)</code> 是布尔值，返回 <code>ToNumber(x) == y</code> 的结果；</li><li>如果 <code>Type(y)</code> 是布尔值，返回 <code>x == ToNumber(y)</code> 的结果；</li><li>如果 <code>Type(x)</code> 是字符串或数值或 <code>Symbol</code> 值，<code>Type(y)</code> 是对象，返回 <code>x == ToPrimitive(y)</code> 的结果；</li><li>如果 <code>Type(x)</code> 是对象，<code>Type(y)</code> 是字符串或数值或 <code>Symbol</code> 值，返回 <code>ToPrimitive(x) == y</code> 的结果；</li><li>返回 <code>false</code>。</li></ol><blockquote><p><a href="https://262.ecma-international.org/6.0/#sec-ecmascript-data-types-and-values" target="_blank" rel="noreferrer">Type(x)</a> 是 <code>the type of x</code> 的简写，其中的 <code>type</code> 是 ECMA-262 规范中定义的 ECMAScript 语言和规范类型</p></blockquote><p>所以在计算 <code>0 == null</code> 时，由于 <code>0</code> 的类型是数值，<code>null</code> 的类型是 <code>Null</code>（这是规格 <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-null-type" target="_blank" rel="noreferrer">4.3.13 小节</a>的规定，是内部 <code>Type</code> 运算的结果，跟 <code>typeof</code> 运算符无关）；<br> 因此上面的前 11 步都得不到结果，要到第 12 步才能得到 <code>false</code>。</p><p><a href="https://es6.ruanyifeng.com/#docs/spec#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank" rel="noreferrer">相等运算符 —— ECMAScript 6 入门</a></p><div class="tip custom-block"><p class="custom-block-title">相等运算符运算规则总结</p><ul><li>同类型比较时，执行严格相等运算 <code>x === y</code></li><li><code>undefined</code> 与 <code>null</code> 比较时返回 <code>true</code></li><li><code>string</code> 与 <code>number</code> 进行比较时，先将 <code>string</code> 做 <code>ToNumber</code> 处理，再进行比较</li><li><code>boolean</code> 与其它类型进行比较时，先将 <code>boolean</code> 做 <code>ToNumber</code> 处理，再进行比较</li><li><code>引用类型</code> 与 <code>基本类型</code> 进行比较时，将 <code>引用类型</code> 做 <code>ToPrimitive</code> 处理，再进行比较</li><li><code>undefined</code> <code>null</code> 与其它类型的比较时都返回 <code>false</code></li></ul></div><h3 id="四则运算符运算规则" tabindex="-1">四则运算符运算规则 <a class="header-anchor" href="#四则运算符运算规则" aria-label="Permalink to &quot;四则运算符运算规则&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">四则运算符运算规则</p><ul><li><code>-</code>(减) <code>*</code>(乘) <code>/</code>(除) 运算符: 先对操作数做 <code>ToNumber</code> 处理再执行运算</li><li><code>+</code>(加) 运算符 <ul><li>做一元运算时，对操作数做 <code>ToNumber</code> 处理</li><li>做二元运算时 <ul><li>当其中一个操作数为 <code>string</code> 时，将另一个操作数做 <code>ToString</code> 处理再执行字符串拼接</li><li>当一个操作数为 <code>number</code> 另一个操作数为基本类型时，将基本类型做 <code>ToNumber</code> 处理再执行运算</li><li>当一个操作数为 <code>number</code> 另一个操作数为引用类型时，都会先做 <code>ToString</code> 处理再执行字符串拼接</li></ul></li></ul></li></ul></div><h3 id="关系、逻辑、条件运算符运算规则" tabindex="-1">关系、逻辑、条件运算符运算规则 <a class="header-anchor" href="#关系、逻辑、条件运算符运算规则" aria-label="Permalink to &quot;关系、逻辑、条件运算符运算规则&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">关系运算符运算规则</p><ul><li>将引用类型做 <code>ToPrimitive</code> 处理</li><li>如果两个参数都是 <code>string</code> 类型时进行 <code>Unicode 编码</code> 大小比较</li><li>否则将两个参数做 <code>ToNumber</code> 处理，再进行数值大小比较</li></ul></div><div class="tip custom-block"><p class="custom-block-title">逻辑操作符与条件判断语句</p><p>在<strong>逻辑操作符</strong>与<strong>条件判断语句</strong>中都是做 <code>ToBoolean</code> 处理</p></div>`,44),c=[a];function p(t,i,r,d,u,y){return l(),e("div",null,c)}const F=s(n,[["render",p]]);export{m as __pageData,F as default};
