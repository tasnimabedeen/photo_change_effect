function change1() {
    document.getElementById('container3').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "1";
    document.getElementById('in22').style.zIndex = "100";
    document.getElementById('in32').style.zIndex = "1";

    document.getElementById("container2").style.animation = "conani2 .5s ease-in-out 1 forwards";
    document.getElementById("container1").style.animation = "conani .5s ease-in-out 1 forwards";

    document.getElementById('div2').style.animation = "divani1 1.2s ease-in-out 1 forwards";
    document.getElementById('in21').style.animation = "inani11 1.2s ease-in-out 1 forwards";
    document.getElementById('in211').style.animation = "inani111 1.2s ease-in-out 1";

    document.getElementById('div1').style.animation = "divani2 1.2s ease-in-out 1";
    document.getElementById('in11').style.animation = "inani12 1.2s ease-in-out 1";
    document.getElementById('in111').style.animation = "inani211 1.2s ease-in-out 1";
}

function change2() {
    document.getElementById('container1').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "1";
    document.getElementById('in22').style.zIndex = "1";
    document.getElementById('in32').style.zIndex = "100";

    document.getElementById("container3").style.animation = "conani2 .5s ease-in-out 1 forwards";
    document.getElementById("container2").style.animation = "conani .5s ease-in-out 1 forwards";

    document.getElementById('div3').style.animation = "divani1 1.2s ease-in-out 1 forwards";
    document.getElementById('in31').style.animation = "inani11 1.2s ease-in-out 1 forwards";
    document.getElementById('in311').style.animation = "inani111 1.2s ease-in-out 1";

    document.getElementById('div2').style.animation = "divani2 1.2s ease-in-out 1";
    document.getElementById('in21').style.animation = "inani12 1.2s ease-in-out 1";
    document.getElementById('in211').style.animation = "inani211 1.2s ease-in-out 1";
}

function change3() {
    document.getElementById('container2').style.opacity = "0";

    document.getElementById('in12').style.zIndex = "100";
    document.getElementById('in22').style.zIndex = "1";
    document.getElementById('in32').style.zIndex = "1";

    document.getElementById("container1").style.animation = "conani2 .5s ease-in-out 1 forwards";
    document.getElementById("container3").style.animation = "conani .5s ease-in-out 1 forwards";

    document.getElementById('div1').style.animation = "divani1 1.2s ease-in-out 1 forwards";
    document.getElementById('in11').style.animation = "inani11 1.2s ease-in-out 1 forwards";
    document.getElementById('in111').style.animation = "inani111 1.2s ease-in-out 1";

    document.getElementById('div3').style.animation = "divani2 1.2s ease-in-out 1";
    document.getElementById('in31').style.animation = "inani12 1.2s ease-in-out 1";
    document.getElementById('in311').style.animation = "inani211 1.2s ease-in-out 1";
}