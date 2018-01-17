import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'
import './style.less'
class Category extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            index: 0
        }
    }
    render () {
        const opt = {
            auto: 10000,         //2秒滚动一次
            callback: (index) => {
                // this.setState({
                //     index: index
                // })
                console.log(this.state.index)
            }
        }
        return (
            <div>
                <img src="images/logo.png" alt=""/>
                <ReactSwipe className="swipe-wrapper" swipeOptions={opt}>
                    <div className="swipe-container">
                        <ul className="clear-fix">
                            <li className="float-left jingdian">景点</li>
                            <li className="float-left KTV">KTV</li>
                            <li className="float-left gouwu">购物</li>
                            <li className="float-left shenghuofuwu">生活服务</li>
                            <li className="float-left jianshenyundong">健身运动</li>
                            <li className="float-left meifa">美发</li>
                            <li className="float-left qinzi">亲子</li>
                            <li className="float-left xiaochikuaican">小吃快餐</li>
                            <li className="float-left zizhuba">自助吧</li>
                            <li className="float-left jiuba">酒吧</li>
                        </ul>
                    </div>
                    {/* <div>PANE 2</div>
                    <div>PANE 3</div> */}
                </ReactSwipe>
                <div>{this.state.index}</div>
            </div>
            
        )
    }
}
export default Category