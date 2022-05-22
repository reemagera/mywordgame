// import { get } from "express/lib/request";
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(e) {
    const ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});
function autotab(current, to)
{
    if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) 
    {
    to.focus();
    }
}
function disableform(form){
    for(var i=0; i<5;i++){
    form.children[i].readOnly = true;
    form.children[i].style.backgroundColor="grey";
    }
}
function enableform(form){
    for(var i=0;i<5;i++){
    form.children[i].readOnly = false;
    form.children[i].style.backgroundColor="aqua";
    }
}
function checkword(form, word){
    let i=0;
    let flag=0;
    for(i=0;i<5;i++){
    let letter = form.children[i].value;
    if(letter!=word[i]){
        if(word.split("").includes(letter)){
        form.children[i].style.backgroundColor= "yellow";
        }
        else{
        form.children[i].style.backgroundColor="pink";
        }
        flag=1;
    }
    else{
        form.children[i].style.backgroundColor="green";
    }
    form.children[i].readOnly=true;
    }
    let message = "";
    if(flag){
        message="please try again";
    }else{
        message="You Won!";
        button.disabled = false;
    }
    document.getElementById("message").innerHTML = message;
    return(!flag);
}
function clearform(form){
    for(var i=0; i<5; i++){
    form.children[i].value = "";
    }
}
const attempt1 = document.querySelector('#attempt1');
const attempt2 = document.querySelector('#attempt2');
const attempt3 = document.querySelector('#attempt3');
const attempt4 = document.querySelector('#attempt4');
const attempt5 = document.querySelector('#attempt5');
let button = document.querySelector("#play-again");
var points = 0;
var level = 1;
document.getElementById("points").innerHTML=points;
document.getElementById("level").innerHTML = level;
document.getElementById("stars").innerHTML = 0;
const data = ['about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult', 'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'alike', 'alive', 'allow', 'alone', 'along', 'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply', 'arena', 'argue', 'arise', 'array', 'aside', 'asset', 'audio', 'audit', 'avoid', 'award', 'aware', 'badly', 'baker', 'bases', 'basic', 'basis', 'beach', 'began', 'begin', 'begun', 'being', 'below', 'bench', 'billy', 'birth', 'black', 'blame', 'blind', 'block', 'blood', 'board', 'boost', 'booth', 'bound', 'brain', 'brand', 'bread', 'break', 'breed', 'brief', 'bring', 'broad', 'broke', 'brown', 'build', 'built', 'buyer', 'cable', 'calif', 'carry', 'catch', 'cause', 'chain', 'chair', 'chart', 'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'china', 'chose', 'civil', 'claim', 'class', 'clean', 'clear', 'click', 'clock', 'close', 'coach', 'coast', 'could', 'count', 'court', 'cover', 'craft', 'crash', 'cream', 'crime', 'cross', 'crowd', 'crown', 'curve', 'cycle', 'daily', 'dance', 'dated', 'dealt', 'death', 'debut', 'delay', 'depth', 'doing', 'doubt', 'dozen', 'draft', 'drama', 'drawn', 'dream', 'dress', 'drill', 'drink', 'drive', 'drove', 'dying', 'eager', 'early', 'earth', 'eight', 'elite', 'empty', 'enemy', 'enjoy', 'enter', 'entry', 'equal', 'error', 'event', 'every', 'exact', 'exist', 'extra', 'faith', 'false', 'fault', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'fixed', 'flash', 'fleet', 'floor', 'fluid', 'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame', 'frank', 'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny', 'giant', 'given', 'glass', 'globe', 'going', 'grace', 'grade', 'grand', 'grant', 'grass', 'great', 'green', 'gross', 'group', 'grown', 'guard', 'guess', 'guest', 'guide', 'happy', 'harry', 'heart', 'heavy', 'hence', 'henry', 'horse', 'hotel', 'house', 'human', 'ideal', 'image', 'index', 'inner', 'input', 'issue', 'japan', 'jimmy', 'joint', 'jones', 'judge', 'known', 'label', 'large', 'laser', 'later', 'laugh', 'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'level', 'lewis', 'light', 'limit', 'links', 'lives', 'local', 'logic', 'loose', 'lower', 'lucky', 'lunch', 'lying', 'magic', 'major', 'maker', 'march', 'maria', 'match', 'maybe', 'mayor', 'meant', 'media', 'metal', 'might', 'minor', 'minus', 'mixed', 'model', 'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'movie', 'music', 'needs', 'never', 'newly', 'night', 'noise', 'north', 'noted', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often', 'order', 'other', 'ought', 'paint', 'panel', 'paper', 'party', 'peace', 'peter', 'phase', 'phone', 'photo', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant', 'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior', 'prize', 'proof', 'proud', 'prove', 'queen', 'quick', 'quiet', 'quite', 'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'ready', 'refer', 'right', 'rival', 'river', 'robin', 'roger', 'roman', 'rough', 'round', 'route', 'royal', 'rural', 'scale', 'scene', 'scope', 'score', 'sense', 'serve', 'seven', 'shall', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shirt', 'shock', 'shoot', 'short', 'shown', 'sight', 'since', 'sixth', 'sixty', 'sized', 'skill', 'sleep', 'slide', 'small', 'smart', 'smile', 'smith', 'smoke', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spend', 'spent', 'split', 'spoke', 'sport', 'staff', 'stage', 'stake', 'stand', 'start', 'state', 'steam', 'steel', 'stick', 'still', 'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet', 'table', 'taken', 'taste', 'taxes', 'teach', 'teeth', 'terry', 'texas', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'tight', 'times', 'tired', 'title', 'today', 'topic', 'total', 'touch', 'tough', 'tower', 'track', 'trade', 'train', 'treat', 'trend', 'trial', 'tried', 'tries', 'truck', 'truly', 'trust', 'truth', 'twice', 'under', 'undue', 'union', 'unity', 'until', 'upper', 'upset', 'urban', 'usage', 'usual', 'valid', 'value', 'video', 'virus', 'visit', 'vital', 'voice', 'waste', 'watch', 'water', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'write', 'wrong', 'wrote', 'yield', 'young', 'youth'];
var i = data.length;
var plays = 0;
var arrlog = [];
async function getWord() {
    // // const response = await fetch("http://localhost:5001");
    // const data = await response.json();
    let len = Math.random() * (i);
    len = parseInt(len);
    // const word = data[i]['word'];
    let word = data[len];
    arrlog.push(word);
    clearform(attempt1);
    clearform(attempt2);
    clearform(attempt3);
    clearform(attempt4);
    clearform(attempt5);
    enableform(attempt1);
    disableform(attempt2);
    disableform(attempt3);
    disableform(attempt4);
    disableform(attempt5);
    attempt1.addEventListener('submit', e => {
        e.preventDefault();
        let res=checkword(attempt1,arrlog[plays]);
        if(res==0){
            enableform(attempt2);
        }else{
            points+=(5/(plays+1));
            level = Math.floor(Math.log2(points+1));

        }
        document.getElementById("points").innerHTML = Math.ceil(points);
        document.getElementById("level").innerHTML = level;
        document.getElementById("stars").innerHTML = Math.floor(Math.log2(level+1));
    });
    attempt2.addEventListener('submit', e => {
        e.preventDefault();
        let res=checkword(attempt2, arrlog[plays]);
        if(res==0){
            enableform(attempt3);
        }else{
            points+=(4/(plays+1));
            level = Math.floor(Math.log2(points+1));
        }
        document.getElementById("points").innerHTML = Math.ceil(points);
        document.getElementById("level").innerHTML = level;
        document.getElementById("stars").innerHTML = Math.floor(Math.log2(level+1));
    });
    attempt3.addEventListener('submit', e => {
        e.preventDefault();
        let res=checkword(attempt3, arrlog[plays]);
        if(res==0){
            enableform(attempt4);
        }else{
            points+=(3/(plays+1));
            level = Math.floor(Math.log2(points+1));
        }
        document.getElementById("points").innerHTML = Math.ceil(points);
        document.getElementById("level").innerHTML = level;
        document.getElementById("stars").innerHTML = Math.floor(Math.log2(level+1));
    });
    attempt4.addEventListener('submit', e => {
        e.preventDefault();
        let res=checkword(attempt4, arrlog[plays]);
        if(res==0){
            enableform(attempt5);
        }else{
            points+=(2/(plays+1));
            level = Math.floor(Math.log2(points+1));
        }
        document.getElementById("points").innerHTML = Math.ceil(points);
        document.getElementById("level").innerHTML = level;
        document.getElementById("stars").innerHTML = Math.floor(Math.log2(level+1));
    });
    attempt5.addEventListener('submit', e => {
        e.preventDefault();
        let res = checkword(attempt5, arrlog[plays]);
        if(res==0){
            document.getElementById("message").innerHTML="You Lost :( the word is "+word;
        }else{
            points+=(1/(plays+1));
            level = Math.floor(Math.log2(points+1));
        }
        document.getElementById("points").innerHTML = Math.ceil(points);
        document.getElementById("level").innerHTML = level;
        document.getElementById("stars").innerHTML = Math.floor(Math.log2(level+1));
        button.disabled = false;
    });
}
getWord();
button.addEventListener("click", e =>{
    e.preventDefault();
    plays+=1;
    button.disabled = true;
    document.getElementById("message").innerHTML = "";
    getWord();
});
var modal = document.getElementById("myModal");
var btn = document.getElementById("my-btn");
var abtbtn = document.getElementById("about");
var abtmodal = document.getElementById("aboutmodal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
abtbtn.onclick = function() {
    abtmodal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
if (event.target == abtmodal){
    abtmodal.style.display = "none";
}
  }