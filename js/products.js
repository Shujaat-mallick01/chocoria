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
    id: 'arena-oval',
    category: 'gift-boxes',
    nameAr: 'أرينا أوفال (39 قطعة)',
    nameEn: 'Arena Oval (39 pcs)',
    descAr: 'شوكولاتة فاخرة بتصميم أنيق بحشوة كريمي وويفر.',
    descEn: 'Luxury chocolate in an elegant design, with a creamy filling and wafer.',
    price: 9.500, // from the @chocoria.bh post
    image: 'assets/products/arena-oval.jpg'
  },
  {
    id: 'le-gouter-dora',
    category: 'truffles',
    nameAr: 'لو غوتيه دورا (40 حبة)',
    nameEn: 'Le Gouter Dora (40 pcs)',
    descAr: 'علبة دائرية بثلاث نكهات: كراميل ذهبي كرانشي، لوتس بكريمة البسكويت، وروشي بالبندق والويفر.',
    descEn: 'A round tin of three flavours: crunchy golden caramel, Lotus biscuit cream, and hazelnut-wafer rocher.',
    price: 12.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/le-gouter-dora.jpg'
  },
  {
    id: 'le-gouter-bites',
    category: 'pralines',
    nameAr: 'لو غوتيه بايتس (70 حبة)',
    nameEn: 'Le Gouter Bites (70 pcs)',
    descAr: 'فويتين مقرمشة، تشيز كيك وفروتوز رمان، وكراميل ذهبي بلمسة ملح.',
    descEn: 'Crispy feuilletine, cheesecake with pomegranate, and golden salted caramel.',
    price: 14.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/le-gouter-bites.jpg'
  },
  {
    id: 'le-gouter-piano',
    category: 'pralines',
    nameAr: 'لو غوتيه بيانو',
    nameEn: 'Le Gouter Piano',
    descAr: 'أصابع شوكولاتة بثلاث حشوات: بندق محمّص، كراميل مملح، وفويتين مقرمشة.',
    descEn: 'Chocolate fingers with three fillings: roasted hazelnut, salted caramel, and crispy feuilletine.',
    price: 7.500, // PLACEHOLDER: confirm with client
    image: 'assets/products/le-gouter-piano.jpg'
  },
  {
    id: 'hams-gift-box',
    category: 'gift-boxes',
    nameAr: 'بوكس همس',
    nameEn: 'Hams gift box',
    descAr: 'بوكس هدايا بطابقين وشريطة سوداء، مليء بقطع الشوكولاتة بالحليب.',
    descEn: 'A two-tier gift box tied with a black ribbon, filled with milk chocolate pieces.',
    price: 15.000, // PLACEHOLDER: confirm with client
    image: 'assets/products/hams-gift-box.jpg'
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
