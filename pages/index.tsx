import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/eliptico.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
	  <Image
        src={profilePic}
        alt=""
      />
		<p className={styles.description}>
          Let's explore the concept{' '}
        {/* <code className={styles.code}>pages/index.tsx</code>*/}
        </p>
        <meta name="description" content="Created to improve our world" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>

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
        </a>
      </footer>
    </div>
  )
}

