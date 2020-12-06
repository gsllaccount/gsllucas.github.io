var goDown1 = document.getElementById('goDown1');
var meTopic1 = document.getElementById('sobre-mim');

goDown1.onclick = function () {
    meTopic1.style.transition = '0.4s';
    meTopic1.style.boxShadow = '0px 0px 8px 1px rgba(0,0,0,0.6)';

    setTimeout(function(){
        meTopic1.style.transition = '0.4s';
        meTopic1.style.boxShadow = '0px 0px 0px 0px';
    }, 2000);
}



var goDown2 = document.getElementById('goDown2');
var meTopic2 = document.getElementById('experiencias');

goDown2.onclick = function () {
    meTopic2.style.transition = '0.4s';
    meTopic2.style.boxShadow = '0px 0px 8px 1px rgba(0,0,0,0.6)';

    setTimeout(function(){
        meTopic2.style.transition = '0.4s';
        meTopic2.style.boxShadow = '0px 0px 0px 0px';
    }, 2000);
}



var goDown3 = document.getElementById('goDown3');
var meTopic3 = document.getElementById('skills');

goDown3.onclick = function () {
    meTopic3.style.transition = '0.4s';
    meTopic3.style.boxShadow = '0px 0px 8px 1px rgba(0,0,0,0.6)';

    setTimeout(function(){
        meTopic3.style.transition = '0.4s';
        meTopic3.style.boxShadow = '0px 0px 0px 0px';
    }, 2000);
}

