import { environment } from "src/environments/environment";

export const baseUrl= environment.production? 'https://api.shppingcart.com':'http://localhost:8989/mentorportal';
export const productsGetUrl= baseUrl+'/shoppingTechService/getProduct';
export const cartAddUrl= baseUrl+'/addCartHistoryService/addToCartService';
export const cartGetDtls=baseUrl+'/addCartHistoryService/geCartDtls';
export const deleteCartData = baseUrl+'/addCartHistoryService/deleteAllCartData';