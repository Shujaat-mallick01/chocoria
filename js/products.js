/* Chocoria — product catalogue.
   Edit this file to add, remove, or re-price products. Nothing else needs to change.

   Fields
     id        unique slug; also the photo filename: assets/products/<id>.jpg
     category  one of: pralines | truffles | gift-boxes | favors
     nameAr / nameEn    product name
     descAr / descEn    one appetising line
     price     number in Bahraini dinar, always shown with 3 decimals
     image     path to a square photo
*/

const PRODUCTS = [
  {
    id: 'praline-box-12',
    category: 'pralines',
    nameAr: 'بوكس البرالين الفاخر (12 حبة)',
    nameEn: 'Signature praline box (12 pcs)',
    descAr: 'تشكيلة مختارة من البرالين بحشوات ناعمة تذوب في الفم.',
    descEn: 'A curated assortment of pralines with smooth, melting fillings.',
    price: 6.500, // PLACEHOLDER: confirm with client
    image: 'assets/products/praline-box-12.jpg'
  },
  {
    id: 'hazelnut-pralines',
    category: 'pralines',
    nameAr: 'برالين البندق',
    nameEn: 'Hazelnut pralines',
    descAr: 'بندق محمّص مغلّف بشوكولاتة الحليب الحريرية.',
    descEn: 'Roasted hazelnuts wrapped in silky milk chocolate.',
    price: 4.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/hazelnut-pralines.jpg'
  },
  {
    id: 'white-caramel-cups',
    category: 'pralines',
    nameAr: 'أكواب الشوكولاتة البيضاء بالكراميل',
    nameEn: 'White chocolate caramel cups',
    descAr: 'شوكولاتة بيضاء بقلب من الكراميل ولمسة ملح خفيفة.',
    descEn: 'White chocolate cups with a caramel centre and a hint of salt.',
    price: 3.500, // PLACEHOLDER: confirm with client
    image: 'assets/products/white-caramel-cups.jpg'
  },
  {
    id: 'dark-truffles',
    category: 'truffles',
    nameAr: 'ترافل الشوكولاتة الداكنة',
    nameEn: 'Dark chocolate truffles',
    descAr: 'غاناش داكن غني بنسبة كاكاو عالية ومغطّى بمسحوق الكاكاو.',
    descEn: 'Rich dark ganache with a high cocoa content, dusted in cocoa.',
    price: 4.500, // PLACEHOLDER: confirm with client
    image: 'assets/products/dark-truffles.jpg'
  },
  {
    id: 'milk-truffles',
    category: 'truffles',
    nameAr: 'ترافل الشوكولاتة بالحليب',
    nameEn: 'Milk chocolate truffles',
    descAr: 'غاناش بالحليب ناعم وهادئ الحلاوة، مثالي مع القهوة.',
    descEn: 'Soft milk ganache, gently sweet and made for coffee.',
    price: 4.500, // PLACEHOLDER: confirm with client
    image: 'assets/products/milk-truffles.jpg'
  },
  {
    id: 'gold-gift-box-24',
    category: 'gift-boxes',
    nameAr: 'بوكس الهدايا الذهبي (24 حبة)',
    nameEn: 'Golden gift box (24 pcs)',
    descAr: 'بوكس ذهبي بأربع وعشرين حبة مشكّلة، جاهز للإهداء.',
    descEn: 'A golden box of twenty-four assorted pieces, ready to give.',
    price: 12.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/gold-gift-box-24.jpg'
  },
  {
    id: 'mini-gift-box',
    category: 'gift-boxes',
    nameAr: 'بوكس هدية صغير',
    nameEn: 'Mini gift box',
    descAr: 'هدية صغيرة أنيقة تناسب الشكر واللفتات اللطيفة.',
    descEn: 'A small, elegant gift for thank-yous and quiet gestures.',
    price: 3.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/mini-gift-box.jpg'
  },
  {
    id: 'occasion-favors',
    category: 'favors',
    nameAr: 'توزيعات المناسبات (للحبة)',
    nameEn: 'Occasion favors (per piece)',
    descAr: 'حبّات مغلّفة بأناقة لمناسباتكم، بالكمية التي تختارونها.',
    descEn: 'Elegantly wrapped single pieces for your occasion, in any quantity.',
    price: 0.350, // PLACEHOLDER: confirm with client
    image: 'assets/products/occasion-favors.jpg'
  }
];
