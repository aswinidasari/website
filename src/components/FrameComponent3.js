import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={[styles.wrapperFrame2085660417Parent, className].join(" ")}
    >
      <div className={styles.wrapperFrame2085660417}>
        <img
          className={styles.wrapperFrame2085660417Child}
          alt=""
          src="/frame-2085660417.svg"
        />
      </div>
      <div className={styles.solutionsContent}>
        <div className={styles.solutionsOptions}>
          <div className={styles.ourSolutions}>Our Solutions</div>
          <div className={styles.waitlistDescription}>
            <h1 className={styles.ourWaitlistProgram}>Our Waitlist Program-</h1>
            <div className={styles.optionsDescription}>
              <h3 className={styles.theFollowingOptionsContainer}>
                <p className={styles.theFollowingOptions}>
                  The following options for
                </p>
                <p className={styles.whitelistCapturing}>
                  whitelist capturing.
                </p>
              </h3>
            </div>
            <div className={styles.waitlistDescriptionInner}>
              <div className={styles.frameParent}>
                <button className={styles.startBuildingParent}>
                  <b className={styles.startBuilding}>Start Building</b>
                  <div className={styles.mingcutearrowLeftUpLineWrapper}>
                    <img
                      className={styles.mingcutearrowLeftUpLineIcon}
                      alt=""
                      src="/mingcutearrowleftupline-2.svg"
                    />
                  </div>
                </button>
                <button className={styles.joinWaitlistParent}>
                  <b className={styles.joinWaitlist}>Join Waitlist</b>
                  <div className={styles.mingcutearrowLeftUpLineContainer}>
                    <img
                      className={styles.mingcutearrowLeftUpLineIcon1}
                      alt=""
                      src="/mingcutearrowleftupline-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroSideSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroElements}>
            <div className={styles.heroBackground} />
            <div className={styles.heroLogos}>
              <div className={styles.wrapperImage346}>
                <img
                  className={styles.image346Icon}
                  alt=""
                  src="/image-346@2x.png"
                />
              </div>
              <img
                className={styles.logo137Icon}
                alt=""
                src="/logo13-7@2x.png"
              />
              <img
                className={styles.logo133Icon}
                loading="lazy"
                alt=""
                src="/logo13-7@2x.png"
              />
              <div className={styles.joinUsContentParent}>
                <div className={styles.joinUsContent}>
                  <div className={styles.joinUsButton}>
                    <img
                      className={styles.logo132Icon}
                      loading="lazy"
                      alt=""
                      src="/logo13-7@2x.png"
                    />
                    <input className={styles.joinUsSmallLogo} type="checkbox" />
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.joinUsParent}>
                    <h1 className={styles.joinUs}>JOIN US</h1>
                    <div className={styles.doubleSocialIconWrapper}>
                      <div className={styles.doubleSocialIcon}>
                        <img
                          className={styles.logo134Icon}
                          loading="lazy"
                          alt=""
                          src="/logo13-7@2x.png"
                        />
                        <div className={styles.logo135Wrapper}>
                          <img
                            className={styles.logo135Icon}
                            loading="lazy"
                            alt=""
                            src="/logo13-7@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.singleSocialIcon}>
                    <img
                      className={styles.logo136Icon}
                      alt=""
                      src="/logo13-7@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroDescription}>
              <div className={styles.joinWaitlistWrapper}>
                <b className={styles.joinWaitlist1}>Join Waitlist</b>
              </div>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. `}</p>
            </div>
            <div className={styles.heroElementsInner}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent4 prop="1." waitlist="Waitlist" />
          <FrameComponent4
            prop="2."
            waitlist="Stake"
            propFilter="unset"
            propLeft="55px"
            propPadding="var(--padding-3xs) var(--padding-xs) var(--padding-2xs) var(--padding-sm)"
            propLetterSpacing="-0.04em"
            propPadding1="0px var(--padding-6xs)"
            propColor="#919191"
          />
          <div className={styles.boxGreenParent}>
            <div className={styles.boxGreen}>
              <div className={styles.boxGreenInner}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild1} />
                    <div className={styles.div}>3.</div>
                  </div>
                </div>
              </div>
              <b className={styles.nftAcquistion}>NFT Acquistion</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
