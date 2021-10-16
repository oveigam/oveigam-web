import styles from '../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { VscHome, VscCode, VscBriefcase } from 'react-icons/vsc'

const ICON_SIZE = 25

const Toolbar = () => {
    return (
        <nav className={styles.toolbar}>

            <Image src="/images/logo-small.png" width={60} height={60} />

            <div style={{ flex: 1 }} />

            <Link href="#inicio" >
                <div className={styles.toolbarButton} title="hola" >
                    <VscHome size={ICON_SIZE} />
                </div>
            </Link>

            <Link href="#trabajo" >
                <div className={styles.toolbarButton} >
                    <VscBriefcase size={ICON_SIZE} />
                </div>
            </Link>

            <Link href="#proyectos" >
                <div className={styles.toolbarButton} >
                    <VscCode size={ICON_SIZE} />
                </div>
            </Link>
        </nav>
    );
}

export default Toolbar;