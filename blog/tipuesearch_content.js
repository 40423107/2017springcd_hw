var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog","url":"./pages/about/","tags":"misc"},{"title":"協同產品設計實習20170504第十一週(二)","text":"協同 2D 正齒輪傳動繪圖(二) 利用漸開線原理, 以 Brython 繪製單一正齒輪廓:11齒 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 11 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 #cobj = window.Cobj.new shape = window.Shape.new path = window.Path.new creategeartooth = window.createGearTooth.new tweener = window.Tweener.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 13 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = shape(data, { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = path(shapedefs.circle(hr)) shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path # setup the animation # backlash (mm) bklsh = 0.04*m # centre shift to make backlash dC = bklsh/(2*math.tan(math.pi*pa/180)) # np 為小齒輪齒數 np = 11 # gear ratio gr = n/np gearConfig = {'cx':-pr, 'cy':0, 'degs':[0, 360]} # gr*0.666 rpm #pinionConfig = {'cx':pr+dC, 'cy':0, 'degs':[0, -gr*360]} # 0.666 rpm twnr = tweener(0, 90000, \"loop\") cx = canvas.width/2 cy = canvas.height/2 #gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 #cgo.render(gear) # 利用 gear 資料複製一份, 命名為 gear1 gear1 = gear.dup() from time import time from browser.timer import request_animation_frame as raf from browser.timer import set_interval deg = math.pi/180 def draw(): cgo.clearCanvas() gear.rotate(2*deg) # 在特定位置, 以特定 scale, 特定 degs 執行 render cgo.render(gear, {'x':cx-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear1.rotate(-2*deg) cgo.render(gear1, {'x':cx+pr*2*0.5-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) set_interval(draw, 2)","url":"./40423107W11-2.html","tags":"Course"},{"title":"協同產品設計實習20170504第十一週","text":"協同 2D 正齒輪傳動繪圖 利用漸開線原理, 以 Brython 繪製單一正齒輪廓:11齒 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 11 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = window.Cobj.new creategeartooth = window.createGearTooth.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 11 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path cx = canvas.width/2 cy = canvas.height/2 gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear)","url":"./40423107W11.html","tags":"Course"},{"title":"協同產品設計實習20170428第十週","text":"add加減乘除 Brython測試 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值","url":"./40423107W10-2.html","tags":"Course"},{"title":"協同產品設計實習20170427第十週","text":"1.加法運算 2.減法運算 3.乘法運算 4.除法運算 1.加法運算 圖片 影片 2.減法運算 圖片 影片 3.乘法運算 圖片 影片 4.除法運算 圖片 影片 網頁測試加法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)+float(b)) doc[\"button1\"].bind(\"click\", button1) 按下取 a b 值 add.py(加法) 定義: add這個檔為a和b兩個變數 輸出公式為 a+b 導入sys 指出資料夾路徑 輸出add.pty這個檔 把輸出之名命名為sum=add.add(1,2) 第一個為add.py檔名,第二個為add名稱 輸出之公式ab為1和2 網頁測試乘法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container3'] degree = math.pi/180 def button3(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)*float(b)) doc[\"button3\"].bind(\"click\", button3) 按下取 a b 值 mul.py(乘法) 定義: mul這個檔為a和b兩個變數 輸出公式為 a*b 導入sys 指出資料夾路徑 輸出mul.pty這個檔 把輸出之名命名為multip=add.add(1,2) 第一個為mul.py檔名,第二個為mul名稱 輸出之公式ab為1和2 網頁測試除法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container4'] degree = math.pi/180 def button4(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)/float(b)) doc[\"button4\"].bind(\"click\", button4) 按下取 a b 值 division.py(除法) 定義: div這個檔為a和b兩個變數 輸出公式為 a/b 導入sys 指出資料夾路徑 輸出mul.pty這個檔 把輸出之名命名為division=add.add(6,2) 第一個為mul.py檔名,第二個為mul名稱 輸出之公式ab為6和2 網頁測試減法 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container1'] degree = math.pi/180 def button2(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)-float(b)) doc[\"button2\"].bind(\"click\", button2) 按下取 a b 值 subtraction.py(減法) 定義: div這個檔為a和b兩個變數 輸出公式為 a-b 導入sys 指出資料夾路徑 輸出mul.pty這個檔 把輸出之名命名為subtraction=add.add(6,2) 第一個為add.py檔名,第二個為sub名稱 輸出之公式ab為6和2","url":"./40423107W10.html","tags":"Course"},{"title":"協同產品設計實習 ag4 期中考報告","text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 1.Fossil Server 實習查驗 ag4期中考報告 fossil 2.四連桿機構協同 Trace Point 查驗 40423106_四連桿機構協同 Trace Point 查驗 40423107_四連桿機構協同 Trace Point 查驗 40423108_四連桿機構協同 Trace Point 查驗 40423125_四連桿機構協同 Trace Point 查驗 40423139_四連桿機構協同 Trace Point 查驗 40423140_四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用SolveSpace畫Fourbar Walker 利用onshape畫Fourbar Walker 零件1 零件2~4 組合 (四) 分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/40423107.stl', // data path path: './../work/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","url":"./40423107W9.html","tags":"Course"},{"title":"協同產品設計實習20170413第八週","text":"自評+組員互評 沒東西 不用點進去 自評+組員互評","url":"./40423107W8.html","tags":"Course"},{"title":"協同產品設計實習20170406第七週","text":"利用onshape繪製八連桿 繪製八連桿 零件1 零件2~8 組合 心得:感謝5號同學的影片，看完之後讓我可以順利把全部的零件都畫完及組裝。","url":"./40423107W7.html","tags":"Course"},{"title":"協同產品設計實習20170330第六週","text":"用Onshape繪製四連桿 利用Onshape繪製四連桿，組裝模擬，轉入V-rep並製作模擬 零件一 零件二 零件三 零件四 組合","url":"./40423107W6.html","tags":"Course"},{"title":"協同產品設計實習20170323第五週","text":"利用v-rep設定單連桿運動 利用v-rep設定單連桿運動","url":"./40423107W5.html","tags":"Course"},{"title":"協同產品設計實習20170316第四週","text":"利用solvespace繪製單連桿 零件一 零件二 零件三 組合","url":"./40423107W4.html","tags":"Course"},{"title":"協同產品設計實習20170309第三週","text":"1.小組翻譯影片hyperwork2 and hyperwork4 2.利用onshape繪製四連桿機構 翻譯影片 第四組影片 :hyperwork2 and hyperwork4 40423106 40423108 40423121 40423125 負責 hyperwork2 翻譯內容: The 2017 HyperWorks release has a lot of enhancements to the modeling and assembly capabilities to the software. HyperWorks 2017版對軟體的建模和組裝功能進行了大量增強 So we put in a new parts browser with a built-in part library. 所以我們把新的零件瀏覽器放進內置零件庫 The part library is a great tool for storing and loading work in progress. 零件庫是很好的工具用於存儲和加載工作。 So you can store a catalog of all the common parts that a workgroup needs to use, 因此你可以存儲工作所需要使用的共用的零件， so they can download their models from their PLM system 所以他們可以從他們的PLM系統下載他們的模型 Dand store them locally in a parts library for a work in progress. 並將它們存儲在本地的零件庫中為進行中的工作所用。 And it keeps revision control on them so they can back up to the different versions 它可以保有每次的修訂，所以他可以備份每個不同的版本 And they can also build different configurations now of their models. 現在他們也可以為他們的模型建立不同的配置。 in the configurations modeler now they can import parts from part 現在他們可以在設定配置時從零件庫導入零件 and then group them into what we call part sets, 然後將它們組成我們所謂的部分集 which are convenient groupings of parts. 以便於我們分組部件。 And then they can drag those parts together into assemblies, 然後他們可以利用這些零件進行組裝， ,and configure them for different load cases or different variations of their models. 並針對不同負載情況或不同的模型配置它們。 The other feature of having parts in the software is we do part instancing now, too. 軟體的另一個特徵是，現在我們也做了部件的實體化。 So if you load in a part that has multiple instances through the model, we support that. 因此，如果您要加載多個實體的零件到模型，我們有支援。 We don't have to create multiple copies of it. 我們不需要創建多個零件副本。 We can actually do the instancing,which is very memory efficient. 我們可以的有效利用內存。 Also in the model building assembly tool set is enhanced ID management as well. 也在模型建立裝配,工具集以及增强ID管理。 So not only can we assign IDs based on different rules that you define in the software, but you can import ID systems 因此我們不僅可以根據你軟件中定義的規則分配不同ID，也可以導入ID系統 from spreadsheets, XML files, database, billboard and so forth 從試算表，XML檔案，資料庫，看板等等 that are then used when it does the renumbering or the assembly of the model. 然後在對模型進行重新編號或裝配時使用。 it has to resolve part collisions. 它必须解决部分衝突。 Really important of doing model assembly is connecting all those parts together. 做模型裝配真正重要的是把這些所有部分連接在一起。 Connectors are really vital to the overall assembly process. 連接器對整個裝配過程至關重要。 The quality of the connector that you create really determine the outcome of the quality of the overall assembled model as well. D接合處的品質決定了整體組裝模型的品質。 So for us to get a good high fidelity solution, you have to have a really good connection generation as well. 所以為了讓我們得到一個良好的解析度，必須有更密集的連接點。 40423107 40423139 40423140 負責 hyperwork4 Produce from 曾繼緯 on Vimeo . 翻譯內容： The core of HyperMesh has always been about meshing and geometry cleanup， HyperMesh的核心是關於網路劃分和幾何清理， and generating a really good solver deck. 並且產生一個非常好的解算平台 So we've continued to stay really focused on geometry ， 所以我們持續專注於幾何 generation and clean up， 生成和清理 mesh generation to improve the quality of the mesh， 藉由網格生成以提高網格質量 the flow of the mesh. 網格的流動 And within Altair，our own solver and modeling visualization teams work very closely together 在Altair裡我們的解算器和建模可以清楚的看見團隊緊密合作 to make sure we're supporting all the latest enhancements to the Altair solvers 以確保我們增強所有最新的Altair解算器 and the modeling visualization side of things. 並且可以清楚看見物體的模組 Simlab is always about automate， automate，automated. Simlab是關於自動化，自動化，自動化. We continue to improve the user experience. 我們持續改善用戶體驗 We've added the mesh fading approach in the graphics that we use in HyperMesh now. 我們在HyperMesh中使用的圖形中添加了網格衰減方法。 We've added a new measurement tool, 我們添加了一個新的測量工具， we've included JT and Catia direct readers. 我們包括JT和Catia的讀者 We have new macro tools for creating bearings and welds. 我們新的巨集工具用於創建軸承與焊接 We put a lot of effort into the CFD pre-processing in simLab now as well. 我們在simLab中也投入了大量的資源進行CFD的預先處理。 And we support the new nanoFluidx SPH fluid code from Altair. 以及我們的支援來自於Altair新的nanoFluidX SPH流體代碼。 And we now have support for FEKO inside of SimLab. 而現在我們已經在SimLab中支援FEKO。 And very exciting,we'ce added a Python intreface to SimLab as well. 非常令人振奮的是，我們還為SimLab添加了一個Python介面。 There's a lot of work going on in the crash domain side of HyperMesh right now. 現在在HyperMesh的損毀處有很多修復工作正在進行。 So we've kind of gone back to the drawing board on creating a new dummy positioner that has a new kinematic solver nuilt into it, 所以我們回到繪圖板上創建一個新的虛擬定位器，其中內置了一個新的運動解碼器， and new graphical manipulators that make position a dummy in the vehicle much simpler, 以及新的圖形操縱器，使位置在虛擬的傳送中變得更簡單， and actually kind of fun. 實際上會有趣。 We've also employed that same kinematic solver in a seat positioning tool. 我們還在位置定位工具中使用了相同的運動解碼器。 So now it will simulate all the mechanisms that actually articulate the seat in the vehicle 所以現在它將模擬所有的實際機構在傳送位置的機制 so you can get that into the correct position as well. 所以你可以得到正確的位置。 we've had some great enhancements to HyperView. 我們對HyperView進行了一些重大的改進。 you can directly interact with the legends now to control what's on the screen in terms the contours of the different data types. 您可以直接與圖例進行互動，以便根據不同數據類型的週線控制屏幕上的內容。 where you can have multiple results 你可以有多個結果 files associated with a model file so 文件與模組文件相關聯等 that makes it really easy to bring in 所以使它真的很容易帶來 results between different runs into the 結果之間的不同運行 same model space 相同模組空間 and compare results HyperGraph is 並比較HyperGraph的結果 really the best plotting system for CAE results. 真的是CAE結果的最佳繪圖系統。 it's essentially a data 它本質上是一個數據 miner that lets you go through all the 讓你經歷所有 results files, generate large reports with 結果文件，生成大型報告和 many points, within the curves. 許多點，在曲線內。 And once you're established a reports that you're looking at, 一旦你看著建立的報告 you can make global changes across the entire report 你可以使全球變化跨越這整個報告 so it's a great automation ， 所以它是一個偉大的自動化 Tool for post-processing 工具後處理 用onshape畫四連桿機構 零件一 零件二 零件三 組合","url":"./40423107W3.html","tags":"Course"},{"title":"協同產品設計實習20170302第二週","text":"利用solvespace繪製四連桿機構及轉入vrep 零件及組裝影片 2017 03 08 20 13 30 444 from 史育澤 on Vimeo . vrep","url":"./40423107W2.html","tags":"Course"}]};