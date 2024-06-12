import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.fAQTitleWrapper, className].join(" ")}>
      <div className={styles.fAQTitle}>
        <div className={styles.fAQHeader}>
          <b className={styles.faq}>
            <span>FA</span>
            <span className={styles.q}>Q</span>
          </b>
        </div>
        <div className={styles.faqSection}>
          <GroupComponent whoIsTheCEOOfBlazeswap="Who is the CEO of Semi Hyphen?" />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="What are the features and options on Semi Hyphen?"
            propWidth="879.4px"
            propMinWidth="unset"
            groupDivHeight="unset"
            groupDivFlex="1"
            frameDivWidth="975px"
            frameDivFlex="unset"
            questionContentHeight="40px"
            questionContentFlexWrap="unset"
            answerWidth="811px"
            answerHeight="35.5px"
            answerFlex="unset"
            whoIsTheWidth="811px"
            whoIsTheHeight="31px"
            whoIsTheDisplay="inline-block"
            whoIsTheAlignSelf="unset"
          />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="This year growth in Semi Hyphen?"
            propWidth="710.1px"
            propMinWidth="417px"
            groupDivHeight="unset"
            groupDivFlex="unset"
            frameDivWidth="unset"
            frameDivFlex="1"
            questionContentHeight="unset"
            questionContentFlexWrap="wrap"
            answerWidth="unset"
            answerHeight="unset"
            answerFlex="1"
            whoIsTheWidth="unset"
            whoIsTheHeight="unset"
            whoIsTheDisplay="unset"
            whoIsTheAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
