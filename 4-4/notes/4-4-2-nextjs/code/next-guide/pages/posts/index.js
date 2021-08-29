import Link from 'next/link'

export default function Post ({data}) {
  return (
    <div>
      <ul>
        {
          data.map(item => {
            return (
              <li>
                <Link href={"/post/"+item.id}>
                  <a>{item.title}</a>
                </Link>
              </li>
              
            )
          })
        }
      </ul>
    </div>
  )
}

// 返回路由参数所对应的具体的数据
export async function getStaticProps () {
  let data = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'world'}
  ];
  return {
    props: {
      data
    }
  }
}
