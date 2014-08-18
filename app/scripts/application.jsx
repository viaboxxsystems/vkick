/** @jsx React.DOM **/
'use strict';

var HelloMessage = React.createClass({
    click: function(){
        console.log('clicked');
    },
    render: function(){
        return <div onClick={this.click}>Hello {this.props.name} </div>;
    }
});

var parent = document.querySelector('#test');
React.renderComponent(<HelloMessage name="Blub" />, parent);