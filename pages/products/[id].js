/* method 1 get id and show data 
import { useRouter } from "next/router"

export default function ProductDetail(){
    const router = useRouter()
    const {id} = router.query
    return(
        <>
            <h1>item : {id}</h1>
        </>
    )
}
*/


// method 2  get data from path with API
import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
//    console.log("Path ", paths)
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    console.log(params);
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
    return{
        props:{product:data}
    }
}

export default function ProductDetail({product}){
    return(
        <>
            <Head>
                <title> {product.title}</title>
            </Head>
            <div className={styles.container}>
                    <div>
                        <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
                    </div>
                    <div className={styles.detail}>
                        <h1>Name : {product.title}</h1>
                        <h2>Price : ${product.price}</h2>
                        <h2>Cetegory : {product.cetegory}</h2>
                        <h3>Brand : {product.brand}</h3>
                        <h4>Detail : {product.description}</h4>
                        <h4>Rating : {product.rating}/5</h4>
                    </div>

            </div>
        </>
    )
}