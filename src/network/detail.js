import { request } from "./request";

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

// 整合商品详情页的商品展示数据
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

// 整合商品详情页的商家信息数据
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

//整合商品详情页的参数信息数据
export class Params {
  constructor(itemParams) {
    this.info = itemParams.info
    this.tables = itemParams.rule.tables
    // 注: images可能没有值(某些商品有值, 某些没有值)
		this.image = itemParams.images ? itemParams.images[0] : '';
  }
}

// 详情页的推荐接口
export function getRecommendData() {
  return request({
    url: '/recommend'
  })
}