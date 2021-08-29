import { put, takeEvery } from "redux-saga/effects"
import { API } from "../../config"
import axios from "axios"
import { 
  FilterProductAction,
  filterProductSuccess,
  FILTER_PRODUCT,
  GetProductAction, 
  GetProductByIdAction, 
  getProductByIdSuccess, 
  getProductSuccess, 
  GET_PRODUCT, 
  GET_PRODUCT_BY_ID, 
  SearchProductAction, 
  SearchProductSuccess, 
  SEARCH_PRODUCT
} from "../actions/product.actions"
import { Product } from "../models/product"

// 获取商品 /products?sortBy=createdAt&order=asc&limit=10
function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, order, limit }
  })
  yield put(getProductSuccess(response.data, sortBy))
}

// 搜索商品
function* handleSearchProduct({payload: { search, category }}: SearchProductAction) {
  let response = yield axios.get(`${API}/products/search`, {
    params: { search, category }
  })
  yield put(SearchProductSuccess(response.data))
}

// 筛选商品
function* handleFilterProduct(action: FilterProductAction) {
  let response = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filterProductSuccess(response.data, action.payload.skip))
}

// 商品详情
function* handleGetProductById({ payload }: GetProductByIdAction) {
  let response = yield axios.get(`${API}/product/${payload.productId}`)
  yield put(getProductByIdSuccess(response.data))
}

export default function* productSaga() {
  // 获取商品
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  // 搜索
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  // 筛选商品
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
  // 商品详情
  yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById)
}