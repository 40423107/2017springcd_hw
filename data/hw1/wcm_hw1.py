import os
adata = open("wcm_w1_hw.txt", encoding="UTF-8").read()
alist = adata.splitlines()
#n = 0
# 以 row 當作 ethercalc 取資料的列數
row = 0
for stud_num in alist:
    row = row + 1
    blist=stud_num.split("\t")
    # 從 len(數列) 可以知道其長度
    # 以下利用 for 迴圈與 range() 一一取出個數列元素
    # 以 column 當作 ethercalc 取資料的行數
    column = 0
    for i in range(len(blist)):
        column = column + 1
        #print(blist[i])
        # 因為組員名單都是以 g 開頭, 因此可以直接列出所有組員
        if "g" in blist[i]:
            print(blist[i] ,"(",row, ",",column, ")")
    #print(blist)
    #n = n + 1
    #print(stud_num)
#print("學生總數:", n)
#print(os.environ)
