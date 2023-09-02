import "./mobilerogin.css";

function 
MobileLogin() {
  return (
    <div className="box">
      <div className="up">
        <div className="hello">
          <div className="left">9:41</div>
          <div className="right">
            <span className="material-symbols-outlined">magic_tether</span>
            <span className="material-symbols-outlined">battery_horiz_075</span>
            <span className="material-symbols-outlined">autofps_select</span>
          </div>
        </div>
        <h2 className="rogin">Login</h2>
        <div className="image">
          <img
            src="https://blog.kakaocdn.net/dn/by2ROl/btqToxYY7I3/IQfeDWm4lVbLKHQUdfJygK/img.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="down">
        <input type="text" placeholder="enter number" />
      </div>
      <button className="icon">login</button>
      <div className="google">google</div>
    </div>
  );
}

export default MobileLogin;
