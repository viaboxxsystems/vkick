/** @jsx React.DOM **/
'use strict';


var Player = React.createClass({
    getInitialState: function() {
        return { team: this.props.team};
    },

    handleClick: function(event){
        if(this.state.team=="teamNone"){
            this.setState({team:"team1"});
        } else if(this.state.team=="team1"){
            this.setState({team:"team2"});
        } else{
            this.setState({team:"teamNone"});
        }
    },

    render: function(){
        return (
            <li className={'label label-info playerName '+ this.state.team} onClick={this.handleClick}>{this.props.name}</li>
        );
    }

});


var PlayerList = React.createClass({
    loadPlayer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                this.setState({players: data});
            }.bind(this)
        });
    },
    componentWillMount: function() {
        this.loadPlayer();
    },
    getInitialState: function() {
        return {players: []};
    },


    render: function(){
        var playersList= this.state.players.map(function(player){
            /* jshint ignore:start */
            return  (
                <Player name={player.name} team="teamNone" />
            );
            /* jshint ignore:end */
        });

        return (
            <ul id="playerList" className="playerList">
                {playersList}
            </ul>
        );


    }
});


React.renderComponent(<PlayerList url='http://localhost:9001/player'/>, document.querySelector('#players'));


