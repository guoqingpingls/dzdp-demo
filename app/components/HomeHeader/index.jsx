import React from 'react'
import './style.less'

class HomeHeader extends React.Component {
    constructor (props, context) {
        super(props, context)
    }
    render () {
        return (
            <div className="clear-fix header-wrapper">
                <div className="float-left header-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="iconfont icon-down"></i>
                </div>
                <div className="float-right header-right">
                    <i className="iconfont icon-user"></i>
                </div>
                <div className="header-middle">
                    <div className="search-container">
                        <i className="iconfont icon-search"></i>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader
