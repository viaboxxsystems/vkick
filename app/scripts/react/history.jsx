/** @jsx React.DOM **/
(function(React,  Reflux,global) {


'use strict';



var LastGamesList = React.createClass({
    loadMatches: function() {


        var self=this;
        getMatches(
            function (resp) {
                var data = resp.hits.hits.map(function (match) {
                    return match._source;
                });
                self.setState({matches: data.reverse()});
            });

    },
    componentWillMount: function() {
        this.loadMatches();
        setInterval(this.loadMatches, this.props.pollInterval);
    },
    getInitialState: function() {
        return {matches: []};
    },

    render: function(){
        var matchDivs= this.state.matches.map(function(match){
            var matchTime =  moment(match.time);
            /* jshint ignore:start */
            return  (
                <div className='panel panel-default'>
                 <div className='matches panel-heading text-center'>
                    <h4><small>{matchTime.fromNow()}</small>
                    </h4>
                 </div>
                 <div className='matches panel-body'>
                    <div className='row text-center'>
                        <div className='col-md-4 text-center'>
                            <i className={game.playerIcon('defense')}></i> {match.team1.defense}
                            <br />
                            <i className={game.playerIcon('offense')}></i> {match.team1.offense}
                        </div>
                        <div className='col-md-4 text-center'> <h4>{match.team1.goals}:{match.team2.goals}</h4></div>
                        <div className='col-md-4 text-center'>
                            <i className={game.playerIcon('offense')}></i> {match.team2.offense}
                            <br />
                            <i className={game.playerIcon('defense')}></i> {match.team2.defense}
                        </div>
                    </div>
                 </div>
                </div>
            );
            /* jshint ignore:end */
        });

        return (
             <div>{matchDivs}</div>
        );


    }
});


React.render(
    React.createElement(LastGamesList,{pollInterval:10000}), document.querySelector('#lastGames')
);


})(window.React, window.Reflux, window);
