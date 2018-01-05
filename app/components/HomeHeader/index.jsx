import React from 'react'
import './style.less'

class HomeHeader extends React.Component {
    constructor (props, context) {
        super(props, context)
    }
    render () {
        return (
            <div className="clear-fix">
                <div className="float-left">
                    深圳
                    <i className="iconfont icon-down"></i>
                </div>
                <div className="float-right">
                    <i className="iconfont icon-user"></i>
                </div>
                <div>
                    <i className="iconfont icon-search"></i>
                    <input/>
                </div>
            </div>
        )
    }
}

export default HomeHeader
