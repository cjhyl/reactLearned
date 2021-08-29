import { useRouter } from 'next/router'

export default function Post ({data}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <span>{data.id}</span>
      <span>{data.title}</span>
    </div>
  )
}

// 返回用户可以访问到的所有路由参数
export async function getStaticPaths () {
  return {
    paths: [{params: {id: "1"}}, {params: {id: "2"}}],
    // false 没有相关路由参数时，显示404页面。
    // true 没有相关路由参数时，根据输入的参数执行getStaticProps，生成静态页面
    fallback: true
  }
}

// 返回路由参数所对应的具体的数据
export async function getStaticProps ({params}) {
  console.log('params', params);
  const id = params.id;
  let data;
  switch (id) {
    case '1':
      data = {id: 1, title: 'Hello'};
      break;
    case '2':
      data = {id: 2, title: 'world'};
      break;
    case '3':
      data = {id: 3, title: 'Hello world'};
      break;
    default:
      data = []
      break;
  }
  return {
    props: {
      data
    }
  }
}
