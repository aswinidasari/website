import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({
  className = "",
  prop,
  waitlist,
  propFilter,
  propLeft,
  propPadding,
  propLetterSpacing,
  propPadding1,
  propColor,
}) => {
  const boxGreenStyle = useMemo(() => {
    return {
      filter: propFilter,
    };
  }, [propFilter]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divStyle = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const waitlistStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.boxGreenParent, className].join(" ")}>
      <div className={styles.boxGreen} style={boxGreenStyle}>
        <div className={styles.boxGreenInner}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.ellipseParent} style={frameDiv1Style}>
          <div className={styles.frameItem} />
          <div className={styles.ellipseGroup}>
            <div className={styles.frameInner} />
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
          </div>
        </div>
        <div className={styles.waitlistWrapper} style={frameDiv2Style}>
          <b className={styles.waitlist} style={waitlistStyle}>
            {waitlist}
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  waitlist: PropTypes.string,

  /** Style props */
  propFilter: PropTypes.any,
  propLeft: PropTypes.any,
  propPadding: PropTypes.any,
  propLetterSpacing: PropTypes.any,
  propPadding1: PropTypes.any,
  propColor: PropTypes.any,
};

export default FrameComponent4;
