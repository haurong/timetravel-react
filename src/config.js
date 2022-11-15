// export const MY_HOST = 'http://localhost:3001';

// export const AB_LIST_AUTH = `${MY_HOST}/ab/api/list-auth`;
// //登入驗證
// export const LOGIN_API = `${MY_HOST}/login-api`;


//從node抓照片資料
export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  devServerUrl: 'http://localhost:3001',
  prodUrl: 'https://www.timetravel.com',
};

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl;

export const FOOD_IMG = `${MY_HOST}/public/imgs/food`;
export const FOOD_LIST = `${MY_HOST}/food/api/list`;
