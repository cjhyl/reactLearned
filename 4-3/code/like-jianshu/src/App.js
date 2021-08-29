import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(0)
  function changeActive(e,idx){
    e.preventDefault();
    setActive(idx);
  }
  return (
    <div className="main">

      <h4 className="title">
        <div className="normal-title">
          <a 
            className={active===0 ? 'active' : ''} 
            href="#!" 
            onClick={(e) => {changeActive(e,0)}}
          >登录</a>
          <b>·</b>
          <a 
            className={active===1 ? 'active' : ''} 
            href="#!" 
            onClick={(e) => {changeActive(e,1)}}
          >注册</a>
        </div>
      </h4>

      <div className="js-sign-in-container" id="sign_in" style={{display:active===0 ? 'block' : 'none'}}>
        <SignIn />
        <div className="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li id="weibo-link-wrap" className="">
              <a className="weibo" id="weibo-link" href="#!">
                <i className="iconfont ic-weibo"></i>
              </a>
            </li>
            <li>
              <a id="weixin" className="weixin" href="#!">
                <i className="iconfont ic-wechat"></i>
              </a>
            </li>
            <li>
              <a id="qq" className="qq" href="#!">
                <i className="iconfont ic-qq_connect"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="js-sign-up-container" id="sign_up" style={{display:active===1 ? 'block' : 'none'}}>
        <SignUp />
        <div className="more-sign">
          <h6>社交帐号直接注册</h6>
          <ul>
            <li><a id="weixin" className="weixin" href="#!"><i className="iconfont ic-wechat"></i></a></li>
            <li><a id="qq" className="qq" href="#!"><i className="iconfont ic-qq_connect"></i></a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
