import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Programs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar/>
        <div className={styles.titleImage}>
          <h1>Welcome to the Pacific NorthWest Institution</h1>
          <img className={styles.image} src='photos/PNWSchool.jpg'></img>
        </div>
        <div className={styles.programSection}>
          <h2 className={styles.programs}>Our Programs</h2>
          <div className={styles.grid}>
            <div className={styles.business}>
              <h3 className={styles.businessTitle}>Business Degrees:</h3>
            {information && information.map((info, index) => {
              if(info.department.toLowerCase() === "business") {
                return(
                  <Card key={index} degree={info.degree} color="rgb(220 200 180)" font="20px" display="flex" alignItems="center" gap="20px" padding="0 10px" borderRadius="5px" height="60px"/>
                )
              }
            })}
            </div>
        
            <div className={styles.computing}>
            <h3 className={styles.computingTitle}>Computing Degrees:</h3>
            {information && information.map((info, index) => {
              if(info.department.toLowerCase() === "computing") {
                return(
                  <Card key={index} degree={info.degree} color="rgb(231 214 190)" font="20px" display="flex" alignItems="center" gap="20px" padding="5px 10px" borderRadius="5px" height="auto"/>
                )
              }
            })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
