import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.howItWorksContentWrapper, className].join(" ")}>
      <div className={styles.howItWorksContent}>
        <div className={styles.howItWorksTitle}>
          <h1 className={styles.howItWorksContainer}>
            <span>{`How it `}</span>
            <span className={styles.works}>Works?</span>
          </h1>
        </div>
        <div className={styles.howTo}>
          <div className={styles.howToContent}>
            <div className={styles.howToContentInner}>
              <div className={styles.wrapperGroup47032Parent}>
                <div className={styles.wrapperGroup47032}>
                  <img
                    className={styles.wrapperGroup47032Child}
                    loading="lazy"
                    alt=""
                    src="/group-47032.svg"
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.indicators}>#1</b>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <b className={styles.b}>#2</b>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <b className={styles.b1}>#3</b>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <b className={styles.b2}>#4</b>
                </div>
              </div>
            </div>
            <div className={styles.wrapperFrame2085660428}>
              <img
                className={styles.wrapperFrame2085660428Child}
                loading="lazy"
                alt=""
                src="/frame-2085660428.svg"
              />
            </div>
          </div>
          <div className={styles.taskDescription}>
            <div className={styles.taskTitleParent}>
              <div className={styles.taskTitle}>
                <h2 className={styles.taskCompletion}>Task Completion</h2>
              </div>
              <h3 className={styles.joinTheWaitlist}>
                "Join the waitlist now to secure your spot and gain early access
                to the innovative features and benefits of the Semi Hyphen
                ecosystem."
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
