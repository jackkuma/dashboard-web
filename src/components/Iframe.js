import React, { Component, Fragment } from 'react'

class Iframe extends Component {
    componentDidMount() {
        // 监听message事件
        window.addEventListener("message", this.receiveMessage, false);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessage)
    }
    receiveMessage =  ( event ) => {
        // console.log(event)
        if(event!==undefined &&event.data && event.data.name){
            console.log( '我是react,我接受到了来自iframe的数据：', event.data );
        }
    };
    // 向iframe发送数据
    handleClick = () => {
        //必须是iframe加载完成后才可以向子域发送数据
        const childFrameObj = document.getElementById('calculation');
        childFrameObj.contentWindow.postMessage('test', '*');
    };
    render() {
        return (
            <Fragment>
                    <button onClick={this.handleClick.bind(this)}>向iframe发送数据</button>
                    <iframe 
                     title="test"
                     style={{border:0,width:"100%",height:"100%",}}
                     src='./myframe.html'
                     id='calculation'
                     />
            </Fragment> 
        )
    }
}

export default Iframe;