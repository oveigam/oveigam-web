import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import { VscHome, VscCode, VscBriefcase } from 'react-icons/vsc'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const ICON_SIZE = 30

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>

            <div className={styles.logoContainer}>
                <img className={styles.o} src="/images/o.png" width={50} height={50} draggable={false} />
                <img className={styles.v} src="/images/v.png" width={50} height={50} draggable={false} />
                <img className={styles.m} src="/images/m.png" width={50} height={50} draggable={false} />
            </div>

            <nav className={styles.botonera}>

                <Link href="#inicio" >
                    <div className={styles.navButton} >
                        <div>
                            <VscHome size={ICON_SIZE} />
                        </div>
                        <span>INICIO</span>
                    </div>
                </Link>

                <Link href="#trabajo" >
                    <div className={styles.navButton} >
                        <div>
                            <VscBriefcase size={ICON_SIZE} />
                        </div>
                        <span>TRABAJO</span>
                    </div>
                </Link>

                <Link href="#proyectos" >
                    <div className={styles.navButton} >
                        <div>
                            <VscCode size={ICON_SIZE} />
                        </div>
                        <span>PROYECTOS</span>
                    </div>
                </Link>
            </nav>
            <div className={styles.footer}>
                <a href="https://www.linkedin.com/in/óscar-veiga-menéndez-2b0502223" target="_blank" rel="noreferrer">
                    <SiLinkedin size={15} />
                </a>
                <a href="https://github.com/oveigam" target="_blank" rel="noreferrer">
                    <SiGithub size={15} />
                </a>
            </div>
        </aside >
    );
}

export default Sidebar;