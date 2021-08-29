import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import appleImg from "./images/apple.png";

@inject("pickApple")
@observer
class App extends Component {
  render() {
    const { pickApple } = this.props;
    console.log('curApples', pickApple.curApples)
    return (
      <div className="bg">
        <div>
          <div className="title">苹果篮子</div>

          <div className="infos">
            <div>
              <div className="name">当前</div>
              <div className="info">{pickApple.curTotal.num}个苹果，{pickApple.curTotal.weight}克</div>
            </div>
            <div>
              <div className="name">已吃掉</div>
              <div className="info">{pickApple.eatedTotal.num}个苹果，{pickApple.eatedTotal.weight}克</div>
            </div>
          </div>
          
          <div className="pickedList">
            <div className="noneTips" style={{display:pickApple.curApples.length>0?'none':'block'}}>苹果篮子空空如也</div>
            <div style={{display:pickApple.curApples.length>0?'block':'none'}}>
              
              {
                pickApple.curApples.map((apple) => (
                  <div className="appleInfo" key={apple.index}>
                    <div className="img">
                      <img alt="苹果" src={appleImg} />
                    </div>
                    <div className="info">
                      <div className="name">红苹果 - {apple.index}号</div>
                      <div className="weight">{apple.weight}克</div>
                    </div>
                    <div className="btn">
                      <button onClick={() => pickApple.eat(apple)} className="eatBtn">吃掉</button>
                    </div>
                  </div>
                ))
              }
            </div>
            
          </div>

          <div className="btnBg">
            <button 
              onClick={pickApple.pick} 
              disabled={pickApple.picking}
              className="pickBtn"
            >
              {pickApple.picking?'正在采摘中...':'摘苹果'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
