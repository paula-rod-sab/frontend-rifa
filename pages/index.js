import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import EntradaRifa from '../components/EntradaRifa'

export default function Home() {
  const { isWeb3Enabled } = useMoralis()

  return (
    <div>
      <Head>
        <title>Creando rifa ethers benéfica</title>
        <meta name="description" content="Dapp rifa benéfica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        { isWeb3Enabled ? (
          <>
            <EntradaRifa/>
          </>
        ) : (
          <div className='is-size-4 has-text-centered'>¡Hola! ¡Conecta Metamask para poder participar!</div>
        )}

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Rifa benéfica Ethers</p>
      </footer>
    </div>
  )
}
