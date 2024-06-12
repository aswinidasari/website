import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.discoverTheWaitlistWrapper}>
          <h1 className={styles.discoverTheWaitlistContainer}>
            <span>{`Discover the `}</span>
            <span className={styles.waitlist}>Waitlist</span>
          </h1>
        </div>
        <div className={styles.aboutWaitlistParent}>
          <h1 className={styles.aboutWaitlist}>
            <span>{`About `}</span>
            <span className={styles.waitlist1}>Waitlist</span>
          </h1>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <p className={styles.loremIpsumDolorContainer}>
              <span
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. `}</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.vestibulumLeoDiam}>
                Vestibulum leo diam, efficitur non felis id, feugiat condimentum
                neque.
              </span>
            </p>
            <button className={styles.joinButton}>
              <b className={styles.joinWaitlist}>Join Waitlist</b>
              <div className={styles.mingcutearrowLeftUpLineWrapper}>
                <img
                  className={styles.mingcutearrowLeftUpLineIcon}
                  alt=""
                  src="/mingcutearrowleftupline-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <img
          className={styles.shapeIcon}
          loading="lazy"
          alt=""
          src="/shape@2x.png"
        />
        <img className={styles.shapeIcon1} alt="" src="/shape-1@2x.png" />
        <img className={styles.shapeIcon2} alt="" src="/shape-2@2x.png" />
        <img className={styles.shapeIcon3} alt="" src="/shape-3@2x.png" />
        <img className={styles.shapeIcon4} alt="" src="/shape-4@2x.png" />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
