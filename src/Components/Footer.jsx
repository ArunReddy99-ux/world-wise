import styles from "./Sidebar.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy: Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Footer;
