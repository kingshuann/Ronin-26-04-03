/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CircleDot, 
  DollarSign, 
  HelpCircle, 
  Calendar, 
  Instagram, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Zap,
  AlertCircle,
  Package,
  ChevronDown,
  Crown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [activeTab, setActiveTab] = useState('jewelry');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Calculator State
  const [calcLocation, setCalcLocation] = useState('');
  const [calcJewelry, setCalcJewelry] = useState('');

  interface JewelryOption {
    id: string;
    name: string;
    price: number;
    desc?: string;
    note?: string;
  }

  const locations = [
    { name: 'Lobe / Upper Lobe 耳垂', techFee: 300, type: 'STANDARD', category: 'EAR' },
    { name: 'Conch 耳窩', techFee: 300, type: 'STANDARD', category: 'EAR' },
    { name: 'Helix 耳輪', techFee: 300, type: 'STANDARD', category: 'EAR' },
    { name: 'Flat 耳屏', techFee: 300, type: 'STANDARD', category: 'EAR' },
    { name: 'Nostril 側鼻翼', techFee: 300, type: 'STANDARD', category: 'NOSE' },
    { name: 'Forward Helix 前耳輪', techFee: 400, type: 'STANDARD', category: 'EAR' },
    { name: 'Rook 耳梗', techFee: 400, type: 'ROOK_SNUG', category: 'EAR' },
    { name: 'Daith 耳輪', techFee: 400, type: 'DAITH', category: 'EAR' },
    { name: 'Septum 鼻中隔', techFee: 400, type: 'STANDARD', category: 'NOSE' },
    { name: 'Snug 厚軟骨', techFee: 400, type: 'ROOK_SNUG', category: 'EAR' },
    { name: 'Tragus 小耳朵', techFee: 400, type: 'STANDARD', category: 'EAR' },
    { name: 'Anti-tragus 反小耳', techFee: 400, type: 'STANDARD', category: 'EAR' },
    { name: 'Industrial 工業環', techFee: 500, type: 'INDUSTRIAL', category: 'EAR' },
    { name: 'Navel 肚臍環', techFee: 500, type: 'NAVEL', category: 'NAVEL' },
  ];

  const selectedLocData = locations.find(l => l.name === calcLocation);

  const getJewelryOptions = (type: string): JewelryOption[] => {
    switch (type) {
      case 'ROOK_SNUG':
        return [{ id: 'special_700', name: '專用環', price: 700 }];
      case 'DAITH':
        return [{ id: 'ring_600', name: '圓環', price: 600 }];
      case 'INDUSTRIAL':
        return [{ id: 'special_1400', name: '專用環', price: 1400 }];
      case 'NAVEL':
        return [{ id: 'special_800', name: '專用環', price: 800 }];
      case 'STANDARD':
        return [
          { id: 'straight_1000', name: '直針式飾品', price: 1000, desc: '須搭配專用底座佩戴\n直針式飾品 500 + 專用底座 500' },
          { id: 'ring_600', name: '圓環', price: 600, note: '新穿的耳洞不建議佩戴環，容易摩擦造成發炎及組織增生' }
        ];
      default:
        return [];
    }
  };

  const jewelryOptions = selectedLocData ? getJewelryOptions(selectedLocData.type) : [];
  const selectedJewelryData = jewelryOptions.find(j => j.id === calcJewelry);

  const totalFee = (selectedLocData?.techFee || 0) + (selectedJewelryData?.price || 0);

  const tabs = [
    { id: 'jewelry', name: '材質介紹', icon: <CircleDot size={18} /> },
    { id: 'pricing', name: '收費方式', icon: <DollarSign size={18} /> },
    { id: 'jewelry_types', name: '飾品介紹＆配戴方式', icon: <Package size={18} /> },
    { id: 'faq', name: '常見問題', icon: <HelpCircle size={18} /> },
    { id: 'booking', name: '如何預約', icon: <Calendar size={18} /> },
  ];

  const pricingData = [
    { area: '耳垂', price: 'NT$ 600+', note: '包含基本款醫療級飾品' },
    { area: '耳軟骨 / 小耳朵', price: 'NT$ 850+', note: '視孔位角度與飾品調整' },
    { area: '鼻環 / 眉環 / 唇環', price: 'NT$ 1,200+', note: '含職人無菌手穿服務' },
    { area: '特殊部位 (臍/舌)', price: 'NT$ 1,800+', note: '需事先預約解剖評估' },
  ];

  const faqCategories = [
    {
      title: '穿洞科學',
      items: [
        { 
          q: '手穿與槍穿的差別？', 
          a: (
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-200 font-bold text-black whitespace-nowrap">項目</th>
                    <th className="p-2 border border-gray-200 font-bold text-black">
                      <div className="flex items-center gap-1">
                        <Crown size={14} className="text-amber-500 fill-amber-500" />
                        <span>職人手穿</span>
                      </div>
                    </th>
                    <th className="p-2 border border-gray-200 font-bold text-gray-400">傳統槍穿</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">疼痛感</td>
                    <td className="p-2 border border-gray-200">瞬間刺痛，腫脹感極低</td>
                    <td className="p-2 border border-gray-200 text-gray-400">鈍痛感強，術後腫脹明顯</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">飾品選擇</td>
                    <td className="p-2 border border-gray-200">可直接配戴任何喜歡款式</td>
                    <td className="p-2 border border-gray-200 text-gray-400">僅限基礎款</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">修復期</td>
                    <td className="p-2 border border-gray-200">傷口平整，癒合速度快</td>
                    <td className="p-2 border border-gray-200 text-gray-400">傷口撕裂，修復期較長</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">衛生安全</td>
                    <td className="p-2 border border-gray-200">一次性無菌針具，完全無菌</td>
                    <td className="p-2 border border-gray-200 text-gray-400">槍具難完全消毒，有風險</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">位置精準</td>
                    <td className="p-2 border border-gray-200">職人對位，角度精準</td>
                    <td className="p-2 border border-gray-200 text-gray-400">視線受阻，容易歪斜</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-200 font-medium bg-gray-50/50 whitespace-nowrap">部位限制</td>
                    <td className="p-2 border border-gray-200">無限制</td>
                    <td className="p-2 border border-gray-200 text-gray-400">部分部位無法穿，例如Rook、Daith...等</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-[10px] text-gray-400 italic">* 為了您的傷口健康，我們堅持僅提供專業手穿服務。</p>
            </div>
          )
        },
        { q: '穿洞會很痛嗎？', a: '疼痛感因人而異，但手穿針具極其鋒利且速度快，通常只有瞬間的刺痛感，且術後腫脹感較槍穿輕微許多。' },
        { q: '穿洞前需要做什麼準備？', a: '請確保睡眠充足、不要空腹，並避免在穿洞前飲酒。女生怕痛可避開生理期期間。' },
      ]
    },
    {
      title: '飾品相關',
      items: [
        { q: '過敏體質可以穿洞嗎？', a: '我們全面採用植入級鈦合金與 14K 實心金飾品，極大地降低了過敏風險。在諮詢階段我們也會針對您的歷史過敏經驗提供建議。' },
        { 
          q: '可以帶自己的飾品來穿嗎？', 
          a: (
            <>
              為了確保衛生與安全，初次穿孔必須使用店內提供的「植入級鈦合金」飾品。<br /><br />
              待傷口完全癒合後，或是針對您原有的舊耳洞，若需攜帶個人飾品回店更換，我們將酌收專業清潔與處理費用。
            </>
          )
        },
        { q: '什麼是「無螺紋」飾品？', a: '這是一種按壓式的機制，飾品表面平滑無螺紋，不會在穿戴時刮傷洞口，且結構非常穩固，不易因日常活動而鬆脫。' },
      ]
    },
    {
      title: '術後照護',
      items: [
        { 
          q: '傷口恢復期需要注意什麼？', 
          a: (
            <>
              核心原則是<span className="font-bold text-gray-600">盡可能減少觸碰與刺激</span>。在穿脫衣服、配戴安全帽或睡眠時，請務必小心避免拉扯與擠壓傷口，否則極易導致發炎。<br /><br />
              此外，請嚴格遵守：禁止使用酒精清潔、禁止自行轉動飾品，並避免過度清潔，讓傷口在穩定的環境下自然癒合。
            </>
          )
        },
        { q: '什麼時候可以更換飾品？', a: '視部位而定，耳垂通常需 2 個月，軟骨則需 3-6 個月。建議回店由職人評估傷口穩定度後再進行更換。' },
        { 
          q: '傷口出現紅腫或分泌物怎麼辦？', 
          a: (
            <>
              在穿洞後的一個月內，傷口若出現透明或淡黃色組織液，甚至輕微滲血屬於正常現象，請不用過度緊張。可以至藥局購買藥膏擦拭消炎。<br /><br />
              但若伴隨劇烈疼痛、局部發熱或出現濃稠膿液，請務必立即與我們聯繫或諮詢專業醫師。
            </>
          )
        },
        { q: '睡覺時壓到傷口會怎樣？', a: '長期壓迫會導致傷口角度歪斜或產生肉芽組織。建議使用旅行枕（U型枕）將耳朵空出，避免直接壓迫。' },
      ]
    },
    {
      title: '預約與服務',
      items: [
        { q: '一定要預約嗎？可以現場排隊嗎？', a: '我們採完全預約制，以確保每位客人都能在安靜且專業的環境下接受服務，不接受現場臨時排隊。' },
        { q: '未成年可以穿洞嗎？', a: '18 歲以下需由法定代理人陪同到店，或提供簽署完成的家長同意書方可進行服務。' },
        { q: '穿洞服務包含飾品嗎？', a: '我們的技術費與飾品費用是分開計算的。您可以根據喜好與預算，在現場挑選適合您的飾品。' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-md mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-widest text-black uppercase leading-none">RONIN</h1>
            <span className="text-[10px] tracking-[0.3em] text-gray-400 mt-1 uppercase font-light">Piercing Studio</span>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 text-gray-900 cursor-pointer">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-50 bg-gray-50/50 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all cursor-pointer ${
                      activeTab === tab.id ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section (Tab Labels) */}
      <div className="max-w-md mx-auto px-6 pt-10 pb-4">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 border-b border-gray-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                activeTab === tab.id 
                ? 'bg-black border-black text-white shadow-md shadow-gray-200' 
                : 'bg-white border-gray-200 text-gray-400'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'jewelry' && (
            <motion.section 
              key="jewelry"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-3 underline decoration-gray-200 underline-offset-8">材質介紹</h2>
                <p className="text-gray-400 text-sm leading-relaxed">我們深知飾品與傷口長期接觸的重要性，因此僅提供具備高度生物相容性的頂級材質。</p>
              </div>
              
              <div className="space-y-10">
                {/* Titanium Section */}
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute right-[-10px] top-[-10px] opacity-5">
                    <ShieldCheck size={120} />
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <ShieldCheck className="text-black" size={20} />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Implant Grade</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">植入級鈦合金 <span className="text-sm font-light text-gray-400 block mt-1 italic">ASTM F136 Eli Titanium</span></h3>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p className="font-semibold text-black italic">符合醫療最高規的植入標準</p>
                    <p>
                      我們堅持選用符合國際 <span className="text-black font-medium">ASTM F136</span> 標準的醫用植入級鈦合金（而非工業級鈦合金G23），這是專為<span className="text-black font-medium px-1 italic">長期留存於人體</span>設計的最高規格材質。
                    </p>
                    <div className="py-4 border-y border-gray-200/50 my-2">
                      <p className="text-xs text-gray-500 leading-normal tracking-tighter">
                        ASTM F136 具有優異的純淨度與生物相容性，其物理性質與穩定度深受醫學界信賴，廣泛運用於：<br />
                        <span className="text-black font-medium mt-1 inline-block">● 人工關節與骨板</span> <br />
                        <span className="text-black font-medium inline-block">● 心臟支架</span> <br />
                        <span className="text-black font-medium inline-block">● 精密牙科植體</span>
                      </p>
                    </div>
                    <p>
                      相較於容易氧化的銀飾或含鎳的醫療鋼，F136 植入級鈦合金能大幅降低發炎與過敏風險，在癒合關鍵期提供最安全的保障。
                    </p>
                  </div>
                </div>

                {/* Gold Section */}
                <div className="p-8 bg-white border border-gray-200 rounded-3xl relative overflow-hidden shadow-sm">
                  <div className="absolute right-[-10px] top-[-10px] opacity-5">
                    <Sparkles size={120} />
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="text-black" size={20} />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Premium Collection</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-6">14K 實心金 <span className="text-sm font-light text-gray-400 block mt-1 italic">14Kt Solid Gold</span></h3>
                  
                  <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
                    {/* Subsection 1 */}
                    <div>
                      <h4 className="text-black font-bold mb-2 flex items-center">
                        <div className="w-1 h-4 bg-black mr-2"></div>
                        真正實心金，而非表面鍍金
                      </h4>
                      <p>
                        我們選用由<span className="text-black font-medium">純金與鈦</span>熔合的 14Kt 實心金，而非表面鍍金。實心金能確保長期配戴不剝落、不褪色，更不會導致皮膚染色或過敏。
                      </p>
                    </div>

                    {/* Subsection 2 */}
                    <div>
                      <h4 className="text-black font-bold mb-2 flex items-center">
                        <div className="w-1 h-4 bg-black mr-2"></div>
                        為何不選 18K 或 24K 純金？
                      </h4>
                      <p>
                        黃金純度越高則質地越軟，24K 純金極易因外力變形。14K 金在維持「植入級穩定性」的同時，比 18K/24K 更堅硬耐用，能有效防止飾品損壞。
                      </p>
                    </div>

                    <div className="py-4 border-y border-gray-200/50 my-2 bg-gray-50/50 px-4 rounded-xl">
                      <p className="text-xs text-gray-500 leading-normal">
                        14K 金合金在專業穿孔的獨特優點：<br />
                        <span className="text-black font-medium mt-1 inline-block">● 極致細膩度</span>：比單純鈦合金擁有更高的可塑性，能打造更為精緻繁複的藝術設計。<br />
                        <span className="text-black font-medium mt-1 inline-block">● 美學與強韌的平衡</span>：具備溫潤的高級色澤，且具備足以應付日常活動的強韌度。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'pricing' && (
            <motion.section 
              key="pricing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-3 underline decoration-gray-200 underline-offset-8">收費方式</h2>
                <div className="space-y-4">
                  <div className="py-1">
                    <p className="text-lg font-bold text-black tracking-wider">
                      穿洞技術費 ＋ 飾品費用 ＝ 總金額
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <span className="text-black font-bold block mb-1">重要提醒：</span>
                      穿洞技術費<span className="text-black font-bold">「不包含」</span>任何基礎飾品，單純是穿環師傅的技術費用。飾品需依現場款式另行選購。
                    </p>
                  </div>

                  {/* Anatomical Reference Image */}
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 mb-6">
                    <img 
                      src="../img/ear.jpg" 
                      alt="Piercing Anatomy Reference" 
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Interactive Calculator */}
                  <div className="p-6 bg-gray-50 border border-gray-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="text-black" size={18} />
                      <h3 className="text-sm font-bold text-black uppercase tracking-wider">費用試算 Calculator</h3>
                    </div>

                    <div className="space-y-4">
                      {/* Location Selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">1. 選擇穿洞部位</label>
                        <select 
                          value={calcLocation}
                          onChange={(e) => {
                            setCalcLocation(e.target.value);
                            setCalcJewelry(''); // Reset jewelry when location changes
                          }}
                          className={`w-full p-3 bg-white rounded-xl text-sm focus:outline-none transition-all appearance-none cursor-pointer ${
                            calcLocation ? 'border-2 border-gray-800' : 'border border-gray-100'
                          }`}
                        >
                          <option value="">請選擇部位...</option>
                          <optgroup label="耳朵部位 Ear">
                            {locations.filter(l => l.category === 'EAR').map(loc => (
                              <option key={loc.name} value={loc.name}>{loc.name}</option>
                            ))}
                          </optgroup>
                          <optgroup label="鼻子部位 Nose">
                            {locations.filter(l => l.category === 'NOSE').map(loc => (
                              <option key={loc.name} value={loc.name}>{loc.name}</option>
                            ))}
                          </optgroup>
                          <optgroup label="肚臍部位 Navel">
                            {locations.filter(l => l.category === 'NAVEL').map(loc => (
                              <option key={loc.name} value={loc.name}>{loc.name}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>

                      {/* Jewelry Selection */}
                      <AnimatePresence mode="wait">
                        {calcLocation && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-2"
                          >
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                              2. 選擇飾品類型<span className="text-[10px]">（以<span className="italic">無鑽基礎款鈦合金飾品</span>試算）</span>
                            </label>
                            <div className="space-y-2">
                              {jewelryOptions.map(opt => (
                                <button
                                  key={opt.id}
                                  onClick={() => setCalcJewelry(opt.id)}
                                  className={`w-full p-4 rounded-xl border-2 text-left transition-all flex flex-col space-y-1 ${
                                    calcJewelry === opt.id 
                                    ? 'bg-white border-gray-800 text-gray-900' 
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold">{opt.name}</span>
                                    <span className={`text-sm font-mono ${calcJewelry === opt.id ? 'text-black' : 'text-black'}`}>${opt.price}</span>
                                  </div>
                                  {opt.desc && <span className="text-[10px] opacity-60 whitespace-pre-line leading-tight">{opt.desc}</span>}
                                  {opt.note && (
                                    <span className={`text-[10px] leading-tight mt-1 ${calcJewelry === opt.id ? 'text-red-500' : 'text-red-400'}`}>
                                      * {opt.note}
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Result Display */}
                      <AnimatePresence>
                        {calcLocation && calcJewelry && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-8 p-6 bg-gray-600 rounded-2xl text-white space-y-4"
                          >
                            <div className="flex justify-between items-center text-xs text-gray-200 border-b border-gray-400/30 pb-3">
                              <span>技術費 + 飾品費</span>
                              <span>Total Calculation</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-200">穿洞技術費</span>
                                <span className="font-mono">${selectedLocData?.techFee}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-200">{selectedJewelryData?.name}</span>
                                <span className="font-mono">${selectedJewelryData?.price}</span>
                              </div>
                              <div className="pt-3 border-t border-gray-400/30 flex justify-between items-baseline">
                                <span className="font-bold">預估總額</span>
                                <span className="text-3xl font-black font-mono tracking-tighter text-white">NT$ {totalFee}</span>
                              </div>
                              <p className="text-[10px] text-red-400 text-center mt-1 whitespace-nowrap tracking-tight">
                                本店所有報價皆為「單個」耳洞或飾品，並非一對
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">穿洞技術費總覽</h3>
                  <span className="text-[10px] text-gray-400 italic">中文翻譯僅供參考，以英文部位為主</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      price: '$300', 
                      items: [
                        'Lobe / Upper Lobe 耳垂',
                        'Conch 耳窩',
                        'Helix 耳輪',
                        'Flat 耳屏',
                        'Nostril 側鼻翼'
                      ] 
                    },
                    { 
                      price: '$400', 
                      items: [
                        'Forward Helix 前耳輪',
                        'Rook 耳梗',
                        'Daith 耳輪',
                        'Septum 鼻中隔',
                        'Snug 厚軟骨',
                        'Tragus 小耳朵',
                        'Anti-tragus 反小耳'
                      ] 
                    },
                    { 
                      price: '$500', 
                      items: [
                        'Industrial 工業環',
                        'Navel 肚臍環'
                      ] 
                    }
                  ].map((tier, idx) => (
                    <div key={idx} className="flex flex-col space-y-2 pb-4 border-b border-gray-50 last:border-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xl font-black font-mono tracking-tighter text-black">{tier.price}</span>
                        <div className="h-[1px] flex-grow mx-4 bg-gray-100"></div>
                      </div>
                      <div className="space-y-0.5">
                        {tier.items.map((item, i) => (
                          <p key={i} className="text-sm text-gray-400 leading-tight">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </motion.section>
          )}

          {activeTab === 'jewelry_types' && (
            <motion.section 
              key="jewelry_types"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-3 underline decoration-gray-200 underline-offset-8">飾品介紹＆配戴方式</h2>
                <p className="text-gray-400 text-sm leading-relaxed">我們選用對身體最友善的穿戴機制，確保傷口癒合過程的舒適與安全。</p>
              </div>

              <div className="space-y-8">
                {/* Threadless Section */}
                <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl relative overflow-hidden">
                  <div className="absolute right-[-10px] top-[-10px] opacity-5">
                    <Zap size={120} className="text-black" />
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Zap className="text-black" size={20} />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Main Choice</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">無螺紋按壓式飾品 <span className="text-sm font-light text-gray-400 block mt-1 italic">Thread-less</span></h3>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <p className="font-semibold text-black italic">我們最推薦的配戴方式</p>
                    <p>
                      這是目前專業穿孔界最受歡迎的機制。飾品前端帶有一個微彎的針腳，直接「按壓」進底座中。相對於螺紋飾品，按壓式飾品在更換時更為直覺且方便。
                    </p>
                    <div className="py-4 border-y border-gray-200 my-2">
                      <p className="text-xs text-gray-400 leading-normal">
                        優點：<br />
                        <span className="text-black font-medium mt-1 inline-block">● 穿脫極其方便</span> <br />
                        <span className="text-black font-medium inline-block">● 結構穩固，不易因震動鬆脫</span> <br />
                        <span className="text-black font-medium inline-block">● 表面平滑，不會卡髒污</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Internal Thread Section */}
                <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl relative overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Alternative</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">內螺紋飾品 <span className="text-sm font-light text-gray-400 block mt-1 italic">Internally Threaded</span></h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    螺紋位於飾品前端，而底座是中空的。雖然我們店內這類選擇較少，但對於某些特定大尺寸或特殊造型的飾品，內螺紋仍是安全且可靠的選擇。
                  </p>
                </div>

                {/* External Thread Warning */}
                <div className="p-8 bg-red-50 border border-red-100 rounded-3xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="text-red-500" size={20} />
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-[0.2em]">Why we don't use</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-900 mb-4">我們不使用「外螺紋」</h3>
                  <p className="text-red-700/80 text-sm leading-relaxed">
                    外螺紋飾品的螺紋直接露在底座針管上。當底座進入耳洞時，<span className="font-bold">粗糙的螺紋會像鋸子一樣增加摩擦面積</span>，大幅增加疼痛感並造成二次傷害。為了您的健康，我們堅持不提供此類低階飾品。
                  </p>
                </div>
              </div>
            </motion.section>
          ) /* End of jewelry_types */}

          {activeTab === 'faq' && (
            <motion.section 
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-3 underline decoration-gray-200 underline-offset-8">常見問題</h2>
                <p className="text-gray-400 text-sm leading-relaxed">關於穿孔，你必須知道的科學與修護知識。</p>
              </div>
              
              <div className="space-y-10">
                {faqCategories.map((category, catIdx) => (
                  <div key={catIdx} className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">{category.title}</h3>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => {
                        const faqId = `${catIdx}-${idx}`;
                        const isOpen = openFaqId === faqId;
                        return (
                          <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:border-gray-200">
                            <button 
                              onClick={() => setOpenFaqId(isOpen ? null : faqId)}
                              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                            >
                              <h4 className="text-black font-bold text-base leading-snug pr-4">{item.q}</h4>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 text-gray-400"
                              >
                                <ChevronDown size={20} />
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pt-0">
                                    <div className="h-[1px] w-full bg-gray-50 mb-4"></div>
                                    <div className="text-gray-500 text-sm leading-relaxed font-light">
                                      {item.a}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'booking' && (
            <motion.section 
              key="booking"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-black mb-3 underline decoration-gray-200 underline-offset-8">預約指南</h2>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  為維護每位顧客的專屬隱私與服務品質，工作室採<span className="text-black font-medium">完全預約制</span>。若未事先預約即自行前往，我們將無法保證能為您提供即時的專業服務，敬請見諒。
                </p>
              </div>

              <div className="mb-12">
                <a href="https://lin.ee/S2oV6XqD" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-5 bg-[#06C755] text-white rounded-xl font-bold transition-all hover:bg-[#05b34c] active:scale-95 shadow-lg shadow-green-100">
                  <div className="flex items-center space-x-3">
                    <HelpCircle size={20} />
                    <span>官方 Line 立即預約</span>
                  </div>
                  <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="relative pl-12 space-y-12 mb-16">
                {/* Vertical Line */}
                <div className="absolute left-[17px] top-2 bottom-2 w-[1px] bg-gray-100"></div>

                {[
                  { step: 1, title: '爬文', desc: '本網站提供了 90% 您可能有疑問的解答，請詳細閱讀後再發問。' },
                  { step: 2, title: '諮詢洽談', desc: (
                    <>
                      請私訊官方 Line，告訴我們您的任何疑問，進行評估與討論。<span className="text-red-500">如果是網站上就找得到答案的，闆娘可能會小生氣喔 ^^</span>
                    </>
                  )},
                  { step: 3, title: '預約時段', desc: (
                    <>
                      請留下姓名、電話、想預約的時段<br />
                      營業時間 12:00 - 20:00 (最後預約時段)<br />
                      週二固定公休
                    </>
                  )},
                  { step: 4, title: '現場服務', desc: '準時抵達，享受專屬於您的專業穿洞服務時段。' }
                ].map((s, idx) => (
                  <div key={s.step} className="relative">
                    {/* Step Indicator */}
                    <div className="absolute -left-[47px] top-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-black">{s.step}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-widest">{s.title}</h4>
                      <div className="text-gray-400 text-xs leading-relaxed font-light">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex flex-col items-center justify-center py-6 text-gray-400 space-y-2 text-center">
                  <div className="flex items-center space-x-2 text-xs">
                    <MapPin size={14} />
                    <span>台中市北屯區北屯路240巷15號（全預約制）</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Simple Footer */}
      <footer className="max-w-md mx-auto px-6 py-12 border-t border-gray-50 text-center">
        <p className="text-[10px] tracking-[0.2em] text-gray-300 uppercase font-light">
          © 2026 Ronin Piercing Studio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
