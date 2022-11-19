export const MY_HOST = 'http://localhost:3001';

// export const AB_LIST_AUTH = `${MY_HOST}/ab/api/list-auth`;
// //登入驗證
// export const LOGIN_API = `${MY_HOST}/login-api`;

export const FOOD_LIST = `${MY_HOST}/food/api`;
export const FOOD_ITEM = `${MY_HOST}/food/item/116`;
//從node抓照片資料
export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3001',
  devServerUrl: MY_HOST,
  prodUrl: 'https://www.timetravel.com',
};

export const imgUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl;
