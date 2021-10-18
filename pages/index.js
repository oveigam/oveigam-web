import Head from 'next/head'
import { SiExpo, SiExpress, SiGithub, SiJava, SiLinkedin, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiSocketdotio, SiSpring } from 'react-icons/si'
import FFXProject from '../components/project-cards/FFXProject'
import GambiteroProject from '../components/project-cards/GambiteroProject'
import SectionTitle from '../components/SectionTitle'
import WorkTimeline from '../components/WorkTimeline'
import SidebarLayout from '../layout/SidebarLayout'
import styles from '../styles/Home.module.css'

const ICON_SIZE = 34

export default function Home() {
  return (
    <>
      <Head>
        <title>Óscar Veiga Menéndez</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Óscar Veiga Menéndez" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Desarrollador de software" />
        <meta property="og:image" content="https://www.oscarinadev.com/images/logo.png" />
      </Head>

      <SidebarLayout>

        <section id="inicio" className={`${styles.seccion} ${styles.inicio}`}>
          <div className={styles.inicioContent}>
            <h3>Hola! Soy</h3>
            <h1><span id={styles.nombre}>Óscar</span></h1>
            <h1>Veiga Menéndez</h1>
            <h2>
              Desarrollador de software
            </h2>
            <div className={styles.techIcons}>
              <SiJava size={ICON_SIZE} color="#DA1E21" title="Java" />
              <SiSpring size={ICON_SIZE} color="#6AAD3D" title="Spring" />
              <SiNodedotjs size={ICON_SIZE} color="#689f63" title="NodeJS" />
              <SiExpress size={ICON_SIZE} title="Express" />
              <SiSocketdotio size={ICON_SIZE} title="Socket.IO" />
              <SiReact size={ICON_SIZE} color="#61DAFB" title="React / React Native" />
              <SiNextdotjs size={ICON_SIZE} color="#000000" title="Nextjs" />
              <SiExpo size={ICON_SIZE} color="#1b1f23" title="Expo" />
              <SiMongodb style={{ marginLeft: -7 }} size={ICON_SIZE} color="#13AA52" title="MongoDB" />
            </div>

            <div className={styles.botonera}>

              {/* <a href="/crv.pdf" target="_blank">
                <div className={styles.verCRV} >
                  VER CRV
                </div>
              </a> */}

              <div className={styles.redes}>

                <a href="https://www.linkedin.com/in/óscar-veiga-menéndez-2b0502223" target="_blank" rel="noreferrer">
                  <div className={styles.botonSocial} style={{ marginRight: 30 }}>
                    <SiLinkedin size={30} />
                    <span>LinkedIn</span>
                  </div>
                </a>

                <a href="https://github.com/oveigam" target="_blank" rel="noreferrer">
                  <div className={styles.botonSocial}>
                    <SiGithub size={30} />
                    <span>Github</span>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </section>

        <section id="trabajo" className={styles.seccion}>
          <div className={styles.gutters}>
            <SectionTitle left>TRABAJO</SectionTitle>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <WorkTimeline />
            </div>
          </div>
        </section>

        <section id="proyectos" className={styles.seccion} style={{ marginBottom: 100 }}>
          <div className={styles.gutters}>
            <SectionTitle style={{ marginBottom: 50 }} right>PROYECTOS</SectionTitle>
            <GambiteroProject style={{ marginBottom: 50 }} />
            <FFXProject />
          </div>
        </section>

      </SidebarLayout>
    </>
  )
}
