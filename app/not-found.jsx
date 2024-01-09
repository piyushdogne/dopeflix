import Link from 'next/link'
import styles from '@/app/styles/common.module.css'

const notfound = () => {
  return (
    <section className={styles.container}>

    <div className={styles.error_page}>
      <h1>404</h1>
      <h2>Not Found</h2>
        <p>Could not find the request resource</p>
   <Link href="/">
   <button>
    Go to home page
   </button>
   </Link>
   
   </div>

    </section>

  )
}

export default notfound