export interface BilingualText {
  en: string;
  zh: string;
}

export type ProductCategoryKey = 'fabrics' | 'home-textiles' | 'accessories';

export interface ProductSpec {
  label: BilingualText;
  value: BilingualText;
}

export interface ProductItem {
  id: string;
  code: string;
  category: ProductCategoryKey;
  categoryLabel: BilingualText;
  badge?: BilingualText;
  name: BilingualText;
  summary: BilingualText;
  image: string;
  secondaryImages: string[];
  composition: BilingualText;
  specHighlight: BilingualText;
  moq: BilingualText;
  leadTime: BilingualText;
  originPort: BilingualText;
  certifications: string[];
  detailedSpecs: ProductSpec[];
  applications: BilingualText;
}

export const companyInfo = {
  brandShort: 'LUOYI TEXTILE',
  domain: 'lycf.cn',
  logoUrl: '/luoyi logo.png',
  licenseEnUrl: '/Business License en.jpg',
  licenseZhUrl: '/Business License zh-cn.jpg',
  name: {
    en: 'Jinhua Luoyi Textile Co., Ltd.',
    zh: '金华洛屹纺织品有限公司',
  },
  subTitle: {
    en: 'Luoyi Textile Factory · Global Export Partner',
    zh: '洛屹纺织外贸出口企业 · 织造与成品定制专家',
  },
  tagline: {
    en: 'Integrated Textile Manufacturer & Exporter in Yiwu, China — Specializing in Woven Greige & Dyed Fabrics, Finished Home Textiles, and Custom Fashion Accessories.',
    zh: '扎根世界小商品之都中国义乌，集面料坯布织染、家纺成品制造与纺织配饰定制出口于一体的综合外贸企业。',
  },
  established: 2016,
  email: 'service@lycf.cn',
  phone: '+86 17305891767',
  wechat: '+86 17305891767',
  wechatId: '17305891767',
  address: {
    en: 'Room 301, No. 62 Chengxin 3rd Street, Futian Sub-district, Yiwu City, Jinhua City, Zhejiang Province, China',
    zh: '浙江省金华市义乌市福田街道诚信三街62号301室',
  },
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=%E6%B5%99%E6%B1%9F%E7%9C%81%E9%87%91%E5%8D%8E%E5%B8%82%E4%B9%89%E4%B9%8C%E5%B8%82%E7%A6%8F%E7%94%B0%E8%A1%97%E9%81%93%E8%AF%9A%E4%BF%A1%E4%B8%89%E8%A1%9762%E5%8F%B7&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Room+301,+No.+62+Chengxin+3rd+Street,+Futian+Sub-district,+Yiwu+City,+Jinhua+City,+Zhejiang',
  shippingPorts: {
    en: 'Ningbo Port / Shanghai Port / Yiwu Dry Port (FOB, CIF, DDP & Yiwu Market Consolidation)',
    zh: '宁波港 / 上海港 / 义乌陆港及义新欧班列（支持 FOB、CIF、DDP 及义乌市场拼柜集运）',
  },
  workingHours: {
    en: 'Mon - Sat: 08:30 - 21:00 (GMT+8) | Fast Export Response Within 12 Hours',
    zh: '周一至周六 08:30 - 21:00 (GMT+8) | 外贸询盘12小时内极速响应',
  },
};

// Strictly matching public/readme.md HEADER specification:
// LOGO和公司名称，首页，产品中心，外贸服务，关于我们，联系我们，语言切换
export const navItems = [
  { id: 'home', href: '#home', label: { en: 'Home', zh: '首页' } },
  { id: 'products', href: '#products', label: { en: 'Product Center', zh: '产品中心' } },
  { id: 'trade-services', href: '#trade-services', label: { en: 'Foreign Trade Services', zh: '外贸服务' } },
  { id: 'about', href: '#about', label: { en: 'About Us', zh: '关于我们' } },
  { id: 'contact', href: '#contact', label: { en: 'Contact Us', zh: '联系我们' } },
];

export const productsData: ProductItem[] = [
  // ==================== 1. FABRICS & GREIGE GOODS ====================
  {
    id: 'fab-recycled-poly-spandex-twill',
    code: 'LY-FB104',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Recycled · 4-Way Stretch', zh: '再生环保 · 四面弹力' },
    name: {
      en: 'Recycled Polyester 4-Way Stretch Twill Fabric',
      zh: '再生涤纶四面弹斜纹面料',
    },
    summary: {
      en: 'GRS-friendly recycled polyester with spandex offering 4-way stretch, wrinkle resistance and durability for workwear, trousers and outdoor apparel.',
      zh: '采用再生涤纶混纺氨纶，四向弹力、手感挺括、耐磨抗皱，适用于工装裤、休闲裤、户外服装等。',
    },
    image: '/images/products/面料与坯布/再生涤纶四面弹斜纹面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/再生涤纶四面弹斜纹面料.jpg'],
    composition: { en: 'Recycled Polyester 92% / Spandex 8%', zh: '再生涤纶 92% / 氨纶 8%' },
    specHighlight: { en: '150–190 GSM | Width 145cm–150cm | 4-Way Stretch', zh: '150–190克重 | 门幅 145cm–150cm | 四面弹' },
    moq: { en: '1,000 Meters per color', zh: '1,000 米 / 色' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['GRS', 'OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Weave Type', zh: '组织结构' }, value: { en: 'Stretch Twill', zh: '斜纹四面弹' } },
      { label: { en: 'Stretch', zh: '弹力性能' }, value: { en: '4-Way Stretch / Good Recovery', zh: '四向弹力，回复性好' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '148cm / 150cm', zh: '148cm / 150cm' } },
      { label: { en: 'Finish', zh: '后整理' }, value: { en: 'Teflon/Washable or Custom', zh: '可选防泼水等功能整理' } },
      { label: { en: 'Features', zh: '特点' }, value: { en: 'Durable, Wrinkle-Resistant, Easy Care', zh: '耐磨、抗皱、易洗快干' } },
    ],
    applications: {
      en: 'Trousers, chinos, cargo pants, workwear, uniforms, outdoor pants.',
      zh: '休闲裤、工装裤、卡其裤、户外裤、制服等。',
    },
  },
  {
    id: 'fab-cotton-spandex-twill',
    code: 'LY-FB105',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Stretch · Comfort Fit', zh: '弹力舒适 · 修身面料' },
    name: {
      en: 'Viscose Spandex Stretch Twill Fabric',
      zh: '人造棉弹力斜纹面料',
    },
    summary: {
      en: 'Soft viscose stretch twill with good recovery and a smooth hand, suitable for fitted apparel and casual wear.',
      zh: '手感柔软的人造棉弹力斜纹面料，弹性回复性好，手感顺滑，适合修身服装及休闲服饰。',
    },
    image: '/images/products/面料与坯布/人造棉弹力斜纹面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/人造棉弹力斜纹面料.jpg'],
    composition: { en: 'Viscose / Spandex Blend (Customizable)', zh: '人造棉 / 氨纶混纺（可定制配比）' },
    specHighlight: { en: 'Twill Stretch | Width 145cm–150cm', zh: '斜纹弹力 | 门幅 145cm–150cm' },
    moq: { en: '1,000 Meters per color', zh: '1,000 米 / 色' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Weave Type', zh: '组织结构' }, value: { en: 'Stretch Twill', zh: '弹力斜纹' } },
      { label: { en: 'Stretch', zh: '弹力性能' }, value: { en: 'Good Recovery, Comfortable Fit', zh: '回复性好，穿着舒适' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '145cm / 150cm', zh: '145cm / 150cm' } },
    ],
    applications: {
      en: 'Trousers, skirts, dresses, casual wear.',
      zh: '裤装、裙装、连衣裙、休闲服装等。',
    },
  },
  {
    id: 'fab-45s-viscose-digital-print',
    code: 'LY-FB106',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Digital Print · Fast Turnaround', zh: '数码印花 · 快速打样' },
    name: {
      en: '45s Viscose Digital Print Fabric',
      zh: '45支人造棉数码印花面料',
    },
    summary: {
      en: 'Fine 45s viscose woven base with vivid digital printing, soft handfeel and good drape, suitable for dresses, blouses and home textiles.',
      zh: '采用45支人造棉细支梭织底布，数码印花色彩鲜艳、手感柔软、垂感好，适用于连衣裙、衬衫及家纺成品。',
    },
    image: '/images/products/面料与坯布/45支人造棉数码印花面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/45支人造棉数码印花面料.jpg'],
    composition: { en: '100% Viscose', zh: '100% 人造棉' },
    specHighlight: { en: '45s | Digital Print | Width 145cm–150cm', zh: '45支 | 数码印花 | 门幅 145cm–150cm' },
    moq: { en: '500 Meters per design', zh: '500 米 / 花型' },
    leadTime: { en: '10–15 Days', zh: '10–15 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Yarn Count', zh: '纱支规格' }, value: { en: '45s Viscose', zh: '45支人造棉' } },
      { label: { en: 'Printing', zh: '印花工艺' }, value: { en: 'Digital Printing (Custom Designs)', zh: '数码印花（可定制花型）' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '145cm / 150cm', zh: '145cm / 150cm' } },
    ],
    applications: {
      en: 'Dresses, blouses, skirts, home textiles.',
      zh: '连衣裙、衬衫、裙装、家纺成品等。',
    },
  },
  {
    id: 'fab-3068-viscose-discharge-print',
    code: 'LY-FB107',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Discharge Print · Textured Look', zh: '雕印工艺 · 肌理立体' },
    name: {
      en: '3068 Viscose Discharge Print Fabric',
      zh: '3068人造棉雕印面料',
    },
    summary: {
      en: 'Viscose woven fabric with discharge (burnout-style) printing creating a textured, dimensional look with soft hand and good drape.',
      zh: '人造棉梭织面料，采用雕印工艺呈现镂空肌理与立体效果，手感柔软、垂感好，适用于女装、时尚家居及礼服类面料。',
    },
    image: '/images/products/面料与坯布/3068人造棉雕印面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/3068人造棉雕印面料.jpg'],
    composition: { en: '100% Viscose', zh: '100% 人造棉' },
    specHighlight: { en: 'Discharge Print | Width 145cm–150cm', zh: '雕印工艺 | 门幅 145cm–150cm' },
    moq: { en: '500 Meters per design', zh: '500 米 / 花型' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Viscose Woven with Discharge Print', zh: '人造棉梭织雕印' } },
      { label: { en: 'Print Effect', zh: '印花效果' }, value: { en: 'Discharge / Burnout Texture', zh: '雕印镂空肌理' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '145cm / 150cm', zh: '145cm / 150cm' } },
    ],
    applications: {
      en: 'Dresses, blouses, skirts, fashion home textiles.',
      zh: '连衣裙、衬衫、裙装、时尚家纺等。',
    },
  },
  {
    id: 'fab-sunshine-velvet-almas',
    code: 'LY-FB108',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Soft Brushed · Cozy Hand', zh: '柔软拉绒 · 亲肤保暖' },
    name: {
      en: 'Sunshine Velvet ALMAS Knit Brushed Fabric',
      zh: '阳光绒ALMAS针织绒布面料',
    },
    summary: {
      en: 'Soft knitted brushed fabric with a dense, fluffy surface and warm, skin-friendly hand, suitable for loungewear, sleepwear and winter apparel.',
      zh: '阳光绒ALMAS针织绒布面料，采用针织工艺并拉绒处理，绒面细密蓬松，手感柔软亲肤、保暖性好，适用于家居服、睡衣及冬季服装。',
    },
    image: '/images/products/面料与坯布/阳光绒ALMAS.jpg',
    secondaryImages: ['/images/products/面料与坯布/阳光绒ALMAS.jpg'],
    composition: { en: 'Cotton / Polyester Blend (Customizable)', zh: '棉 / 涤纶混纺（可定制配比）' },
    specHighlight: { en: 'Knit Brushed | Width 150cm–160cm', zh: '针织拉绒 | 门幅 150cm–160cm' },
    moq: { en: '1,000 Meters per color', zh: '1,000 米 / 色' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Knitted Brushed Fabric (ALMAS)', zh: '针织绒布（ALMAS）' } },
      { label: { en: 'Surface', zh: '表面效果' }, value: { en: 'Soft, Dense Brushed Nap', zh: '绒面细密柔软' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '150cm / 160cm', zh: '150cm / 160cm' } },
    ],
    applications: {
      en: 'Loungewear, sleepwear, children’s wear, winter apparel.',
      zh: '家居服、睡衣、童装、冬季服装等。',
    },
  },
  {
    id: 'fab-supersoft',
    code: 'LY-FB109',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Knit Brushed · Ultra Soft', zh: '针织绒布 · 超柔亲肤' },
    name: {
      en: 'SuperSoft Knit Brushed Fabric',
      zh: '超柔SuperSoft针织绒布面料',
    },
    summary: {
      en: 'Ultra-soft knitted brushed fabric with a dense, fluffy nap and warm, skin-friendly hand, suitable for loungewear, sleepwear and winter apparel.',
      zh: '超柔SuperSoft针织绒布面料，采用针织工艺并拉绒处理，绒面细密蓬松、保暖亲肤，适用于家居服、睡衣及冬季服装。',
    },
    image: '/images/products/面料与坯布/超柔SuperSoft.jpg',
    secondaryImages: ['/images/products/面料与坯布/超柔SuperSoft.jpg'],
    composition: { en: 'Polyester / Viscose Blend (Customizable)', zh: '涤纶 / 人造棉混纺（可定制配比）' },
    specHighlight: { en: 'Knit Brushed | Width 145cm–150cm', zh: '针织拉绒 | 门幅 145cm–150cm' },
    moq: { en: '1,000 Meters per color', zh: '1,000 米 / 色' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Knitted Brushed Fabric', zh: '针织绒布' } },
      { label: { en: 'Surface', zh: '表面效果' }, value: { en: 'Dense, Soft Brushed Nap', zh: '绒面细密柔软' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '145cm / 150cm', zh: '145cm / 150cm' } },
    ],
    applications: {
      en: 'Loungewear, sleepwear, children’s wear, winter apparel.',
      zh: '家居服、睡衣、童装、冬季服装等。',
    },
  },
  {
    id: 'fab-mesh-embroidered',
    code: 'LY-FB110',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Mesh · Embroidered Design', zh: '网布绣花 · 镂空装饰' },
    name: {
      en: 'Mesh Embroidered Fabric',
      zh: '网布绣花面料',
    },
    summary: {
      en: 'Lightweight mesh base fabric with embroidered patterns, offering an airy, breathable look and decorative detail for dresses, blouses and fashion accessories.',
      zh: '网布底料配以绣花图案，轻盈透气、装饰感强，适用于连衣裙、女上衣及时尚配饰等。',
    },
    image: '/images/products/面料与坯布/网布绣花面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/网布绣花面料.jpg'],
    composition: { en: 'Polyester Mesh with Embroidery (Customizable)', zh: '涤纶网布绣花（可定制）' },
    specHighlight: { en: 'Mesh Base | Embroidered Pattern | Width 140cm–150cm', zh: '网布底料 | 绣花图案 | 门幅 140cm–150cm' },
    moq: { en: '1,000 Meters per design', zh: '1,000 米 / 花型' },
    leadTime: { en: '15–20 Days', zh: '15–20 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Mesh Fabric with Embroidery', zh: '网布绣花' } },
      { label: { en: 'Pattern', zh: '图案工艺' }, value: { en: 'Custom Embroidered Designs', zh: '可定制绣花图案' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '140cm / 150cm', zh: '140cm / 150cm' } },
    ],
    applications: {
      en: 'Dresses, blouses, skirts, fashion accessories.',
      zh: '连衣裙、女上衣、裙装、时尚配饰等。',
    },
  },
  {
    id: 'fab-nylon-lace-beaded-embroidery',
    code: 'LY-FB111',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Lace · Beaded Embroidery', zh: '蕾丝 · 珠管绣花' },
    name: {
      en: 'Nylon Lace Beaded Tube Embroidered Fabric',
      zh: '锦纶蕾丝珠管绣花面料',
    },
    summary: {
      en: 'Nylon lace fabric enhanced with beaded tube embroidery, offering a delicate, dimensional finish for evening wear, bridal and fashion garments.',
      zh: '锦纶蕾丝面料配以珠管绣花工艺，纹样精致立体、光泽感强，适用于晚礼服、婚纱及时尚服饰。',
    },
    image: '/images/products/面料与坯布/锦纶蕾丝珠管绣花面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/锦纶蕾丝珠管绣花面料.jpg'],
    composition: { en: '100% Nylon Lace with Embroidery', zh: '100% 锦纶蕾丝配绣花' },
    specHighlight: { en: 'Nylon Lace | Beaded Tube Embroidery | Width 130cm–150cm', zh: '锦纶蕾丝 | 珠管绣花 | 门幅 130cm–150cm' },
    moq: { en: '500 Meters per design', zh: '500 米 / 花型' },
    leadTime: { en: '15–25 Days', zh: '15–25 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Nylon Lace with Beaded Tube Embroidery', zh: '锦纶蕾丝珠管绣花' } },
      { label: { en: 'Embroidery', zh: '绣花工艺' }, value: { en: 'Beaded Tube Embroidery (Custom Designs)', zh: '珠管绣花（可定制花型）' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '130cm / 150cm', zh: '130cm / 150cm' } },
    ],
    applications: {
      en: 'Evening dresses, bridal wear, blouses, fashion accessories.',
      zh: '晚礼服、婚纱、女上衣、时尚配饰等。',
    },
  },
  {
    id: 'fab-mesh-glitter-rhinestone',
    code: 'LY-FB112',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Glitter · Sparkle Finish', zh: '撒粉撒钻 · 闪耀亮面' },
    name: {
      en: 'Mesh Glitter & Rhinestone Fabric',
      zh: '网布撒粉撒钻面料',
    },
    summary: {
      en: 'Mesh base fabric with powder glitter and rhinestone sprinkling, creating a sparkling, eye-catching surface for evening wear, stage costumes and fashion accessories.',
      zh: '网布底料配以撒粉与撒钻工艺，表面闪耀醒目，适用于晚礼服、舞台服装及时尚配饰等。',
    },
    image: '/images/products/面料与坯布/网布撒粉撒钻面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/网布撒粉撒钻面料.jpg'],
    composition: { en: 'Polyester Mesh with Glitter & Rhinestones', zh: '涤纶网布撒粉撒钻（可定制）' },
    specHighlight: { en: 'Mesh Base | Glitter & Rhinestone | Width 140cm–150cm', zh: '网布底料 | 撒粉撒钻 | 门幅 140cm–150cm' },
    moq: { en: '500 Meters per design', zh: '500 米 / 花型' },
    leadTime: { en: '15–25 Days', zh: '15–25 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Mesh Fabric with Glitter & Rhinestones', zh: '网布撒粉撒钻' } },
      { label: { en: 'Surface Effect', zh: '表面效果' }, value: { en: 'Sparkling Glitter & Rhinestone Sprinkle', zh: '闪耀撒粉撒钻' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '140cm / 150cm', zh: '140cm / 150cm' } },
    ],
    applications: {
      en: 'Evening dresses, stage costumes, party wear, fashion accessories.',
      zh: '晚礼服、舞台服装、派对服饰、时尚配饰等。',
    },
  },
  {
    id: 'fab-lyocell-cotton-reactive',
    code: 'LY-FB103',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Eco-Friendly · Smooth Drape', zh: '环保舒适 · 垂感佳' },
    name: {
      en: 'Lyocell/Tencel Cotton Reactive Dyed Fabric',
      zh: '莱赛尔天丝棉活性染色成品面料',
    },
    summary: {
      en: 'Lyocell/Cotton blended woven fabric with reactive dyeing for excellent color fastness, soft handfeel and fluid drape, ideal for shirts, dresses and home textiles.',
      zh: '莱赛尔/天丝与棉混纺梭织面料，采用活性染色工艺，色牢度优良，手感顺滑、垂感好，透气舒适，适用于衬衫、连衣裙及家纺成品。',
    },
    image: '/images/products/面料与坯布/莱赛尔天丝棉活性染色成品面料.jpg',
    secondaryImages: ['/images/products/面料与坯布/莱赛尔天丝棉活性染色成品面料.jpg'],
    composition: { en: 'Tencel/Lyocell 50% / Cotton 50% (Customizable)', zh: '天丝/莱赛尔 50% / 棉 50%（可定制）' },
    specHighlight: { en: '120–150 GSM | Width 145cm–150cm | Reactive Dyed', zh: '120–150克重 | 门幅 145cm–150cm | 活性染色' },
    moq: { en: '1,000 Meters per color', zh: '1,000 米 / 色' },
    leadTime: { en: '12–18 Days', zh: '12–18 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100', 'ISO 9001'],
    detailedSpecs: [
      { label: { en: 'Weave Type', zh: '组织结构' }, value: { en: 'Plain / Twill', zh: '平纹 / 斜纹' } },
      { label: { en: 'Dyeing', zh: '染色工艺' }, value: { en: 'Reactive Dyeing (High Color Fastness)', zh: '活性染色（高色牢度）' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '145cm / 148cm / 150cm', zh: '145cm / 148cm / 150cm' } },
      { label: { en: 'Shrinkage', zh: '缩水率' }, value: { en: '≤ 3% (Pre-Shrunk)', zh: '≤ 3%（预缩处理）' } },
      { label: { en: 'Handfeel', zh: '手感' }, value: { en: 'Soft, Smooth, Cool Touch', zh: '柔软顺滑、凉爽透气' } },
    ],
    applications: {
      en: 'Shirts, dresses, blouses, loungewear, bedding and curtains.',
      zh: '衬衫、连衣裙、女装上衣、家居服、床品及窗帘等。',
    },
  },
  {
    id: 'fab-high-density-combed',
    code: 'LY-FB101',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Premium Greige · Stable Supply', zh: '高端坯布 · 稳定供应' },
    name: {
      en: 'High-Density Combed Cotton Woven Greige Fabric',
      zh: '高支高密精梳全棉梭织坯布',
    },
    summary: {
      en: 'Fine count combed cotton greige woven on air-jet looms with clean cloth surface, low hairiness and excellent dyeing uniformity.',
      zh: '选用高支精梳棉纱，采用高速喷气织机织造，布面洁净、毛羽少、织造平整，特别适合高支床品、衬衫及精细印染加工。',
    },
    image: '/images/products/面料与坯布/高支高密精梳全棉坯布.jpg',
    secondaryImages: ['/images/products/面料与坯布/高支高密精梳全棉坯布.jpg'],
    composition: { en: '100% Combed Cotton', zh: '100% 精梳棉' },
    specHighlight: { en: '40s–80s Combed | 110–190 GSM | Width 160cm–320cm', zh: '40s–80s 精梳纱 | 110–190克 | 门幅 160cm–320cm' },
    moq: { en: '2,000 Meters per spec', zh: '2,000 米 / 规格' },
    leadTime: { en: '7–15 Days', zh: '7–15 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100', 'ISO 9001'],
    detailedSpecs: [
      { label: { en: 'Yarn Count', zh: '纱支规格' }, value: { en: '40s, 50s, 60s, 70s, 80s Combed Cotton', zh: '40s、50s、60s、70s、80s 精梳棉' } },
      { label: { en: 'Weave Type', zh: '组织结构' }, value: { en: 'Plain / Poplin / Sateen Greige', zh: '平纹 / 府绸 / 贡缎坯布' } },
      { label: { en: 'Width Range', zh: '门幅范围' }, value: { en: '160cm, 180cm, 240cm, 280cm, 320cm', zh: '160cm、180cm、240cm、280cm、320cm' } },
      { label: { en: 'Inspection Standard', zh: '验布标准' }, value: { en: 'American 4-Point System', zh: '美标四分制验布' } },
      { label: { en: 'Packing', zh: '包装方式' }, value: { en: 'Poly-wrapped Roll / Export Bale', zh: '防潮薄膜卷装 / 外贸打件' } },
    ],
    applications: {
      en: 'High-count sheeting, shirting, reactive dyed/printed fabrics, and premium home textile base cloth.',
      zh: '高支高密床单、衬衫面料、活性印染及高档家纺加工用坯布。',
    },
  },
  {
    id: 'fab-tc-greige',
    code: 'LY-FB102',
    category: 'fabrics',
    categoryLabel: { en: 'Fabrics & Greige', zh: '面料与坯布' },
    badge: { en: 'Economical · High Volume', zh: '性价比高 · 大货常备' },
    name: {
      en: 'T/C (Polyester/Cotton) Woven Greige Fabric',
      zh: '涤棉 TC 梭织坯布',
    },
    summary: {
      en: 'Durable and cost-effective T/C greige fabric with good strength, low shrinkage potential, and wide adaptability for dyeing and finishing.',
      zh: '强度好、尺寸稳定性佳、手感挺括，广泛适用于染色、印花、涂层等后整理工序，是服装及家纺领域常用的大宗坯布。',
    },
    image: '/images/products/面料与坯布/涤棉 TC 梭织坯布.jpg',
    secondaryImages: ['/images/products/面料与坯布/涤棉 TC 梭织坯布.jpg'],
    composition: { en: 'T/C 65/35, T/C 80/20', zh: '涤棉 65/35、涤棉 80/20' },
    specHighlight: { en: '20s–45s | 90–200 GSM | Width 150cm–320cm', zh: '20s–45s | 90–200克 | 门幅 150cm–320cm' },
    moq: { en: '3,000 Meters per spec', zh: '3,000 米 / 规格' },
    leadTime: { en: '7–15 Days', zh: '7–15 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100', 'ISO 9001'],
    detailedSpecs: [
      { label: { en: 'Blend Ratio', zh: '混纺比例' }, value: { en: 'T/C 65/35 / T/C 80/20 (Customizable)', zh: '涤棉 65/35 / 涤棉 80/20（可按需定制）' } },
      { label: { en: 'Weave Type', zh: '组织结构' }, value: { en: 'Plain / Twill', zh: '平纹 / 斜纹' } },
      { label: { en: 'Width Range', zh: '门幅范围' }, value: { en: '150cm, 160cm, 180cm, 240cm, 280cm, 320cm', zh: '150cm、160cm、180cm、240cm、280cm、320cm' } },
      { label: { en: 'Application Focus', zh: '适用方向' }, value: { en: 'Workwear, uniforms, linings, and home textile base fabrics', zh: '工装制服、服装里布、家纺坯布等' } },
      { label: { en: 'Packing', zh: '包装方式' }, value: { en: 'Export Bale Packing or Roll Packing', zh: '标准外贸打件或纸管卷装' } },
    ],
    applications: {
      en: 'Shirting, workwear, trousers, bed linen base cloth, and general-purpose woven fabrics.',
      zh: '衬衫、工装、裤料、床品坯布及各类染整用涤棉梭织坯布。',
    },
  },

  // ==================== 2. HOME TEXTILES ====================
  {
    id: 'home-sateen-bedding',
    code: 'LY-HT201',
    category: 'home-textiles',
    categoryLabel: { en: 'Home Textiles', zh: '家纺成品' },
    badge: { en: '5-Star Hotel & Retail', zh: '五星酒店 · 零售爆款' },
    name: {
      en: '300–600 Thread Count Long-Staple Cotton Sateen & Washed Linen Bedding Set',
      zh: '300–600 根长绒棉贡缎及水洗亚麻高定床品四件套',
    },
    summary: {
      en: 'Mercerized silky-smooth sateen and breathable stone-washed bedding sets, retail-ready with custom branding, FBA barcodes, and gift packaging.',
      zh: '精选长绒棉丝光贡缎及石磨水洗亚麻，触感丝滑亲肤。支持全尺寸（Twin/Queen/King）定制、洗水标刺绣及亚马逊FBA零售包装。',
    },
    image: '/images/products/家纺成品/300–600 根长绒棉贡缎及水洗亚麻高定床品四件套.jpg',
    secondaryImages: ['/images/products/家纺成品/300–600 根长绒棉贡缎及水洗亚麻高定床品四件套.jpg'],
    composition: { en: 'Long-Staple Cotton / Bamboo Lyocell / Linen (Blend Ratio Customizable)', zh: '长绒棉 / 竹纤维天丝 / 纯亚麻（配比可定制）' },
    specHighlight: { en: '300TC / 400TC / 600TC | US/EU/AU/UK Standard Sizes', zh: '60s/80s 300–600根 | 美规/欧规/澳规全尺寸定制' },
    moq: { en: '200 Sets per color/size', zh: '200 套 / 花色' },
    leadTime: { en: '20–25 Days', zh: '20–25 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® Made in Green', 'BSCI Audit', 'ISO 9001'],
    detailedSpecs: [
      { label: { en: 'Set Configuration', zh: '套件组合' }, value: { en: '1 Duvet Cover + 1 Flat/Fitted Sheet (40cm Deep Pocket) + 2 Pillowcases', zh: '被套 + 平单/高弹深兜床笠（适配40cm厚床垫）+ 枕套' } },
      { label: { en: 'Workmanship', zh: '缝制工艺' }, value: { en: '3cm Oxford flange, YKK hidden zipper or mother-of-pearl buttons, 8 corner ties', zh: '3cm欧式飞边/双针包边、隐藏式拉链或贝壳扣、8点被角绑带' } },
      { label: { en: 'Retail Packaging', zh: '定制包装' }, value: { en: 'Self-fabric drawstring bag, PVC zipper bag with insert card, or rigid magnetic gift box', zh: '同料束口袋、PVC拉链彩卡袋、或高端磁吸礼盒（含FBA条码贴标）' } },
    ],
    applications: {
      en: 'Department stores, DTC bedding brands, Amazon/Wayfair sellers, 5-star hotels & boutique resorts.',
      zh: '海外百货商超、DTC独立站家居品牌、Amazon/Wayfair大卖、五星级酒店与精品度假村。',
    },
  },
  {
    id: 'home-luxury-towels',
    code: 'LY-HT202',
    category: 'home-textiles',
    categoryLabel: { en: 'Home Textiles', zh: '家纺成品' },
    badge: { en: 'High Absorbency · Spa Grade', zh: '瞬吸蓬松 · 酒店/商超' },
    name: {
      en: 'Heavy Combed Ring-Spun Cotton Star Hotel Bath Towels',
      zh: '重精梳环锭纺星级酒店浴巾',
    },
    summary: {
      en: 'Ultra-plush zero-twist and double-loop combed cotton towels with reinforced double-stitched hems and vat-dyed durability.',
      zh: '采用16s/21s螺旋弱捻精梳棉纱，毛圈蓬松度高、3秒瞬吸不掉毛，活性/还原染色耐氯漂，双针锁边经得起工业级高频洗涤。',
    },
    image: '/images/products/家纺成品/重精梳环锭纺星级酒店浴巾.jpg',
    secondaryImages: ['/images/products/家纺成品/重精梳环锭纺星级酒店浴巾.jpg'],
    composition: { en: '100% Combed Ring-Spun Cotton / Organic Cotton', zh: '100% 精梳环锭纺棉 / GOTS有机棉' },
    specHighlight: { en: '500–750 GSM | Face, Hand, Bath Towel & Bath Mat Sets', zh: '500–750克/㎡ | 方巾/面巾/浴巾/地巾全套配齐' },
    moq: { en: '500 Pcs per item (or 300 Sets)', zh: '500 条 / 单品（或 300 套礼盒装）' },
    leadTime: { en: '18–25 Days', zh: '18–25 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100', 'GOTS Organic', 'AQL 2.5 Inspected'],
    detailedSpecs: [
      { label: { en: 'Standard Dimensions', zh: '常规尺寸' }, value: { en: 'Face 33×33cm | Hand 40×76cm | Bath 70×140cm / 80×160cm', zh: '方巾33×33cm | 面巾40×76cm | 浴巾70×140cm / 80×160cm' } },
      { label: { en: 'Custom Branding', zh: '品牌定制工艺' }, value: { en: 'Dobby cam border, full terry jacquard, satin embroidery, velour reactive print', zh: '缎档提花、全幅高低毛提花、电脑万针刺绣、割绒数码印花' } },
      { label: { en: 'Water Absorbency', zh: '吸水性标准' }, value: { en: '< 3 Seconds Sink Test (After 5 Industrial Washes)', zh: '沉降吸水测试 < 3秒（耐受150次以上工业水洗）' } },
    ],
    applications: {
      en: 'Hospitality groups, spa & wellness centers, beach clubs, promotional corporate gifts, retail chains.',
      zh: '跨国连锁酒店集团、SPA水疗会所、海滩度假俱乐部、品牌促销礼赠及家居连锁超市。',
    },
  },
  {
    id: 'home-blackout-curtains',
    code: 'LY-HT203',
    category: 'home-textiles',
    categoryLabel: { en: 'Home Textiles', zh: '家纺成品' },
    badge: { en: 'Thermal & Acoustic · Ready-Made', zh: '遮光隔热 · 成品窗帘' },
    name: {
      en: 'Coated Full-Blackout Linen-Textured Ready-Made Curtain Panels',
      zh: '涂层全遮光亚麻肌理成品窗帘',
    },
    summary: {
      en: 'Coated full-blackout curtains with a linen-textured surface, providing thermal insulation and light blocking, ready for retail shelves or contract projects.',
      zh: '涂层全遮光工艺搭配亚麻肌理面料，兼具隔热节能与降噪效果，支持打孔、韩褶、穿杆等全款式成品直接上架销售。',
    },
    image: '/images/products/家纺成品/涂层全遮光亚麻肌理成品窗帘.jpg',
    secondaryImages: ['/images/products/家纺成品/涂层全遮光亚麻肌理成品窗帘.jpg'],
    composition: { en: '100% Polyester / Linen-Look Blend with White Acrylic Coating', zh: '涤纶 / 仿麻混纺，白胶涂层' },
    specHighlight: { en: '240–360 GSM | Fabric Width 280cm/300cm | Panel 132×213cm / 132×244cm', zh: '240–360克重 | 门幅 280cm/300cm | 成品 132×213cm / 132×244cm' },
    moq: { en: '300 Pairs per color', zh: '300 副 / 颜色' },
    leadTime: { en: '18–24 Days', zh: '18–24 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['NFPA 701 FR', 'OEKO-TEX® 100', 'BSCI'],
    detailedSpecs: [
      { label: { en: 'Header Styles', zh: '顶部挂法工艺' }, value: { en: 'Stainless Grommet (Eyelet), Pinch Pleat, Rod Pocket, Back Tab, Pencil Pleat Tape', zh: '不锈钢纳米静音打孔圈、美式捏褶、穿杆式、背带式、多功能褶皱带' } },
      { label: { en: 'Shading Rate', zh: '遮光与功能' }, value: { en: '100% White Acrylic Coating Full Blackout', zh: '100%四层白胶零透光隔热工艺' } },
      { label: { en: 'Finishing Quality', zh: '成品整烫标准' }, value: { en: '10cm bottom hem, weighted corners, high-temperature memory pleat setting', zh: '10cm加宽底边、四角配重铅坠、高温蒸汽永久记忆定型' } },
    ],
    applications: {
      en: 'Home improvement retailers, e-commerce sellers, apartment developers, and hotel room renovations.',
      zh: '欧美建材家居卖场、跨境电商大卖、精装公寓开发商及酒店客房软装工程。',
    },
  },
  {
    id: 'home-waffle-nordic-knit',
    code: 'LY-HT205',
    category: 'home-textiles',
    categoryLabel: { en: 'Home Textiles', zh: '家纺成品' },
    badge: { en: 'Knit · Textured Comfort', zh: '针织肌理 · 舒适保暖' },
    name: {
      en: 'Waffle Cotton Leisure Throw Blanket',
      zh: '华夫格纯棉休闲毯',
    },
    summary: {
      en: 'Leisure throw blanket in waffle-weave cotton, offering a textured, breathable and cozy hand for sofas, beds and home décor.',
      zh: '华夫格纯棉休闲毯，肌理立体、透气舒适，适用于沙发、床尾及家居软装。',
    },
    image: '/images/products/家纺成品/华夫格纯棉休闲毯.jpg',
    secondaryImages: ['/images/products/家纺成品/华夫格纯棉休闲毯.jpg'],
    composition: { en: '100% Cotton (Customizable)', zh: '100% 纯棉（可定制）' },
    specHighlight: { en: 'Waffle Weave | Width 150cm–200cm', zh: '华夫格 | 门幅 150cm–200cm' },
    moq: { en: '300 Pcs per design', zh: '300 条 / 花型' },
    leadTime: { en: '15–22 Days', zh: '15–22 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Waffle Weave Cotton', zh: '华夫格纯棉' } },
      { label: { en: 'Surface', zh: '表面效果' }, value: { en: 'Textured Grid Pattern', zh: '立体格纹肌理' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '150cm / 200cm', zh: '150cm / 200cm' } },
    ],
    applications: {
      en: 'Throw blankets, bed ends, sofa covers, home décor.',
      zh: '盖毯、床尾毯、沙发巾、家居软装等。',
    },
  },
  {
    id: 'home-chunky-chenille',
    code: 'LY-HT206',
    category: 'home-textiles',
    categoryLabel: { en: 'Home Textiles', zh: '家纺成品' },
    badge: { en: 'Chunky Knit · Plush Feel', zh: '粗针织法 · 蓬松柔软' },
    name: {
      en: 'Chunky Knit Chenille Sofa Throw',
      zh: '粗针雪尼尔沙发毯',
    },
    summary: {
      en: 'Chunky-knit chenille sofa throw with a plush, velvety surface and soft drape, ideal for sofas, cushions and cozy home textiles.',
      zh: '粗针雪尼尔沙发毯，绒面蓬松细腻、手感柔软饱满，适用于沙发、靠垫及温馨家居软装。',
    },
    image: '/images/products/家纺成品/粗针雪尼尔沙发毯.jpg',
    secondaryImages: ['/images/products/家纺成品/粗针雪尼尔沙发毯.jpg'],
    composition: { en: 'Polyester / Acrylic Chenille Blend (Customizable)', zh: '涤纶 / 腈纶雪尼尔混纺（可定制）' },
    specHighlight: { en: 'Chunky Chenille | Width 150cm–200cm', zh: '粗针雪尼尔 | 门幅 150cm–200cm' },
    moq: { en: '300 Pcs per design', zh: '300 条 / 花型' },
    leadTime: { en: '15–22 Days', zh: '15–22 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100'],
    detailedSpecs: [
      { label: { en: 'Fabric Type', zh: '面料类型' }, value: { en: 'Chunky Knit Chenille', zh: '粗针雪尼尔' } },
      { label: { en: 'Surface', zh: '表面效果' }, value: { en: 'Plush, Velvety Pile', zh: '蓬松绒面' } },
      { label: { en: 'Width', zh: '门幅' }, value: { en: '150cm / 200cm', zh: '150cm / 200cm' } },
    ],
    applications: {
      en: 'Sofa throws, cushions, sofa covers, home décor.',
      zh: '沙发毯、靠垫、沙发巾、家居软装等。',
    },
  },
  // ==================== 3. TEXTILE ACCESSORIES ====================
  {
    id: 'acc-silk-cashmere-scarves',
    code: 'LY-AC301',
    category: 'accessories',
    categoryLabel: { en: 'Textile Accessories', zh: '纺织配饰' },
    badge: { en: 'Custom Digital Print · Low MOQ', zh: '双面数码印花 · 时尚配饰' },
    name: {
      en: 'Mulberry Silk Twill, Cashmere Wool & Pashmina Custom Scarves & Shawls',
      zh: '6A级桑蚕丝斜纹真丝方巾、羊绒混纺及仿羊绒提花围巾披肩',
    },
    summary: {
      en: 'High-precision double-sided digital printed silk scarves with hand-rolled edges and brushed cashmere-feel winter shawls for fashion labels.',
      zh: '支持高精度正反同色双面数码喷绘真丝方巾（手工卷边）与秋冬水波纹羊绒/仿羊绒拉毛披肩，小批量快反赋能时尚服装品牌与文创礼品。',
    },
    image: '/images/products/纺织配饰/羊绒混纺及仿羊绒提花围巾披肩.jpg',
    secondaryImages: ['/images/products/纺织配饰/羊绒混纺及仿羊绒提花围巾披肩.jpg'],
    composition: { en: '100% 6A Mulberry Silk (14–18 Momme) / Wool-Cashmere / Viscose', zh: '100% 6A桑蚕丝 (14–18姆米) / 羊毛羊绒 / 粘纤仿羊绒' },
    specHighlight: { en: '53×53cm, 90×90cm Silk | 70×200cm Winter Shawl', zh: '53/90cm 真丝方巾 | 70×200cm 秋冬围巾披肩' },
    moq: { en: '100 Pcs per print/color (Flexible MOQ)', zh: '100 条 / 花型（支持多花型拼单）' },
    leadTime: { en: '10–18 Days (Sample in 5 days)', zh: '10–18 天（5天极速出印花样）' },
    originPort: { en: 'FOB Ningbo / Shanghai (or DHL/FedEx Air)', zh: 'FOB 宁波 / 上海（小批量支持国际快递直发）' },
    certifications: ['OEKO-TEX® 100', 'Pure Silk Mark', 'REACH'],
    detailedSpecs: [
      { label: { en: 'Printing Tech', zh: '印花工艺' }, value: { en: 'Double-penetration digital printing (95%+ backside vibrancy) or hand screen print', zh: '高精度双面渗透数码直喷（背面色彩还原度95%以上）或手工台版印花' } },
      { label: { en: 'Hemming Craft', zh: '卷边工艺' }, value: { en: 'Artisan hand-rolled edge (18 stitches/inch), machine baby hem, or eyelash fringe', zh: '传统纯手工卷边、精细机器密拷边、或天然眼睫毛流苏边' } },
      { label: { en: 'Brand Packaging', zh: '专柜级包装' }, value: { en: 'Custom foil-stamped drawer box, acid-free tissue paper, silk ribbon & care label', zh: '定制烫金抽屉礼盒、无酸防潮拷贝纸、真丝丝带及品牌洗水标' } },
    ],
    applications: {
      en: 'Fashion apparel brands, museum & art gallery merch, corporate VIP gifts, and boutique accessories.',
      zh: '时尚男女装品牌配饰线、博物馆/艺术展文创衍生品、企业高端商务伴手礼及买手店。',
    },
  },
  {
    id: 'acc-headwear-beanies',
    code: 'LY-AC303',
    category: 'accessories',
    categoryLabel: { en: 'Textile Accessories', zh: '纺织配饰' },
    badge: { en: 'Streetwear & Sports · OEM', zh: '潮牌帽饰 · 刺绣定制' },
    name: {
      en: 'Washed Cotton Twill Baseball Caps, Bucket Hats & Ribbed Knit Beanies',
      zh: '水洗纯棉斜纹棒球帽、渔夫帽、运动发带及美利奴羊毛针织冷帽',
    },
    summary: {
      en: '6-panel vintage washed dad hats, reversible printed bucket hats, and Jacquard knitted winter beanies with 3D embroidery and woven patches.',
      zh: '涵盖复古水洗纯棉6片棒球帽、双面戴印花渔夫帽、运动吸汗发带及秋冬羊毛罗纹针织帽，支持3D立体刺绣、织标皮标与定制开模五金调节扣。',
    },
    image: '/images/products/纺织配饰/美利奴羊毛针织冷帽.jpg',
    secondaryImages: ['/images/products/纺织配饰/美利奴羊毛针织冷帽.jpg'],
    composition: { en: '100% Chino Cotton Twill / Corduroy / Merino Wool & Acrylic', zh: '100% 精梳纱卡斜纹棉 / 灯芯绒 / 美利奴羊毛及腈纶' },
    specHighlight: { en: 'Adult 56–60cm / Kids 52–54cm | 3D Embroidery & Patch', zh: '成人 56–60cm / 儿童码 | 支持3D立体刺绣与硅胶贴标' },
    moq: { en: '300 Pcs per style/color', zh: '300 顶 / 款式颜色' },
    leadTime: { en: '15–20 Days', zh: '15–20 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['OEKO-TEX® 100', 'BSCI', 'CPSIA Lead-Free'],
    detailedSpecs: [
      { label: { en: 'Crown & Brim', zh: '帽型结构' }, value: { en: 'Unstructured soft crown, structured 6-panel buckram, wide-brim UPF50+ bucket hat', zh: '软顶水洗老爹帽、硬衬定型6片棒球帽、防晒宽檐渔夫帽' } },
      { label: { en: 'Sweatband & Lining', zh: '内里与吸汗带' }, value: { en: 'CoolMax® moisture-wicking sweatband + custom printed seam tape', zh: 'CoolMax® 速干抗菌吸汗带 + 定制印字内里包边条' } },
      { label: { en: 'Closure Options', zh: '尾扣调节方式' }, value: { en: 'Antique brass buckle, genuine leather strap, plastic snapback, or Velcro', zh: '复古纯铜日字扣、真皮调节带、塑胶排扣或魔术贴' } },
    ],
    applications: {
      en: 'Streetwear & sportswear brands, outdoor lifestyle labels, golf clubs, and team uniforms.',
      zh: '街头潮牌与运动服饰品牌、户外露营品牌、高尔夫俱乐部及企业团体定制。',
    },
  },
  {
    id: 'acc-jacquard-neckwear',
    code: 'LY-AC304',
    category: 'accessories',
    categoryLabel: { en: 'Textile Accessories', zh: '纺织配饰' },
    badge: { en: '2400-Needle Jacquard · Menswear', zh: '高密色织提花 · 绅士配饰' },
    name: {
      en: 'High-Density Silk Jacquard Neckties, Bowties, Pocket Squares & Fashion Belts',
      zh: '2400针高密桑蚕丝色织提花领带、口袋巾、领结与编织腰带礼盒',
    },
    summary: {
      en: 'Bespoke yarn-dyed jacquard neckties, satin bowties, and elastic braided belts crafted for menswear brands, airlines, and corporate uniforms.',
      zh: '采用进口高密剑杆提花机色织工艺，全羊毛衬芯手工缝合，挺括抗皱易打结。提供领带+口袋巾+袖扣成套礼盒及弹力编织腰带定制。',
    },
    image: '/images/products/纺织配饰/2400 针高密桑蚕丝色织提花领带.jpg',
    secondaryImages: ['/images/products/纺织配饰/2400 针高密桑蚕丝色织提花领带.jpg'],
    composition: { en: '100% Mulberry Silk / High-Density Microfiber / Wool Blend', zh: '100% 桑蚕丝 / 2400针高密超细旦涤丝 / 羊毛混纺' },
    specHighlight: { en: 'Width 7.0cm / 8.0cm × 148cm | Hand-Sewn Wool Interlining', zh: '领带宽度 7.0cm / 8.0cm × 148cm | 纯羊毛双层内衬' },
    moq: { en: '150 Pcs per jacquard design', zh: '150 条 / 提花花型' },
    leadTime: { en: '14–20 Days', zh: '14–20 天' },
    originPort: { en: 'FOB Ningbo / Shanghai', zh: 'FOB 宁波 / 上海' },
    certifications: ['ISO 9001', 'OEKO-TEX® 100', 'Teflon™ Stain Repellent'],
    detailedSpecs: [
      { label: { en: 'Weaving Density', zh: '色织提花密度' }, value: { en: '1200-Needle & 2400-Needle High-Definition Yarn-Dyed Jacquard', zh: '1200针 / 2400针超高密色织大提花（可精细织出品牌徽标）' } },
      { label: { en: 'Tipping & Label', zh: '里布与标牌定制' }, value: { en: 'Custom woven logo tipping fabric + bar-tack slip stitch + keeper loop label', zh: '定制品牌满印/提花里布（小剑内衬）+ 手工打结定位线 + 定制主唛' } },
      { label: { en: 'Matching Sets', zh: '配套配饰组合' }, value: { en: 'Necktie + 30×30cm Pocket Square + Bowtie + Elastic Braided Belt Gift Box', zh: '领带 + 30×30cm口袋方巾 + 领结 + 弹力帆布/牛皮编织腰带礼盒' } },
    ],
    applications: {
      en: 'Menswear suit brands, airlines & banking uniforms, prestigious schools, and groomsmen gift boxes.',
      zh: '男装西服定制品牌、航空公司与银行制服采购、国际学校校服配饰及商务伴手礼盒。',
    },
  },
];

const countProducts = (key: ProductCategoryKey) =>
  productsData.filter((product) => product.category === key).length;

export const categoryTabs: {
  key: 'all' | ProductCategoryKey;
  label: BilingualText;
  subLabel: BilingualText;
  count: number;
}[] = [
  {
    key: 'all',
    label: { en: 'All Products', zh: '全部产品中心' },
    subLabel: {
      en: `${productsData.length} Core Export Series`,
      zh: `${productsData.length}大外贸主力系列`,
    },
    count: productsData.length,
  },
  {
    key: 'fabrics',
    label: { en: 'Fabrics & Greige Goods', zh: '面料与坯布' },
    subLabel: { en: 'Greige, Dyed, Functional & Linen', zh: '梭织坯布 / 染色印花 / 功能性面料' },
    count: countProducts('fabrics'),
  },
  {
    key: 'home-textiles',
    label: { en: 'Home Textiles', zh: '家纺成品' },
    subLabel: { en: 'Bedding, Hotel Towels, Throws & Curtains', zh: '高支床品 / 酒店巾类 / 窗帘盖毯' },
    count: countProducts('home-textiles'),
  },
  {
    key: 'accessories',
    label: { en: 'Textile Accessories', zh: '纺织配饰' },
    subLabel: { en: 'Scarves, Headwear & Neckwear', zh: '围巾披肩 / 帽饰 / 领带礼盒' },
    count: countProducts('accessories'),
  },
];

export const factoryStats = [
  {
    number: '3,800+',
    unit: { en: '㎡', zh: '㎡' },
    title: { en: 'Production & Yiwu Logistics Hub', zh: '生产基地与义乌仓储集运中心' },
    desc: {
      en: 'Located in Futian Sub-district, Yiwu (next to Yiwu International Trade City), backed by cooperative weaving & sewing mills.',
      zh: '总部坐落于浙江义乌福田街道（毗邻义乌国际商贸城），依托庞大的织造印染与自动化家纺配饰生产基地。',
    },
  },
  {
    number: '4.5M+',
    unit: { en: 'Meters / Mo', zh: '米 / 月' },
    title: { en: 'Monthly Fabric Capacity', zh: '面料与坯布月均产能' },
    desc: {
      en: '320+ high-speed air-jet and rapier looms ensuring stable bulk supply of greige and dyed fabrics.',
      zh: '配备320余台高速喷气、剑杆织机，保障大宗全棉/涤棉坯布、亚麻及功能性成品布稳定供应。',
    },
  },
  {
    number: '35K+',
    unit: { en: 'Pcs / Mo', zh: '件套 / 月' },
    title: { en: 'Home Textile & Accessory Output', zh: '家纺成品与配饰月产能' },
    desc: {
      en: 'Flexible production lines supporting both high-volume retail orders and low-MOQ custom runs.',
      zh: '柔性化智能吊挂缝制流水线，兼顾大型商超整柜订单与品牌客户小批量快反定制。',
    },
  },
  {
    number: '28+',
    unit: { en: 'Countries', zh: '个国家地区' },
    title: { en: 'Global Export Footprint', zh: '全球外贸出口覆盖市场' },
    desc: {
      en: 'Trusted by 400+ importers, fashion labels, and hospitality buyers across North America, EU, MENA, South America, and Southeast Asia.',
      zh: '长期服务北美、欧洲、中东、拉美及东南亚等400余家海外进口商、服装品牌与酒店采购商。',
    },
  },
];

export const workshopGallery = [
  {
    title: { en: 'High-Speed Air-Jet Weaving Mill', zh: '恒温恒湿高速喷气织造车间' },
    tag: { en: '320+ Smart Looms', zh: '320+ 高速织机' },
    image: '/images/factory/恒温恒湿高速喷气织造车间.jpg',
  },
  {
    title: { en: 'Eco Reactive Dyeing & Digital Print', zh: '环保活性印染与高精度数码喷印' },
    tag: { en: 'OEKO-TEX Compliant', zh: '环保生态染整' },
    image: '/images/factory/环保活性印染与高精度数码喷印.jpg',
  },
  {
    title: { en: 'Automated Cutting & Sewing Lines', zh: '家纺与配饰自动化裁剪缝制车间' },
    tag: { en: 'ISO 9001 & BSCI', zh: '标准化精工缝制' },
    image: '/images/factory/家纺与配饰自动化裁剪缝制车间.jpg',
  },
  {
    title: { en: 'Yiwu Smart Warehouse & Container Loading', zh: '智能立体仓与集装箱监装中心' },
    tag: { en: '100% Pre-Shipment QC', zh: '100% 出货全检' },
    image: '/images/factory/智能立体仓与集装箱监装中心.jpg',
  },
];

export const oemSteps = [
  {
    step: '01',
    title: { en: 'Spec & Tech Pack Review', zh: '需求评估与工艺解析' },
    duration: { en: 'Within 12 Hours', zh: '12小时内响应' },
    desc: {
      en: 'Send us your fabric specs, Pantone codes, tech packs, or physical swatches. Our textile engineers provide accurate costing and yarn/construction solutions.',
      zh: '客户提供面料参数、潘通色号、设计图稿或实物来样，我们由资深纺织工程师进行纱支组织分析，12小时内出具精准外贸报价方案。',
    },
  },
  {
    step: '02',
    title: { en: 'Lab Dips & Strike-Offs', zh: '打色卡 (Lab Dips) 与印花手样' },
    duration: { en: '3–5 Days', zh: '3–5 天极速打样' },
    desc: {
      en: 'Free A/B/C shade lab dips under D65/TL84 lightboxes and digital/screen print strike-offs sent via DHL/FedEx for your color approval.',
      zh: '在标准光源箱（D65/TL84）下免费提供 A/B/C 三档色卡小样及印花手样，通过 DHL/FedEx 国际快递寄送供客户确认颜色与手感。',
    },
  },
  {
    step: '03',
    title: { en: 'Pre-Production Sample (PPS)', zh: '产前样 (PP Sample) 封样确认' },
    duration: { en: '5–7 Days', zh: '5–7 天完成' },
    desc: {
      en: 'Complete finished product sample including custom woven labels, embroidery, retail packaging, and barcode stickers before mass production starts.',
      zh: '大货投产前制作包含主唛洗标、刺绣Logo、定制礼盒包装及条码标签在内的完整产前样，客户签字封样后方可启动大货排产。',
    },
  },
  {
    step: '04',
    title: { en: 'Bulk Weaving, Dyeing & Sewing', zh: '规模化排产与全流程可视追踪' },
    duration: { en: '12–25 Days', zh: '12–25 天标准交期' },
    desc: {
      en: 'ERP-tracked production across spinning, weaving, dyeing, cutting, and sewing. Weekly photo/video progress reports sent to your sourcing team.',
      zh: '全流程 ERP 数字化排产管控，涵盖织造、定型印染、自动裁剪与缝制整烫，每周向采购商同步生产实拍照片与视频进度周报。',
    },
  },
  {
    step: '05',
    title: { en: 'Lab Testing & Strict QC Inspection', zh: '物理色牢度检测与严格验货' },
    duration: { en: 'Third-Party Inspection Supported', zh: '支持第三方验货' },
    desc: {
      en: 'Fabrics inspected via American 4-Point System; finished home textiles & accessories pass needle detection and AQL 2.5 inspection (SGS/ITS welcome).',
      zh: '面料严格执行美标四分制全检，家纺与配饰成品100%过检针机并按 AQL 2.5 标准抽检，全面支持 SGS / Intertek / BV 等第三方机构驻厂验货。',
    },
  },
  {
    step: '06',
    title: { en: 'Yiwu Consolidation & Global Logistics', zh: '义乌多品类拼柜与全球无忧交付' },
    duration: { en: 'FOB / CIF / DDP', zh: '海运 / 空运 / 中欧班列' },
    desc: {
      en: 'Full export documentation (CO, Form E/A, GRS TC, Packing List, BL) with container loading supervision in Yiwu/Ningbo or DDP door-to-door delivery.',
      zh: '依托义乌国际陆港与宁波港优势，提供全套外贸单证（产地证 CO/Form E、箱单提单等），支持整柜/拼箱海运、义新欧班列及 DDP 双清包税到门。',
    },
  },
];

export const certificationsList = [
  {
    code: 'OEKO-TEX® STANDARD 100',
    category: { en: 'Product Safety Class I & II', zh: '生态纺织品安全认证（直接接触皮肤级）' },
    desc: {
      en: 'Tested free from harmful levels of over 100 regulated substances including AZO dyes, formaldehyde, and heavy metals. Compliant with EU REACH and US CPSIA regulations.',
      zh: '通过国际权威生态纺织品检测，不含禁用偶氮染料、游离甲醛、重金属及致敏助剂，符合欧盟 REACH 与美国 CPSIA 法规标准。',
    },
  },
  {
    code: 'GRS 4.0 (Global Recycled Standard)',
    category: { en: 'Sustainable & Recycled Traceability', zh: '全球回收标准认证（可开具 TC 交易证书）' },
    desc: {
      en: 'Full chain-of-custody certification for recycled polyester and recycled cotton fabrics, home textiles, and eco canvas bags.',
      zh: '拥有完整的再生涤纶 (rPET) 与再生棉供应链认证资质，可为欧美品牌客户每票出口订单开具官方 GRS TC 交易证书。',
    },
  },
  {
    code: 'BSCI / amfori & Sedex SMETA',
    category: { en: 'Social Compliance Audit', zh: '国际社会责任与人权验厂合规' },
    desc: {
      en: 'Audited ethical manufacturing facility meeting global retail chains and supermarket sourcing compliance requirements.',
      zh: '通过 BSCI 与 Sedex 社会责任验厂审核，满足欧美大型连锁商超、百货集团与知名服装品牌的供应商准入合规要求。',
    },
  },
  {
    code: 'ISO 9001 & Internal Testing Lab',
    category: { en: 'Quality Management System', zh: 'ISO 9001 质量管理体系与内部物理实验室' },
    desc: {
      en: 'In-house testing for color fastness (washing/rubbing/light), dimensional shrinkage, Martindale pilling, and seam slippage.',
      zh: '配备标准恒温恒湿内部检测实验室，每批次大货均完成耐水洗/摩擦/日晒色牢度、缩水率、马丁代尔抗起球及接缝滑移测试。',
    },
  },
];

export const faqList = [
  {
    q: {
      en: 'What is your Minimum Order Quantity (MOQ) across Fabrics, Home Textiles, and Accessories?',
      zh: '请问贵司在“面料坯布、家纺成品、纺织配饰”三大品类的起订量 (MOQ) 分别是多少？',
    },
    a: {
      en: 'We offer flexible tiered MOQs: (1) Greige & Dyed Fabrics: 1,000–3,000 meters per spec/color (ready stock available from 1 roll); (2) Home Textiles: 200–300 sets for bedding/curtains, 500 pcs for towels; (3) Textile Accessories: Low MOQ starting from 100–300 pcs per design for custom scarves, caps, and tote bags.',
      zh: '我们针对不同品类提供灵活的梯度起订量：(1) 面料与坯布：定制织染为 1,000–3,000 米/规格（常备现货色卡与常规坯布支持 1 卷起发）；(2) 家纺成品：床品套件/窗帘/盖毯为 200–300 套，定制毛巾浴巾为 500 条起；(3) 纺织配饰：支持小批量快反，真丝围巾、棒球帽、帆布袋等 100–300 件即可定制专属花型与品牌Logo。',
    },
  },
  {
    q: {
      en: 'Can I visit your Yiwu office/showroom or get free fabric swatches before ordering?',
      zh: '下单前能否参观你们位于义乌福田街道的展厅，或者免费申领样布？',
    },
    a: {
      en: 'Warmly welcome! Our headquarters and sample showroom are located at Room 301, No. 62 Chengxin 3rd Street, Futian Sub-district, Yiwu (right next to Yiwu International Trade City). Standard A4 swatches in stock are 100% FREE to mail worldwide.',
      zh: '非常欢迎！我们的外贸总部与样品展厅位于浙江省金华市义乌市福田街道诚信三街62号301室（紧邻义乌国际商贸城），欢迎国内外客商莅临看样洽谈。同时常规库存 A4 品质样布与色卡均支持免费寄送。',
    },
  },
  {
    q: {
      en: 'Do you support custom private labeling, retail packaging, and Yiwu container consolidation?',
      zh: '是否支持贴牌定制 (Private Label)、亚马逊 FBA 贴标以及义乌市场拼柜集运？',
    },
    a: {
      en: 'Yes! We customize woven labels, care labels, hangtags, gift boxes, and Amazon FNSKU barcodes. Because we are based in Yiwu, we can also receive and consolidate goods from your other Yiwu suppliers into a single container to save ocean freight costs.',
      zh: '完全支持！我们可一站式定制织唛主标、洗水标、礼盒包装及亚马逊 FNSKU 条码。同时依托义乌福田街道核心区位优势，我们支持客户将面料、家纺、配饰及义乌其他采购货物统一入仓拼柜报关出运，大幅节省海运与清关成本。',
    },
  },
  {
    q: {
      en: 'What payment terms and trade incoterms do you accept for international orders?',
      zh: '国际外贸订单支持哪些付款方式与贸易条款 (Incoterms)？',
    },
    a: {
      en: 'We support EXW Yiwu, FOB (Ningbo/Shanghai), CFR, CIF, and DDP (Door-to-Door including customs & duties to US/EU/UK/Middle East/Southeast Asia). Standard payment terms are T/T, L/C at sight for bulk orders, and online trade assurance for trial orders.',
      zh: '贸易条款支持 EXW 义乌、FOB（宁波/上海港）、CFR、CIF 以及欧美/中东/东南亚 DDP 双清包税到门服务。付款方式支持 T/T 电汇、大额订单即期信用证 (L/C at sight) 等多种合规结汇方式。',
    },
  },
];
