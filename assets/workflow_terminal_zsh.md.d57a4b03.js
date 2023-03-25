import{_ as s,o as n,c as a,R as l}from"./chunks/framework.8d59853f.js";const A=JSON.parse('{"title":"Zsh 配置","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/terminal/zsh.md","lastUpdated":null}'),p={name:"workflow/terminal/zsh.md"},e=l(`<h1 id="zsh-配置" tabindex="-1">Zsh 配置 <a class="header-anchor" href="#zsh-配置" aria-label="Permalink to &quot;Zsh 配置&quot;">​</a></h1><p><code>zsh</code> 相关配置和好用的插件、主题</p><h2 id="oh-my-zsh" tabindex="-1">oh-my-zsh <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;oh-my-zsh&quot;">​</a></h2><p>用于自定义 <code>zsh</code> 的配置</p><ol><li>主题配置</li><li>插件安装</li></ol><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 国内镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>更新</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">omz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">Github</a><a href="./zsh">zsh 插件</a></p><h2 id="zsh-插件" tabindex="-1">zsh 插件 <a class="header-anchor" href="#zsh-插件" aria-label="Permalink to &quot;zsh 插件&quot;">​</a></h2><h3 id="autojump" tabindex="-1">autojump <a class="header-anchor" href="#autojump" aria-label="Permalink to &quot;autojump&quot;">​</a></h3><p>用于常用目录间的快速跳转（通过维护命令行中最常用的目录的数据库来工作）</p><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 推荐</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autojump</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git://github.com/joelthelion/autojump.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autojump</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/install.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./uninstall.py</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><a href="https://github.com/wting/autojump" target="_blank" rel="noreferrer">Github</a></p><h3 id="z" tabindex="-1">z <a class="header-anchor" href="#z" aria-label="Permalink to &quot;z&quot;">​</a></h3><p>和 <code>autojump</code> 功能一致，是 <code>oh-my-zsh</code> 内置插件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#A6ACCD;"> z)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://github.com/rupa/z" target="_blank" rel="noreferrer">Github</a></p><h3 id="fast-syntax-highlighting" tabindex="-1">fast-syntax-highlighting <a class="header-anchor" href="#fast-syntax-highlighting" aria-label="Permalink to &quot;fast-syntax-highlighting&quot;">​</a></h3><p>终端语法高亮显示</p><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/zdharma-continuum/fast-syntax-highlighting.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/fast-syntax-highlighting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置(在 plugins 的最后面加上 fast-syntax-highlighting)</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#A6ACCD;"> fast-syntax-highlighting)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://github.com/zdharma-continuum/fast-syntax-highlighting" target="_blank" rel="noreferrer">Github</a></p><h3 id="zsh-autosuggestions" tabindex="-1">zsh-autosuggestions <a class="header-anchor" href="#zsh-autosuggestions" aria-label="Permalink to &quot;zsh-autosuggestions&quot;">​</a></h3><p>根据您的历史记录和完成情况建议您键入的命令</p><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#A6ACCD;"> $ZSH_CUSTOM</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">其他插件</span><span style="color:#A6ACCD;"> zsh-autosuggestions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noreferrer">Github</a></p><h2 id="zsh-主题" tabindex="-1">zsh 主题 <a class="header-anchor" href="#zsh-主题" aria-label="Permalink to &quot;zsh 主题&quot;">​</a></h2><h3 id="powerlevel10k" tabindex="-1">powerlevel10k <a class="header-anchor" href="#powerlevel10k" aria-label="Permalink to &quot;powerlevel10k&quot;">​</a></h3><p>安装</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/romkatv/powerlevel10k.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/themes/powerlevel10k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#A6ACCD;">ZSH_THEME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">powerlevel10k/powerlevel10k</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>配置</p><blockquote><p>使用 <a href="/efficiency/software/mac#iterm2">iTerm2</a> 可自动安装所需字体</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p10k</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">configure</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修复 <code>vscode</code> 终端图标乱码，修改 <code>terminal.integrated.fontFamily</code> 为 <code>&quot;MesloLGS NF&quot;</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">terminal.integrated.fontFamily</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MesloLGS NF</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>更新</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/themes/powerlevel10k</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看当前配置使用的图标</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">get_icon_names</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自定义配置</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 打开 p10k 配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.p10k.zsh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改 POWERLEVEL9K_LEFT_PROMPT_ELEMENTS 和 POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS 的配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 比如显示当前使用的 node 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://github.com/romkatv/powerlevel10k" target="_blank" rel="noreferrer">Github</a></p><h2 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h2><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 主题</span></span>
<span class="line"><span style="color:#A6ACCD;">ZSH_THEME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">powerlevel10k/powerlevel10k</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 历史命令显示时间</span></span>
<span class="line"><span style="color:#A6ACCD;">HIST_STAMPS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yyyy-mm-dd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 插件配置</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> autojump vscode brew node npm yarn web-search zsh-autosuggestions fast-syntax-highlighting)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 常用别名</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> pnpx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm dlx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yarn dev</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yarn start</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yarn build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yarn test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> glogp</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git log --pretty=&#39;%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> cat</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bat</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 代理相关</span></span>
<span class="line"><span style="color:#82AAFF;">proxy</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  http</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://127.0.0.1:1087</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  socks5</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">socks5://127.0.0.1:1086</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 只代理 http 请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> http_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$http</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> HTTP_PROXY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 只代理 https 请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> https_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$http</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> HTTPS_PROXY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 代理所有请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> all_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$socks5</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ALL_PROXY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$socks5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\033[32m已开启终端代理\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">unproxy</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http_proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTTP_PROXY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https_proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTTPS_PROXY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all_proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL_PROXY</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\033[32m已关闭终端代理\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改 github 用户名和邮箱地址（防止造成用公司信息提交到 github 的尴尬）</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> .git </span><span style="color:#89DDFF;">]];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">  githubName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># github 用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">  githubEmail</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># github 邮箱地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> remote get-url origin</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  localName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> config user.name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  localEmail</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> config user.email</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 只判断 github 仓库，根据需要修改（判断字符建议写长点）</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> $url </span><span style="color:#89DDFF;">=~</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">github.com/maomao1996</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 提示当前为 github 项目（不需要就注释）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\033[34m当前为 github 项目\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> $githubName </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> $githubName </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> $localName </span><span style="color:#89DDFF;">]];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">$(git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$githubName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已将当前仓库的 name 从\\033[33m </span><span style="color:#A6ACCD;">$localName</span><span style="color:#C3E88D;"> \\033[0m修改为\\033[32m </span><span style="color:#A6ACCD;">$githubName</span><span style="color:#C3E88D;"> \\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> $githubEmail </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> $githubEmail </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> $localEmail </span><span style="color:#89DDFF;">]];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">$(git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$githubEmail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已将当前仓库的 email 从\\033[33m </span><span style="color:#A6ACCD;">$localEmail</span><span style="color:#C3E88D;"> \\033[0m修改为\\033[32m </span><span style="color:#A6ACCD;">$githubEmail</span><span style="color:#C3E88D;"> \\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">代理相关说明</p><p>同时设置大小写的环境变量来保证兼容性（因为有的应用读取的是大写的环境变量，而有的应用读取的是小写的环境变量）</p></div>`,49),o=[e];function t(r,c,i,y,D,C){return n(),a("div",null,o)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};
