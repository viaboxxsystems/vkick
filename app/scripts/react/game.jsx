/** @jsx React.DOM **/
'use strict';



var Player = React.createClass({
    getInitialState: function() {
        return { team: this.props.team};
    },






    handleClick: function(event){
        if(this.state.team==='teamNone'){
            if(game.addPlayerTeam(this.props.name, game.team1)) {
                this.setState({team:'team1', role: game.role(this.props.name, game.team1)});
            }   else if (game.addPlayerTeam(this.props.name, game.team2)) {
                this.setState({team: 'team2', role: game.role(this.props.name, game.team2)});
            }
        } else if(this.state.team==='team1'){
            if(game.addPlayerTeam(this.props.name, game.team2)) {
                game.removePlayerTeam(this.props.name, game.team1);
                this.setState({team:'team2',role: game.role(this.props.name, game.team2)});
            }   else {
                game.removePlayerTeam(this.props.name, game.team1);
                this.setState({team: 'teamNone', role: undefined});
            }
        } else{
            game.removePlayerTeam(this.props.name, game.team2);
            this.setState({team:'teamNone', role: undefined});
        }
    },

    render: function(){
        var role = game.playerIcon(this.state.role);
        return (
            <li className={'label label-info playerName '+ this.state.team} onClick={this.handleClick}> <i className={role}></i> {this.props.name}</li>
        );
    }

});


var PlayerList = React.createClass({
    getInitialState: function() {
        return {players: []};
    },

    loadPlayer: function() {
        var self = this;
        retrievePlayers(function (resp) {
            var foundPlayers = resp.hits.hits.map(function(player){
                return { name: player._source.name, surname: player._source.surname};
            });
            self.setState({players: foundPlayers });
        });



    },
    componentDidMount: function() {
        this.loadPlayer();
    },


    render: function(){
        var playersList= this.state.players.map(function(player){
            /* jshint ignore:start */
            return  (
                <Player name={player.name} team='teamNone' />
            );
            /* jshint ignore:end */
        });

        return (
            <div className='horizontal-table'>
                <ul id='playerList' className='playerList'>
                    {playersList}
                </ul>
            </div>
        );


    }
});




var Goals = React.createClass({
    getInitialState: function(){
        return {goals: 0};
    },


    handleClick: function(i){
        this.props.team.goals=i;
        this.setState({goals: i});
    },

    render: function(){
        var rows = [];

        for (var i=0; i < 11; i++) {
            var highlight;
            if(i==this.state.goals){
                highlight ='goalbutton highlight';
            }    else {
                highlight ='goalbutton';
            }
            rows.push(<button key={i} className={'btn  '+highlight+' '+ this.props.teamclassName } onClick={this.handleClick.bind(this, i)}>{i}</button>);
        }
        return (
            <div>
          {rows}
            </div>
        );
    }
});

var GamePlayer = React.createClass({
    render: function(){
        return (
        <div className='dropdown'>
            <button className='btn btn-default dropdown-toggle droppable' type='button' id='player2' data-toggle='dropdown'>
            Player 2
                <span className='caret'></span>
                <div id='placeholder2'></div>
            </button>btn-default
            <ul  className='dropdown-menu dropdownPlayer' role='menu' aria-labelledby='player2'>

            </ul>
        </div>


        );
    }
});


var TeamPlayer = React.createClass({
    render: function(){
        return (
            <div className={this.props.teamclassName}>
                <ul id='teamPlayers' className='teamPlayers'>
                    <GamePlayer />
                </ul>
            </div>
        );
    }
});


var Game = React.createClass({
    submitGame: function(){

        saveMatch(game);

    },


    render: function(){
        return (
            <div>
                <div className='row players'>
                    <div className='col-md-12'>
                         <PlayerList url={config.backend+'/player'}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='text-center' id='goals1'>
                            <Goals teamclassName='team1color' team={game.team1} />
                        </div>

                        <div className='row text-center '>
                            <div className='col-md-3'>


                            </div>
                            <div className='col-md-6'>
                                <img className='img-rounded' src='images/kicker.png' />
                            </div>
                            <div className='col-md-3'>


                            </div>

                        </div>

                        <div className='text-center' id='goals2'>
                            <Goals teamclassName='team2color' team={game.team2} />
                        </div>
                        <div className='text-center'>
                            <button id='playedAction' className='btn btn-default btn-lg' onClick={this.submitGame} >Submit Game</button>
                        </div>
                    </div>



                </div>
            </div>

        );
    }
});


React.render(
    React.createElement(Game, null),
    document.getElementById('game')
);
