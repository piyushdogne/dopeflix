import Link from "next/link"
import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'



const page = async () => {


 const url = process.env.RAPID_KEY;
  
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '20ba2a4692msh5babade7e93e8ddp1a3e12jsn890bc5a48f9d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
 };

const res = await fetch(url , options);
const data = await res.json();
const data2 = data.titles;
console.log(data2);
  return (
  <section className={styles.movieSection}>
    <div className={styles.container}>
    <h1>Series and Movies</h1>
    <div className={styles.card_section}>

     {data2.map((elem) =>{
       return <MovieCard key={elem.id}{...elem}/>
      })} 

      
      </div>
    </div>
    </section>
  )
}

export default page