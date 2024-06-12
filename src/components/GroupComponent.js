import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  whoIsTheCEOOfBlazeswap,
  propWidth,
  propMinWidth,
  groupDivHeight,
  groupDivFlex,
  frameDivWidth,
  frameDivFlex,
  questionContentHeight,
  questionContentFlexWrap,
  answerWidth,
  answerHeight,
  answerFlex,
  whoIsTheWidth,
  whoIsTheHeight,
  whoIsTheDisplay,
  whoIsTheAlignSelf,
}) => {
  const questionContentStyle = useMemo(() => {
    return {
      width: propWidth,
      height: questionContentHeight,
      flexWrap: questionContentFlexWrap,
    };
  }, [propWidth, questionContentHeight, questionContentFlexWrap]);

  const answerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: answerWidth,
      height: answerHeight,
      flex: answerFlex,
    };
  }, [propMinWidth, answerWidth, answerHeight, answerFlex]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
      flex: groupDivFlex,
    };
  }, [groupDivHeight, groupDivFlex]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivFlex]);

  const whoIsTheStyle = useMemo(() => {
    return {
      width: whoIsTheWidth,
      height: whoIsTheHeight,
      display: whoIsTheDisplay,
      alignSelf: whoIsTheAlignSelf,
    };
  }, [whoIsTheWidth, whoIsTheHeight, whoIsTheDisplay, whoIsTheAlignSelf]);

  return (
    <div
      className={[styles.faqSectionInner, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameParent} style={frameDiv3Style}>
        <div className={styles.questionIndicatorsWrapper}>
          <div className={styles.questionIndicators} />
        </div>
        <div className={styles.questionContent} style={questionContentStyle}>
          <img
            className={styles.questionContentChild}
            alt=""
            src="/group-292.svg"
          />
          <div className={styles.answer} style={answerStyle}>
            <b className={styles.whoIsThe} style={whoIsTheStyle}>
              {whoIsTheCEOOfBlazeswap}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  whoIsTheCEOOfBlazeswap: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  groupDivHeight: PropTypes.any,
  groupDivFlex: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivFlex: PropTypes.any,
  questionContentHeight: PropTypes.any,
  questionContentFlexWrap: PropTypes.any,
  answerWidth: PropTypes.any,
  answerHeight: PropTypes.any,
  answerFlex: PropTypes.any,
  whoIsTheWidth: PropTypes.any,
  whoIsTheHeight: PropTypes.any,
  whoIsTheDisplay: PropTypes.any,
  whoIsTheAlignSelf: PropTypes.any,
};

export default GroupComponent;
