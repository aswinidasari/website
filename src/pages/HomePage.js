import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent5 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
