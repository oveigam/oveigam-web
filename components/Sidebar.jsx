import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { VscHome, VscCode, VscBriefcase } from 'react-icons/vsc'

const ICON_SIZE = 30

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            
            <div className={styles.logoContainer}>
                <Image className={styles.logoSmall} src="/images/logo-small.png" width={256} height={256} />
            </div>

            <div className={styles.logoContainer}>
                <Image className={styles.logoBig} src="/images/logo.png" width={256} height={256} />
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
        </aside >
    );
}

export default Sidebar;