<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="yen.20170108171605.1"><vh>@settings</vh>
<v t="yen.20170108171605.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="yen.20170108171605.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="yen.20170108171622.1"><vh>有關 2017springwcm</vh></v>
<v t="yen.20170108171733.1" a="E"><vh>@path ../</vh>
<v t="yen.20170108171733.2"><vh>@button pelican-blog</vh></v>
<v t="yen.20170108171733.3"><vh>@edit README.md</vh></v>
<v t="yen.20170108171733.4"><vh>@edit .gitignore</vh></v>
<v t="yen.20170108171733.5" a="E"><vh>Pelican 設定</vh>
<v t="yen.20170108171733.6"><vh>@edit local_publishconf.py</vh></v>
<v t="yen.20170108171733.7"><vh>@edit pelicanconf.py</vh></v>
</v>
<v t="yen.20170224232341.1" a="E"><vh>編輯 template</vh>
<v t="yen.20170224232341.2" a="E"><vh>@path theme/pelican-bootstrap3_local/templates</vh>
<v t="yen.20170224232341.3"><vh>@edit base.html</vh></v>
</v>
</v>
<v t="yen.20170108171733.8" a="E"><vh>@clean index.html</vh>
<v t="yen.20170108171733.9" a="E"><vh>html</vh>
<v t="yen.20170108171733.10"><vh>head</vh></v>
<v t="yen.20170108171733.11" a="E"><vh>body</vh>
<v t="yen.20170108171733.12" a="E"><vh>reveal div</vh>
<v t="yen.20170108171733.13" a="E"><vh>slides div</vh>
<v t="yen.20170108171733.14" a="E"><vh>封面投影片</vh>
<v t="yen.20170108171733.15"><vh>封面投影片內容</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
<v t="yen.20170108171733.71" a="E"><vh>@path content</vh>
<v t="yen.20170108171733.72"><vh>@edit 20170302.md</vh></v>
<v t="leo.20170322205908.1"><vh>@edit 20170309.md</vh></v>
<v t="leo.20170322205910.1"><vh>@edit 20170316.md</vh></v>
<v t="leo.20170413092321.1"><vh>@edit 20170323.md</vh></v>
<v t="leo.20170413092323.1"><vh>@edit 20170330.md</vh></v>
<v t="leo.20170413092326.1"><vh>@edit 20170406.md</vh></v>
<v t="leo.20170413094502.1"><vh>@edit 20170413.md</vh></v>
<v t="yen.20170108171733.81" a="E"><vh>@path pages</vh>
<v t="yen.20170108171733.82"><vh>@edit pages_1.md</vh></v>
</v>
</v>
<v t="yen.20170108171733.83"><vh>產生 .key 與 .crt</vh></v>
</v>
<v t="yen.20170108171930.1"><vh>@button https server</vh></v>
<v t="yen.20170108171939.1"><vh>@button ipv6 https server</vh></v>
</vnodes>
<tnodes>
<t tx="yen.20170108171605.1"></t>
<t tx="yen.20170108171605.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="yen.20170108171605.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="yen.20170108171622.1">2017 Spring WCM 機械設計工程系網際內容管理

倉儲位置: https://github.com/mdecourse/2017springwcm

每一協同成員都應該要在 users 目錄下有一個 Leo 檔案

</t>
<t tx="yen.20170108171733.1"></t>
<t tx="yen.20170108171733.10">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
2017 Spring 機械設計工程系網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="https://cad-lab.github.io/cadlab_data/reveal/lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'https://cad-lab.github.io/cadlab_data/reveal/css/print/pdf.css' : 'https://cad-lab.github.io/cadlab_data/reveal/css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="https://cad-lab.github.io/cadlab_data/reveal/lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="yen.20170108171733.11">&lt;body&gt;
@others
&lt;script src="https://cad-lab.github.io/cadlab_data/reveal/lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cad-lab.github.io/cadlab_data/reveal/js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/zoom-js/zoom.js', async: true },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/notes/notes.js', async: true },
                { src: 'https://cad-lab.github.io/cadlab_data/reveal/plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;
</t>
<t tx="yen.20170108171733.12">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="yen.20170108171733.13">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="yen.20170108171733.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="yen.20170108171733.15">## 2017Spring Cd上課報告

### 40423107史育澤

&lt;small&gt;
Created by [40423107](http://chiamingyen.github.io/kmolab/blog/)
&lt;/small&gt;

[BLOG](blog/index.html)


</t>
<t tx="yen.20170108171733.2">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o blog -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="yen.20170108171733.5"></t>
<t tx="yen.20170108171733.71"></t>
<t tx="yen.20170108171733.8">@language xml
@tabwidth -4
@others

</t>
<t tx="yen.20170108171733.81"></t>
<t tx="yen.20170108171733.83">sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt

</t>
<t tx="yen.20170108171733.9">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="yen.20170108171930.1">@language python
import os
import subprocess
import threading
import http.server, ssl

def domake():
    # build directory
    os.chdir("./../")
    server_address = ('localhost', 5443)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print(os.getcwd())
    print("5443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170108171939.1">@language python
import os
import subprocess
import threading
import socket
import http.server, ssl

class HTTPServerV6(http.server.HTTPServer):
    address_family = socket.AF_INET6
  
def domake():
    # build directory
    os.chdir("./../")
    ipv6_address = '2001:288:6004:17:3004::808'
    server_address = (ipv6_address, 6443)
    #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print("6443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170224232341.1"></t>
<t tx="yen.20170224232341.2"></t>
</tnodes>
</leo_file>
