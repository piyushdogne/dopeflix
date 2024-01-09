import herostyle from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = ({title , imageUrl}) => {
  return (
    <main className={herostyle.main_section}>

    <div className={styles.container}>

    <div className={styles.grid_two_section}>

    <div className={herostyle.hero_content}>
<h1>{title}</h1>  
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid harum, expedita excepturi neque dolorum distinctio tenetur sunt tempore nostrum commodi nesciunt, totam quisquam, debitis sequi? Quibusdam sequi velit iste, ex iusto voluptatum esse at minus, repellat tempore fugiat, earum aspernatur? Est odit cupiditate doloremque qui ab architecto non optio?
     </p>
     <Link href='/movie'>
    <button>
        Explore Movies
    </button>
     </Link>
    </div>

    <div className={herostyle.hero_image}>

     <Image src={imageUrl} alt='watching dopeflix' height={450} width={450}/>

    </div>

    </div>

    </div>

    </main>
  )
}

export default HeroSection