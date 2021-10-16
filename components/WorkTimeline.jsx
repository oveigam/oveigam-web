import styles from '../styles/WorkTimeline.module.css'

const Fecha = ({ children }) => {
    return (
        <div className={styles.fechaItem}>
            {children}
        </div>
    )
}

const Time = () => {
    return (
        <div className={styles.timeItem}>
            <div className={styles.line} />
            <div className={styles.dot} />
        </div>
    )
}

const Event = ({ title, subtitle, tecnologias }) => {
    return (
        <div className={styles.eventItem}>
            <h3 style={{ marginBottom: 5 }}>{title}</h3>
            <h4 style={{ marginTop: 0 }}>{subtitle}</h4>
            {
                tecnologias?.length > 0 &&
                <>
                    <h5 style={{ marginBottom: 0 }}>Tecnologías</h5>
                    <ul style={{ marginTop: 8 }}>
                        {
                            tecnologias.map((t, i) => <li key={i}>{t}</li>)
                        }
                    </ul>
                </>
            }
        </div>
    )
}

const WorkTimeline = () => {
    return (
        <div className={styles.container}>

            <Fecha>
                2015 - 2017
            </Fecha>
            <Time />
            <Event
                title="Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma"
                subtitle="IES Fernando Wirtz Suárez"
            />

            <Fecha>
                2017 - 2018
            </Fecha>
            <Time />
            <Event
                title="Mantenimiento en Integración de datos EAI"
                subtitle="Altia Consultores S.L."
                tecnologias={["IBM MQ / MQSeries"]}
            />

            <Fecha>
                2018 - 2020
            </Fecha>
            <Time />
            <Event
                title="Mantenimiento SAFEPAL"
                subtitle="Altia Consultores S.L."
                tecnologias={["Spring", "GWT"]}
            />

            <Fecha>
                2020
            </Fecha>
            <Time />
            <Event
                title="Mantenimiento Maestros Financieros"
                subtitle="Altia Consultores S.L."
                tecnologias={["Spring", "GWT", "React"]}
            />

        </div>
    );
}

export default WorkTimeline;