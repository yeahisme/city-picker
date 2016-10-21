import React, { Component } from 'react';
import './CityPanel.css';

class CityPanel extends Component {
    render() {
        return (
            <div className="city_select_lhsl">
                <a className="close CQ_suggestionClose">×</a>
                <p className="title">支持中文/拼音/简拼输入</p>
                <ul className="tab_box">
                    <li className="hot_selected"><span>热门</span></li>
                    <li className=""><span>ABCD</span></li>
                    <li className=""><span>EFGH</span></li>
                    <li className=""><span>JKLM</span></li>
                    <li className=""><span>NOPQRS</span></li>
                    <li className=""><span>TUVWX</span></li>
                    <li className=""><span>YZ</span></li>
                </ul>

                <div className="city_item">
                    <div>
                        <a data="Beijing|北京|1">北京</a><a data="Shanghai|上海|2">上海</a>
                        <a data="Tianjin|天津|3">天津</a><a data="Chongqing|重庆|4">重庆</a>
                        <a data="Dalian|大连|6">大连</a>
                        <a data="Qingdao|青岛|7">青岛</a><a data="Xian|西安|10">西安</a><a data="Nanjing|南京|12">南京</a>
                        <a data="Suzhou|苏州|14">苏州</a><a data="Hangzhou|杭州|17">杭州</a>
                        <a data="Xiamen|厦门|25">厦门</a>
                        <a data="Chengdu|成都|28">成都</a><a data="Shenzhen|深圳|30">深圳</a>
                        <a data="Guangzhou|广州|32">广州</a><a data="Sanya|三亚|43">三亚</a><a data="Taipei|台北|617">台北</a>
                        <a data="Hong Kong|香港|58">香港</a>
                        <a data="Jinan|济南|144">济南</a><a data="Ningbo|宁波|375">宁波</a>
                        <a data="Shenyang|沈阳|451">沈阳</a><a data="Wuhan|武汉|477">武汉</a>
                    </div>
                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">A</span>

                        <a data="abazhou|阿坝|1838">阿坝</a><a data="Akesu|阿克苏|173">阿克苏</a>
                        <a data="Aletai|阿勒泰|175">阿勒泰</a><a data="Ankang|安康|171">安康</a>
                        <a data="Anqing|安庆|177">安庆</a>
                        <a data="Anshan|鞍山|178">鞍山</a><a data="Anshun|安顺|179">安顺</a>
                        <a data="Anyang|安阳|181">安阳</a>
                        <a data="Macau|澳门|59">澳门</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">B</span>

                        <a data="Baicheng|白城|1116">白城</a><a data="Baise|百色|1140">百色</a>
                        <a data="baisha|白沙|21025">白沙</a><a data="baishan|白山|3886">白山</a>
                        <a data="Baiyin|白银|1541">白银</a>
                        <a data="Baoding|保定|185">保定</a><a data="Baoji|宝鸡|112">宝鸡</a>
                        <a data="Baoshan|保山|197">保山</a>
                        <a data="Baoting|保亭|54">保亭</a><a data="Baotou|包头|141">包头</a>
                        <a data="Bayannaoer|巴彦淖尔|3887">巴彦淖尔</a>
                        <a data="bazhong|巴中|3966">巴中</a><a data="Beihai|北海|189">北海</a>
                        <a data="Beijing|北京|1">北京</a><a data="Bengbu|蚌埠|182">蚌埠</a><a data="Benxi|本溪|1155">本溪</a>
                        <a data="bijie|毕节|22031">毕节</a><a data="binzhou|滨州|1820">滨州</a><a data="boertala|博尔塔拉|21468">博尔塔拉</a>
                        <a data="Bozhou|亳州|1078">亳州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">C</span>

                        <a data="Cangjiang|昌江|56">昌江</a><a data="Cangzhou|沧州|216">沧州</a>
                        <a data="Changchun|长春|158">长春</a><a data="Changde|常德|201">常德</a>
                        <a data="Changdu|昌都|575">昌都</a>
                        <a data="changji|昌吉|22032">昌吉</a><a data="Changsha|长沙|206">长沙</a>
                        <a data="Changzhi|长治|137">长治</a>
                        <a data="Changzhou|常州|213">常州</a><a data="chaoyang|朝阳|211">朝阳</a>
                        <a data="Chaozhou|潮州|215">潮州</a>
                        <a data="Chengde|承德|562">承德</a><a data="Chengdu|成都|28">成都</a>
                        <a data="chengmai|澄迈|20836">澄迈</a><a data="Chenzhou|郴州|612">郴州</a>
                        <a data="CHIAYI|嘉义|5152">嘉义</a><a data="Chifeng|赤峰|202">赤峰</a>
                        <a data="Chizhou|池州|218">池州</a><a data="Chongqing|重庆|4">重庆</a>
                        <a data="Chongzuo|崇左|1896">崇左</a><a data="Chuzhou|滁州|214">滁州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">D</span>

                        <a data="Dali|大理市|36">大理市</a><a data="Dalian|大连|6">大连</a>
                        <a data="Dandong|丹东|221">丹东</a><a data="Danzhou|儋州|57">儋州</a>
                        <a data="Daqing|大庆|231">大庆</a>
                        <a data="Datong|大同|136">大同</a><a data="Daxinganling|大兴安岭|7663">大兴安岭</a>
                        <a data="Dazhou|达州|1233">达州</a><a data="Deyang|德阳|237">德阳</a><a data="Dezhou|德州|1370">德州</a>
                        <a data="Ding'an|定安|50">定安</a><a data="Dingxi|定西|1021">定西</a><a data="Dongfang|东方|48">东方</a>
                        <a data="Dongguan|东莞|223">东莞</a><a data="Dongying|东营|236">东营</a>
                    </div>

                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">E</span>

                        <a data="E'erduosi|鄂尔多斯|3976">鄂尔多斯</a><a data="Ezhou|鄂州|992">鄂州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">F</span>

                        <a data="Fangchenggang|防城港|1677">防城港</a><a data="Foshan|佛山|251">佛山</a>
                        <a data="Fushun|抚顺|252">抚顺</a><a data="Fuxin|阜新|254">阜新</a><a data="Fuyang|阜阳|257">阜阳</a>
                        <a data="Fuzhou|福州|258">福州</a><a data="Fuzhou|抚州|3884">抚州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">G</span>

                        <a data="Gannan|甘南|7844">甘南</a><a data="Ganzhou|赣州|268">赣州</a>
                        <a data="ganzizhou|甘孜|4124">甘孜</a><a data="Gaoxiong|高雄|720">高雄</a>
                        <a data="Guang'an|广安|1100">广安</a>
                        <a data="Guangyuan|广元|267">广元</a><a data="Guangzhou|广州|32">广州</a>
                        <a data="Guigang|贵港|1518">贵港</a>
                        <a data="Guilin|桂林|33">桂林</a><a data="Guiyang|贵阳|38">贵阳</a>
                        <a data="Guyuan|固原|321">固原</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">H</span>

                        <a data="Haerbin|哈尔滨|5">哈尔滨</a><a data="Haibei|海北|7807">海北</a>
                        <a data="Haidong|海东|7752">海东</a><a data="Haikou|海口|42">海口</a>
                        <a data="Haixizhou|海西|7589">海西</a>
                        <a data="Handan|邯郸|275">邯郸</a><a data="Hangzhou|杭州|17">杭州</a>
                        <a data="Hanzhong|汉中|129">汉中</a>
                        <a data="Hebi|鹤壁|951">鹤壁</a><a data="hechi|河池|3969">河池</a>
                        <a data="Hefei|合肥|278">合肥</a>
                        <a data="Hegang|鹤岗|1611">鹤岗</a><a data="Heihe|黑河|281">黑河</a>
                        <a data="Hengshui|衡水|290">衡水</a>
                        <a data="Hengyang|衡阳|297">衡阳</a><a data="Heyuan|河源|693">河源</a>
                        <a data="Heze|菏泽|1074">菏泽</a><a data="hezhou|贺州|4146">贺州</a>
                        <a data="Hong Kong|香港|58">香港</a><a data="Honghezhou|红河|1341">红河</a>
                        <a data="Hsinchu|新竹|3845">新竹</a><a data="Huai'an|淮安|577">淮安</a>
                        <a data="Huaibei|淮北|272">淮北</a><a data="Huaihua|怀化|282">怀化</a>
                        <a data="Huainan|淮南|287">淮南</a><a data="HUALIEN|花莲|6954">花莲</a>
                        <a data="Huanggang|黄冈|3885">黄冈</a><a data="Huangnan|黄南|7802">黄南</a>
                        <a data="Huangshan|黄山|23">黄山</a><a data="Huangshi|黄石|292">黄石</a>
                        <a data="Huhehaote|呼和浩特|103">呼和浩特</a><a data="Huizhou|惠州|299">惠州</a>
                        <a data="Huludao|葫芦岛|1050">葫芦岛</a><a data="Hulunbeier|呼伦贝尔|4255">呼伦贝尔</a>
                        <a data="Huzhou|湖州|86">湖州</a>
                    </div>

                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">J</span>

                        <a data="Jiamusi|佳木斯|317">佳木斯</a><a data="Jian|吉安|933">吉安</a>
                        <a data="Jiangmen|江门|316">江门</a><a data="Jiaozuo|焦作|1093">焦作</a>
                        <a data="Jiaxing|嘉兴|571">嘉兴</a>
                        <a data="Jiayuguan|嘉峪关|326">嘉峪关</a><a data="Jieyang|揭阳|956">揭阳</a>
                        <a data="Jilin|吉林|159">吉林</a>
                        <a data="Jilong|基隆|7810">基隆</a><a data="Jinan|济南|144">济南</a>
                        <a data="Jinchang|金昌|1158">金昌</a>
                        <a data="Jincheng|晋城|1092">晋城</a><a data="Jingdezhen|景德镇|305">景德镇</a>
                        <a data="Jingmen|荆门|1121">荆门</a><a data="Jingzhou|荆州|328">荆州</a>
                        <a data="Jinhua|金华|308">金华</a><a data="Jining|济宁|318">济宁</a>
                        <a data="Jinzhong|晋中|1453">晋中</a><a data="Jinzhou|锦州|327">锦州</a>
                        <a data="Jiujiang|九江|24">九江</a><a data="Jiuquan|酒泉|662">酒泉</a>
                        <a data="Jixi|鸡西|157">鸡西</a><a data="Jiyuan|济源|1454">济源</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">K</span>

                        <a data="Kaifeng|开封|331">开封</a><a data="Kaohsiung|高雄|720">高雄</a>
                        <a data="Kelamayi|克拉玛依|166">克拉玛依</a><a data="Kunming|昆明|34">昆明</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">L</span>

                        <a data="Laibin|来宾|1892">来宾</a><a data="Laiwu|莱芜|1452">莱芜</a>
                        <a data="Langfang|廊坊|340">廊坊</a><a data="Lanzhou|兰州|100">兰州</a>
                        <a data="Lasa|拉萨|41">拉萨</a>
                        <a data="Ledong|乐东|49">乐东</a><a data="Leshan|乐山|345">乐山</a>
                        <a data="liangshanzhou|凉山|7537">凉山</a>
                        <a data="Lianyungang|连云港|353">连云港</a><a data="Liaocheng|聊城|1071">聊城</a>
                        <a data="Liaoyang|辽阳|351">辽阳</a><a data="Liaoyuan|辽源|352">辽源</a><a data="Lijiang|丽江|37">丽江</a>
                        <a data="Lincang|临沧|1236">临沧</a><a data="Linfen|临汾|139">临汾</a><a data="lingao|临高|20868">临高</a>
                        <a data="Lingshui|陵水|55">陵水</a><a data="linxia|临夏|21892">临夏</a><a data="Linyi|临沂|569">临沂</a>
                        <a data="Linzhi|林芝|108">林芝</a><a data="Lishui|丽水|346">丽水</a><a data="Liupanshui|六盘水|605">六盘水</a>
                        <a data="Liuzhou|柳州|354">柳州</a><a data="Longnan|陇南|7707">陇南</a>
                        <a data="Longyan|龙岩|348">龙岩</a><a data="Loudi|娄底|918">娄底</a><a data="Luan|六安|1705">六安</a>
                        <a data="Luohe|漯河|1088">漯河</a><a data="Luoyang|洛阳|350">洛阳</a><a data="Luzhou|泸州|355">泸州</a>
                        <a data="Lvliang|吕梁|7631">吕梁</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">M</span>

                        <a data="Ma'anshan|马鞍山|1024">马鞍山</a><a data="Macau|澳门|59">澳门</a>
                        <a data="Maoming|茂名|1105">茂名</a><a data="Meishan|眉山|1148">眉山</a>
                        <a data="Meizhou|梅州|3053">梅州</a>
                        <a data="Mianyang|绵阳|370">绵阳</a><a data="Mudanjiang|牡丹江|150">牡丹江</a>
                    </div>

                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">N</span>

                        <a data="Nanchang|南昌|376">南昌</a><a data="Nanchong|南充|377">南充</a>
                        <a data="Nanjing|南京|12">南京</a><a data="Nanning|南宁|380">南宁</a>
                        <a data="Nanping|南平|606">南平</a>
                        <a data="Nantong|南通|82">南通</a><a data="Nanyang|南阳|385">南阳</a>
                        <a data="naqu|那曲|3839">那曲</a>
                        <a data="Neijiang|内江|1597">内江</a><a data="Ningbo|宁波|375">宁波</a>
                        <a data="Ningde|宁德|378">宁德</a>
                        <a data="nujiang|怒江|1806">怒江</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">P</span>

                        <a data="Panjin|盘锦|387">盘锦</a><a data="Panzhihua|攀枝花|1097">攀枝花</a>
                        <a data="Penghu|澎湖|7805">澎湖</a><a data="pingdingshan|平顶山|3222">平顶山</a>
                        <a data="Pingliang|平凉|388">平凉</a>
                        <a data="PINGTUNG|屏东|5589">屏东</a><a data="Pingxiang|萍乡|1840">萍乡</a>
                        <a data="Puer|普洱|3996">普洱</a>
                        <a data="Putian|莆田|667">莆田</a><a data="Puyang|濮阳|1232">濮阳</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">Q</span>

                        <a data="qiandongnan|黔东南|21778">黔东南</a><a data="qiannan|黔南|21179">黔南</a>
                        <a data="Qingdao|青岛|7">青岛</a><a data="Qingyang|庆阳|404">庆阳</a>
                        <a data="Qingyuan|清远|1422">清远</a>
                        <a data="Qinhuangdao|秦皇岛|147">秦皇岛</a><a data="Qinzhou|钦州|1899">钦州</a>
                        <a data="Qionghai|琼海|52">琼海</a>
                        <a data="Qiongzhong|琼中|53">琼中</a><a data="Qiqihaer|齐齐哈尔|149">齐齐哈尔</a>
                        <a data="Qitaihe|七台河|1599">七台河</a><a data="Quanzhou|泉州|406">泉州</a>
                        <a data="Qujing|曲靖|985">曲靖</a><a data="Quzhou|衢州|407">衢州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">R</span>

                        <a data="Rikaze|日喀则|92">日喀则</a><a data="Rizhao|日照|1106">日照</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">S</span>

                        <a data="Sanmenxia|三门峡|436">三门峡</a><a data="Sanming|三明|437">三明</a>
                        <a data="Sanya|三亚|43">三亚</a><a data="Shanghai|上海|2">上海</a><a data="Shangluo|商洛|7551">商洛</a>
                        <a data="Shangqiu|商丘|441">商丘</a><a data="Shangrao|上饶|411">上饶</a>
                        <a data="Shantou|汕头|447">汕头</a>
                        <a data="Shanwei|汕尾|1436">汕尾</a><a data="Shaoguan|韶关|422">韶关</a>
                        <a data="Shaoxing|绍兴|22">绍兴</a>
                        <a data="Shaoyang|邵阳|1111">邵阳</a><a data="Shenyang|沈阳|451">沈阳</a>
                        <a data="Shenzhen|深圳|30">深圳</a><a data="Shijiazhuang|石家庄|428">石家庄</a>
                        <a data="SHIYAN|十堰|452">十堰</a><a data="shizuishan|石嘴山|4216">石嘴山</a>
                        <a data="Shuangyashan|双鸭山|1617">双鸭山</a><a data="Shuozhou|朔州|1317">朔州</a>
                        <a data="Siping|四平|440">四平</a><a data="Songyuan|松原|1303">松原</a>
                        <a data="Suihua|绥化|1128">绥化</a><a data="Suining|遂宁|1371">遂宁</a>
                        <a data="Suizhou|随州|1117">随州</a><a data="Suqian|宿迁|1472">宿迁</a>
                        <a data="Suzhou|宿州|521">宿州</a><a data="Suzhou|苏州|14">苏州</a>
                    </div>

                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">T</span>

                        <a data="Tacheng|塔城|455">塔城</a><a data="Taian|泰安|454">泰安</a>
                        <a data="Taichung|台中|3849">台中</a><a data="Tainan|台南|3847">台南</a>
                        <a data="Taipei|台北|617">台北</a>
                        <a data="Taiyuan|太原|105">太原</a><a data="Taizhou|泰州|579">泰州</a>
                        <a data="Taizhou|台州|578">台州</a>
                        <a data="Tangshan|唐山|468">唐山</a><a data="Taoyuan|桃园|7570">桃园</a>
                        <a data="Tianjin|天津|3">天津</a>
                        <a data="Tianshui|天水|464">天水</a><a data="Tieling|铁岭|1048">铁岭</a>
                        <a data="Tongchuan|铜川|118">铜川</a><a data="Tonghua|通化|456">通化</a>
                        <a data="Tongliao|通辽|458">通辽</a><a data="Tongling|铜陵|459">铜陵</a>
                        <a data="tongren|铜仁|22033">铜仁</a><a data="Tunchang|屯昌|47">屯昌</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">U</span>

                        <a data="ULANQAB|乌兰察布|7518">乌兰察布</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">W</span>

                        <a data="Wanning|万宁|45">万宁</a><a data="Weifang|潍坊|475">潍坊</a>
                        <a data="Weihai|威海|479">威海</a><a data="Weinan|渭南|1030">渭南</a>
                        <a data="Wenchang|文昌|44">文昌</a>
                        <a data="wenshan|文山|20963">文山</a><a data="Wenzhou|温州|491">温州</a>
                        <a data="Wuhai|乌海|1133">乌海</a>
                        <a data="Wuhan|武汉|477">武汉</a><a data="Wuhu|芜湖|478">芜湖</a><a data="Wulumuqi|乌鲁木齐|39">乌鲁木齐</a>
                        <a data="Wuwei|武威|664">武威</a><a data="Wuxi|无锡|13">无锡</a><a data="Wuzhishan|五指山|46">五指山</a>
                        <a data="wuzhong|吴忠|7587">吴忠</a><a data="Wuzhou|梧州|492">梧州</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">X</span>

                        <a data="Xiamen|厦门|25">厦门</a><a data="Xian|西安|10">西安</a>
                        <a data="Hong Kong|香港|58">香港</a><a data="Xiangtan|湘潭|598">湘潭</a>
                        <a data="xiangxi|湘西|3910">湘西</a>
                        <a data="Xiangyang|襄阳|496">襄阳</a><a data="Xianning|咸宁|937">咸宁</a>
                        <a data="Xianyang|咸阳|111">咸阳</a>
                        <a data="Xiaogan|孝感|1490">孝感</a><a data="Xilinguole|锡林郭勒盟|7576">锡林郭勒盟</a>
                        <a data="Xinbeishi|新北市|7662">新北市</a><a data="xinganmeng|兴安盟|21021">兴安盟</a>
                        <a data="Xingtai|邢台|947">邢台</a><a data="Xining|西宁|124">西宁</a>
                        <a data="Xinxiang|新乡|507">新乡</a><a data="Xinyang|信阳|510">信阳</a>
                        <a data="Xinyu|新余|603">新余</a><a data="Xinzhou|忻州|513">忻州</a>
                        <a data="Xuancheng|宣城|1006">宣城</a><a data="Xuchang|许昌|1094">许昌</a>
                        <a data="Xuzhou|徐州|512">徐州</a>
                    </div>

                </div>

                <div className="city_item" style={{ display: 'none' }}>
                    <div className="city_item_in">
                        <span className="city_item_letter">Y</span>

                        <a data="yaan|雅安|3277">雅安</a><a data="Yan'an|延安|110">延安</a>
                        <a data="Yancheng|盐城|1200">盐城</a><a data="Yangjiang|阳江|692">阳江</a>
                        <a data="Yangquan|阳泉|907">阳泉</a>
                        <a data="Yangzhou|扬州|15">扬州</a><a data="Yantai|烟台|533">烟台</a>
                        <a data="Yibin|宜宾|514">宜宾</a>
                        <a data="Yichang|宜昌|515">宜昌</a><a data="Yichun|宜春|518">宜春</a>
                        <a data="Yichun|伊春|517">伊春</a>
                        <a data="Yili|伊犁|98">伊犁</a><a data="Yinchuan|银川|99">银川</a>
                        <a data="Yingkou|营口|1300">营口</a><a data="Yingtan|鹰潭|534">鹰潭</a>
                        <a data="Yiyang|益阳|1125">益阳</a><a data="Yongzhou|永州|970">永州</a>
                        <a data="Yueyang|岳阳|539">岳阳</a><a data="Yulin|榆林|527">榆林</a>
                        <a data="Yulin|玉林|1113">玉林</a><a data="Yuncheng|运城|140">运城</a>
                        <a data="yunfu|云浮|3933">云浮</a><a data="yunlin|云林|7523">云林</a>
                        <a data="Yuxi|玉溪|186">玉溪</a>
                    </div>


                    <div className="city_item_in">
                        <span className="city_item_letter">Z</span>

                        <a data="Zaozhuang|枣庄|614">枣庄</a><a data="Zhangjiajie|张家界|27">张家界</a>
                        <a data="Zhangjiakou|张家口|550">张家口</a><a data="Zhangye|张掖|663">张掖</a>
                        <a data="Zhangzhou|漳州|560">漳州</a>
                        <a data="Zhanjiang|湛江|547">湛江</a><a data="Zhaoqing|肇庆|552">肇庆</a>
                        <a data="Zhaotong|昭通|555">昭通</a>
                        <a data="Zhengzhou|郑州|559">郑州</a><a data="Zhenjiang|镇江|16">镇江</a>
                        <a data="Zhongshan|中山|553">中山</a>
                        <a data="Zhongwei|中卫|556">中卫</a><a data="zhoukou|周口|3221">周口</a>
                        <a data="Zhoushan|舟山|19">舟山</a><a data="Zhuhai|珠海|31">珠海</a><a data="Zhumadian|驻马店|551">驻马店</a>
                        <a data="Zhuzhou|株洲|601">株洲</a>
                        <a data="Zibo|淄博|542">淄博</a><a data="Zigong|自贡|544">自贡</a>
                        <a data="Ziyang|资阳|1560">资阳</a><a data="Zunyi|遵义|558">遵义</a>
                    </div>

                </div>

            </div>
        );
    }
}

export default CityPanel;
