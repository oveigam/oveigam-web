import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import styles from '../styles/Navigation.module.css'

const SidebarLayout = ({ children }) => {
    return (
        <>
            <Toolbar />
            <Sidebar />
            <div className={styles.layoutContent} >
                {children}
            </div>
        </>
    );
}

export default SidebarLayout;