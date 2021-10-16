import Image from 'next/image'
import { SiExpo, SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si'
import styles from '../../styles/Projects.module.css'

const ICON_SIZE = 40
const COLOR = "#543cab"

const FFXProject = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cabecera}>
                <Image src={`/images/ffx.png`} width={100} height={100} />
                <div>
                    <h1 className={styles.nombre} style={{ color: COLOR }} >FFX: Monster Arena</h1>
                </div>
            </div>
            <div className={styles.content} >
                <p style={{ width: '80%' }}>
                    Tracker para llevar de manera fácil la cuenta de los monstruos capturados en el "minijuego" de la zona de entrenamiento de Final Fantasy X
                </p>
                <h3 style={{ color: COLOR }}>Technologies</h3>
                <div className={styles.tech}>
                    <div style={{ color: "#61DAFB" }}>
                        <SiReact size={ICON_SIZE} />
                        <h4>React Native</h4>
                    </div>
                    <div style={{ color: "#1b1f23" }}>
                        <SiExpo size={ICON_SIZE} />
                        <h4>Expo</h4>
                    </div>
                </div>
                <h3 style={{ color: COLOR }}>Features</h3>
                <ul>
                    <li>Lista de monstruos por zona con contador interactivo para llevar la cuenta</li>
                    <li>Nombres de monstruos y zonas internacionalizados (Español, Inglés, Alemán, Francés e Italiano)</li>
                    <li>Imágenes de cada uno de los monstruos</li>
                </ul>
            </div>

            <div className={styles.botonera}>

                <a href="https://github.com/oveigam/ffxmonsterarena" target="_blank">
                    <div className={`${styles.repo} ${styles.ffx}`} >
                        <SiGithub size={25} />
                        <span>GITHUB</span>
                    </div>
                </a>

            </div>

        </div>
    );
}

export default FFXProject;