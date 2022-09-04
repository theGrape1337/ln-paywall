import "./Paywall.css";
import { useNavigate, useLocation } from "react-router-dom";

function Paywall() {
  let navigate = useNavigate();

  const { state } = useLocation();
  const post = state.paywallPost;

  const navigatePost = () => {
    navigate(`/post/${post.id}`, {
      state: {
        post,
      },
    });
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="paywallPage">
      <div className="paywallContainer">
        <div className="paywallTitle">
          <h1>Paywall</h1>
        </div>
        <div className="paywallText">
          This is premium content. You need to pay 5 sats to read this blog
          post.
        </div>
      </div>
      <div className="buttonLayout">
        <button className="buttonStyle" onClick={navigateHome}>
          Go back
        </button>
        <button className="buttonStyle" onClick={navigatePost}>
          Pay
        </button>
      </div>
    </div>
  );
}

export default Paywall;
