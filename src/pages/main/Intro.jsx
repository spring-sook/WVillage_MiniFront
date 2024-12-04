import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";

const Intro = () => {
  return (
    <>
      <Link to="/main" className="logo">
        <img src={LogoImg} alt="로고" className="logo-img" />
      </Link>
    </>
  );
};
export default Intro;
