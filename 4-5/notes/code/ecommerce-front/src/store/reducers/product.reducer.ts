import { 
  FILTER_PRODUCT,
  FILTER_PRODUCT_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_SUCCESS,
  ProductUnionType, 
  SEARCH_PRODUCT_SUCCESS
} from "../actions/product.actions";
import { Product } from "../models/product";

export interface ProductState {
  // 按时间排序
  createdAt: {
    loaded: boolean
    success: boolean
    products: Product[]
  }
  // 按销量排序
  sold: {
    loaded: boolean
    success: boolean
    products: Product[]
  }
  // 搜索结果数据
  search: Product[]
  // 筛选商品
  filter: {
    loaded: boolean
    success: boolean
    result: {
      size: number
      data: Product[]
    }
  }
  // 商品详情
  product: {
    loaded: boolean
    success: boolean
    result: Product
  }
}

const initialState: ProductState = {
  createdAt: {
    loaded: false,
    success: false,
    products: []
  },
  sold: {
    loaded: false,
    success: false,
    products: []
  },
  search: [],
  filter: {
    success: false,
    loaded: false,
    result: {
      size: 0,
      data: []
    }
  },
  product: {
    loaded: false,
    success: false,
    result: {
      _id: "",
      name: "",
      price: 0,
      description: "",
      category: {
        _id: "",
        name: ""
      },
      quantity: 0,
      sold: 0,
      photo: new FormData(),
      shipping: false,
      createdAt: ""
    }
  }
}

export default function productReducer(state: ProductState = initialState, action: ProductUnionType){
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          ...state[action.sortBy === "createdAt" ? "createdAt" : "sold"],
          loaded: false,
          success: false
        }
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        [action.sortBy]: {
          loaded: true,
          success: true,
          products: action.payload
        }
      }
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        search: action.products
      }
    case FILTER_PRODUCT:
      return {
        ...state,
        filter: {
          loaded: false,
          success: false,
          result: {
            size: 0,
            data: state.filter.result.data
          }
        }
      }
    case FILTER_PRODUCT_SUCCESS:
      let data =
        action.skip === 0
          // 第一次获取数据，覆盖原来的数据
          ? action.payload.data
          // 点击更多获取数据,新返回的数据和旧数据整合
          : [...state.filter.result.data, ...action.payload.data]

      return {
        ...state,
        filter: {
          loaded: true,
          success: true,
          result: {
            size: action.payload.size,
            data
          }
        }
      }
      case GET_PRODUCT_BY_ID:
        return {
          ...state,
          product: {
            ...state.product,
            loaded: false,
            success: false
          }
        }
      case GET_PRODUCT_BY_ID_SUCCESS: {
        return {
          ...state,
          product: {
            loaded: true,
            success: true,
            result: action.payload
          }
        }
      }
    default:
      return state
  }
}