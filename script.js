// ==========================================================================
// SMASH PRO: Nintendo Switch 大亂鬥新手即時教學與神招速查網
// Interactive Engine & Character Database
// ==========================================================================

(function () {
  'use strict';

  // 1. Character Database (6 大新手本命角色神招資料庫)
  const CHARACTERS = {
    kirby: {
      name: '星之卡比 (Kirby)',
      tagline: '5段空中跳躍 × 無腦無敵變身 × 偷取技能',
      avatar: '⭐',
      weight: '羽量級 (極靈活)',
      jumpCount: '5 次空中跳躍',
      bestKillMove: '下必殺變石頭 / 橫向Smash',
      summary: '全遊戲回場容錯率最高的角色！擁有驚人的 5 次空中跳躍，摔下懸崖也不會死。下B變身石頭在下墜瞬間全身無敵，新手對戰的快樂之源！',
      moves: [
        {
          tag: '保命／高傷神招',
          name: '下必殺技（↓ ＋ 🅱️ 石頭變身）',
          combo: ['↓', '＋', '🅱️'],
          desc: '在半空中按下，卡比瞬間變身成重達千斤的岩石/鐵砧下墜重壓，下墜時全身無敵！對手在正下方會被直接砸出巨額傷害！',
          tip: '地面對手想跳上來打你時，在最高點按「↓＋B」直接反壓，砸中後記得按 B 解除變身避免被對手抓投。'
        },
        {
          tag: '搞怪／偷技神招',
          name: '普通必殺技（🅱️ 吸入複製）',
          combo: ['原地', '＋', '🅱️'],
          desc: '張開大嘴將眼前的對手直接吞進肚子裡！按下搖桿可以複製對手標誌性的普B絕招；推向場外還能把對手吐下懸崖。',
          tip: '在懸崖邊把對手吞進肚子裡，直接跳出懸崖再把他吐下去，是新手百試不爽的「快樂跳崖自殺殺法」。'
        },
        {
          tag: '突進起手招',
          name: '衝刺攻擊（跑動 ＋ 🅰️ 火球突進）',
          combo: ['快跑 🏃', '＋', '🅰️'],
          desc: '化身旋轉火球高速向前撞擊，覆蓋半個舞台長度，帶有強烈多段判定與擊飛力。',
          tip: '不知道怎麼打中對手時，先推搖桿快跑起來，然後按下 A 鍵撞上去！'
        }
      ],
      warning: '⚠️ <strong>卡比唯一的缺點：</strong>體重極輕，80% 以上受到重擊很容易被擊飛出場。多利用你的 5 連跳靈活走位，不要在原地傻站！'
    },
    bowser: {
      name: '庫巴 (Bowser)',
      tagline: '全遊戲最重霸體重坦 × 飛身壓殺指令投 × 早期擊飛',
      avatar: '🐢',
      weight: '超重量級 (不易被打飛)',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '橫向Smash飛踢 / 橫必殺重壓',
      summary: '新手入門最強霸凌角色！全遊戲最重的體重讓他在 130% 都不容易摔死；更自帶「強韌霸體（Tough Guy）」被動，對手的小拳頭打在他身上完全不硬直！',
      moves: [
        {
          tag: '無腦破盾神技',
          name: '橫向必殺技（➡️ ＋ 🅱️ 飛天重壓摔）',
          combo: ['➡️', '＋', '🅱️'],
          desc: '向前伸手猛抓對手，無視對手的任何防護罩！抓到後兩人一起跳入超高空，由你操控左右方向重重砸向地面！',
          tip: '當對手開盾龜縮時，直接用這招抓他！在懸崖邊甚至能直接操控跳出外海，把對手同歸於盡拖下水！'
        },
        {
          tag: '原地大面積蹭傷',
          name: '普通必殺技（🅱️ 火焰吐息）',
          combo: ['原地', '＋', '🅱️'],
          desc: '站在原地朝前方大範圍噴射劇烈火焰，按住不放火焰持續燃燒，對手一旦靠近會被卡在火焰中瘋狂狂掉 20%~30% 傷害！',
          tip: '開局對手衝過來時，先按住 B 噴火阻擋他；注意噴太久火焰範圍會縮小，鬆開冷卻後再用。'
        },
        {
          tag: '毀滅擊飛殺手鐧',
          name: '橫向猛擊（猛推方向 ＋ A 大飛踢）',
          combo: ['猛推方向', '＋', '🅰️ 同按 💥'],
          desc: '威力冠絕全遊戲的怪力飛踢！60%~70% 的中等百分比就能將中量級對手一腳踢出場外 KO！',
          tip: '等對手大招落空陷入僵直時，上前直接搖桿猛推方向＋A同按一腳送他上西天！'
        }
      ],
      warning: '⚠️ <strong>庫巴缺點：</strong>體型巨大容易被當成活靶子連段。被連段時不要盲目出拳，在空中按 SR 空中閃避回歸地面。'
    },
    mario: {
      name: '瑪利歐 (Mario)',
      tagline: '最平衡全能教科書 × 彈跳火球牽制 × 披風破招',
      avatar: '🍄',
      weight: '中量級 (各項均衡)',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '上必殺拳 / 橫向Smash大火拳',
      summary: '任天堂明星大亂鬥的招牌主角，動作幀數極快、前後搖小、近身連招無比順暢。學會瑪利歐，大亂鬥所有基本觀念就通了！',
      moves: [
        {
          tag: '遠程牽制神招',
          name: '普通必殺技（🅱️ 彈跳火球）',
          combo: ['原地', '＋', '🅱️'],
          desc: '向前投擲沿著地面彈跳前進的小火球。射程遠、干擾性極高，可以迫使對手跳躍或開防護罩。',
          tip: '平時拉開距離先丟兩顆火球，對手為了躲火球跳起來時，你就能上前空中截擊！'
        },
        {
          tag: '神技反轉破招',
          name: '橫向必殺技（➡️ ＋ 🅱️ 超級披風）',
          combo: ['➡️', '＋', '🅱️'],
          desc: '揮舞黃色披風！能 100% 反彈任何遠程飛行道具（砲彈、箭矢、雷電），更能讓衝過來的近戰對手瞬間向後轉！',
          tip: '對手掉在場外正準備按上B回場時，你在崖邊對他刷一下披風，對手會強制轉身背對舞台摔死！'
        },
        {
          tag: '回歸升龍終結技',
          name: '上必殺技（↑ ＋ 🅱️ 超級跳躍拳）',
          combo: ['↑', '＋', '🅱️'],
          desc: '瑪利歐經典頂金幣升龍拳！是回歸抓懸崖的核心招式，近身被對手圍攻時也是極速脫困並擊飛的神技。',
          tip: '在防護罩裡被對手貼身打時，按住 SR 不放直接輸入「↑＋B」能發動超快速的無敵出盾升龍拳！'
        }
      ],
      warning: '⚠️ <strong>瑪利歐缺點：</strong>手腳攻擊距離偏短，面對長劍角色時切忌盲目硬衝，多利用彈跳火球逼近。'
    },
    krool: {
      name: '庫魯魯王 (King K. Rool)',
      tagline: '肚皮鋼鐵霸體 × 雙重遠程砲火 × 直升機神級回場',
      avatar: '🐊',
      weight: '超重裝鱷魚王',
      jumpCount: '2 次跳躍 ＋ 直升機高空巡航',
      bestKillMove: '下Smash跳壓 / 橫向Smash重拳',
      summary: '新手殺手天花板！肚子上的金屬腹甲自帶防禦判定；配備火砲與王冠雙重遠程武器；上B直升機背包回場距離長到可以從地底飛回舞台！',
      moves: [
        {
          tag: '雙重遠程站樁炮',
          name: '普B（鐵球砲）＋ 橫B（飛冠迴旋）',
          combo: ['🅱️ 鐵球', '➜', '➡️ ＋ 🅱️ 飛冠'],
          desc: '先發射一顆巨大鐵球，緊接著扔出金色王冠！雙重飛行彈幕讓新手對手根本走不進來，王冠飛回時還能二次命中。',
          tip: '站在舞台邊緣狂丟飛冠與鐵球，對手光是要靠近你就得掉 40% 的血量！'
        },
        {
          tag: '神級無腦回場',
          name: '上必殺技（↑ ＋ 🅱️ 螺旋槳飛行背包）',
          combo: ['↑', '＋', '🅱️'],
          desc: '背上伸出螺旋槳直升機背包，可以在空中持續懸停上升長達數秒，上方更有螺旋槳絞殺判定！',
          tip: '就算被打到螢幕最底端的深淵，按一下「↑＋B」也能慢悠悠一路飛回舞台抓懸崖，根本不會摔死！'
        },
        {
          tag: '抓翻滾雙向神壓',
          name: '下猛擊（猛推 ↓ ＋ A 大跳壓）',
          combo: ['猛推 ↓', '＋', '🅰️ 同按 💥'],
          desc: '庫魯魯王高高躍起，肚皮重重砸向地面，前後兩側同時產生大範圍地震震波！',
          tip: '對手喜歡在懸崖邊滾來滾去？直接搖桿猛推向下＋A同按壓，前後通殺，直接砸飛！'
        }
      ],
      warning: '⚠️ <strong>注意肚皮耐久：</strong>肚子雖然有金屬霸體，但連續抵擋太重攻擊肚子會裂開（破盾昏厥），請適度搭配常規護盾防守。'
    },
    pikachu: {
      name: '皮卡丘 (Pikachu)',
      tagline: '極限機動性 × 遠程電球牽制 × 天降落雷',
      avatar: '⚡',
      weight: '輕量小巧',
      jumpCount: '2 次跳躍 ＋ 雙段電光一閃',
      bestKillMove: '下必殺天降落雷 / 橫向Smash電球',
      summary: '歷代大亂鬥的頂級強者！身形小巧很難被打中，普B電擊球會沿著地形爬牆，下B引雷在對手被挑至空中時能一雷轟頂直接昇天！',
      moves: [
        {
          tag: '天降秒殺雷霆',
          name: '下必殺技（↓ ＋ 🅱️ 打雷）',
          combo: ['↓', '＋', '🅱️'],
          desc: '從天空中召喚一道巨大的霹靂閃電直劈向皮卡丘！若閃電擊中天上的對手，會產生恐怖的垂直下墜或向上擊飛判定。',
          tip: '把對手打到半空中時，站在地面輸入「↓＋B」，天雷正好在空中劈死對手，視覺效果超帥氣！'
        },
        {
          tag: '爬牆電球牽制',
          name: '普通必殺技（🅱️ 電擊）',
          combo: ['原地', '＋', '🅱️'],
          desc: '釋放一顆跳躍前進的電氣小球，能沿著舞台邊緣與牆壁爬行，是封鎖對手懸崖回場的絕技。',
          tip: '對手掉在懸崖外時，站在崖邊一直放電球，電球會順著懸崖邊掉下去電死回來的對手！'
        },
        {
          tag: '多向電光瞬移',
          name: '上必殺技（↑ ＋ 🅱️ 電光一閃）',
          combo: ['↑ ＋ 🅱️', '➜', '推兩次方向'],
          desc: '化身電光高速瞬移，可以在瞬移過程中向不同方向折返一次，回場路線千變萬化。',
          tip: '新手剛練這招先推一次往舞台方向即可，習慣後再練習連續兩次方向鍵的二段折返。'
        }
      ],
      warning: '⚠️ <strong>皮卡丘缺點：</strong>電光一閃需要練習方向手感，如果撞到舞台下方牆壁可能會滑落，多去訓練模式試幾次方向。'
    },
    pyra: {
      name: '焰 / 光 (Pyra / Mythra)',
      tagline: '巨大光刃劍氣 × 焰之烈火擊飛 × 光之閃電快攻',
      avatar: '🔥',
      weight: '中量雙刀流',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '焰：橫向必殺旋輪 / 猛擊大劍',
      summary: 'DLC 頂級人氣角色，自帶「焰」與「光」隨時切換（下B）。光擁有全遊戲頂級的疾速出招，焰則擁有誇張的巨劍範圍與早殺力量，新手拿著大劍揮舞爽快無比！',
      moves: [
        {
          tag: '大範圍烈火旋輪',
          name: '焰：橫必殺（➡️ ＋ 🅱️ 燃燒烈輪）',
          combo: ['➡️', '＋', '🅱️ (焰)'],
          desc: '將手中的巨劍化為旋轉燃燒的飛火輪擲向前方，在前方持續高速旋轉絞殺對手，覆蓋超廣面積！',
          tip: '站在安全距離直接扔出旋火輪，對手被定在火輪裡動彈不得，你甚至可以走過去蓄力大招接連段！'
        },
        {
          tag: '光速近身壓制',
          name: '光：橫必殺（➡️ ＋ 🅱️ 光子狂斬）',
          combo: ['➡️', '＋', '🅱️ (光)'],
          desc: '光瞬間化為數道幻影向前突進狂斬，判定範圍極長，對手防備不及直接被切開。',
          tip: '對戰前中期先切成「光」用快刀蹭 % 數；等對手到 80% 換成「焰」一劍砍飛對手！'
        },
        {
          tag: '雙人隨時切換',
          name: '下必殺技（↓ ＋ 🅱️ 角色切換）',
          combo: ['↓', '＋', '🅱️'],
          desc: '在「光（速度型）」與「焰（怪力型）」之間無縫變身，切換瞬間短暫無敵。',
          tip: '新手起手可以直接常駐「焰（紅髮）」，光靠大劍的橫猛擊和橫B旋輪就能橫掃對局！'
        }
      ],
      warning: '⚠️ <strong>焰與光缺點：</strong>回歸技（Up-B）的垂直上升高度中規中矩，掉下懸崖時記得保留二段跳再按上B。'
    },
    donkeykong: {
      name: '東奇剛 / DK (Donkey Kong)',
      tagline: '霸王背人跳崖 × 巨金剛蓄力重拳 × 地震連擊',
      avatar: '🦍',
      weight: '超重量級巨猿 (極難被擊飛)',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '普通必殺大金剛巨拳 / 霸王背人拋崖',
      summary: '全遊戲摔技最強大的霸主！擁有獨門的「背人（Cargo Throw）」特權，抓到對手後可以扛在背上隨意走動甚至跳下深崖。普通必殺巨拳威力可比核彈，一拳破盾秒殺！',
      moves: [
        {
          tag: '全遊戲獨門背人特技',
          name: '霸王背人摔（SL 抓住 ➜ 搖桿往前推）',
          combo: ['SL 抓住', '➜', '前推背人'],
          desc: '抓到對手後按前，DK 會把對手像麻袋一樣直接扛在肩膀上自由走動、跳躍！隨後按攻擊鍵可以把對手向前、向上或向後甩出。',
          tip: '扛著對手直接跳出懸崖，在最深處把對手扔進深淵，自己再用上B轉回舞台，是對手最痛恨的「經典跳崖殺」！'
        },
        {
          tag: '一拳破盾秒殺',
          name: '普通必殺技（🅱️ 大金剛巨拳）',
          combo: ['🅱️ 旋臂蓄力', '➜', '滿氣再按 🅱️'],
          desc: '按一下 B 開始狂甩手臂蓄力，蓄滿時全身冒煙閃金光！滿氣時隨時按下 B 揮出毀天滅地的一記重拳，滿血對手開防護罩也會被直接一拳打爆破盾！',
          tip: '開局拉開距離先轉手臂蓄滿氣存著，等對手落地露出大破綻時，一拳將他轟出銀河系！'
        },
        {
          tag: '地面陷阱大頭錘',
          name: '橫向必殺技（➡️ ＋ 🅱️ 頑強頭錘）',
          combo: ['➡️', '＋', '🅱️'],
          desc: '以全身力量用鋼鐵額頭猛砸地面！只要打中站在地上的對手，會直接把對手整個人像釘子一樣深深埋入土裡，陷入完全無法動彈的埋地狀態！',
          tip: '對手被釘入地面後會任你處置，此時立刻走到他身邊蓄力滿橫向 Smash 飛踢，直接 0% 打到 80%！'
        }
      ],
      warning: '⚠️ <strong>東奇剛回場注意：</strong>上B旋轉手臂的水平位移很長，但垂直高度一般。如果不幸被打到很深的垂直正下方，一定要先按二段跳往斜上方跳再按上B！'
    },
    link: {
      name: '林克 (Link)',
      tagline: '曠野之息三重彈幕 × 遙控炸彈引爆 × 經典迴旋劍氣',
      avatar: '🗡️',
      weight: '中量重裝劍士',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '上必殺迴旋斬 / 橫向Smash二段斬',
      summary: '《薩爾達傳說：曠野之息》的大英雄！擁有弓箭、迴旋鏢、遙控炸彈三套遠程飛行道具，站樁遠距離壓制極其強勢，近距離手持大師之劍與海利亞盾牌攻守一體。',
      moves: [
        {
          tag: '遠程三彈幕壓制',
          name: '普B弓箭 ＋ 橫B迴旋鏢 ＋ 下B遙控炸彈',
          combo: ['➡️ ＋ 🅱️ 鏢', '➜', '↓ ＋ 🅱️ 炸彈', '➜', '🅱️ 箭'],
          desc: '先扔出傾斜飛行的迴旋鏢擾亂對手，接著按「↓＋B」掏出圓形希卡遙控炸彈扔在地上，再補一記蓄力弓箭！對手尚未近身就已被打得滿身是傷。',
          tip: '迴旋鏢飛回時有風壓判定，能把對手推向你；遙控炸彈留在地上對手不敢輕易靠近，再次按「↓＋B」即可隨時引爆！'
        },
        {
          tag: '出盾極速斬殺',
          name: '上必殺技（↑ ＋ 🅱️ 大師之劍迴旋斬）',
          combo: ['↑', '＋', '🅱️'],
          desc: '在地面拔出大師之劍原地高速旋轉斬擊，出招快如閃電且帶有多段擊退！在空中則是向上盤旋攀升的救命回場技。',
          tip: '當你在防護罩（SR）裡被對手近身瘋狂平 A 時，按住 SR 直接按「↑＋B」，能瞬間出盾施展迴旋斬切開對手！'
        },
        {
          tag: '二段致命斬殺',
          name: '橫向猛擊（猛推向對手 ＋ A 大斬擊）',
          combo: ['猛推方向', '＋', '🅰️ 同按 💥'],
          desc: '大師之劍強力劈砍！當林克處於 0% 滿血時，第一刀還會射出額外劍氣！在第一刀砍中後立刻再次輸入，會追加更具毀滅擊飛力的第二刀重斬！',
          tip: '對手露出破綻時，果斷猛推＋A砍出第一刀，確認命中後立刻再按打出二段斬，通常能直接 KO 對手！'
        }
      ],
      warning: '⚠️ <strong>注意炸彈誤傷：</strong>遙控炸彈如果離自己太近引爆，自己也會受到傷害與擊飛；但也正因如此，老手常在空中炸自己來當作二次回場（Bomb Recovery）！'
    },
    zelda: {
      name: '塞爾達 (Zelda)',
      tagline: '召喚幻影騎士 × 奈魯之愛神聖無敵 × 閃電踢爆殺',
      avatar: '👑',
      weight: '魔法輕量級',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '閃電踢空前/空後 / 瞬移斬殺 / 騎士壓制',
      summary: '高雅強大的海拉魯公主！擁有令人聞風喪膽的「奈魯之愛（全身無敵反彈）」與召喚「幻影騎士」遠程壓制。她的空中踢只要精準踢中甜點，威力全遊戲最頂級！',
      moves: [
        {
          tag: '召喚鋼鐵肉盾壓制',
          name: '下必殺技（↓ ＋ 🅱️ 幻影騎士）',
          combo: ['↓ ＋ 🅱️ (可蓄力)', '➜', '放手出擊'],
          desc: '在身後召喚一尊巨大的幽靈板甲騎士！按住 B 蓄力騎士盔甲會逐步組裝完成並向前狂斬！騎士能抵擋所有飛行道具，是新手防禦反攻的神招。',
          tip: '站在舞台邊緣放騎士，自己跟在騎士後面走過去，對手不管是想跳還是想滾都會被騎士打飛！'
        },
        {
          tag: '出招即無敵反擊',
          name: '普通必殺技（🅱️ 奈魯之愛神聖水晶）',
          combo: ['原地', '＋', '🅱️'],
          desc: '被藍色多面體水晶包裹全身高速旋轉！第 4 幀全身處於無敵狀態，能反彈一切射擊道具，並將貼身的對手瞬間彈開！',
          tip: '每當被對手逼入牆角或連續挨打時，只要瘋狂按 B，奈魯之愛會強制打斷對手的攻勢並保證自身安全！'
        },
        {
          tag: '瞬移擊殺神技',
          name: '上必殺技（↑ ＋ 🅱️ 佛羅爾之風）',
          combo: ['↑ ＋ 🅱️', '➜', '推搖桿方向'],
          desc: '化身綠色魔法旋風瞬間消失，並在推動的方向重新現身！消失與現身的兩瞬間都具有強大的高擊飛傷害判定！',
          tip: '在 70%~90% 時，對準半空中的對手方向使用上B，現身瞬間會直接把對手秒殺帶走！'
        }
      ],
      warning: '⚠️ <strong>體質偏輕：</strong>塞爾達體重較輕，被重量級打到容易早期出場，多拉開距離依靠幻影騎士與水晶反彈保持距離！'
    },
    luigi: {
      name: '路易吉 (Luigi)',
      tagline: '吸塵器超長抓投 × 0% 升天連招 × 綠導彈暴擊',
      avatar: '👻',
      weight: '中量滑步系',
      jumpCount: '2 次常規跳躍',
      bestKillMove: '貼身零距離極限升龍拳 / 橫B導彈暴擊',
      summary: '瑪利歐的弟弟，個性膽小但爆發力驚人！抓投使用鬼怪吸塵器距離超遠；橫必殺綠導彈自帶 10% 驚喜暴擊；更擁有貼身一拳秒殺全場的「極限金屬升龍拳」！',
      moves: [
        {
          tag: '長程牽引抓投',
          name: '鬼怪吸塵器抓住（SL）',
          combo: ['SL 抓住', '➜', '下摔接空前'],
          desc: '射出吸盤皮揣子抓取對手，抓取距離比一般角色長上一倍！抓中後往下摔，能輕鬆銜接跳躍空中攻擊打出一整套超爽連段。',
          tip: '對手習慣防禦時，在安全距離直接按下左上肩鍵 SL，皮揣子能出其不意將對手強行拉進懷裡摔飛！'
        },
        {
          tag: '10% 暴擊核彈',
          name: '橫向必殺技（➡️ ＋ 🅱️ 綠導彈）',
          combo: ['➡️', '＋', '🅱️ (可蓄力)'],
          desc: '像火箭一樣全身橫向飛撞！有 10% 的隨機機率會觸發「暴擊（Misfire）」，全身冒出烈火以 3 倍速度轟向對手，直接秒殺！',
          tip: '回場時在遠處可以用這招橫向飛回舞台；如果觸發暴擊更會瞬間像導彈一樣高速撞回台上！'
        },
        {
          tag: '零距離極限秒殺拳',
          name: '上必殺技（↑ ＋ 🅱️ 超級跳躍升龍拳）',
          combo: ['貼身臉貼臉', '➜', '↑ ＋ 🅱️'],
          desc: '與瑪利歐不同，路易吉的升龍拳如果在「與對手零距離貼身」時命中，會發出清脆無比的「叮！」金屬敲擊聲，產生毀滅級擊飛力！',
          tip: '在防護罩擋下對手的大破綻招式後，貼著他的臉按「↑＋B」，50% 就能將中量級對手一拳打上外太空！'
        }
      ],
      warning: '⚠️ <strong>升龍拳空放巨大僵直：</strong>如果上必殺沒有在貼身時打中，路易吉會失去所有升力軟綿綿飄落，落地有長達 1.5 秒不能動，千萬不要隨便遠程亂放！'
    }
  };

  // 2. Move Trigger Preview Database (虛擬 Switch 手把試招體驗資料庫)
  const MOVE_PREVIEWS = {
    // Ground A moves
    'ground_neutral_a': {
      comboText: '🏃 地面 ｜ 原地 ＋ 🅰️ 普通攻擊',
      category: '地面普攻 (Jab)',
      name: '原地連續刺拳 / 百烈拳 (Jab)',
      desc: '原地連續點按 A 鍵發動的近身快速刺拳。發生速度全遊戲最快（2~4 幀），用來打斷對手前衝與防身最有效！',
      tip: '近距離肉搏陷入膠著時，先按兩下 A 出刺拳搶節奏，對手通常無法招架。'
    },
    'ground_side_a': {
      comboText: '🏃 地面 ｜ 輕推 ← / → ＋ 🅰️',
      category: '地面強攻擊 (Forward Tilt)',
      name: '橫向強攻擊 (Forward Tilt / FTilt)',
      desc: '推搖桿朝前揮出一記中距離強拳或揮劍，攻擊距離比刺拳更長，破綻小，非常適合用來保持安全距離。',
      tip: '想打出強攻擊而不是 Smash 時，記住搖桿只要「輕推一半」再按 A（不要同時猛推到底）就能穩定使出！'
    },
    'ground_dash_a': {
      comboText: '🏃 地面 ｜ 快推到底跑步 ＋ 🅰️',
      category: '突進起手王牌 (Dash Attack)',
      name: '衝刺攻擊 (Dash Attack / DA)',
      desc: '藉助跑步慣性向前滑步撞擊或飛撲重擊！突進距離長達 1/3 舞台，是新手「手短打不到人」的最強解決方案！',
      tip: '抓準對手大招落空或翻滾落地時，直接快跑按 A 衝過去撞飛他！'
    },
    'ground_up_a': {
      comboText: '🏃 地面 ｜ 推 ↑ ＋ 🅰️',
      category: '防空神招 (Up Tilt)',
      name: '上強攻擊 (Up Tilt / UTilt)',
      desc: '朝正上方踢腿或挑劍，是全遊戲最強的「防空截擊技」！專門懲罰喜歡從高空往下壓你的對手。',
      tip: '切記去設定關閉「推上跳躍」，才能在原地輕鬆隨心所欲按出這招而不誤跳！'
    },
    'ground_down_a': {
      comboText: '🏃 地面 ｜ 推 ↓ ＋ 🅰️',
      category: '下段掃擊 (Down Tilt)',
      name: '下強攻擊 (Down Tilt / DTilt)',
      desc: '蹲伏貼地快速掃腿或刺擊。高度極低，能直接打中抓在懸崖邊緣準備爬上台的對手！',
      tip: '守在懸崖邊等對手爬上來時點一下下A，常能把對手二次踢出場外！'
    },

    // Air A moves
    'air_neutral_a': {
      comboText: '🪂 空中 ｜ 不推搖桿 ＋ 🅰️',
      category: '空中保命護身 (Neutral Air)',
      name: '空中普通攻擊 (Nair)',
      desc: '在半空中原地旋轉或揮拳，角色周身會產生保護判定，發生極快、落地破綻極小！',
      tip: '高空被追擊要落地時按一下空中普攻，常能反踢中下方等你的敵人安全落地。'
    },
    'air_side_a': {
      comboText: '🪂 空中 ｜ 朝對手推 → / ← ＋ 🅰️',
      category: '空中追擊 (Fair / Bair)',
      name: '空中前/後攻擊 (空前 Fair / 空後 Bair)',
      desc: '面向對手推前面按 A 為「空前壓制」；背對對手向後按 A 則為威力驚人的「空後踢」，大多數角色空後擊飛力極強！',
      tip: '用「上/左(跳) + 右(A)」短跳接空前或空後，落地後無縫銜接刺拳，是標準高手進攻節奏！'
    },
    'air_dash_a': {
      comboText: '🪂 空中 ｜ 快推方向 ＋ 🅰️',
      category: '空中高速移動壓制',
      name: '空中前/後突進空攻 (Air Mobility + A)',
      desc: '空中推方向同時按 A 會順著空中慣性向前飄移揮擊，將飛在空中的敵人一路追打出畫面外！',
      tip: '追出場外打對手時切記保留「二段跳」與「上 B」的能量用來回場，別追太深自己摔死！'
    },
    'air_up_a': {
      comboText: '🪂 空中 ｜ 推 ↑ ＋ 🅰️',
      category: '空中對空 (Up Air)',
      name: '空中上方向攻擊 (Up Air / Uair)',
      desc: '朝頭頂上方大力揮砍或上踢，把已經被打飛到半空中的對手繼續往上頂，甚至直接從螢幕頂端 KO 出場！',
      tip: '對手在高空飄浮想用空中閃避躲招時，跳起來等他閃避結束再按上A送他上天！'
    },
    'air_down_a': {
      comboText: '🪂 空中 ｜ 推 ↓ ＋ 🅰️',
      category: '懸崖絕殺隕石 (Down Air)',
      name: '空中下方向攻擊・隕石踩踏 (Dair)',
      desc: '在半空中向下猛力雙腳踩踏或垂直劈砍！許多角色具備「隕石判定 (Meteor Smash)」，命中直接把對手垂直砸入深淵海裡！',
      tip: '對手在懸崖外正要上升回場時，跳出去對準頭頂按「↓+A」，就算對方只有 30% 也能一腳踩死！'
    },

    // Specials (B)
    'any_neutral_b': {
      comboText: '原地 (Neutral) ＋ 🅱️ 必殺技',
      category: '普通必殺技 (Neutral B)',
      name: '普通必殺技（遠程彈幕／招牌絕招）',
      desc: '角色的代表招牌技能！通常是遠程飛行道具（如瑪利歐火球、林克弓箭、庫魯魯鐵球）或獨特能力（卡比吸入）。',
      tip: '在遠距離拿來牽制逼迫對手跳躍或開盾，切勿在近距離亂按避免前搖太大被抓！'
    },
    'any_side_b': {
      comboText: '推 ← / → ＋ 🅱️ 必殺技',
      category: '橫向必殺技 (Side B)',
      name: '橫向必殺技（突進／指令抓摔／反彈）',
      desc: '具備強大位移或破招功能（如庫巴無視護盾抓摔、瑪利歐反彈披風、焰之炎輪飛擲）。',
      tip: '庫巴玩家可以靠近開盾的對手直接按「→+B」破防抓摔；若已在空中也能拿來拉近水平回場距離！'
    },
    'any_up_b': {
      comboText: '推 ↑ ＋ 🅱️ 必殺技',
      category: '保命第一神技 (Up B / Recovery)',
      name: '上必殺回歸技（空中升龍抓崖！）',
      desc: '新手保命生命線！被打出懸崖外時，先用「空中二段跳 (上/左鍵)」靠近，接著按「↑＋B (下鍵)」即可高速竄升並自動磁吸抓取懸崖！',
      tip: '⚠️ 空中放完「↑+B」後角色會陷入無防備自由落體，務必確認位置夠接近舞台再按！'
    },
    'any_down_b': {
      comboText: '推 ↓ ＋ 🅱️ 必殺技',
      category: '下必殺技 (Down B)',
      name: '下必殺技（反擊 / 變身 / 陷阱）',
      desc: '包含當身反擊（劍士角色）、無敵石頭壓頂（卡比）、角色切換（焰/光）或爆炸道具設置（林克炸彈）。',
      tip: '卡比在空中按「↓+B」變石頭砸落全身無敵，但記得落地後按一下 B 解開避免被對手抓投！'
    },

    // Jump & Short Hop + A
    'any_jump': {
      comboText: '按下 🟢 上鍵或左鍵（跳躍）',
      category: '立體機動 (Jump / Short Hop)',
      name: '跳躍 / 短跳 (Jump / Short Hop)',
      desc: '按住為「大跳」可躍上高台；輕輕點一下立刻放開則為「短跳」，跳躍高度只有一半，適合貼地發動高速空中壓制。在空中再按一次可使出二段跳（卡比可連跳 5 次）！',
      tip: '被打出場外時，「上/左鍵 二段跳」一定要配合「↑+B」一起用才回得來！'
    },
    'any_shorthop_a': {
      comboText: '同時按 ⚡ 跳躍鍵(上/左) ＋ 🅰️(右)',
      category: '官方隱藏密技 (Macro)',
      name: '一鍵「短跳 ＋ 空中攻擊」自動連發',
      desc: '《特別版》專門內建的新手神級捷徑！只要同時按下「上或左鍵（跳躍）＋ 右鍵（A 攻擊）」，系統都會 100% 自動使出最低高度的完美短跳空中攻擊！',
      tip: '搭配搖桿向前/向後推再同按「跳躍鍵+A」，手殘也能立刻打出職業選手般的貼地空前壓迫！'
    },

    // Joy-Con Smash (Flick Stick + A)
    'smash_up': {
      comboText: '💥 搖桿猛推 ↑ ＋ 🅰️ 同按',
      category: '致命終結技 (Smash Attack)',
      name: '上猛擊 (Up Smash / USmash)',
      desc: '單支 Joy-Con 沒有右搖桿！將搖桿猛推上方並同時按下右鍵 A，即可向上揮出極具爆發力的垂直擊飛重擊（按住 A 不放可蓄力）！',
      tip: '對手從上方落下或站在上方平台時，直接「↑ 猛推 ＋ A 同按」收頭！可在手把「其他設定」打開 B+A 同按出猛擊更好按！'
    },
    'smash_side': {
      comboText: '💥 搖桿猛推 ← / → ＋ 🅰️ 同按',
      category: '致命終結技 (Smash Attack)',
      name: '橫向猛擊 (Forward Smash / FSmash)',
      desc: '全遊戲擊飛力道最強的招牌殺招！當對手累積達 85%~100% 以上時，朝對手方向猛推搖桿並同時按下右鍵 A，一擊轟出場外！',
      tip: '同按時按住 A 不放還能蓄力提升最多 1.4 倍傷害；不過沒打中硬直超大，切記等對手破綻再出！'
    },
    'smash_down': {
      comboText: '💥 搖桿猛推 ↓ ＋ 🅰️ 同按',
      category: '致命終結技 (Smash Attack)',
      name: '下猛擊 (Down Smash / DSmash)',
      desc: '同時攻擊前後兩側的掃蕩重擊！搖桿猛推下方同時按右鍵 A，專門懲罰喜歡「翻滾（Roll）」繞到你背後的對手！',
      tip: '對手一直左右翻滾閃來閃去時，原地猛推「↓ ＋ A 同按」，前後通殺一發 KO！'
    },

    // Shield / Parry / Tech (Ground vs Air)
    'ground_shield': {
      comboText: '🏃 地面 ｜ 🛡️ 長按 SR (右上肩鍵)',
      category: '防禦・格擋・滾翻 (Shield / Parry)',
      name: '彩色防護罩 / 完美防禦 / 盾抓',
      desc: '① 按住 SR 不放：展開防護罩擋下所有拳腳與飛道。\n② 擋住時直接按「A (右鍵)」：以最快速度發動「盾抓」反摔！\n③ 推左右：使出無敵「翻滾」閃避。\n④ 受擊瞬間放開 SR：觸發金色「完美格擋 (Parry)」無硬直反殺！',
      tip: '別一直死按著盾不放！護盾縮小到極限破盾會暈眩數秒，擋完該反擊或拉開就鬆開 SR！'
    },
    'air_shield': {
      comboText: '🪂 空中 ｜ 🛡️ 按下 SR (右上肩鍵)',
      category: '空中迴避・撞牆受身 (Air Dodge / Tech)',
      name: '空中閃避 (Air Dodge) ＆ 撞牆受身 (Tech)',
      desc: '① 被敵人在空中連段時按 SR：觸發短暫無敵「空中閃避」躲開追擊（配合搖桿可位移）。\n② 🧱 保命受身 (Tech)：當你被重擊高速飛撞「牆壁」或「地面」前 0.2 秒按一下 SR，會閃出綠光直接貼穩牆面，消除彈珠反彈力道！',
      tip: '⚠️ 在深淵外沒事不要隨便按空中閃避！空中閃避落地前會有很長的不能動硬直，容易自己掉進海裡！'
    },

    // Grab
    'any_grab': {
      comboText: '按下 🤼 SL (左上肩鍵)',
      category: '抓住破防 (Grab & Direction Throw)',
      name: '抓住／抓投（100% 無視防護罩！）',
      desc: '專門制裁「一直開著彩色防護罩龜縮」的對手！只要靠近按 SL 直接一把抓住，接著用 A 膝擊蹭傷兩下，再朝場外方向推搖桿把他扔出懸崖！',
      tip: '大亂鬥剪刀石頭布鐵則：「抓住破防禦，防禦擋攻擊，攻擊打抓住」。看到敵人愛開盾，衝過去按 SL 就對了！'
    }
  };

  // State
  let currentActiveChar = 'kirby';
  let simState = 'ground'; // 'ground' | 'air'
  let simDir = 'neutral';  // 'neutral' | 'up' | 'down' | 'side-left' | 'side-right' | 'dash'
  let simAct = 'a';        // 'a' | 'b' | 'jump' | 'shorthop_a' | 'shield' | 'grab' | 'smash_up' | 'smash_side' | 'smash_down'

  // DOM Elements
  const charTabsBar = document.getElementById('charTabsBar');
  const charDetailStage = document.getElementById('charDetailStage');
  const quickSearchInput = document.getElementById('quickSearchInput');
  const btnSearchClear = document.getElementById('btnSearchClear');
  const toast = document.getElementById('toast');

  // Switch Controller Lab Elements
  const simStateBtns = document.querySelectorAll('.sim-state-btn');
  const simPresetBtns = document.querySelectorAll('.sim-preset-btn');
  const leftAnalogWell = document.getElementById('leftAnalogWell');
  const leftAnalogKnob = document.getElementById('leftAnalogKnob');
  const leftStickReadout = document.getElementById('leftStickReadout');
  const rightActionReadout = document.getElementById('rightActionReadout');
  const dirHotspots = document.querySelectorAll('.dir-hotspot');
  const stickMiniBtns = document.querySelectorAll('.stick-mini-btn');
  const bridgeStatusTag = document.getElementById('bridgeStatusTag');
  const bridgeComboPreview = document.getElementById('bridgeComboPreview');

  const faceButtons = document.querySelectorAll('.face-btn');
  const shoulderButtons = document.querySelectorAll('.shoulder-btn');
  const vcBtnShortHopA = document.getElementById('vcBtnShortHopA');
  const cDirButtons = document.querySelectorAll('.c-dir');
  const rightCStickKnob = document.getElementById('rightCStickKnob');

  const simResultCard = document.getElementById('simResultCard');
  const simComboBadge = document.getElementById('simComboBadge');
  const simBounceKeys = document.getElementById('simBounceKeys');
  const simCategory = document.getElementById('simCategory');
  const simMoveName = document.getElementById('simMoveName');
  const simMoveDesc = document.getElementById('simMoveDesc');
  const simProTip = document.getElementById('simProTip');

  // Initialize
  function init() {
    renderCharacterDetail(currentActiveChar);
    updateSimulatorDisplay();
    setupEventListeners();
  }

  // Toast Helper
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Render Character Detail
  function renderCharacterDetail(charKey) {
    const data = CHARACTERS[charKey];
    if (!data || !charDetailStage) return;

    let movesHtml = '';
    data.moves.forEach(m => {
      let comboHtml = '';
      m.combo.forEach(c => {
        if (c === '＋' || c === '➜') {
          comboHtml += `<span class="combo-plus">${c}</span>`;
        } else if (c.includes('🅱️') || c.includes('B')) {
          comboHtml += `<span class="key-cap small btn-b">${escapeHtml(c)}</span>`;
        } else if (c.includes('🅰️') || c.includes('A')) {
          comboHtml += `<span class="key-cap small btn-a">${escapeHtml(c)}</span>`;
        } else {
          comboHtml += `<span class="key-cap small">${escapeHtml(c)}</span>`;
        }
      });

      movesHtml += `
        <div class="char-move-item">
          <div class="char-move-top">
            <span class="char-move-tag">${escapeHtml(m.tag)}</span>
            <div class="controller-combo">${comboHtml}</div>
          </div>
          <h4 class="char-move-heading">${escapeHtml(m.name)}</h4>
          <p class="char-move-text">${escapeHtml(m.desc)}</p>
          <div class="char-move-tip">💡 <strong>實戰訣竅：</strong>${escapeHtml(m.tip)}</div>
        </div>
      `;
    });

    charDetailStage.innerHTML = `
      <div class="char-card-full" id="charCard_${charKey}">
        <div class="char-hero-header">
          <div class="char-title-group">
            <div class="char-big-avatar">${data.avatar}</div>
            <div class="char-name-block">
              <h3>${escapeHtml(data.name)}</h3>
              <div class="char-tagline">✨ ${escapeHtml(data.tagline)}</div>
            </div>
          </div>

          <div class="char-stats-pill-group">
            <div class="stat-chip"><strong>體重級別：</strong>${escapeHtml(data.weight)}</div>
            <div class="stat-chip"><strong>空中跳躍：</strong>${escapeHtml(data.jumpCount)}</div>
            <div class="stat-chip"><strong>最強殺招：</strong>${escapeHtml(data.bestKillMove)}</div>
          </div>
        </div>

        <p style="font-size: 15px; color: #CBD5E1; line-height: 1.65; margin-bottom: 24px;">
          ${escapeHtml(data.summary)}
        </p>

        <div class="char-moves-container">
          <div class="char-section-title">
            <span>🔥 最常最好用的 3 大必學專屬神招</span>
          </div>
          <div class="char-moves-grid">
            ${movesHtml}
          </div>
        </div>

        <div class="char-warning-box">
          ${data.warning}
        </div>
      </div>
    `;
  }

  // Update Switch Controller Lab Display & Physical Feedback
  function getNormalizedDir() {
    if (simDir === 'side-left' || simDir === 'side-right') return 'side';
    return simDir;
  }

  function updateAnalogVisuals() {
    const dirOffsets = {
      'neutral': { x: 0, y: 0, label: '⚪ 原地 (Neutral)', short: '原地' },
      'up': { x: 0, y: -24, label: '⬆️ 推向上 (Up)', short: '↑' },
      'down': { x: 0, y: 24, label: '⬇️ 推向下 (Down)', short: '↓' },
      'side-left': { x: -24, y: 0, label: '⬅️ 推向左 (Side)', short: '←' },
      'side-right': { x: 24, y: 0, label: '➡️ 推向右 (Side)', short: '→' },
      'dash': { x: 28, y: 0, label: '🏃 快推到底 (Dash)', short: '快跑→' }
    };

    const d = dirOffsets[simDir] || dirOffsets['neutral'];
    if (leftAnalogKnob) {
      leftAnalogKnob.style.transform = `translate(${d.x}px, ${d.y}px)`;
      leftAnalogKnob.classList.toggle('pushed', simDir !== 'neutral');
    }
    if (leftStickReadout) leftStickReadout.textContent = d.label;

    dirHotspots.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.dir === simDir || (simDir === 'dash' && btn.dataset.dir === 'side-right'));
    });

    stickMiniBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.dir === simDir);
    });

    // Right C-Stick visual displacement
    if (rightCStickKnob) {
      const cOffsets = {
        'smash_up': { x: 0, y: -16 },
        'smash_down': { x: 0, y: 16 },
        'smash_side': { x: 16, y: 0 }
      };
      const co = cOffsets[simAct] || { x: 0, y: 0 };
      rightCStickKnob.style.transform = `translate(${co.x}px, ${co.y}px)`;
      rightCStickKnob.classList.toggle('active', simAct.startsWith('smash_'));
    }

    cDirButtons.forEach(btn => {
      btn.classList.toggle('active', `smash_${btn.dataset.cdir}` === simAct);
    });

    // Update Face, Shoulder, Macro buttons
    faceButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.act === simAct);
    });
    shoulderButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.act === simAct);
    });
    if (vcBtnShortHopA) {
      vcBtnShortHopA.classList.toggle('active', simAct === 'shorthop_a');
    }

    // Update Right Action Readout & Bridge
    const actLabels = {
      'a': '🅰️ 攻擊 (右鍵 A)',
      'b': '🅱️ 必殺 (下鍵 B)',
      'jump': '🟢 跳躍 (上 / 左鍵)',
      'shorthop_a': '⚡ 跳＋A (短跳空攻)',
      'shield': simState === 'air' ? '🛡️ 閃避 / 受身 (SR)' : '🛡️ 防護罩 / 格擋 (SR)',
      'grab': '🤼 抓住破防 (SL)',
      'smash_up': '💥 上猛擊 (↑猛推＋A)',
      'smash_side': '💥 橫猛擊 (↔猛推＋A)',
      'smash_down': '💥 下猛擊 (↓猛推＋A)'
    };
    if (rightActionReadout) rightActionReadout.textContent = actLabels[simAct] || '🅰️ 普通攻擊';
    if (bridgeStatusTag) bridgeStatusTag.textContent = simState === 'air' ? 'AIR (空中)' : 'GROUND (地面)';
    if (bridgeComboPreview) {
      if (simAct.startsWith('smash_') || simAct === 'grab' || simAct === 'shield' || simAct === 'jump' || simAct === 'shorthop_a') {
        bridgeComboPreview.textContent = actLabels[simAct];
      } else {
        bridgeComboPreview.textContent = `${d.short} ＋ ${simAct === 'a' ? '🅰️' : '🅱️'}`;
      }
    }
  }

  function buildBouncePromptKeys(normDir, act, state) {
    const dirTag = {
      'neutral': '<span class="key-cap small stick">⚪ 原地 (不推)</span>',
      'up': '<span class="key-cap small stick">⬆️ 左搖桿推上</span>',
      'down': '<span class="key-cap small stick">⬇️ 左搖桿推下</span>',
      'side': '<span class="key-cap small stick">↔️ 左搖桿推側</span>',
      'dash': '<span class="key-cap small dash">🏃 左搖桿快推到底</span>'
    }[normDir] || '<span class="key-cap small stick">原地</span>';

    if (act === 'a') {
      if (state === 'air') {
        return `<span class="key-cap small btn-jump">⏴/⏶ 跳到空中</span><span class="combo-arrow">➜</span>${dirTag}<span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 右鍵</span>`;
      }
      return `${dirTag}<span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 右鍵</span>`;
    }
    if (act === 'b') {
      if (normDir === 'up') {
        return `<span class="key-cap small btn-jump">⏴/⏶ 二段跳</span><span class="combo-arrow">➜</span><span class="key-cap small stick">⬆️ 推上</span><span class="combo-plus">＋</span><span class="key-cap small btn-b">🅱️ 下鍵</span>`;
      }
      return `${dirTag}<span class="combo-plus">＋</span><span class="key-cap small btn-b">🅱️ 下鍵</span>`;
    }
    if (act === 'jump') {
      return `<span class="key-cap small btn-jump">輕點 ⏴/⏶ (短跳)</span><span class="combo-or">或</span><span class="key-cap small btn-jump">長按 ⏴/⏶ (大跳)</span>`;
    }
    if (act === 'shorthop_a') {
      return `<span class="key-cap small btn-jump">⏴/⏶跳躍</span><span class="combo-plus">同時按下 ＋</span><span class="key-cap small btn-a">🅰️ 右鍵</span>`;
    }
    if (act.startsWith('smash_')) {
      const cLabel = act === 'smash_up' ? '推上 ⬆️' : (act === 'smash_down' ? '推下 ⬇️' : '推左右 ↔️');
      return `<span class="key-cap small stick">💥 搖桿猛推 ${cLabel}</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同時按(可蓄力)</span><span class="combo-or">或</span><span class="key-cap small btn-a">A＋B 同按</span>`;
    }
    if (act === 'shield') {
      if (state === 'air') {
        return `<span class="key-cap small btn-zr">🛡️ 撞牆前 0.2s 按 SR (受身)</span><span class="combo-or">或</span><span class="key-cap small btn-zr">空中按 SR (閃避)</span>`;
      }
      return `<span class="key-cap small btn-zr">🛡️ 長按 SR</span><span class="combo-arrow">➜ 擋下反擊按</span><span class="key-cap small btn-a">🅰️ 盾抓</span>`;
    }
    if (act === 'grab') {
      return `<span class="key-cap small btn-l">🤼 按 SL 抓住</span><span class="combo-arrow">➜ 抓住後</span><span class="key-cap small stick">推場外甩出</span>`;
    }
    return dirTag;
  }

  function updateSimulatorDisplay() {
    updateAnalogVisuals();
    const normDir = getNormalizedDir();
    let key = '';

    if (simAct === 'a') {
      key = `${simState}_${normDir}_a`;
    } else if (simAct === 'b') {
      key = `any_${normDir === 'dash' ? 'side' : normDir}_b`;
    } else if (simAct === 'jump') {
      key = 'any_jump';
    } else if (simAct === 'shorthop_a') {
      key = 'any_shorthop_a';
    } else if (simAct === 'shield') {
      key = `${simState}_shield`;
    } else if (simAct === 'grab') {
      key = 'any_grab';
    } else if (simAct.startsWith('smash_')) {
      key = simAct;
    }

    const info = MOVE_PREVIEWS[key] || MOVE_PREVIEWS['ground_neutral_a'];
    const bounceKeysHtml = buildBouncePromptKeys(normDir, simAct, simState);
    const stateTagHtml = `<span class="sim-state-tag">${simState === 'air' ? '🪂 空中' : '🏃 地面'}</span>`;

    if (simComboBadge) simComboBadge.innerHTML = `${stateTagHtml}${bounceKeysHtml}`;
    if (simBounceKeys) simBounceKeys.innerHTML = bounceKeysHtml;
    if (simCategory) simCategory.textContent = info.category;
    if (simMoveName) simMoveName.textContent = info.name;
    if (simMoveDesc) simMoveDesc.innerHTML = escapeHtml(info.desc).replace(/\n/g, '<br>');
    if (simProTip) simProTip.innerHTML = `💡 <strong>實戰操作提示：</strong>${escapeHtml(info.tip)}`;

    if (simResultCard) {
      simResultCard.classList.toggle('flash-smash', simAct.startsWith('smash_'));
    }
  }

  // Web Audio API Sound Synthesizer (Zero-dependency SFX)
  let audioCtx = null;
  let isSoundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playHitSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      // AudioContext fallback
    }
  }

  function playSmashSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  function playShieldSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(650, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {}
  }

  function playCoinSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(987.77, now);
      osc1.frequency.setValueAtTime(1318.51, now + 0.08);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc1.connect(gain);
      gain.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.3);
    } catch (e) {}
  }

  function playErrorSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.setValueAtTime(110, now + 0.1);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Smash IQ Quiz Database
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      badge: '實戰保命情境',
      question: '你被對手一記重拳擊飛到舞台左下方外海深淵，眼看就要摔出螢幕底端死亡了，最標準且成功的保命手把操作是？',
      options: [
        { key: 'A', text: '在空中驚慌地狂點右鍵 (A) 祈禱能打空氣飛回來', isCorrect: false, explain: '普通攻擊（A）沒有升力，只會讓你在空中揮拳加劇下墜速度！' },
        { key: 'B', text: '搖桿朝舞台推＋先按空中二段跳（上/左鍵）上升，並在頂點按下「↑ ＋ 🅱️ (下鍵)」（上必殺回歸技）磁吸懸崖', isCorrect: true, explain: '賓果！二段跳獲得基礎高度，頂點接 ↑＋B 回歸技是單支 Joy-Con 回場的黃金公式！' },
        { key: 'C', text: '按住右上肩鍵 SR 不放打開防護罩防禦', isCorrect: false, explain: '在空中按 SR 只會觸發「空中閃避」，如果隨便亂按會陷入長僵直直接掉入深淵摔死！' },
        { key: 'D', text: '向下推搖桿發動下踢', isCorrect: false, explain: '向下推會觸發快速下墜（Fast Fall），只會讓你以兩倍速度墜海自盡！' }
      ]
    },
    {
      id: 2,
      badge: '破防剋制情境',
      question: '對手被打到 90% 殘血時，極度害怕被打飛，於是站在原地一直按住 SR 開著彩色防護罩龜縮防守，你該如何一招制服他？',
      options: [
        { key: 'A', text: '衝上去用連續普通刺拳（A連點）一直打他的盾牌', isCorrect: false, explain: '防護罩能完全吸收輕拳傷害，對手出盾瞬間就能將你反打！' },
        { key: 'B', text: '在遠處壓下搖桿開心炫耀嘲諷對手', isCorrect: false, explain: '嘲諷雖然很氣人，但完全無法打破對手的防禦防線。' },
        { key: 'C', text: '直接跑過去按一下左上肩鍵「SL」（抓住 / Grab）強制破盾將他甩飛！', isCorrect: true, explain: '太帥了！大亂鬥的核心天條：「抓住（SL）無視任何防護罩」，一抓就破！' },
        { key: 'D', text: '等在原地等對手的防護罩自己消失', isCorrect: false, explain: '防護罩確實會隨時間變小，但主動上前用 SL 抓住才是搶佔節奏的勝利法寶。' }
      ]
    },
    {
      id: 3,
      badge: '致命斬殺情境',
      question: '對手的累積傷害已經來到 130% 紅字瀕危了，但你一直用普通攻擊打他，他雖然被打痛卻總能飄回舞台。單支 Joy-Con 沒有右搖桿，此時你應該使出什麼招式送他上路？',
      options: [
        { key: 'A', text: '趁對手出招落空陷入僵直時，朝對手方向「搖桿猛推 ＋ 右鍵(A) 同時按下（猛擊 Smash）」或空後擊飛', isCorrect: true, explain: '正解！單支 Joy-Con 用「搖桿猛推＋A 同按（或設定 B+A 同按）」就能打出最強爆發的 Smash 猛擊，100% 以上命中直接 KO 出場！' },
        { key: 'B', text: '繼續按住 A 原地連續揮出小刺拳蹭傷害到 200%', isCorrect: false, explain: '普通刺拳只會把人打出小硬直，沒有終結擊飛力，打到 250% 都打不死人！' },
        { key: 'C', text: '主動跳出懸崖外自殺給對手看', isCorrect: false, explain: '除非你想把勝利拱手讓給朋友，否則千萬不要做傻事！' },
        { key: 'D', text: '按暫停鍵查看對手角色說明書', isCorrect: false, explain: '實戰中按下暫停會被朋友打！用猛推＋A 狠狠擊飛他才是王道！' }
      ]
    },
    {
      id: 4,
      badge: 'Joy-Con 神設置',
      question: '為什麼所有大亂鬥老手都強烈建議新手進按鍵設定「關閉推上搖桿跳躍（Tap Jump / 上方向跳躍）」？',
      options: [
        { key: 'A', text: '因為開著推上跳躍會導致 Joy-Con 搖桿特別容易飄移壞掉', isCorrect: false, explain: '搖桿飄移是硬體結構磨損，跟這個設置沒有直接關係。' },
        { key: 'B', text: '避免想使出「上強攻擊（UTilt）」或「上必殺回場」時誤觸跳躍，讓指令精確分明！', isCorrect: true, explain: '滿分觀念！關閉推上跳躍後，你想跳躍就專注按上/左鍵，推向上＋A 就能隨心所欲打出防空攻擊，絕不誤跳！' },
        { key: 'C', text: '因為關閉之後角色的跳躍高度會自動變成兩倍', isCorrect: false, explain: '跳躍高度是由角色數值決定的，手把設定不會改變物理跳躍高度。' },
        { key: 'D', text: '任天堂電競大賽官方強烈要求的防作弊規範', isCorrect: false, explain: '這只是個人的操作習慣設置，官方從未限制選手是否開啟。' }
      ]
    },
    {
      id: 5,
      badge: '出盾反制神技',
      question: '當對手朝你飛奔而來踢出一記大招，你剛好按住「SR」防護罩完美擋下了這一擊，對手立刻陷入出招後僵直，你此時最快的神反擊是？',
      options: [
        { key: 'A', text: '按住防護罩 SR 不放，直接按一下「右鍵 A」發動「出盾抓投（Shield Grab）」立即將他反摔！', isCorrect: true, explain: '高手絕技！按住 SR 點右鍵 A 可以完全不經歷收盾僵直，以最快速度抓投反制，瞬間攻守互換！' },
        { key: 'B', text: '鬆開 SR 慢慢向後轉身逃跑', isCorrect: false, explain: '鬆開防護罩會有收盾僵直，逃跑只會白白把大好的反打機會送掉！' },
        { key: 'C', text: '繼續按著防護罩不動直到防護罩縮小炸開自己昏厥', isCorrect: false, explain: '防護罩一直按著會爆開（Shield Break），角色會陷入長達 5 秒的昏厥任人痛扁！' },
        { key: 'D', text: '放下手把跟對手握手言和', isCorrect: false, explain: '大亂鬥的世界沒有握手言和，出盾抓投摔飛他才是正解！' }
      ]
    },
    {
      id: 6,
      badge: '進階空戰捷徑',
      question: '大亂鬥中「短跳＋空中攻擊」是非常強勢的貼地壓制技巧，但如果新手手速不夠快總是跳太高怎麼辦？官方內建了什麼偷吃步一鍵按法？',
      options: [
        { key: 'A', text: '同時按下「跳躍鍵（上或左）＋ 右鍵（A）」，系統會 100% 自動使出完美短跳＋空中攻擊！', isCorrect: true, explain: '正確！這是《特別版》專門為玩家設計的「一鍵短跳空攻（Macro）」，單支 Joy-Con 一樣好按！' },
        { key: 'B', text: '連按三次下鍵 B 就可以直接觸發貼地滑翔攻擊', isCorrect: false, explain: '連按 B 鍵只會一直放普通必殺技，跟短跳空攻完全無關喔！' },
        { key: 'C', text: '先按住 SL 再推搖桿', isCorrect: false, explain: '這樣只會觸發抓空動作，無法觸發短跳空攻。' },
        { key: 'D', text: '去系統把畫質調低到 480p 就能自動變矮', isCorrect: false, explain: '畫質不會影響角色跳躍高度喔！請善用「跳躍鍵 + A」同按一鍵密技！' }
      ]
    },
    {
      id: 7,
      badge: '撞牆保命神技',
      question: '當你被對手的猛擊轟飛，整個人高速飛向舞台下方的「懸崖牆壁」或「地面」準備像彈珠一樣反彈慘死時，該怎麼做才救得回來？',
      options: [
        { key: 'A', text: '趕快閉上眼睛等待螢幕出現 GAME OVER', isCorrect: false, explain: '別輕易放棄！大亂鬥有一招叫「受身（Tech）」可以在最後 0.2 秒逆天改命！' },
        { key: 'B', text: '在即將撞擊地面或牆壁前的瞬間按下右上肩鍵「SR」（防護罩），觸發「受身（Tech）」抵消反彈力道！', isCorrect: true, explain: '滿分判斷！看到綠色閃光波紋出現就代表受身成功，角色會直接貼穩牆壁或地板，立刻就能接上 B 回場！' },
        { key: 'C', text: '在空中不停旋轉搖桿並按住 A 鍵', isCorrect: false, explain: '被擊飛處於硬直狀態時無法靠普通攻擊消除撞牆反彈力道。' },
        { key: 'D', text: '狂按暫停鍵把對手卡住', isCorrect: false, explain: '線下對戰隨便按暫停不僅沒禮貌，更不會讓你停止飛出畫面喔！' }
      ]
    },
    {
      id: 8,
      badge: '特訓菜單觀念',
      question: '《真・新手向入門攻略》特別提醒：新手想靠對打電腦（CPU）練習實戰立回與確殺節奏時，為什麼強烈建議打「7 級電腦」而不是「9 級電腦」？',
      options: [
        { key: 'A', text: '因為 9 級電腦贏了沒有金幣獎勵，7 級獎勵最多', isCorrect: false, explain: '金幣獎勵不是主要原因，重點在於電腦的 AI 反應邏輯差異！' },
        { key: 'B', text: '因為 9 級電腦有非人類的「讀指令極限閃避與完美防禦」，對戰節奏失真；7 級電腦才最接近真實人類玩家！', isCorrect: true, explain: '完全正確！9 級電腦能針對你按鍵的瞬間做出 1 幀精準格擋，跟它打只會學壞；打 7 級電腦練習觀察動作破綻與 100%+ 確殺才是最有效率的菜單！' },
        { key: 'C', text: '因為選擇 9 級電腦需要購買付費 DLC 才能解鎖', isCorrect: false, explain: '所有難度都是免費內建的，不必額外購買喔！' },
        { key: 'D', text: '因為 7 級電腦不會攻擊，只會站著讓你當木樁打', isCorrect: false, explain: '只會站著不動的是訓練模式的木樁；7 級電腦已經相當靈活，只是不會像 9 級一樣不合理讀指令。' }
      ]
    }
  ];

  let currentQuizIdx = 0;
  let quizCorrectCount = 0;
  let quizScore = 0;
  let quizAnswered = false;

  // Quiz UI Elements
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizStepIndicator = document.getElementById('quizStepIndicator');
  const quizCurrentScore = document.getElementById('quizCurrentScore');
  const quizCardStage = document.getElementById('quizCardStage');
  const quizResultBox = document.getElementById('quizResultBox');
  const quizResultBadge = document.getElementById('quizResultBadge');
  const quizResultTitle = document.getElementById('quizResultTitle');
  const quizResultScoreText = document.getElementById('quizResultScoreText');
  const quizResultFeedback = document.getElementById('quizResultFeedback');
  const btnQuizRetry = document.getElementById('btnQuizRetry');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');

  function renderQuizQuestion(idx) {
    if (!quizCardStage) return;
    const q = QUIZ_QUESTIONS[idx];
    if (!q) return;

    quizAnswered = false;
    const total = QUIZ_QUESTIONS.length;
    const progressPercent = Math.round(((idx) / total) * 100);
    if (quizProgressFill) quizProgressFill.style.width = `${progressPercent}%`;
    if (quizStepIndicator) quizStepIndicator.textContent = `問題 ${idx + 1} / ${total}`;
    if (quizCurrentScore) quizCurrentScore.textContent = `當前得分：${quizScore} 分`;

    if (quizResultBox) quizResultBox.style.display = 'none';
    quizCardStage.style.display = 'block';

    let optionsHtml = '';
    q.options.forEach((opt, oIdx) => {
      optionsHtml += `
        <button class="quiz-opt-btn" data-opt="${oIdx}" type="button">
          <span class="quiz-opt-key">${opt.key}</span>
          <span class="quiz-opt-text">${escapeHtml(opt.text)}</span>
        </button>
      `;
    });

    quizCardStage.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-card-badge">${escapeHtml(q.badge)}</div>
        <h3 class="quiz-question-title">${escapeHtml(q.question)}</h3>
        <div class="quiz-options-list" id="quizOptionsList">
          ${optionsHtml}
        </div>
        <div id="quizFeedbackContainer"></div>
      </div>
    `;

    // Bind option clicks
    const optButtons = quizCardStage.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizAnswered) return;
        const chosenIdx = parseInt(btn.dataset.opt, 10);
        handleSelectQuizOption(chosenIdx, optButtons, q);
      });
    });
  }

  function handleSelectQuizOption(chosenIdx, buttons, questionData) {
    quizAnswered = true;
    const chosenOpt = questionData.options[chosenIdx];
    const isCorrect = chosenOpt.isCorrect;

    buttons.forEach((b, i) => {
      b.disabled = true;
      if (questionData.options[i].isCorrect) {
        b.classList.add('correct');
      } else if (i === chosenIdx) {
        b.classList.add('wrong');
      }
    });

    if (isCorrect) {
      quizCorrectCount++;
      quizScore = Math.round((quizCorrectCount / QUIZ_QUESTIONS.length) * 100);
      playCoinSound();
      showToast(`🎉 答對了！（目前 ${quizScore} 分）`);
    } else {
      playErrorSound();
      showToast('❌ 答錯了！請看詳細解析');
    }

    if (quizCurrentScore) {
      quizCurrentScore.textContent = `當前得分：${quizScore} 分`;
    }

    const fbContainer = document.getElementById('quizFeedbackContainer');
    if (fbContainer) {
      const isLast = currentQuizIdx >= QUIZ_QUESTIONS.length - 1;
      fbContainer.innerHTML = `
        <div class="quiz-feedback-box">
          <div class="quiz-fb-status ${isCorrect ? 'correct' : 'wrong'}">
            <span>${isCorrect ? '✅ 答對了！神判斷！' : '❌ 答錯了！觀念修正'}</span>
          </div>
          <div class="quiz-fb-explain">
            ${escapeHtml(chosenOpt.explain)}
          </div>
        </div>
        <div style="text-align: right;">
          <button class="btn-quiz-next" id="btnQuizNext" type="button">
            <span>${isLast ? '查看我的實戰戰力結算 ➔' : '下一題 ➔'}</span>
          </button>
        </div>
      `;

      const nextBtn = document.getElementById('btnQuizNext');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          playHitSound();
          if (isLast) {
            renderQuizResult();
          } else {
            currentQuizIdx++;
            renderQuizQuestion(currentQuizIdx);
          }
        });
      }
    }
  }

  function renderQuizResult() {
    if (quizProgressFill) quizProgressFill.style.width = '100%';
    if (quizCardStage) quizCardStage.style.display = 'none';
    if (quizResultBox) quizResultBox.style.display = 'block';

    playSmashSound();

    let badge = '';
    let title = '';
    let feedback = '';

    const total = QUIZ_QUESTIONS.length;
    if (quizScore === 100) {
      badge = '🏆 S 級・大亂鬥神級戰神';
      title = `${total} 題全對！實戰觀念無懈可擊！`;
      feedback = '你已經完全通曉 Up-B 回場、SL 破盾抓住、短跳一鍵密技、SR 撞牆受身與「猛推＋A」猛擊斬殺！握著單支 Joy-Con 立刻開一把對局，保證讓朋友驚呼「你怎麼突然變這麼強」！';
    } else if (quizScore >= 75) {
      badge = '🥇 A 級・實戰頂級鬥士';
      title = '觀念非常扎實，勝率翻倍！';
      feedback = '你已經掌握了絕大多數大亂鬥勝負天條！只要在對戰中保持冷靜不慌亂按鍵，已經能夠輕鬆應對絕大多數新手局。';
    } else if (quizScore >= 50) {
      badge = '🥈 B 級・潛力進階新人';
      title = '及格出師！稍加練習就能更強！';
      feedback = '核心觀念已經具備，但在緊急情境下（如撞牆受身或短跳控距）可能還會有些許猶豫，多在訓練場照著「15分特訓菜單」練一輪，勝率會大幅攀升！';
    } else {
      badge = '🥉 C 級・重裝修煉學徒';
      title = '別氣餒！神招速查網是你的隨身小抄！';
      feedback = '記住大亂鬥兩大黃金定律：① 掉下懸崖永遠按「二段跳＋↑＋B」回場；② 對手龜盾就按「L 抓投」！把本頁加入書籤，邊打邊看很快就能出師！';
    }

    if (quizResultBadge) quizResultBadge.textContent = badge;
    if (quizResultTitle) quizResultTitle.textContent = title;
    if (quizResultScoreText) quizResultScoreText.textContent = `總得分：${quizScore} 分（答對 ${quizCorrectCount} / ${total} 題）`;
    if (quizResultFeedback) quizResultFeedback.textContent = feedback;
  }

  function resetQuiz() {
    currentQuizIdx = 0;
    quizCorrectCount = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuizQuestion(0);
    playCoinSound();
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // 1. Character Select Tabs
    if (charTabsBar) {
      charTabsBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.char-tab-btn');
        if (!btn) return;
        const charKey = btn.dataset.char;
        if (!charKey) return;

        charTabsBar.querySelectorAll('.char-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentActiveChar = charKey;
        renderCharacterDetail(charKey);
        playHitSound();
      });
    }

    // Mobile Subnav Pill Clicks
    document.querySelectorAll('.mobile-subnav-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        playHitSound();
      });
    });

    // 2.5 Interactive Recovery 3-Step Walkthrough (回場三步驟)
    const RECOVERY_STATUS_TEXT = {
      1: 'STEP 1｜搖桿朝向舞台 ＋ 上/左鍵上跳：搖桿持續朝舞台方向推到底減速拉回，配合按「上/左鍵」斜上方上跳拉近懸崖！',
      2: 'STEP 2｜頂點按上必殺：跳躍最高點按「▲ ＋ 🅱️ (下鍵必殺)」升龍竄升，自動磁吸抓住懸崖！',
      3: 'STEP 3｜抓崖安全起身：利用抓崖短暫無敵，依敵人位置按「推舞台 / SR / A / 跳」安全回台！'
    };

    const recFighter = document.getElementById('recFighter');
    const recStepBadge = document.getElementById('recStepBadge');
    const recStatusText = document.getElementById('recStatusText');
    const recDots = document.querySelectorAll('.rec-path-dot');
    const recCards = document.querySelectorAll('.rec-step-card');
    const btnPlayRecoveryDemo = document.getElementById('btnPlayRecoveryDemo');
    let recDemoTimer = null;

    function setRecoveryStep(stepNum, playSfx = true) {
      if (recFighter) {
        recFighter.className = `rec-fighter step-${stepNum}`;
      }
      if (recStepBadge) recStepBadge.textContent = `STEP ${stepNum}`;
      if (recStatusText) recStatusText.textContent = RECOVERY_STATUS_TEXT[stepNum] || '';
      recDots.forEach(d => d.classList.toggle('active', Number(d.dataset.recstep) === stepNum));
      recCards.forEach(c => c.classList.toggle('active', Number(c.dataset.recstep) === stepNum));
      if (playSfx) {
        if (stepNum === 2 || stepNum === 3) {
          playCoinSound();
        } else {
          playHitSound();
        }
      }
    }

    recDots.forEach(dot => {
      dot.addEventListener('click', () => {
        if (recDemoTimer) { clearInterval(recDemoTimer); recDemoTimer = null; }
        setRecoveryStep(Number(dot.dataset.recstep) || 1);
      });
    });

    recCards.forEach(card => {
      card.addEventListener('click', () => {
        if (recDemoTimer) { clearInterval(recDemoTimer); recDemoTimer = null; }
        setRecoveryStep(Number(card.dataset.recstep) || 1);
      });
    });

    if (btnPlayRecoveryDemo) {
      btnPlayRecoveryDemo.addEventListener('click', () => {
        if (recDemoTimer) {
          clearInterval(recDemoTimer);
          recDemoTimer = null;
        }
        let step = 1;
        setRecoveryStep(step, true);
        recDemoTimer = setInterval(() => {
          step++;
          if (step > 3) {
            clearInterval(recDemoTimer);
            recDemoTimer = null;
            showToast('✅ 已完成回場三步驟標準保命示範！');
            return;
          }
          setRecoveryStep(step, true);
        }, 1250);
      });
    }

    // 3. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const qBtn = item.querySelector('.faq-question-btn');
      if (qBtn) {
        qBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
            playHitSound();
          }
        });
      }
    });

    // 4. Switch Controller Lab Interactive Controls
    // 4a. Ground / Air State Switch
    simStateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        simStateBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        simState = btn.dataset.state || 'ground';
        updateSimulatorDisplay();
        playHitSound();
        showToast(simState === 'air' ? '🪂 已切換為【空中狀態】試按空戰招式' : '🏃 已切換為【地面狀態】試按地面招式');
      });
    });

    // 4b. Left Analog Stick Dragging + Direction Hotspots
    function setStickDir(newDir, playSfx = true) {
      simDir = newDir;
      if (simAct.startsWith('smash_')) {
        simAct = 'a';
      }
      updateSimulatorDisplay();
      if (playSfx) playHitSound();
    }

    dirHotspots.forEach(btn => {
      btn.addEventListener('click', () => {
        setStickDir(btn.dataset.dir || 'neutral', true);
      });
    });

    stickMiniBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setStickDir(btn.dataset.dir || 'neutral', true);
      });
    });

    if (leftAnalogWell && leftAnalogKnob) {
      let isDraggingStick = false;

      function handleStickPointerMove(clientX, clientY) {
        const rect = leftAnalogWell.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < 14) {
          if (simDir !== 'neutral') setStickDir('neutral', false);
          return;
        }

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        let nextDir = 'neutral';
        if (angle >= -45 && angle < 45) {
          nextDir = dist > 46 ? 'dash' : 'side-right';
        } else if (angle >= 45 && angle < 135) {
          nextDir = 'down';
        } else if (angle >= -135 && angle < -45) {
          nextDir = 'up';
        } else {
          nextDir = 'side-left';
        }

        if (nextDir !== simDir) {
          setStickDir(nextDir, true);
        }
      }

      leftAnalogWell.addEventListener('pointerdown', (e) => {
        isDraggingStick = true;
        leftAnalogWell.setPointerCapture(e.pointerId);
        handleStickPointerMove(e.clientX, e.clientY);
      });

      leftAnalogWell.addEventListener('pointermove', (e) => {
        if (!isDraggingStick) return;
        handleStickPointerMove(e.clientX, e.clientY);
      });

      leftAnalogWell.addEventListener('pointerup', (e) => {
        isDraggingStick = false;
        try { leftAnalogWell.releasePointerCapture(e.pointerId); } catch (err) {}
      });
    }

    // 4c. Action Triggers (Face buttons, Shoulders, Macro, C-Stick)
    function triggerAction(actName) {
      simAct = actName;
      updateSimulatorDisplay();
      if (actName.startsWith('smash_')) {
        playSmashSound();
      } else if (actName === 'shield') {
        playShieldSound();
      } else if (actName === 'shorthop_a') {
        playCoinSound();
      } else {
        playHitSound();
      }
      if (simMoveName) {
        showToast(`🎮 試按：${simMoveName.textContent}`);
      }
    }

    faceButtons.forEach(btn => {
      btn.addEventListener('click', () => triggerAction(btn.dataset.act || 'a'));
    });

    shoulderButtons.forEach(btn => {
      btn.addEventListener('click', () => triggerAction(btn.dataset.act || 'shield'));
    });

    if (vcBtnShortHopA) {
      vcBtnShortHopA.addEventListener('click', () => {
        simState = 'air';
        simStateBtns.forEach(b => b.classList.toggle('active', b.dataset.state === 'air'));
        triggerAction('shorthop_a');
      });
    }

    cDirButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cdir = btn.dataset.cdir || 'side';
        triggerAction(`smash_${cdir}`);
      });
    });

    // 4d. One-Click Combo Presets
    simPresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        if (preset === 'dash_a') {
          simState = 'ground';
          simDir = 'dash';
          simAct = 'a';
          playSmashSound();
        } else if (preset === 'shorthop_a') {
          simState = 'air';
          simDir = 'side-right';
          simAct = 'shorthop_a';
          playCoinSound();
        } else if (preset === 'up_b') {
          simState = 'air';
          simDir = 'up';
          simAct = 'b';
          playCoinSound();
        } else if (preset === 'shield_grab') {
          simState = 'ground';
          simDir = 'neutral';
          simAct = 'shield';
          playShieldSound();
        } else if (preset === 'tech') {
          simState = 'air';
          simDir = 'neutral';
          simAct = 'shield';
          playShieldSound();
        }
        simStateBtns.forEach(b => b.classList.toggle('active', b.dataset.state === simState));
        updateSimulatorDisplay();
        if (simMoveName) {
          showToast(`⚡ 已示範：${simMoveName.textContent}`);
        }
      });
    });

    // 4e. Keyboard Interactive Test-Press Support (Active when Controller Lab is in view)
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      const simEl = document.getElementById('gamepadSimulator');
      if (simEl) {
        const rect = simEl.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) return;
      }
      const k = e.key.toLowerCase();
      if (k === 'w') { setStickDir('up'); }
      else if (k === 's') { setStickDir('down'); }
      else if (k === 'a') { setStickDir('side-left'); }
      else if (k === 'd') { setStickDir('side-right'); }
      else if (k === 'q') { setStickDir('neutral'); }
      else if (k === 'j') { triggerAction('a'); }
      else if (k === 'k') { triggerAction('b'); }
      else if (k === ' ') { e.preventDefault(); triggerAction('jump'); }
      else if (k === 'l') { triggerAction('shield'); }
      else if (k === 'u') { triggerAction('grab'); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); triggerAction('smash_up'); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); triggerAction('smash_down'); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); triggerAction('smash_side'); }
    });

    // 5. Quiz Retry Button
    if (btnQuizRetry) {
      btnQuizRetry.addEventListener('click', resetQuiz);
    }

    // 6. Quick Search Functionality
    if (quickSearchInput) {
      quickSearchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        handleSearch(q);
      });

      if (btnSearchClear) {
        btnSearchClear.addEventListener('click', () => {
          quickSearchInput.value = '';
          btnSearchClear.style.display = 'none';
          handleSearch('');
        });
      }
    }

    // 6b. Interactive Left Stick + A Spatial Explorer
    const ATTACK_STICK_DATA = {
      ground: {
        badgeClass: 'ground',
        center: {
          label: '原地連續刺拳 (Jab)',
          badge: '地面普攻',
          speed: '發生最快・2~4幀',
          comboHtml: '<span class="key-cap small stick">原地 (不推)</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 連點</span>',
          title: '原地連續刺拳 / 百烈拳 (Jab)',
          desc: '角色站在原地連續揮出刺拳或百烈重擊。全遊戲出招速度最快，是近距離防身第一選擇！',
          tip: '💡 <strong>實戰用法：</strong>被對手近身纏鬥不知道怎麼辦時，立刻連點 A 鍵搶節奏，能瞬間打斷對手前衝！'
        },
        up: {
          label: '上強攻擊 (防空)',
          badge: '對空神招',
          speed: '防空截擊必備',
          comboHtml: '<span class="key-cap small stick">向上推 ▲</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 鍵</span>',
          title: '上強攻擊 (Up Tilt / UTilt)',
          desc: '朝著正上方踢腿或向上挑劍。是全遊戲最頂級的「防空技（Anti-Air）」！',
          tip: '💡 <strong>實戰用法：</strong>對手從空中跳下來想踩你時，站在地面用這招直接將他挑飛進入浮空硬直！'
        },
        down: {
          label: '下強攻擊 (掃腿)',
          badge: '下段刺擊',
          speed: '守懸崖偷襲神招',
          comboHtml: '<span class="key-cap small stick">向下推 ▼</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 鍵</span>',
          title: '下強攻擊 (Down Tilt / DTilt)',
          desc: '蹲伏時伸腿掃堂腿或貼地刺擊。高度極低，能直接打中抓住懸崖邊緣的對手！',
          tip: '💡 <strong>實戰用法：</strong>站在懸崖邊守對手爬上來時按這招，能把掛在崖邊的對手再次打出場外！'
        },
        left: {
          label: '橫向強攻擊 (牽制)',
          badge: '強攻擊 (Tilt)',
          speed: '中距離立回牽制',
          comboHtml: '<span class="key-cap small stick">輕推 ◀ / ▶</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 鍵</span>',
          title: '橫向強攻擊 (Forward Tilt / FTilt)',
          desc: '朝前方平推揮出強拳、踢腿或揮劍。攻擊距離比刺拳更長，可以用來保持安全距離。',
          tip: '💡 <strong>按法關鍵：</strong>搖桿「輕輕」往前推＋A。如果推得太猛太急會誤觸成 Smash 猛擊！'
        },
        right: {
          label: '衝刺攻擊 (DA突進)',
          badge: '突進起手之王',
          speed: '覆蓋 1/3 舞台',
          comboHtml: '<span class="key-cap small dash">快推到底 ▶</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 鍵</span>',
          title: '衝刺攻擊 (Dash Attack / DA)',
          desc: '藉助跑步的慣性向前大滑步突進重擊，徹底解決「手短打不到人」的新手致命痛點！',
          tip: '💡 <strong>實戰用法：</strong>抓準對手大招落空或翻滾落地破綻，直接快跑衝過去按 A 必中挑飛！'
        }
      },
      smash: {
        badgeClass: 'smash',
        center: {
          label: '長按蓄力 (1.4倍威力)',
          badge: 'Smash 蓄力秘技',
          speed: '威力最高 × 1.4 倍',
          comboHtml: '<span class="key-cap small stick">猛推方向</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">長按 🅰️ 蓄力</span>',
          title: 'Smash 猛擊蓄力原理（單支 Joy-Con 按法）',
          desc: '單支 Joy-Con 沒有右搖桿！將「搖桿朝目標方向猛推到底的同時按下右鍵 A」就能發動猛擊；同按時不放開 A 還能蓄力，最多提升 1.4 倍傷害！',
          tip: '💡 <strong>偷吃步秘技：</strong>在按鍵設定左下角打開「B＋A 猛擊」，同時按 A＋B 也能一鍵打出猛擊！'
        },
        up: {
          label: '上猛擊 (天頂爆殺)',
          badge: 'Smash 斬殺',
          speed: '向天頂爆殺',
          comboHtml: '<span class="key-cap small stick">猛推 ▲</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同按</span>',
          title: '上猛擊 (Up Smash / USmash)',
          desc: '頭頂強力重錘或倒掛金鉤大爆破！直接將正上方的對手轟出遊戲螢幕頂部天花板！',
          tip: '💡 <strong>實戰用法：</strong>對手站在浮空平台上，你在下方直接「猛推 ▲ ＋ A 同按」，送他直接昇天！'
        },
        down: {
          label: '下猛擊 (雙向通殺)',
          badge: 'Smash 斬殺',
          speed: '抓翻滾雙向通殺',
          comboHtml: '<span class="key-cap small stick">猛推 ▼</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同按</span>',
          title: '下猛擊 (Down Smash / DSmash)',
          desc: '前後兩側同時產生大範圍打擊判定。專門制裁喜歡「翻滾（Roll）」繞到你身後的對手！',
          tip: '💡 <strong>實戰用法：</strong>對手被逼入絕境喜歡滾來滾去時，在原地「猛推 ▼ ＋ A 同按」，前後通殺！'
        },
        left: {
          label: '橫猛擊・左 (85% KO)',
          badge: 'Smash 斬殺',
          speed: '85%+ 一擊必殺',
          comboHtml: '<span class="key-cap small stick">猛推 ◀</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同按</span>',
          title: '橫向猛擊・左 (Forward Smash)',
          desc: '全遊戲最具毀滅擊飛力的招牌殺手鐧！當對手 % 數來到 85% 以上時，往左猛推＋A 一擊轟出場外！',
          tip: '💡 <strong>Joy-Con 按法：</strong>搖桿猛推向左的同時按下右鍵 A（不放可蓄力），看到對手破綻直接 KO！'
        },
        right: {
          label: '橫猛擊・右 (85% KO)',
          badge: 'Smash 斬殺',
          speed: '85%+ 一擊必殺',
          comboHtml: '<span class="key-cap small stick">猛推 ▶</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同按</span>',
          title: '橫向猛擊・右 (Forward Smash)',
          desc: '全遊戲最具毀滅擊飛力的招牌殺手鐧！當對手 % 數來到 85% 以上時，往右猛推＋A 一擊轟出場外！',
          tip: '💡 <strong>Joy-Con 按法：</strong>搖桿猛推向右的同時按下右鍵 A，看到對手收招破綻一發直接 KO！'
        }
      },
      air: {
        badgeClass: 'air',
        center: {
          label: '空中普攻 (Nair護身)',
          badge: '空中保命',
          speed: '護體金鐘罩',
          comboHtml: '<span class="key-cap small">空中跳起</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ (不推搖桿)</span>',
          title: '空中普通攻擊 (Neutral Air / Nair)',
          desc: '角色在半空中原地旋轉身體或踢腿，身體四周自帶保護圈，出招極快！',
          tip: '💡 <strong>實戰用法：</strong>從高空落回地面時按這招，能打斷試圖在地面抓你落點的對手，安全落地！'
        },
        up: {
          label: '空上攻擊 (頂出天花板)',
          badge: '空中追擊',
          speed: '連續浮空頂飛',
          comboHtml: '<span class="key-cap small">空中跳起</span><span class="combo-plus">＋</span><span class="key-cap small stick">▲</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️</span>',
          title: '空中上方向攻擊 (Up Air / Uair)',
          desc: '朝正上方揮擊，把已經浮空在頭頂的對手繼續往高空頂起，甚至直接送出螢幕頂端！',
          tip: '💡 <strong>實戰用法：</strong>先用上強攻擊把對手挑空，接著立刻二段跳追上去接空上攻擊！'
        },
        down: {
          label: '空下隕石 (踩死對手)',
          badge: '空中隕石',
          speed: '秒殺墜海絕技',
          comboHtml: '<span class="key-cap small">空中跳起</span><span class="combo-plus">＋</span><span class="key-cap small stick">▼</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️</span>',
          title: '空中下方向攻擊・隕石踩踏 (Dair)',
          desc: '在空中向下狠狠踩踏或下劈！許多角色帶有「隕石判定（Meteor Smash）」，將對手垂直砸入深淵！',
          tip: '💡 <strong>實戰用法：</strong>對手在懸崖外正要往回爬時，跳出懸崖凌空一腳踩下去，0% 也能直接送他摔死！'
        },
        left: {
          label: '空後攻擊 (背對爆踢)',
          badge: '空中高傷',
          speed: '高手必練神踢',
          comboHtml: '<span class="key-cap small">空中背對</span><span class="combo-plus">＋</span><span class="key-cap small stick">◀ 向後</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️</span>',
          title: '空中後方攻擊 (Back Air / Bair)',
          desc: '跳躍背對對手時向後揮出的重重一腳！絕大多數角色的空後擊飛力都比空前更誇張！',
          tip: '💡 <strong>實戰用法：</strong>高百分比時跳過對手頭頂轉身踢一腳，具有極高擊飛終結能力！'
        },
        right: {
          label: '空前攻擊 (貼地壓制)',
          badge: '空中壓制',
          speed: '配合跳+A超順手',
          comboHtml: '<span class="key-cap small btn-jump">⏴/⏶跳躍</span><span class="combo-plus">＋</span><span class="key-cap small btn-a">🅰️ 同按</span><span class="combo-plus">＋</span><span class="key-cap small stick">▶ 向前</span>',
          title: '空中前方攻擊 (Forward Air / Fair)',
          desc: '在空中面向對手揮拳或斬擊。範圍優秀且容易控制距離，是立回逼近的核心招式！',
          tip: '💡 <strong>必學捷徑：</strong>用「跳躍鍵(上/左) + A 同時按」觸發一鍵短跳空前，打完立刻落地續接刺拳！'
        }
      }
    };

    let atkExplorerMode = 'ground';
    let atkExplorerDir = 'center';

    const attackModeTabs = document.querySelectorAll('#attackModeTabs .attack-filter-btn');
    const atkDirNodes = document.querySelectorAll('.atk-dir-node');
    const atkStickKnob = document.getElementById('atkStickKnob');
    const atkDetailBadge = document.getElementById('atkDetailBadge');
    const atkDetailSpeed = document.getElementById('atkDetailSpeed');
    const atkDetailCombo = document.getElementById('atkDetailCombo');
    const atkDetailTitle = document.getElementById('atkDetailTitle');
    const atkDetailDesc = document.getElementById('atkDetailDesc');
    const atkDetailTip = document.getElementById('atkDetailTip');

    function renderAttackExplorer() {
      const modeData = ATTACK_STICK_DATA[atkExplorerMode];
      if (!modeData) return;

      // Update directional labels around the Left Stick
      const mapIds = {
        up: document.getElementById('atkNodeUp'),
        down: document.getElementById('atkNodeDown'),
        left: document.getElementById('atkNodeLeft'),
        right: document.getElementById('atkNodeRight'),
        center: document.getElementById('atkNodeCenter')
      };

      Object.entries(mapIds).forEach(([dirKey, btnEl]) => {
        if (!btnEl || !modeData[dirKey]) return;
        const titleSpan = btnEl.querySelector('.node-move-title');
        if (titleSpan) titleSpan.textContent = modeData[dirKey].label;
        btnEl.classList.toggle('active', dirKey === atkExplorerDir);
      });

      // Animate visual Left Stick displacement
      if (atkStickKnob) {
        const offsets = {
          center: 'translate(0px, 0px)',
          up: 'translate(0px, -16px)',
          down: 'translate(0px, 16px)',
          left: 'translate(-16px, 0px)',
          right: 'translate(16px, 0px)'
        };
        atkStickKnob.style.transform = offsets[atkExplorerDir] || offsets.center;
        atkStickKnob.classList.toggle('pushed', atkExplorerDir !== 'center');
      }

      // Render Right Detail Panel
      const move = modeData[atkExplorerDir] || modeData.center;
      if (atkDetailBadge) {
        atkDetailBadge.textContent = move.badge;
        atkDetailBadge.className = `atk-badge ${modeData.badgeClass}`;
      }
      if (atkDetailSpeed) atkDetailSpeed.textContent = move.speed;
      if (atkDetailCombo) atkDetailCombo.innerHTML = move.comboHtml;
      if (atkDetailTitle) atkDetailTitle.textContent = move.title;
      if (atkDetailDesc) atkDetailDesc.textContent = move.desc;
      if (atkDetailTip) atkDetailTip.innerHTML = move.tip;
    }

    attackModeTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        attackModeTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        atkExplorerMode = btn.dataset.atkmode || 'ground';
        renderAttackExplorer();
        playHitSound();
      });
    });

    atkDirNodes.forEach(btn => {
      btn.addEventListener('click', () => {
        atkExplorerDir = btn.dataset.atkdir || 'center';
        renderAttackExplorer();
        if (atkExplorerMode === 'smash') {
          playSmashSound();
        } else {
          playHitSound();
        }
      });
    });

    // Initial render for Left Stick + A Explorer
    renderAttackExplorer();

    // Spotlight click
    const daSpotlight = document.getElementById('dashAttackSpotlight');
    if (daSpotlight) {
      daSpotlight.addEventListener('click', () => {
        playSmashSound();
      });
    }

    // Step 1 Circular Stick click
    const stickStep1 = document.getElementById('stickStep1');
    if (stickStep1) {
      stickStep1.addEventListener('click', (e) => {
        e.stopPropagation();
        playHitSound();
        showToast('🕹️ 左搖桿朝對手猛推到底！快跑衝刺中！');
      });
    }

    // Step 2 Four Buttons Pad click
    const padStep2A = document.getElementById('padStep2A');
    if (padStep2A) {
      padStep2A.addEventListener('click', (e) => {
        e.stopPropagation();
        playHitSound();
        showToast('🅰️ 按下 A 鍵！觸發衝刺攻擊！');
      });
    }

    // Quick Search Tag Buttons
    document.querySelectorAll('.quick-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.query || '';
        if (quickSearchInput) {
          quickSearchInput.value = tag;
          handleSearch(tag.toLowerCase());
          quickSearchInput.focus();
          playHitSound();
        }
      });
    });
  }

  // Handle Search Filtering (含點擊抽屜自動展開)
  function handleSearch(query) {
    if (btnSearchClear) {
      btnSearchClear.style.display = query ? 'block' : 'none';
    }

    if (!query) {
      document.querySelectorAll('.rec-step-card, .move-card, .faq-item, .setting-card, .tech-card, .training-step-card, .mindset-card').forEach(el => {
        el.style.display = '';
      });
      document.querySelectorAll('details.deep-drawer').forEach(d => {
        if (d.dataset.searchOpened === '1') {
          d.open = false;
          delete d.dataset.searchOpened;
        }
      });
      return;
    }

    // Check characters matching query
    for (const [key, c] of Object.entries(CHARACTERS)) {
      if (c.name.toLowerCase().includes(query) || key.includes(query) || c.summary.toLowerCase().includes(query)) {
        const tabBtn = document.querySelector(`.char-tab-btn[data-char="${key}"]`);
        if (tabBtn) {
          charTabsBar.querySelectorAll('.char-tab-btn').forEach(b => b.classList.remove('active'));
          tabBtn.classList.add('active');
          currentActiveChar = key;
          renderCharacterDetail(key);
          break;
        }
      }
    }

    // Filter Recovery & Move Cards
    document.querySelectorAll('.rec-step-card, .move-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });

    // Filter Pro Tech & Training Cards
    document.querySelectorAll('.tech-card, .training-step-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });

    // Filter FAQ Items
    document.querySelectorAll('.faq-item').forEach(faq => {
      const text = faq.textContent.toLowerCase();
      const match = text.includes(query);
      faq.style.display = match ? '' : 'none';
      if (match) {
        faq.classList.add('active');
      }
    });

    // Auto-expand matching Deep Drawers (<details.deep-drawer>)
    let matchedDrawer = null;
    document.querySelectorAll('details.deep-drawer').forEach(d => {
      const match = d.textContent.toLowerCase().includes(query);
      if (match) {
        if (!d.open) {
          d.open = true;
          d.dataset.searchOpened = '1';
        }
        if (!matchedDrawer) matchedDrawer = d;
      }
    });

    // Auto switch panel & scroll to first relevant section
    if (query.length >= 2) {
      const matchEl = document.querySelector('.rec-step-card:not([style*="display: none"]), .move-card:not([style*="display: none"]), .tech-card:not([style*="display: none"]), .training-step-card:not([style*="display: none"]), .faq-item:not([style*="display: none"])') || matchedDrawer;
      if (matchEl) {
        const targetPanel = matchEl.closest('.split-panel');
        if (targetPanel && typeof window.__smashSwitchPanel === 'function') {
          window.__smashSwitchPanel(targetPanel.dataset.panelId, false);
        }
        matchEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Split Panel Switcher + Bottom Smash Progress Bar + Top Nav Sync
  function initSplitPanelSystem() {
    const panels = Array.from(document.querySelectorAll('.split-panel[data-panel-id]'));
    const heroSection = document.getElementById('hero');
    const navLinks = Array.from(document.querySelectorAll('#navLinks .nav-item'));
    const subnavPills = Array.from(document.querySelectorAll('#mobileSubnav .subnav-pill'));
    const dockTiles = Array.from(document.querySelectorAll('#smashDockStrip .smash-dock-tile'));
    const dockStrip = document.getElementById('smashDockStrip');
    const dockPrev = document.getElementById('smashDockPrev');
    const dockNext = document.getElementById('smashDockNext');
    const progressFill = document.getElementById('smashDockProgressFill');
    const stepText = document.getElementById('smashDockStepText');

    if (!panels.length) return;

    const panelIds = panels.map(p => p.dataset.panelId);
    const heroPanelIds = new Set(['heroTopRules', 'heroControlsOverview', 'heroSmashGuide']);
    let activeIdx = 0;

    function switchToPanel(targetId, scrollToTop = true) {
      if (targetId === 'hero') targetId = 'heroTopRules';
      const idx = panelIds.indexOf(targetId);
      if (idx === -1) return;
      activeIdx = idx;

      panels.forEach(p => {
        p.classList.toggle('active-panel', p.dataset.panelId === targetId);
      });

      if (heroSection) {
        heroSection.classList.toggle('hero-hidden', !heroPanelIds.has(targetId));
      }

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
      });

      subnavPills.forEach(pill => {
        const match = pill.getAttribute('href') === `#${targetId}`;
        pill.classList.toggle('active', match);
        if (match) {
          const scroller = pill.closest('.mobile-subnav-scroll');
          if (scroller) {
            const targetLeft = pill.offsetLeft - scroller.clientWidth / 2 + pill.offsetWidth / 2;
            scroller.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
          }
        }
      });

      let activeLabel = '';
      dockTiles.forEach(tile => {
        const match = tile.dataset.target === targetId;
        tile.classList.toggle('active', match);
        if (match) {
          const labelEl = tile.querySelector('.smash-tile-label');
          if (labelEl) activeLabel = labelEl.textContent.trim();
          if (dockStrip) {
            const targetLeft = tile.offsetLeft - dockStrip.clientWidth / 2 + tile.offsetWidth / 2;
            dockStrip.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
          }
        }
      });

      const pct = Math.round(((idx + 1) / panelIds.length) * 1000) / 10;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (stepText) stepText.textContent = `${idx + 1} / ${panelIds.length}${activeLabel ? ' · ' + activeLabel : ''}`;
      if (dockPrev) dockPrev.disabled = idx <= 0;
      if (dockNext) dockNext.disabled = idx >= panelIds.length - 1;

      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    window.__smashSwitchPanel = switchToPanel;

    // Bind dock tiles
    dockTiles.forEach(tile => {
      tile.addEventListener('click', () => {
        if (tile.dataset.target) {
          switchToPanel(tile.dataset.target, true);
        }
      });
    });

    if (dockPrev) {
      dockPrev.addEventListener('click', () => {
        if (activeIdx > 0) switchToPanel(panelIds[activeIdx - 1], true);
      });
    }

    if (dockNext) {
      dockNext.addEventListener('click', () => {
        if (activeIdx < panelIds.length - 1) switchToPanel(panelIds[activeIdx + 1], true);
      });
    }

    // Intercept all internal #anchor links so they switch to the target panel cleanly
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const rawId = href.slice(1);
      const targetId = rawId === 'hero' ? 'heroTopRules' : rawId;
      if (panelIds.includes(targetId)) {
        e.preventDefault();
        switchToPanel(targetId, true);
      }
    });

    // Respect initial URL hash if present
    const initialHash = window.location.hash ? window.location.hash.slice(1) : 'heroTopRules';
    switchToPanel(panelIds.includes(initialHash) ? initialHash : 'heroTopRules', false);
  }

  // Bootstrap on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    init();
    initSplitPanelSystem();
    document.querySelectorAll('details.deep-drawer').forEach(drawer => {
      drawer.addEventListener('toggle', () => {
        if (drawer.open) playHitSound();
      });
    });
  });
})();

