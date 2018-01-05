import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowLoading: true
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount () {
        // 从localStorerage里面获取城市
        console.log('LocalStore.getItem(CITYNAME): ', LocalStore.getItem(CITYNAME))
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '武汉'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })
        console.log('cityName: ', cityName)
        // 将城市信息存储到redux里面
        setTimeout(() => {
            this.setState({
                isShowLoading: false
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                {
                    this.state.isShowLoading
                        ? <div>加载中。。。。</div>
                        : this.props.children
                }
            </div>

        )
    }
}

// export default App
function mapStateToProps (state) {
    return {

    }
}
function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFiles, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
