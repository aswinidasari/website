import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <img className={styles.logo133Icon} alt="" src="/logo13-3-1@2x.png" />
        <div className={styles.block}>
          <div className={styles.block1}>
            <div className={styles.productLinks}>
              <b className={styles.product}>Product</b>
              <div className={styles.productItems}>
                <b className={styles.doc}>Doc</b>
                <b className={styles.waitlist}>Waitlist</b>
              </div>
            </div>
            <div className={styles.infoLinks}>
              <b className={styles.info}>Info</b>
              <div className={styles.infoItems}>
                <b className={styles.home}>Home</b>
                <b className={styles.waitlist1}>Waitlist</b>
                <b className={styles.aboutUs}>About Us</b>
                <b className={styles.community}>Community</b>
              </div>
            </div>
          </div>
          <button className={styles.launchAppWrapper}>
            <b className={styles.launchApp}>Launch App</b>
          </button>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightContent}>
          <div className={styles.platformName}>
            <h1 className={styles.blazeswap}>Semi Hyphen</h1>
          </div>
          <div className={styles.rightsReserved}>
            <div className={styles.rights}>
              <div className={styles.copyrightSymbol}>
                <b className={styles.c}>c</b>
                <div className={styles.circle} />
              </div>
            </div>
            <b className={styles.blazeswap2024}>Semi Hyphen 2024</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
