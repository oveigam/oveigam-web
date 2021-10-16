import styles from '../styles/Tooltip.module.css'

const Tooltip = ({ children, text }) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltiptext}>{text}</span>
        </div>
    );
}

export default Tooltip;