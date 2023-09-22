import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const about = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600" 
        fill ='true' alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 >Digital Storyteller</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
       </div>
       <div className={styles.textContainer}>
       <div className={styles.item}>
        <h1 className={styles.title}>Who are We ?</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nulla molestias labore velit nostrum officia rerum provident quia 
          nemo nisi deleniti explicabo, vitae esse sapiente similique adipisci
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla tempore quia 
          velit culpa veritatis, ut consectetur quo beatae?
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur non itaque tempore, 
          nulla cumque unde commodi eos eius magni nam. Quas nemo id animi optio?
           sed, ad pariatur odio doloremque iste, placeat facere hic? 
           Distinctio iusto harum nostrum officiis recusandae? Eligendi, 
           quod molestias! Dolorum provident assumenda ex nobis, omnis quam
           aperiam pariatur. Hic, explicabo.
        </p>
       </div>
     
       <div className={styles.item}>
        <h1 className={styles.title}>Ehat We Do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
           fuga, alias dolor velit, in, blanditiis cum voluptatem atque 
           laboriosam ipsa doloremque quae. Voluptatem cumque labore 
           provident nam nobis impedit dolore saepe. Quia ipsa debitis 
           velit fugiat exercitationem temporibus nisi nostrum.
           <br/>
           <br/>
           - Dynamic Websites 
           <br/>
           <br/> -  Handy Mobile applications
           <br/>
           <br/> -Creative Illustration
           </p>
           <Button url="/contact" text="contact"/>
          </div>
       </div>
    </div>
  )
}

export default about;