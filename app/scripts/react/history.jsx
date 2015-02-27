/** @jsx React.DOM **/
'use strict';



var LastGamesList = React.createClass({
    loadMatches: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                //console.log(data);
                this.setState({matches: data.reverse()});
            }.bind(this)
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
        var matchDivs= this.state.matches.map(function(jsonMatch){
            var match = JSON.parse(jsonMatch);
            var matchTime =  moment(match.time);
            /* jshint ignore:start */
            return  (
                <div className='panel panel-default'>
                 <div className='matches panel-heading text-center'>
                    <h4>{match.team1.goals}:{match.team2.goals} <small> - {matchTime.fromNow()}</small>
                    </h4>
                 </div>
                 <div className='matches panel-body'>
                    <div className='row text-center'>
                        <div className='col-md-6 text-center'>
                        {match.team1.player1}
                            <br />
                         {match.team1.player2}
                        </div>
                        <div className='col-md-6 text-center'>
                        {match.team2.player1}
                            <br />
                         {match.team2.player2}
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
React.render(<LastGamesList url={config.backend+'/match'} pollInterval={2000}/>, document.querySelector('#lastGames'));
