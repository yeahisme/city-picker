const cities = [
    {
        "cityNameEn": "Beijing",
        "cityNameCn": "北京",
        "cityCode": 1,
        "checked": false
    },
    {
        "cityNameEn": "Shanghai",
        "cityNameCn": "上海",
        "cityCode": 2,
        "checked": true
    },
    {
        "cityNameEn": "Tianjin",
        "cityNameCn": "天津",
        "cityCode": 3,
        "checked": false
    },
    {
        "cityNameEn": "Chongqing",
        "cityNameCn": "重庆",
        "cityCode": 4,
        "checked": false
    },
    {
        "cityNameEn": "Dalian",
        "cityNameCn": "大连",
        "cityCode": 6,
        "checked": false
    },
    {
        "cityNameEn": "Qingdao",
        "cityNameCn": "青岛",
        "cityCode": 7,
        "checked": false
    },
    {
        "cityNameEn": "Xian",
        "cityNameCn": "西安",
        "cityCode": 10,
        "checked": false
    },
    {
        "cityNameEn": "Nanjing",
        "cityNameCn": "南京",
        "cityCode": 12,
        "checked": false
    },
    {
        "cityNameEn": "Suzhou",
        "cityNameCn": "苏州",
        "cityCode": 14,
        "checked": false
    },
    {
        "cityNameEn": "Hangzhou",
        "cityNameCn": "杭州",
        "cityCode": 17,
        "checked": false
    },
    {
        "cityNameEn": "Xiamen",
        "cityNameCn": "厦门",
        "cityCode": 25,
        "checked": false
    },
    {
        "cityNameEn": "Chengdu",
        "cityNameCn": "成都",
        "cityCode": 28,
        "checked": false
    },
    {
        "cityNameEn": "Shenzhen",
        "cityNameCn": "深圳",
        "cityCode": 30,
        "checked": false
    },
    {
        "cityNameEn": "Guangzhou",
        "cityNameCn": "广州",
        "cityCode": 32,
        "checked": false
    },
    {
        "cityNameEn": "Sanya",
        "cityNameCn": "三亚",
        "cityCode": 43,
        "checked": false
    },
    {
        "cityNameEn": "Taipei",
        "cityNameCn": "台北",
        "cityCode": 617,
        "checked": false
    },
    {
        "cityNameEn": "Hong Kong",
        "cityNameCn": "香港",
        "cityCode": 58,
        "checked": false
    },
    {
        "cityNameEn": "Jinan",
        "cityNameCn": "济南",
        "cityCode": 144,
        "checked": false
    },
    {
        "cityNameEn": "Ningbo",
        "cityNameCn": "宁波",
        "cityCode": 375,
        "checked": false
    },
    {
        "cityNameEn": "Shenyang",
        "cityNameCn": "沈阳",
        "cityCode": 451,
        "checked": false
    },
    {
        "cityNameEn": "Wuhan",
        "cityNameCn": "武汉",
        "cityCode": 477,
        "checked": false
    },
    {
        "cityNameEn": "abazhou",
        "cityNameCn": "阿坝",
        "cityCode": 1838,
        "checked": false
    },
    {
        "cityNameEn": "Akesu",
        "cityNameCn": "阿克苏",
        "cityCode": 173,
        "checked": false
    },
    {
        "cityNameEn": "Aletai",
        "cityNameCn": "阿勒泰",
        "cityCode": 175,
        "checked": false
    },
    {
        "cityNameEn": "Ankang",
        "cityNameCn": "安康",
        "cityCode": 171,
        "checked": false
    },
    {
        "cityNameEn": "Anqing",
        "cityNameCn": "安庆",
        "cityCode": 177,
        "checked": false
    },
    {
        "cityNameEn": "Anshan",
        "cityNameCn": "鞍山",
        "cityCode": 178,
        "checked": false
    },
    {
        "cityNameEn": "Anshun",
        "cityNameCn": "安顺",
        "cityCode": 179,
        "checked": false
    },
    {
        "cityNameEn": "Anyang",
        "cityNameCn": "安阳",
        "cityCode": 181,
        "checked": false
    },
    {
        "cityNameEn": "Macau",
        "cityNameCn": "澳门",
        "cityCode": 59,
        "checked": false
    },
    {
        "cityNameEn": "Baicheng",
        "cityNameCn": "白城",
        "cityCode": 1116,
        "checked": false
    },
    {
        "cityNameEn": "Baise",
        "cityNameCn": "百色",
        "cityCode": 1140,
        "checked": false
    },
    {
        "cityNameEn": "baisha",
        "cityNameCn": "白沙",
        "cityCode": 21025,
        "checked": false
    },
    {
        "cityNameEn": "baishan",
        "cityNameCn": "白山",
        "cityCode": 3886,
        "checked": false
    },
    {
        "cityNameEn": "Baiyin",
        "cityNameCn": "白银",
        "cityCode": 1541,
        "checked": false
    },
    {
        "cityNameEn": "Baoding",
        "cityNameCn": "保定",
        "cityCode": 185,
        "checked": false
    },
    {
        "cityNameEn": "Baoji",
        "cityNameCn": "宝鸡",
        "cityCode": 112,
        "checked": false
    },
    {
        "cityNameEn": "Baoshan",
        "cityNameCn": "保山",
        "cityCode": 197,
        "checked": false
    },
    {
        "cityNameEn": "Baoting",
        "cityNameCn": "保亭",
        "cityCode": 54,
        "checked": false
    },
    {
        "cityNameEn": "Baotou",
        "cityNameCn": "包头",
        "cityCode": 141,
        "checked": false
    },
    {
        "cityNameEn": "Bayannaoer",
        "cityNameCn": "巴彦淖尔",
        "cityCode": 3887,
        "checked": false
    },
    {
        "cityNameEn": "bazhong",
        "cityNameCn": "巴中",
        "cityCode": 3966,
        "checked": false
    },
    {
        "cityNameEn": "Beihai",
        "cityNameCn": "北海",
        "cityCode": 189,
        "checked": false
    },
    {
        "cityNameEn": "Beijing",
        "cityNameCn": "北京",
        "cityCode": 1,
        "checked": false
    },
    {
        "cityNameEn": "Bengbu",
        "cityNameCn": "蚌埠",
        "cityCode": 182,
        "checked": false
    },
    {
        "cityNameEn": "Benxi",
        "cityNameCn": "本溪",
        "cityCode": 1155,
        "checked": false
    },
    {
        "cityNameEn": "bijie",
        "cityNameCn": "毕节",
        "cityCode": 22031,
        "checked": false
    },
    {
        "cityNameEn": "binzhou",
        "cityNameCn": "滨州",
        "cityCode": 1820,
        "checked": false
    },
    {
        "cityNameEn": "boertala",
        "cityNameCn": "博尔塔拉",
        "cityCode": 21468,
        "checked": false
    },
    {
        "cityNameEn": "Bozhou",
        "cityNameCn": "亳州",
        "cityCode": 1078,
        "checked": false
    },
    {
        "cityNameEn": "Cangjiang",
        "cityNameCn": "昌江",
        "cityCode": 56,
        "checked": false
    },
    {
        "cityNameEn": "Cangzhou",
        "cityNameCn": "沧州",
        "cityCode": 216,
        "checked": false
    },
    {
        "cityNameEn": "Changchun",
        "cityNameCn": "长春",
        "cityCode": 158,
        "checked": false
    },
    {
        "cityNameEn": "Changde",
        "cityNameCn": "常德",
        "cityCode": 201,
        "checked": false
    },
    {
        "cityNameEn": "Changdu",
        "cityNameCn": "昌都",
        "cityCode": 575,
        "checked": false
    },
    {
        "cityNameEn": "changji",
        "cityNameCn": "昌吉",
        "cityCode": 22032,
        "checked": false
    },
    {
        "cityNameEn": "Changsha",
        "cityNameCn": "长沙",
        "cityCode": 206,
        "checked": false
    },
    {
        "cityNameEn": "Changzhi",
        "cityNameCn": "长治",
        "cityCode": 137,
        "checked": false
    },
    {
        "cityNameEn": "Changzhou",
        "cityNameCn": "常州",
        "cityCode": 213,
        "checked": false
    },
    {
        "cityNameEn": "chaoyang",
        "cityNameCn": "朝阳",
        "cityCode": 211,
        "checked": false
    },
    {
        "cityNameEn": "Chaozhou",
        "cityNameCn": "潮州",
        "cityCode": 215,
        "checked": false
    },
    {
        "cityNameEn": "Chengde",
        "cityNameCn": "承德",
        "cityCode": 562,
        "checked": false
    },
    {
        "cityNameEn": "Chengdu",
        "cityNameCn": "成都",
        "cityCode": 28,
        "checked": false
    },
    {
        "cityNameEn": "chengmai",
        "cityNameCn": "澄迈",
        "cityCode": 20836,
        "checked": false
    },
    {
        "cityNameEn": "Chenzhou",
        "cityNameCn": "郴州",
        "cityCode": 612,
        "checked": false
    },
    {
        "cityNameEn": "CHIAYI",
        "cityNameCn": "嘉义",
        "cityCode": 5152,
        "checked": false
    },
    {
        "cityNameEn": "Chifeng",
        "cityNameCn": "赤峰",
        "cityCode": 202,
        "checked": false
    },
    {
        "cityNameEn": "Chizhou",
        "cityNameCn": "池州",
        "cityCode": 218,
        "checked": false
    },
    {
        "cityNameEn": "Chongqing",
        "cityNameCn": "重庆",
        "cityCode": 4,
        "checked": false
    },
    {
        "cityNameEn": "Chongzuo",
        "cityNameCn": "崇左",
        "cityCode": 1896,
        "checked": false
    },
    {
        "cityNameEn": "Chuzhou",
        "cityNameCn": "滁州",
        "cityCode": 214,
        "checked": false
    },
    {
        "cityNameEn": "Dali",
        "cityNameCn": "大理市",
        "cityCode": 36,
        "checked": false
    },
    {
        "cityNameEn": "Dalian",
        "cityNameCn": "大连",
        "cityCode": 6,
        "checked": false
    },
    {
        "cityNameEn": "Dandong",
        "cityNameCn": "丹东",
        "cityCode": 221,
        "checked": false
    },
    {
        "cityNameEn": "Danzhou",
        "cityNameCn": "儋州",
        "cityCode": 57,
        "checked": false
    },
    {
        "cityNameEn": "Daqing",
        "cityNameCn": "大庆",
        "cityCode": 231,
        "checked": false
    },
    {
        "cityNameEn": "Datong",
        "cityNameCn": "大同",
        "cityCode": 136,
        "checked": false
    },
    {
        "cityNameEn": "Daxinganling",
        "cityNameCn": "大兴安岭",
        "cityCode": 7663,
        "checked": false
    },
    {
        "cityNameEn": "Dazhou",
        "cityNameCn": "达州",
        "cityCode": 1233,
        "checked": false
    },
    {
        "cityNameEn": "Deyang",
        "cityNameCn": "德阳",
        "cityCode": 237,
        "checked": false
    },
    {
        "cityNameEn": "Dezhou",
        "cityNameCn": "德州",
        "cityCode": 1370,
        "checked": false
    },
    {
        "cityNameEn": "Ding'an",
        "cityNameCn": "定安",
        "cityCode": 50,
        "checked": false
    },
    {
        "cityNameEn": "Dingxi",
        "cityNameCn": "定西",
        "cityCode": 1021,
        "checked": false
    },
    {
        "cityNameEn": "Dongfang",
        "cityNameCn": "东方",
        "cityCode": 48,
        "checked": false
    },
    {
        "cityNameEn": "Dongguan",
        "cityNameCn": "东莞",
        "cityCode": 223,
        "checked": false
    },
    {
        "cityNameEn": "Dongying",
        "cityNameCn": "东营",
        "cityCode": 236,
        "checked": false
    },
    {
        "cityNameEn": "E'erduosi",
        "cityNameCn": "鄂尔多斯",
        "cityCode": 3976,
        "checked": false
    },
    {
        "cityNameEn": "Ezhou",
        "cityNameCn": "鄂州",
        "cityCode": 992,
        "checked": false
    },
    {
        "cityNameEn": "Fangchenggang",
        "cityNameCn": "防城港",
        "cityCode": 1677,
        "checked": false
    },
    {
        "cityNameEn": "Foshan",
        "cityNameCn": "佛山",
        "cityCode": 251,
        "checked": false
    },
    {
        "cityNameEn": "Fushun",
        "cityNameCn": "抚顺",
        "cityCode": 252,
        "checked": false
    },
    {
        "cityNameEn": "Fuxin",
        "cityNameCn": "阜新",
        "cityCode": 254,
        "checked": false
    },
    {
        "cityNameEn": "Fuyang",
        "cityNameCn": "阜阳",
        "cityCode": 257,
        "checked": false
    },
    {
        "cityNameEn": "Fuzhou",
        "cityNameCn": "福州",
        "cityCode": 258,
        "checked": false
    },
    {
        "cityNameEn": "Fuzhou",
        "cityNameCn": "抚州",
        "cityCode": 3884,
        "checked": false
    },
    {
        "cityNameEn": "Gannan",
        "cityNameCn": "甘南",
        "cityCode": 7844,
        "checked": false
    },
    {
        "cityNameEn": "Ganzhou",
        "cityNameCn": "赣州",
        "cityCode": 268,
        "checked": false
    },
    {
        "cityNameEn": "ganzizhou",
        "cityNameCn": "甘孜",
        "cityCode": 4124,
        "checked": false
    },
    {
        "cityNameEn": "Gaoxiong",
        "cityNameCn": "高雄",
        "cityCode": 720,
        "checked": false
    },
    {
        "cityNameEn": "Guang'an",
        "cityNameCn": "广安",
        "cityCode": 1100,
        "checked": false
    },
    {
        "cityNameEn": "Guangyuan",
        "cityNameCn": "广元",
        "cityCode": 267,
        "checked": false
    },
    {
        "cityNameEn": "Guangzhou",
        "cityNameCn": "广州",
        "cityCode": 32,
        "checked": false
    },
    {
        "cityNameEn": "Guigang",
        "cityNameCn": "贵港",
        "cityCode": 1518,
        "checked": false
    },
    {
        "cityNameEn": "Guilin",
        "cityNameCn": "桂林",
        "cityCode": 33,
        "checked": false
    },
    {
        "cityNameEn": "Guiyang",
        "cityNameCn": "贵阳",
        "cityCode": 38,
        "checked": false
    },
    {
        "cityNameEn": "Guyuan",
        "cityNameCn": "固原",
        "cityCode": 321,
        "checked": false
    },
    {
        "cityNameEn": "Haerbin",
        "cityNameCn": "哈尔滨",
        "cityCode": 5,
        "checked": false
    },
    {
        "cityNameEn": "Haibei",
        "cityNameCn": "海北",
        "cityCode": 7807,
        "checked": false
    },
    {
        "cityNameEn": "Haidong",
        "cityNameCn": "海东",
        "cityCode": 7752,
        "checked": false
    },
    {
        "cityNameEn": "Haikou",
        "cityNameCn": "海口",
        "cityCode": 42,
        "checked": false
    },
    {
        "cityNameEn": "Haixizhou",
        "cityNameCn": "海西",
        "cityCode": 7589,
        "checked": false
    },
    {
        "cityNameEn": "Handan",
        "cityNameCn": "邯郸",
        "cityCode": 275,
        "checked": false
    },
    {
        "cityNameEn": "Hangzhou",
        "cityNameCn": "杭州",
        "cityCode": 17,
        "checked": false
    },
    {
        "cityNameEn": "Hanzhong",
        "cityNameCn": "汉中",
        "cityCode": 129,
        "checked": false
    },
    {
        "cityNameEn": "Hebi",
        "cityNameCn": "鹤壁",
        "cityCode": 951,
        "checked": false
    },
    {
        "cityNameEn": "hechi",
        "cityNameCn": "河池",
        "cityCode": 3969,
        "checked": false
    },
    {
        "cityNameEn": "Hefei",
        "cityNameCn": "合肥",
        "cityCode": 278,
        "checked": false
    },
    {
        "cityNameEn": "Hegang",
        "cityNameCn": "鹤岗",
        "cityCode": 1611,
        "checked": false
    },
    {
        "cityNameEn": "Heihe",
        "cityNameCn": "黑河",
        "cityCode": 281,
        "checked": false
    },
    {
        "cityNameEn": "Hengshui",
        "cityNameCn": "衡水",
        "cityCode": 290,
        "checked": false
    },
    {
        "cityNameEn": "Hengyang",
        "cityNameCn": "衡阳",
        "cityCode": 297,
        "checked": false
    },
    {
        "cityNameEn": "Heyuan",
        "cityNameCn": "河源",
        "cityCode": 693,
        "checked": false
    },
    {
        "cityNameEn": "Heze",
        "cityNameCn": "菏泽",
        "cityCode": 1074,
        "checked": false
    },
    {
        "cityNameEn": "hezhou",
        "cityNameCn": "贺州",
        "cityCode": 4146,
        "checked": false
    },
    {
        "cityNameEn": "Hong Kong",
        "cityNameCn": "香港",
        "cityCode": 58,
        "checked": false
    },
    {
        "cityNameEn": "Honghezhou",
        "cityNameCn": "红河",
        "cityCode": 1341,
        "checked": false
    },
    {
        "cityNameEn": "Hsinchu",
        "cityNameCn": "新竹",
        "cityCode": 3845,
        "checked": false
    },
    {
        "cityNameEn": "Huai'an",
        "cityNameCn": "淮安",
        "cityCode": 577,
        "checked": false
    },
    {
        "cityNameEn": "Huaibei",
        "cityNameCn": "淮北",
        "cityCode": 272,
        "checked": false
    },
    {
        "cityNameEn": "Huaihua",
        "cityNameCn": "怀化",
        "cityCode": 282,
        "checked": false
    },
    {
        "cityNameEn": "Huainan",
        "cityNameCn": "淮南",
        "cityCode": 287,
        "checked": false
    },
    {
        "cityNameEn": "HUALIEN",
        "cityNameCn": "花莲",
        "cityCode": 6954,
        "checked": false
    },
    {
        "cityNameEn": "Huanggang",
        "cityNameCn": "黄冈",
        "cityCode": 3885,
        "checked": false
    },
    {
        "cityNameEn": "Huangnan",
        "cityNameCn": "黄南",
        "cityCode": 7802,
        "checked": false
    },
    {
        "cityNameEn": "Huangshan",
        "cityNameCn": "黄山",
        "cityCode": 23,
        "checked": false
    },
    {
        "cityNameEn": "Huangshi",
        "cityNameCn": "黄石",
        "cityCode": 292,
        "checked": false
    },
    {
        "cityNameEn": "Huhehaote",
        "cityNameCn": "呼和浩特",
        "cityCode": 103,
        "checked": false
    },
    {
        "cityNameEn": "Huizhou",
        "cityNameCn": "惠州",
        "cityCode": 299,
        "checked": false
    },
    {
        "cityNameEn": "Huludao",
        "cityNameCn": "葫芦岛",
        "cityCode": 1050,
        "checked": false
    },
    {
        "cityNameEn": "Hulunbeier",
        "cityNameCn": "呼伦贝尔",
        "cityCode": 4255,
        "checked": false
    },
    {
        "cityNameEn": "Huzhou",
        "cityNameCn": "湖州",
        "cityCode": 86,
        "checked": false
    },
    {
        "cityNameEn": "Jiamusi",
        "cityNameCn": "佳木斯",
        "cityCode": 317,
        "checked": false
    },
    {
        "cityNameEn": "Jian",
        "cityNameCn": "吉安",
        "cityCode": 933,
        "checked": false
    },
    {
        "cityNameEn": "Jiangmen",
        "cityNameCn": "江门",
        "cityCode": 316,
        "checked": false
    },
    {
        "cityNameEn": "Jiaozuo",
        "cityNameCn": "焦作",
        "cityCode": 1093,
        "checked": false
    },
    {
        "cityNameEn": "Jiaxing",
        "cityNameCn": "嘉兴",
        "cityCode": 571,
        "checked": false
    },
    {
        "cityNameEn": "Jiayuguan",
        "cityNameCn": "嘉峪关",
        "cityCode": 326,
        "checked": false
    },
    {
        "cityNameEn": "Jieyang",
        "cityNameCn": "揭阳",
        "cityCode": 956,
        "checked": false
    },
    {
        "cityNameEn": "Jilin",
        "cityNameCn": "吉林",
        "cityCode": 159,
        "checked": false
    },
    {
        "cityNameEn": "Jilong",
        "cityNameCn": "基隆",
        "cityCode": 7810,
        "checked": false
    },
    {
        "cityNameEn": "Jinan",
        "cityNameCn": "济南",
        "cityCode": 144,
        "checked": false
    },
    {
        "cityNameEn": "Jinchang",
        "cityNameCn": "金昌",
        "cityCode": 1158,
        "checked": false
    },
    {
        "cityNameEn": "Jincheng",
        "cityNameCn": "晋城",
        "cityCode": 1092,
        "checked": false
    },
    {
        "cityNameEn": "Jingdezhen",
        "cityNameCn": "景德镇",
        "cityCode": 305,
        "checked": false
    },
    {
        "cityNameEn": "Jingmen",
        "cityNameCn": "荆门",
        "cityCode": 1121,
        "checked": false
    },
    {
        "cityNameEn": "Jingzhou",
        "cityNameCn": "荆州",
        "cityCode": 328,
        "checked": false
    },
    {
        "cityNameEn": "Jinhua",
        "cityNameCn": "金华",
        "cityCode": 308,
        "checked": false
    },
    {
        "cityNameEn": "Jining",
        "cityNameCn": "济宁",
        "cityCode": 318,
        "checked": false
    },
    {
        "cityNameEn": "Jinzhong",
        "cityNameCn": "晋中",
        "cityCode": 1453,
        "checked": false
    },
    {
        "cityNameEn": "Jinzhou",
        "cityNameCn": "锦州",
        "cityCode": 327,
        "checked": false
    },
    {
        "cityNameEn": "Jiujiang",
        "cityNameCn": "九江",
        "cityCode": 24,
        "checked": false
    },
    {
        "cityNameEn": "Jiuquan",
        "cityNameCn": "酒泉",
        "cityCode": 662,
        "checked": false
    },
    {
        "cityNameEn": "Jixi",
        "cityNameCn": "鸡西",
        "cityCode": 157,
        "checked": false
    },
    {
        "cityNameEn": "Jiyuan",
        "cityNameCn": "济源",
        "cityCode": 1454,
        "checked": false
    },
    {
        "cityNameEn": "Kaifeng",
        "cityNameCn": "开封",
        "cityCode": 331,
        "checked": false
    },
    {
        "cityNameEn": "Kaohsiung",
        "cityNameCn": "高雄",
        "cityCode": 720,
        "checked": false
    },
    {
        "cityNameEn": "Kelamayi",
        "cityNameCn": "克拉玛依",
        "cityCode": 166,
        "checked": false
    },
    {
        "cityNameEn": "Kunming",
        "cityNameCn": "昆明",
        "cityCode": 34,
        "checked": false
    },
    {
        "cityNameEn": "Laibin",
        "cityNameCn": "来宾",
        "cityCode": 1892,
        "checked": false
    },
    {
        "cityNameEn": "Laiwu",
        "cityNameCn": "莱芜",
        "cityCode": 1452,
        "checked": false
    },
    {
        "cityNameEn": "Langfang",
        "cityNameCn": "廊坊",
        "cityCode": 340,
        "checked": false
    },
    {
        "cityNameEn": "Lanzhou",
        "cityNameCn": "兰州",
        "cityCode": 100,
        "checked": false
    },
    {
        "cityNameEn": "Lasa",
        "cityNameCn": "拉萨",
        "cityCode": 41,
        "checked": false
    },
    {
        "cityNameEn": "Ledong",
        "cityNameCn": "乐东",
        "cityCode": 49,
        "checked": false
    },
    {
        "cityNameEn": "Leshan",
        "cityNameCn": "乐山",
        "cityCode": 345,
        "checked": false
    },
    {
        "cityNameEn": "liangshanzhou",
        "cityNameCn": "凉山",
        "cityCode": 7537,
        "checked": false
    },
    {
        "cityNameEn": "Lianyungang",
        "cityNameCn": "连云港",
        "cityCode": 353,
        "checked": false
    },
    {
        "cityNameEn": "Liaocheng",
        "cityNameCn": "聊城",
        "cityCode": 1071,
        "checked": false
    },
    {
        "cityNameEn": "Liaoyang",
        "cityNameCn": "辽阳",
        "cityCode": 351,
        "checked": false
    },
    {
        "cityNameEn": "Liaoyuan",
        "cityNameCn": "辽源",
        "cityCode": 352,
        "checked": false
    },
    {
        "cityNameEn": "Lijiang",
        "cityNameCn": "丽江",
        "cityCode": 37,
        "checked": false
    },
    {
        "cityNameEn": "Lincang",
        "cityNameCn": "临沧",
        "cityCode": 1236,
        "checked": false
    },
    {
        "cityNameEn": "Linfen",
        "cityNameCn": "临汾",
        "cityCode": 139,
        "checked": false
    },
    {
        "cityNameEn": "lingao",
        "cityNameCn": "临高",
        "cityCode": 20868,
        "checked": false
    },
    {
        "cityNameEn": "Lingshui",
        "cityNameCn": "陵水",
        "cityCode": 55,
        "checked": false
    },
    {
        "cityNameEn": "linxia",
        "cityNameCn": "临夏",
        "cityCode": 21892,
        "checked": false
    },
    {
        "cityNameEn": "Linyi",
        "cityNameCn": "临沂",
        "cityCode": 569,
        "checked": false
    },
    {
        "cityNameEn": "Linzhi",
        "cityNameCn": "林芝",
        "cityCode": 108,
        "checked": false
    },
    {
        "cityNameEn": "Lishui",
        "cityNameCn": "丽水",
        "cityCode": 346,
        "checked": false
    },
    {
        "cityNameEn": "Liupanshui",
        "cityNameCn": "六盘水",
        "cityCode": 605,
        "checked": false
    },
    {
        "cityNameEn": "Liuzhou",
        "cityNameCn": "柳州",
        "cityCode": 354,
        "checked": false
    },
    {
        "cityNameEn": "Longnan",
        "cityNameCn": "陇南",
        "cityCode": 7707,
        "checked": false
    },
    {
        "cityNameEn": "Longyan",
        "cityNameCn": "龙岩",
        "cityCode": 348,
        "checked": false
    },
    {
        "cityNameEn": "Loudi",
        "cityNameCn": "娄底",
        "cityCode": 918,
        "checked": false
    },
    {
        "cityNameEn": "Luan",
        "cityNameCn": "六安",
        "cityCode": 1705,
        "checked": false
    },
    {
        "cityNameEn": "Luohe",
        "cityNameCn": "漯河",
        "cityCode": 1088,
        "checked": false
    },
    {
        "cityNameEn": "Luoyang",
        "cityNameCn": "洛阳",
        "cityCode": 350,
        "checked": false
    },
    {
        "cityNameEn": "Luzhou",
        "cityNameCn": "泸州",
        "cityCode": 355,
        "checked": false
    },
    {
        "cityNameEn": "Lvliang",
        "cityNameCn": "吕梁",
        "cityCode": 7631,
        "checked": false
    },
    {
        "cityNameEn": "Ma'anshan",
        "cityNameCn": "马鞍山",
        "cityCode": 1024,
        "checked": false
    },
    {
        "cityNameEn": "Macau",
        "cityNameCn": "澳门",
        "cityCode": 59,
        "checked": false
    },
    {
        "cityNameEn": "Maoming",
        "cityNameCn": "茂名",
        "cityCode": 1105,
        "checked": false
    },
    {
        "cityNameEn": "Meishan",
        "cityNameCn": "眉山",
        "cityCode": 1148,
        "checked": false
    },
    {
        "cityNameEn": "Meizhou",
        "cityNameCn": "梅州",
        "cityCode": 3053,
        "checked": false
    },
    {
        "cityNameEn": "Mianyang",
        "cityNameCn": "绵阳",
        "cityCode": 370,
        "checked": false
    },
    {
        "cityNameEn": "Mudanjiang",
        "cityNameCn": "牡丹江",
        "cityCode": 150,
        "checked": false
    },
    {
        "cityNameEn": "Nanchang",
        "cityNameCn": "南昌",
        "cityCode": 376,
        "checked": false
    },
    {
        "cityNameEn": "Nanchong",
        "cityNameCn": "南充",
        "cityCode": 377,
        "checked": false
    },
    {
        "cityNameEn": "Nanjing",
        "cityNameCn": "南京",
        "cityCode": 12,
        "checked": false
    },
    {
        "cityNameEn": "Nanning",
        "cityNameCn": "南宁",
        "cityCode": 380,
        "checked": false
    },
    {
        "cityNameEn": "Nanping",
        "cityNameCn": "南平",
        "cityCode": 606,
        "checked": false
    },
    {
        "cityNameEn": "Nantong",
        "cityNameCn": "南通",
        "cityCode": 82,
        "checked": false
    },
    {
        "cityNameEn": "Nanyang",
        "cityNameCn": "南阳",
        "cityCode": 385,
        "checked": false
    },
    {
        "cityNameEn": "naqu",
        "cityNameCn": "那曲",
        "cityCode": 3839,
        "checked": false
    },
    {
        "cityNameEn": "Neijiang",
        "cityNameCn": "内江",
        "cityCode": 1597,
        "checked": false
    },
    {
        "cityNameEn": "Ningbo",
        "cityNameCn": "宁波",
        "cityCode": 375,
        "checked": false
    },
    {
        "cityNameEn": "Ningde",
        "cityNameCn": "宁德",
        "cityCode": 378,
        "checked": false
    },
    {
        "cityNameEn": "nujiang",
        "cityNameCn": "怒江",
        "cityCode": 1806,
        "checked": false
    },
    {
        "cityNameEn": "Panjin",
        "cityNameCn": "盘锦",
        "cityCode": 387,
        "checked": false
    },
    {
        "cityNameEn": "Panzhihua",
        "cityNameCn": "攀枝花",
        "cityCode": 1097,
        "checked": false
    },
    {
        "cityNameEn": "Penghu",
        "cityNameCn": "澎湖",
        "cityCode": 7805,
        "checked": false
    },
    {
        "cityNameEn": "pingdingshan",
        "cityNameCn": "平顶山",
        "cityCode": 3222,
        "checked": false
    },
    {
        "cityNameEn": "Pingliang",
        "cityNameCn": "平凉",
        "cityCode": 388,
        "checked": false
    },
    {
        "cityNameEn": "PINGTUNG",
        "cityNameCn": "屏东",
        "cityCode": 5589,
        "checked": false
    },
    {
        "cityNameEn": "Pingxiang",
        "cityNameCn": "萍乡",
        "cityCode": 1840,
        "checked": false
    },
    {
        "cityNameEn": "Puer",
        "cityNameCn": "普洱",
        "cityCode": 3996,
        "checked": false
    },
    {
        "cityNameEn": "Putian",
        "cityNameCn": "莆田",
        "cityCode": 667,
        "checked": false
    },
    {
        "cityNameEn": "Puyang",
        "cityNameCn": "濮阳",
        "cityCode": 1232,
        "checked": false
    },
    {
        "cityNameEn": "qiandongnan",
        "cityNameCn": "黔东南",
        "cityCode": 21778,
        "checked": false
    },
    {
        "cityNameEn": "qiannan",
        "cityNameCn": "黔南",
        "cityCode": 21179,
        "checked": false
    },
    {
        "cityNameEn": "Qingdao",
        "cityNameCn": "青岛",
        "cityCode": 7,
        "checked": false
    },
    {
        "cityNameEn": "Qingyang",
        "cityNameCn": "庆阳",
        "cityCode": 404,
        "checked": false
    },
    {
        "cityNameEn": "Qingyuan",
        "cityNameCn": "清远",
        "cityCode": 1422,
        "checked": false
    },
    {
        "cityNameEn": "Qinhuangdao",
        "cityNameCn": "秦皇岛",
        "cityCode": 147,
        "checked": false
    },
    {
        "cityNameEn": "Qinzhou",
        "cityNameCn": "钦州",
        "cityCode": 1899,
        "checked": false
    },
    {
        "cityNameEn": "Qionghai",
        "cityNameCn": "琼海",
        "cityCode": 52,
        "checked": false
    },
    {
        "cityNameEn": "Qiongzhong",
        "cityNameCn": "琼中",
        "cityCode": 53,
        "checked": false
    },
    {
        "cityNameEn": "Qiqihaer",
        "cityNameCn": "齐齐哈尔",
        "cityCode": 149,
        "checked": false
    },
    {
        "cityNameEn": "Qitaihe",
        "cityNameCn": "七台河",
        "cityCode": 1599,
        "checked": false
    },
    {
        "cityNameEn": "Quanzhou",
        "cityNameCn": "泉州",
        "cityCode": 406,
        "checked": false
    },
    {
        "cityNameEn": "Qujing",
        "cityNameCn": "曲靖",
        "cityCode": 985,
        "checked": false
    },
    {
        "cityNameEn": "Quzhou",
        "cityNameCn": "衢州",
        "cityCode": 407,
        "checked": false
    },
    {
        "cityNameEn": "Rikaze",
        "cityNameCn": "日喀则",
        "cityCode": 92,
        "checked": false
    },
    {
        "cityNameEn": "Rizhao",
        "cityNameCn": "日照",
        "cityCode": 1106,
        "checked": false
    },
    {
        "cityNameEn": "Sanmenxia",
        "cityNameCn": "三门峡",
        "cityCode": 436,
        "checked": false
    },
    {
        "cityNameEn": "Sanming",
        "cityNameCn": "三明",
        "cityCode": 437,
        "checked": false
    },
    {
        "cityNameEn": "Sanya",
        "cityNameCn": "三亚",
        "cityCode": 43,
        "checked": false
    },
    {
        "cityNameEn": "Shanghai",
        "cityNameCn": "上海",
        "cityCode": 2,
        "checked": false
    },
    {
        "cityNameEn": "Shangluo",
        "cityNameCn": "商洛",
        "cityCode": 7551,
        "checked": false
    },
    {
        "cityNameEn": "Shangqiu",
        "cityNameCn": "商丘",
        "cityCode": 441,
        "checked": false
    },
    {
        "cityNameEn": "Shangrao",
        "cityNameCn": "上饶",
        "cityCode": 411,
        "checked": false
    },
    {
        "cityNameEn": "Shantou",
        "cityNameCn": "汕头",
        "cityCode": 447,
        "checked": false
    },
    {
        "cityNameEn": "Shanwei",
        "cityNameCn": "汕尾",
        "cityCode": 1436,
        "checked": false
    },
    {
        "cityNameEn": "Shaoguan",
        "cityNameCn": "韶关",
        "cityCode": 422,
        "checked": false
    },
    {
        "cityNameEn": "Shaoxing",
        "cityNameCn": "绍兴",
        "cityCode": 22,
        "checked": false
    },
    {
        "cityNameEn": "Shaoyang",
        "cityNameCn": "邵阳",
        "cityCode": 1111,
        "checked": false
    },
    {
        "cityNameEn": "Shenyang",
        "cityNameCn": "沈阳",
        "cityCode": 451,
        "checked": false
    },
    {
        "cityNameEn": "Shenzhen",
        "cityNameCn": "深圳",
        "cityCode": 30,
        "checked": false
    },
    {
        "cityNameEn": "Shijiazhuang",
        "cityNameCn": "石家庄",
        "cityCode": 428,
        "checked": false
    },
    {
        "cityNameEn": "SHIYAN",
        "cityNameCn": "十堰",
        "cityCode": 452,
        "checked": false
    },
    {
        "cityNameEn": "shizuishan",
        "cityNameCn": "石嘴山",
        "cityCode": 4216,
        "checked": false
    },
    {
        "cityNameEn": "Shuangyashan",
        "cityNameCn": "双鸭山",
        "cityCode": 1617,
        "checked": false
    },
    {
        "cityNameEn": "Shuozhou",
        "cityNameCn": "朔州",
        "cityCode": 1317,
        "checked": false
    },
    {
        "cityNameEn": "Siping",
        "cityNameCn": "四平",
        "cityCode": 440,
        "checked": false
    },
    {
        "cityNameEn": "Songyuan",
        "cityNameCn": "松原",
        "cityCode": 1303,
        "checked": false
    },
    {
        "cityNameEn": "Suihua",
        "cityNameCn": "绥化",
        "cityCode": 1128,
        "checked": false
    },
    {
        "cityNameEn": "Suining",
        "cityNameCn": "遂宁",
        "cityCode": 1371,
        "checked": false
    },
    {
        "cityNameEn": "Suizhou",
        "cityNameCn": "随州",
        "cityCode": 1117,
        "checked": false
    },
    {
        "cityNameEn": "Suqian",
        "cityNameCn": "宿迁",
        "cityCode": 1472,
        "checked": false
    },
    {
        "cityNameEn": "Suzhou",
        "cityNameCn": "宿州",
        "cityCode": 521,
        "checked": false
    },
    {
        "cityNameEn": "Suzhou",
        "cityNameCn": "苏州",
        "cityCode": 14,
        "checked": false
    },
    {
        "cityNameEn": "Tacheng",
        "cityNameCn": "塔城",
        "cityCode": 455,
        "checked": false
    },
    {
        "cityNameEn": "Taian",
        "cityNameCn": "泰安",
        "cityCode": 454,
        "checked": false
    },
    {
        "cityNameEn": "Taichung",
        "cityNameCn": "台中",
        "cityCode": 3849,
        "checked": false
    },
    {
        "cityNameEn": "Tainan",
        "cityNameCn": "台南",
        "cityCode": 3847,
        "checked": false
    },
    {
        "cityNameEn": "Taipei",
        "cityNameCn": "台北",
        "cityCode": 617,
        "checked": false
    },
    {
        "cityNameEn": "Taiyuan",
        "cityNameCn": "太原",
        "cityCode": 105,
        "checked": false
    },
    {
        "cityNameEn": "Taizhou",
        "cityNameCn": "泰州",
        "cityCode": 579,
        "checked": false
    },
    {
        "cityNameEn": "Taizhou",
        "cityNameCn": "台州",
        "cityCode": 578,
        "checked": false
    },
    {
        "cityNameEn": "Tangshan",
        "cityNameCn": "唐山",
        "cityCode": 468,
        "checked": false
    },
    {
        "cityNameEn": "Taoyuan",
        "cityNameCn": "桃园",
        "cityCode": 7570,
        "checked": false
    },
    {
        "cityNameEn": "Tianjin",
        "cityNameCn": "天津",
        "cityCode": 3,
        "checked": false
    },
    {
        "cityNameEn": "Tianshui",
        "cityNameCn": "天水",
        "cityCode": 464,
        "checked": false
    },
    {
        "cityNameEn": "Tieling",
        "cityNameCn": "铁岭",
        "cityCode": 1048,
        "checked": false
    },
    {
        "cityNameEn": "Tongchuan",
        "cityNameCn": "铜川",
        "cityCode": 118,
        "checked": false
    },
    {
        "cityNameEn": "Tonghua",
        "cityNameCn": "通化",
        "cityCode": 456,
        "checked": false
    },
    {
        "cityNameEn": "Tongliao",
        "cityNameCn": "通辽",
        "cityCode": 458,
        "checked": false
    },
    {
        "cityNameEn": "Tongling",
        "cityNameCn": "铜陵",
        "cityCode": 459,
        "checked": false
    },
    {
        "cityNameEn": "tongren",
        "cityNameCn": "铜仁",
        "cityCode": 22033,
        "checked": false
    },
    {
        "cityNameEn": "Tunchang",
        "cityNameCn": "屯昌",
        "cityCode": 47,
        "checked": false
    },
    {
        "cityNameEn": "ULANQAB",
        "cityNameCn": "乌兰察布",
        "cityCode": 7518,
        "checked": false
    },
    {
        "cityNameEn": "Wanning",
        "cityNameCn": "万宁",
        "cityCode": 45,
        "checked": false
    },
    {
        "cityNameEn": "Weifang",
        "cityNameCn": "潍坊",
        "cityCode": 475,
        "checked": false
    },
    {
        "cityNameEn": "Weihai",
        "cityNameCn": "威海",
        "cityCode": 479,
        "checked": false
    },
    {
        "cityNameEn": "Weinan",
        "cityNameCn": "渭南",
        "cityCode": 1030,
        "checked": false
    },
    {
        "cityNameEn": "Wenchang",
        "cityNameCn": "文昌",
        "cityCode": 44,
        "checked": false
    },
    {
        "cityNameEn": "wenshan",
        "cityNameCn": "文山",
        "cityCode": 20963,
        "checked": false
    },
    {
        "cityNameEn": "Wenzhou",
        "cityNameCn": "温州",
        "cityCode": 491,
        "checked": false
    },
    {
        "cityNameEn": "Wuhai",
        "cityNameCn": "乌海",
        "cityCode": 1133,
        "checked": false
    },
    {
        "cityNameEn": "Wuhan",
        "cityNameCn": "武汉",
        "cityCode": 477,
        "checked": false
    },
    {
        "cityNameEn": "Wuhu",
        "cityNameCn": "芜湖",
        "cityCode": 478,
        "checked": false
    },
    {
        "cityNameEn": "Wulumuqi",
        "cityNameCn": "乌鲁木齐",
        "cityCode": 39,
        "checked": false
    },
    {
        "cityNameEn": "Wuwei",
        "cityNameCn": "武威",
        "cityCode": 664,
        "checked": false
    },
    {
        "cityNameEn": "Wuxi",
        "cityNameCn": "无锡",
        "cityCode": 13,
        "checked": false
    },
    {
        "cityNameEn": "Wuzhishan",
        "cityNameCn": "五指山",
        "cityCode": 46,
        "checked": false
    },
    {
        "cityNameEn": "wuzhong",
        "cityNameCn": "吴忠",
        "cityCode": 7587,
        "checked": false
    },
    {
        "cityNameEn": "Wuzhou",
        "cityNameCn": "梧州",
        "cityCode": 492,
        "checked": false
    },
    {
        "cityNameEn": "Xiamen",
        "cityNameCn": "厦门",
        "cityCode": 25,
        "checked": false
    },
    {
        "cityNameEn": "Xian",
        "cityNameCn": "西安",
        "cityCode": 10,
        "checked": false
    },
    {
        "cityNameEn": "Hong Kong",
        "cityNameCn": "香港",
        "cityCode": 58,
        "checked": false
    },
    {
        "cityNameEn": "Xiangtan",
        "cityNameCn": "湘潭",
        "cityCode": 598,
        "checked": false
    },
    {
        "cityNameEn": "xiangxi",
        "cityNameCn": "湘西",
        "cityCode": 3910,
        "checked": false
    },
    {
        "cityNameEn": "Xiangyang",
        "cityNameCn": "襄阳",
        "cityCode": 496,
        "checked": false
    },
    {
        "cityNameEn": "Xianning",
        "cityNameCn": "咸宁",
        "cityCode": 937,
        "checked": false
    },
    {
        "cityNameEn": "Xianyang",
        "cityNameCn": "咸阳",
        "cityCode": 111,
        "checked": false
    },
    {
        "cityNameEn": "Xiaogan",
        "cityNameCn": "孝感",
        "cityCode": 1490,
        "checked": false
    },
    {
        "cityNameEn": "Xilinguole",
        "cityNameCn": "锡林郭勒盟",
        "cityCode": 7576,
        "checked": false
    },
    {
        "cityNameEn": "Xinbeishi",
        "cityNameCn": "新北市",
        "cityCode": 7662,
        "checked": false
    },
    {
        "cityNameEn": "xinganmeng",
        "cityNameCn": "兴安盟",
        "cityCode": 21021,
        "checked": false
    },
    {
        "cityNameEn": "Xingtai",
        "cityNameCn": "邢台",
        "cityCode": 947,
        "checked": false
    },
    {
        "cityNameEn": "Xining",
        "cityNameCn": "西宁",
        "cityCode": 124,
        "checked": false
    },
    {
        "cityNameEn": "Xinxiang",
        "cityNameCn": "新乡",
        "cityCode": 507,
        "checked": false
    },
    {
        "cityNameEn": "Xinyang",
        "cityNameCn": "信阳",
        "cityCode": 510,
        "checked": false
    },
    {
        "cityNameEn": "Xinyu",
        "cityNameCn": "新余",
        "cityCode": 603,
        "checked": false
    },
    {
        "cityNameEn": "Xinzhou",
        "cityNameCn": "忻州",
        "cityCode": 513,
        "checked": false
    },
    {
        "cityNameEn": "Xuancheng",
        "cityNameCn": "宣城",
        "cityCode": 1006,
        "checked": false
    },
    {
        "cityNameEn": "Xuchang",
        "cityNameCn": "许昌",
        "cityCode": 1094,
        "checked": false
    },
    {
        "cityNameEn": "Xuzhou",
        "cityNameCn": "徐州",
        "cityCode": 512,
        "checked": false
    },
    {
        "cityNameEn": "yaan",
        "cityNameCn": "雅安",
        "cityCode": 3277,
        "checked": false
    },
    {
        "cityNameEn": "Yan'an",
        "cityNameCn": "延安",
        "cityCode": 110,
        "checked": false
    },
    {
        "cityNameEn": "Yancheng",
        "cityNameCn": "盐城",
        "cityCode": 1200,
        "checked": false
    },
    {
        "cityNameEn": "Yangjiang",
        "cityNameCn": "阳江",
        "cityCode": 692,
        "checked": false
    },
    {
        "cityNameEn": "Yangquan",
        "cityNameCn": "阳泉",
        "cityCode": 907,
        "checked": false
    },
    {
        "cityNameEn": "Yangzhou",
        "cityNameCn": "扬州",
        "cityCode": 15,
        "checked": false
    },
    {
        "cityNameEn": "Yantai",
        "cityNameCn": "烟台",
        "cityCode": 533,
        "checked": false
    },
    {
        "cityNameEn": "Yibin",
        "cityNameCn": "宜宾",
        "cityCode": 514,
        "checked": false
    },
    {
        "cityNameEn": "Yichang",
        "cityNameCn": "宜昌",
        "cityCode": 515,
        "checked": false
    },
    {
        "cityNameEn": "Yichun",
        "cityNameCn": "宜春",
        "cityCode": 518,
        "checked": false
    },
    {
        "cityNameEn": "Yichun",
        "cityNameCn": "伊春",
        "cityCode": 517,
        "checked": false
    },
    {
        "cityNameEn": "Yili",
        "cityNameCn": "伊犁",
        "cityCode": 98,
        "checked": false
    },
    {
        "cityNameEn": "Yinchuan",
        "cityNameCn": "银川",
        "cityCode": 99,
        "checked": false
    },
    {
        "cityNameEn": "Yingkou",
        "cityNameCn": "营口",
        "cityCode": 1300,
        "checked": false
    },
    {
        "cityNameEn": "Yingtan",
        "cityNameCn": "鹰潭",
        "cityCode": 534,
        "checked": false
    },
    {
        "cityNameEn": "Yiyang",
        "cityNameCn": "益阳",
        "cityCode": 1125,
        "checked": false
    },
    {
        "cityNameEn": "Yongzhou",
        "cityNameCn": "永州",
        "cityCode": 970,
        "checked": false
    },
    {
        "cityNameEn": "Yueyang",
        "cityNameCn": "岳阳",
        "cityCode": 539,
        "checked": false
    },
    {
        "cityNameEn": "Yulin",
        "cityNameCn": "榆林",
        "cityCode": 527,
        "checked": false
    },
    {
        "cityNameEn": "Yulin",
        "cityNameCn": "玉林",
        "cityCode": 1113,
        "checked": false
    },
    {
        "cityNameEn": "Yuncheng",
        "cityNameCn": "运城",
        "cityCode": 140,
        "checked": false
    },
    {
        "cityNameEn": "yunfu",
        "cityNameCn": "云浮",
        "cityCode": 3933,
        "checked": false
    },
    {
        "cityNameEn": "yunlin",
        "cityNameCn": "云林",
        "cityCode": 7523,
        "checked": false
    },
    {
        "cityNameEn": "Yuxi",
        "cityNameCn": "玉溪",
        "cityCode": 186,
        "checked": false
    },
    {
        "cityNameEn": "Zaozhuang",
        "cityNameCn": "枣庄",
        "cityCode": 614,
        "checked": false
    },
    {
        "cityNameEn": "Zhangjiajie",
        "cityNameCn": "张家界",
        "cityCode": 27,
        "checked": false
    },
    {
        "cityNameEn": "Zhangjiakou",
        "cityNameCn": "张家口",
        "cityCode": 550,
        "checked": false
    },
    {
        "cityNameEn": "Zhangye",
        "cityNameCn": "张掖",
        "cityCode": 663,
        "checked": false
    },
    {
        "cityNameEn": "Zhangzhou",
        "cityNameCn": "漳州",
        "cityCode": 560,
        "checked": false
    },
    {
        "cityNameEn": "Zhanjiang",
        "cityNameCn": "湛江",
        "cityCode": 547,
        "checked": false
    },
    {
        "cityNameEn": "Zhaoqing",
        "cityNameCn": "肇庆",
        "cityCode": 552,
        "checked": false
    },
    {
        "cityNameEn": "Zhaotong",
        "cityNameCn": "昭通",
        "cityCode": 555,
        "checked": false
    },
    {
        "cityNameEn": "Zhengzhou",
        "cityNameCn": "郑州",
        "cityCode": 559,
        "checked": false
    },
    {
        "cityNameEn": "Zhenjiang",
        "cityNameCn": "镇江",
        "cityCode": 16,
        "checked": false
    },
    {
        "cityNameEn": "Zhongshan",
        "cityNameCn": "中山",
        "cityCode": 553,
        "checked": false
    },
    {
        "cityNameEn": "Zhongwei",
        "cityNameCn": "中卫",
        "cityCode": 556,
        "checked": false
    },
    {
        "cityNameEn": "zhoukou",
        "cityNameCn": "周口",
        "cityCode": 3221,
        "checked": false
    },
    {
        "cityNameEn": "Zhoushan",
        "cityNameCn": "舟山",
        "cityCode": 19,
        "checked": false
    },
    {
        "cityNameEn": "Zhuhai",
        "cityNameCn": "珠海",
        "cityCode": 31,
        "checked": false
    },
    {
        "cityNameEn": "Zhumadian",
        "cityNameCn": "驻马店",
        "cityCode": 551,
        "checked": false
    },
    {
        "cityNameEn": "Zhuzhou",
        "cityNameCn": "株洲",
        "cityCode": 601,
        "checked": false
    },
    {
        "cityNameEn": "Zibo",
        "cityNameCn": "淄博",
        "cityCode": 542,
        "checked": false
    },
    {
        "cityNameEn": "Zigong",
        "cityNameCn": "自贡",
        "cityCode": 544,
        "checked": false
    },
    {
        "cityNameEn": "Ziyang",
        "cityNameCn": "资阳",
        "cityCode": 1560,
        "checked": false
    },
    {
        "cityNameEn": "Zunyi",
        "cityNameCn": "遵义",
        "cityCode": 558,
        "checked": false
    }
];
export default cities;
