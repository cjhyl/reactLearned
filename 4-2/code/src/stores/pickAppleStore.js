import { 
  observable, 
  configure, 
  action, 
  runInAction,
  computed
} from 'mobx';

configure({enforceActions: 'observed'});

class PickApple {
  // 摘下(当前)的苹果
  @observable curApples = [];
  @observable picking = false;
  // 吃掉的苹果
  @observable eatedApples = [];

  index = 1;

  // 摘苹果
  @action.bound pick () {
    this.picking = true;
    setTimeout(() => {
      runInAction(() => {
        this.curApples.push({
          index:this.index,
          weight: 201+parseInt(Math.random()*58)
        });
        this.index++;
        this.picking = false;
      });
    },500)
  }
  // 统计当前苹果
  @computed get curTotal () {
    return this.curApples.reduce((total,cur) => {
      return {
        num:total.num+1,
        weight:total.weight+cur.weight
      }
    },{
      num:0,
      weight:0
    })
  }
  // 吃苹果
  @action.bound eat (apple) {
    this.eatedApples.push(apple);
    let index = this.curApples.indexOf(apple);
    this.curApples.splice(index,1);
  }
  // 统计吃掉的苹果
  @computed get eatedTotal () {
    return this.eatedApples.reduce((total,cur) => {
      return {
        num:total.num+1,
        weight:total.weight+cur.weight
      }
    },{
      num:0,
      weight:0
    })
  }
}

const pickApple = new PickApple();

export default pickApple;