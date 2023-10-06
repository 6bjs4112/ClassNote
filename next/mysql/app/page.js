import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1>Maria DB CRUD</h1>
      <Link href="./pages/insert">글 작성 </Link>
      <Link href="./pages/list">리스트 </Link>
    </>
  )
}
