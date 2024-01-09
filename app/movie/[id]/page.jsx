import React from 'react'
import styles from '@/app/styles/common.module.css'
const page = async ({params}) => {
  
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '20ba2a4692msh5babade7e93e8ddp1a3e12jsn890bc5a48f9d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
 };

 const res = await fetch(url , options);
 const data = await res.json();
 const main_data = data[0].details;


  return (
    <div className={styles.container}> 
    <h2 className={styles.movie_title}>Netflix <span>{main_data.type}</span></h2>
        <div className={styles.card_section}>
       <div>
       <img src={main_data.backgroundImage.url} alt={main_data.title} width={250} height={200}/>
      </div>
      <div>
        <h1 className='text-slate-50'>{main_data.title}</h1>
        <p>{main_data.synopsis}</p>
      </div>
     </div>
   </div>
  )
}

export default page