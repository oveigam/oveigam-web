import Image from 'next/image'
import { SiExpo, SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiReact, SiSocketdotio } from 'react-icons/si'
import styles from '../../styles/Projects.module.css'

const ICON_SIZE = 40
const COLOR = "#B33485"

const GambiteroProject = ({style}) => {
    return (
        <div className={styles.container} style={style}>
            <div className={styles.cabecera}>
                <Image src={`/images/gambitero.png`} width={100} height={100} alt="gambitero app logo" />
                <div>
                    <h1 className={styles.nombre} style={{ color: COLOR }}>Gambitero</h1>
                </div>
            </div>
            <div className={styles.content} >
                <p>
                    Gestiona y organiza planes (&quot;gambiteos&quot;) con tus amigos!
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
                    <div style={{ color: "#689f63" }}>
                        <SiNodedotjs size={ICON_SIZE} />
                        <h4>Node</h4>
                    </div>
                    <div >
                        <SiExpress size={ICON_SIZE} />
                        <h4>Express</h4>
                    </div>
                    <div >
                        <SiSocketdotio size={ICON_SIZE} />
                        <h4>Socket.IO</h4>
                    </div>
                    <div style={{ color: "#13AA52" }}>
                        <SiMongodb size={ICON_SIZE} />
                        <h4>MongoDB</h4>
                    </div>
                </div>
                <h3 style={{ color: COLOR }}>Features</h3>
                <ul>
                    <li>Crea planes (&quot;gambiteos&quot;) e invita a tus amigos </li>
                    <li>Organiza tus planes de manera detallada</li>
                    <ul>
                        <li>Informa: indica cualquier detalle del plan (lugar, hora, etc.)</li>
                        <li>Votación: si algún detalle no está decidido puedes pedir votaciones de los participantes para ver que quieren hacer</li>
                        <li>Confirmación: Pide a tus usuarios que confirmen algún detalle del plan, como por ejemplo quien va a asistir, quien pone coche, etc.</li>
                    </ul>
                    <li>Chat individual para cada gambiteo</li>
                    <li>Datos en tiempo real</li>
                </ul>
            </div>

            <div className={styles.botonera}>

                <a href="https://github.com/oveigam/gambitero-app" target="_blank" rel="noreferrer">
                    <div className={`${styles.repo} ${styles.gambitero}`} >
                        <SiGithub size={25} />
                        <span>GITHUB</span>
                    </div>
                </a>

            </div>

        </div>
    );
}

export default GambiteroProject;