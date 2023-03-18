import styles from "@/styles/Home.module.css" 
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
      <title>home</title>
      <meta name="keywords" content="ร้านค้า,ขายเสื้อผ้า"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <Image src="/shopping.svg" width={400} height={400} alt="logo"/>
      <p>Welcome To Shop</p>
      <Link href="/products" className={styles.btn}>All Products</Link>
    </div>  
    </>
  )
}
