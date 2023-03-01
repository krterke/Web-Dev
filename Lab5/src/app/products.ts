export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url:string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13 ',
    price: 373.450 ,
    description: 'Смартфон Apple iPhone 13 128Gb черный',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    rating: 4.5
  },
  
  {
    id: 2,
    name: 'Apple Watch SE',
    price: 167.298,
    description: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый', 
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg",
    rating: 3.9
    
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 292.758,
    description: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    rating: 5
  },
  {
    id: 4,
    name:'MacBook Pro 14', 
    price:994,
    description:'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/itemt',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
    rating: 4.9
  },
  {
    id: 5,
    name:'AirPods', 
    price:67.875,
    description:'Наушники Apple AirPods with Charging Case белый',
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
    rating: 4.2
  },
  {
    id: 6,
    name:'USB-C Power Adapter', 
    price:17.430,
    description:'Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
    url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/hd5/44833815789598/apple-20w-usb-c-power-adapter-apple-usb-c-lightning-1-m-101103131-1-Container.jpg",
    rating: 3.7
  },
  {
    id: 7,
    name:'iMac 24 ', 
    price:63.799,
    description:'Моноблок Apple iMac 24 2021 24M185SUX MGPJ3 зеленый',
    url: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m185sux-mgpj3-zelenyi-101530633/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h80/34193722638366/apple-imac-24-2021-24m185sux-mgpj3-zelenyj-101530633-1-Container.jpg",
    rating:4.8 
  },
  {
    id: 8,
    name:'Apple Magic Mouse 2', 
    price:47.900,
    description:'Мышь Apple Magic Mouse 2 (USB-C) белый',
    url: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hf6/48468771209246/apple-magic-mouse-3-belyj-103539318-1.jpg",
    rating: 4.0
  },
  {
    id: 9,
    name:'AirPods Max', 
    price:368.880,
    description:'Наушники Apple AirPods Max зеленый',
    url: 'https://kaspi.kz/shop/p/apple-airpods-max-zelenyi-101161547/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h12/33885799677982/apple-airpods-max-zelenyj-101161547-1-Container.jpg",
    rating: 5.0
  },
  {
    id: 10,
    name:'iPad Pro', 
    price:509.310,
    description:'Планшет Apple iPad Pro 2022 11 256GB Wi-Fi серый',
    url: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-256gb-wi-fi-seryi-107276752/?c=750000000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/h90/64896210862110/apple-ipad-pro-2022-11-256gb-wi-fi-seryi-107276752-1.jpg",
    rating: 4.85
  },
];

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   url:string;
//   image:string;
//   rating: number;
// }
// export interface Category{
//   id: number;
//   product: Product[];
//   name:string;
// }

// export const phone: Product[] = [
//   {
//     id: 1,
//     name: 'iPhone 13 ',
//     price: 373.450 ,
//     description: 'Смартфон Apple iPhone 13 128Gb черный',
//     url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
//     rating: 4.5
//   },
//   {
//     id: 3,
//     name: 'iPhone 11',
//     price: 292.758,
//     description: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
//     url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
//     rating: 5
//   },
  
// ]
// export const laptop: Product[] = [
//   {
//     id: 4,
//     name:'MacBook Pro 14', 
//     price:994,
//     description:'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
//     url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/itemt',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
//     rating: 4.9
//   },
// ]
// export const gadgets: Product[] = [
//   {
//     id: 10,
//     name:'iPad Pro', 
//     price:509.310,
//     description:'Планшет Apple iPad Pro 2022 11 256GB Wi-Fi серый',
//     url: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-256gb-wi-fi-seryi-107276752/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/h90/64896210862110/apple-ipad-pro-2022-11-256gb-wi-fi-seryi-107276752-1.jpg",
//     rating: 4.85
//   },
//   {
//     id: 2,
//     name: 'Apple Watch SE',
//     price: 167.298,
//     description: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый', 
//     url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg",
//     rating: 3.9
    
//   },
//   {
//     id: 6,
//     name:'USB-C Power Adapter', 
//     price:17.430,
//     description:'Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
//     url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/hd5/44833815789598/apple-20w-usb-c-power-adapter-apple-usb-c-lightning-1-m-101103131-1-Container.jpg",
//     rating: 3.7
//   },
//   {
//     id: 8,
//     name:'Apple Magic Mouse 2', 
//     price:47.900,
//     description:'Мышь Apple Magic Mouse 2 (USB-C) белый',
//     url: 'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hf6/48468771209246/apple-magic-mouse-3-belyj-103539318-1.jpg",
//     rating: 4.0
//   },
//   {
//     id: 9,
//     name:'AirPods Max', 
//     price:368.880,
//     description:'Наушники Apple AirPods Max зеленый',
//     url: 'https://kaspi.kz/shop/p/apple-airpods-max-zelenyi-101161547/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h12/33885799677982/apple-airpods-max-zelenyj-101161547-1-Container.jpg",
//     rating: 5.0
//   },
//   {
//     id: 5,
//     name:'AirPods', 
//     price:67.875,
//     description:'Наушники Apple AirPods with Charging Case белый',
//     url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
//     rating: 4.2
//   },
// ]
// export const computers: Product[] = [
//   {
//     id: 7,
//     name:'iMac 24 ', 
//     price:63.799,
//     description:'Моноблок Apple iMac 24 2021 24M185SUX MGPJ3 зеленый',
//     url: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m185sux-mgpj3-zelenyi-101530633/?c=750000000#!/item',
//     image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h80/34193722638366/apple-imac-24-2021-24m185sux-mgpj3-zelenyj-101530633-1-Container.jpg",
//     rating:4.8 
//   },
// ]
// export const categories: Category[]=[
//   {
//     id:1,
//     product:phone,
//     name:'Phones'
//   }
// ]


