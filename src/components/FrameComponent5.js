import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <header className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.logo131Wrapper}>
          <img
            className={styles.logo131Icon}
            loading="lazy"
            alt=""
            src="/logo13-1@2x.png"
          />
        </div>
        <div className={styles.docParent}>
          <div className={styles.semiHyphenParent}>
            <a className={styles.semiHyphen}>Semi Hyphen</a>
            <div className={styles.docWrapper}>
              <a className={styles.doc}>Doc</a>
            </div>
          </div>
        </div>
        <div className={styles.mingcutearrowLeftUpLineWrapper}>
          <img
            className={styles.mingcutearrowLeftUpLineIcon}
            loading="lazy"
            alt=""
            src="/mingcutearrowleftupline.svg"
          />
        </div>
        <div className={styles.waitlistWrapper}>
          <a className={styles.waitlist}>Waitlist</a>
        </div>
        <div className={styles.mingcutearrowLeftUpLineContainer}>
          <img
            className={styles.mingcutearrowLeftUpLineIcon1}
            alt=""
            src="/mingcutearrowleftupline.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-2085660409@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/frame-2085660408.svg"
          />
        </div>
        <button className={styles.launchAppWrapper}>
          <a className={styles.launchApp}>Launch App</a>
        </button>
      </div>
    </header>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
