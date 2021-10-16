import Head from 'next/head'
import Link from 'next/link'
import SidebarLayout from '../layout/SidebarLayout'
import styles from '../styles/Home.module.css'
import { SiSpring, SiExpress, SiMongodb, SiNextdotjs, SiExpo, SiJava, SiReact, SiNodedotjs, SiGithub, SiLinkedin, SiSocketdotio } from 'react-icons/si'
import SectionTitle from '../components/SectionTitle'
import WorkTimeline from '../components/WorkTimeline'
import GambiteroProject from '../components/project-cards/GambiteroProject';
import FFXProject from '../components/project-cards/FFXProject'
import Tooltip from '../components/Tooltip'

const ICON_SIZE = 34

export default function Home() {
  return (
    <>
      <Head>
        <title>Óscar Veiga Menéndez</title>
      </Head>
      <SidebarLayout>

        <section id="inicio" className={`${styles.seccion} ${styles.inicio}`}>
          <div>
            <h3>Hola! Soy</h3>
            <h1><span id={styles.nombre}>Óscar</span></h1>
            <h1>Veiga Menéndez</h1>
            <h2>
              Desarrollador de software
            </h2>
            <div className={styles.techIcons}>
              <Tooltip text="Java">
                <SiJava size={ICON_SIZE} color="#DA1E21" />
              </Tooltip>
              <Tooltip text="Spring">
                <SiSpring size={ICON_SIZE} color="#6AAD3D" />
              </Tooltip>
              <Tooltip text="Nodejs">
                <SiNodedotjs size={ICON_SIZE} color="#689f63" />
              </Tooltip>
              <Tooltip text="Express">
                <SiExpress size={ICON_SIZE} />
              </Tooltip>
              <Tooltip text="Socket.IO">
                <SiSocketdotio size={ICON_SIZE} />
              </Tooltip>
              <Tooltip text="React and React Native">
                <SiReact size={ICON_SIZE} color="#61DAFB" />
              </Tooltip>
              <Tooltip text="Nextjs">
                <SiNextdotjs size={ICON_SIZE} color="#000000" />
              </Tooltip>
              <Tooltip text="Expo">
                <SiExpo size={ICON_SIZE} color="#1b1f23" />
              </Tooltip>
              <Tooltip text="MongoDB">
                <SiMongodb style={{ marginLeft: -7 }} size={ICON_SIZE} color="#13AA52" />
              </Tooltip>

            </div>

            <div className={styles.botonera}>

              {/* <a href="/crv.pdf" target="_blank">
                <div className={styles.verCRV} >
                  VER CRV
                </div>
              </a> */}

              <div className={styles.redes}>

                <a href="https://www.linkedin.com/" target="_blank">
                  <div className={styles.botonSocial} style={{ marginRight: 30 }}>
                    <SiLinkedin size={30} />
                    <span>LinkedIn</span>
                  </div>
                </a>

                <a href="https://github.com/oveigam" target="_blank">
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
