import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ELIPTIC♼L </title>
        <meta name="description" content="Generated to improve our world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://recycled-container.dolvin17.repl.co/"> ELIPTIC♼L !</a>
        </h1>

        <p className={styles.description}>
          Let's explore the concept{' '}
        {/* <code className={styles.code}>pages/index.tsx</code>*/}
        </p>

        <div className={styles.grid}>
          <a href="https://geoportal.madrid.es/IDEAM_WBGEOPORTAL/visor_ide.iam?ArcGIS=https://sigma.madrid.es/hosted/rest/services/RESIDUOS/PUNTOS_LIMPIOS/MapServer" className={styles.card}>
            <h2>Domestic recycling 🏘️&rarr;</h2>
            <p>Plásticos, baterías, aceites, medicamentos, pesticidas, bombillas, aerosoles, aparatos electrónicos</p>
          </a>

          <a
            href="https://recycled-container.dolvin17.repl.co"
            className={styles.card}
          >
            <h2>Get our NFT collection recycling 💎 &rarr;</h2>
            <p>We offer a NFT collection to gamify the recycling process. Get all!</p>
          </a>

          <a
            href="https://recycled-container.dolvin17.repl.co"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2> How the project works &rarr;</h2>
            <p>
				Just click the link bellow. 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://recycled-container.dolvin17.repl.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

