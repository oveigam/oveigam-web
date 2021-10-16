import Sidebar from "../components/Sidebar";
import styles from '../styles/Sidebar.module.css'

const SidebarLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className={styles.layoutContent} >
                {children}
            </div>
        </>
    );
}

export default SidebarLayout;