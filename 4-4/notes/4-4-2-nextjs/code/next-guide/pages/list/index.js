import Head from 'next/head'
import styles from './list.module.css'
import { readFile } from 'fs'
import { promisify } from 'util'
import { join } from 'path'

// 把readFile改造成Promise函数
const read = promisify(readFile)

export default function List ({data}) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.testStyle}>List Page Works</div>
      <div>{data}</div>
    </>
  )
}

export async function getServerSideProps (context) {
  console.log('query', context.query)
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8');
  console.log('data', data)
  return {
    props: {
      data
    }
  }
}