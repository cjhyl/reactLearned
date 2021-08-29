import { Button, Col, Empty, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../store/actions/product.actions';
import { AppState } from '../../store/reducers';
import { ProductState } from '../../store/reducers/product.reducer';
import Checkbox from './Checkbox';
import Layout from './Layout';
import ProductItem from './ProductItem';
import RadioBox from './RadioBox';

const Shop = () => {
  const dispatch = useDispatch()

  const [skip, setSkip] = useState<number>(0)

  const products = useSelector<AppState, ProductState>(state => state.product)

  interface filterMode {
    category: string[]
    price: number[]
  }

  const [myFilters, setMyFilter] = useState<filterMode>({ category: [], price: [] })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])

  useEffect(() => {
    dispatch(filterProduct({ filters: myFilters, skip }))
  }, [myFilters,skip])

  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <Checkbox
        handleFilter={(filters: string[]) => {
          setMyFilter({ ...myFilters, category: filters })
        }}
      />
      <RadioBox 
        handleFilter={(filters: number[]) => {
          setMyFilter({ ...myFilters, price: filters })
        }}
      />
    </Space>
  )

  const productDOM = () => (
    <Row gutter={[16, 16]}>
      {products.filter.result.data.map(item => (
        <Col key={item._id} span="6">
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  )

  const loadMoreButton = () => {
    return (
      <Row>
        {products.filter.result.size >= 4 && (
          <Button onClick={loadMore}>加载更多</Button>
        )}
      </Row>
    )
  }

  const loadMore = () => {
    setSkip(skip + 4)
  }

  const noData = () => {
    return <Row>{products.filter.result.size === 0 && <Empty />}</Row>
  }
  
  return (
    <Layout title="商城" subTitle="挑选你的商品吧">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">
          {productDOM()}
          {loadMoreButton()}
          {noData()}
        </Col>
      </Row>
    </Layout>
  );
}

export default Shop;
