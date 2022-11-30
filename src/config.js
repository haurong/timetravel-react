export const MY_HOST = 'http://localhost:3001';

// export const AB_LIST_AUTH = `${MY_HOST}/ab/api/list-auth`;
// 假登入
export const LOGIN_API = `${MY_HOST}/member/api/login-api`;
export const SIGNIN_API = `${MY_HOST}/member/api/signin-api`;
export const PROFILE_API = `${MY_HOST}/member/api/edit-member-api`;
export const RESET_PASSWORD_API = `${MY_HOST}/member/api/reset-password-member-api`;
export const UPLOAD_AVATAR_API = `${MY_HOST}/member/upload-avatar`;

export const HOTEL_LIST = `${MY_HOST}/hotel/api`;

export const FOOD_LIST = `${MY_HOST}/food/api`;
export const FOOD_ITEM = `${MY_HOST}/food/item/`;
export const FOOD_CARD_ITEM1 = `${MY_HOST}/food/item/117`;
export const FOOD_CARD_ITEM2 = `${MY_HOST}/food/item/125`;
export const FOOD_CARD_ITEM3 = `${MY_HOST}/food/item/119`;
export const FOOD_CARD_ITEM4 = `${MY_HOST}/food/item/120`;
export const FOOD_CARD_ITEM5 = `${MY_HOST}/food/item/129`;
export const FOOD_CARD_ITEM6 = `${MY_HOST}/food/item/128`;
export const FOOD_IMG = `${MY_HOST}/uploads/Food/`;
export const FOOD_COMMIT = `${MY_HOST}/food/commit`;

//購物車路徑
export const MakeOrder = `${MY_HOST}/cart/api/makeorder`;
// export const MakeHotelOrder = `${MY_HOST}/cart/api/makehotelorder`;
// export const MakeFoodOrder = `${MY_HOST}/cart/api/makefoodorder`;
// export const MakeTicketOrder = `${MY_HOST}/cart/api/maketicketorder`;

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
