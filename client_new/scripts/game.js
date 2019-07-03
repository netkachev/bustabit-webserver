define([
    'react',
    'components/Game',
    'mousetrap'
], function(
    React,
    GameClass,
    Mousetrap
) {

console.log('PASSED2');
    var Game = React.createFactory(GameClass);

    Mousetrap.bind('backspace', function(e) {
        if(!confirm('Are you sure you want to leave the site?')) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                // internet explorer
                e.returnValue = false;
            }
        }
    });

    React.render(
        Game(),
        document.getElementById('game-container')
    );
});
