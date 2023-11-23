function change1() {
    document.getElementById('container3').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "1";
    document.getElementById('in22').style.zIndex = "100";
    document.getElementById('in32').style.zIndex = "1";

    document.getElementById("container2").style.animation = "conani2 1s ease-in-out 1 forwards";
    document.getElementById("container1").style.animation = "conani 1s ease-in-out 1 forwards";

    document.getElementById('div2').style.animation = "divani1 2s ease-in-out 1 forwards";
    document.getElementById('in21').style.animation = "inani11 2s ease-in-out 1 forwards";
    document.getElementById('in211').style.animation = "inani111 2s ease-in-out 1";

    document.getElementById('div1').style.animation = "divani2 2s ease-in-out 1";
    document.getElementById('in11').style.animation = "inani12 2s ease-in-out 1";
    document.getElementById('in111').style.animation = "inani211 2s ease-in-out 1";

    document.getElementById('text1').style.animation = "textout 2s ease-in-out 1 forwards";
    document.getElementById('text2').style.animation = "textin 2s ease-in-out 1 forwards";
}

function change2() {
    document.getElementById('container1').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "1";
    document.getElementById('in22').style.zIndex = "1";
    document.getElementById('in32').style.zIndex = "100";

    document.getElementById("container3").style.animation = "conani2 1s ease-in-out 1 forwards";
    document.getElementById("container2").style.animation = "conani 1s ease-in-out 1 forwards";

    document.getElementById('div3').style.animation = "divani1 2s ease-in-out 1 forwards";
    document.getElementById('in31').style.animation = "inani11 2s ease-in-out 1 forwards";
    document.getElementById('in311').style.animation = "inani111 2s ease-in-out 1";

    document.getElementById('div2').style.animation = "divani2 2s ease-in-out 1";
    document.getElementById('in21').style.animation = "inani12 2s ease-in-out 1";
    document.getElementById('in211').style.animation = "inani211 2s ease-in-out 1";

    document.getElementById('text2').style.animation = "textout 2s ease-in-out 1 forwards";
    document.getElementById('text3').style.animation = "textin 2s ease-in-out 1 forwards";
}

function change3() {
    document.getElementById('container2').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "100";
    document.getElementById('in22').style.zIndex = "1";
    document.getElementById('in32').style.zIndex = "1";

    document.getElementById("container1").style.animation = "conani2 1s ease-in-out 1 forwards";
    document.getElementById("container3").style.animation = "conani 1s ease-in-out 1 forwards";

    document.getElementById('div1').style.animation = "divani1 2s ease-in-out 1 forwards";
    document.getElementById('in11').style.animation = "inani11 2s ease-in-out 1 forwards";
    document.getElementById('in111').style.animation = "inani111 2s ease-in-out 1";

    document.getElementById('div3').style.animation = "divani2 2s ease-in-out 1";
    document.getElementById('in31').style.animation = "inani12 2s ease-in-out 1";
    document.getElementById('in311').style.animation = "inani211 2s ease-in-out 1";

    document.getElementById('text3').style.animation = "textout 2s ease-in-out 1 forwards";
    document.getElementById('text1').style.animation = "textin 2s ease-in-out 1 forwards";
}