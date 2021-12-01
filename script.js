'use strict';
// function Changebg() {
//     let bgimg = Math.trunc(Math.random() * 5) + 1;
//     document.querySelector('header').style.backgroundImage = `url('DSC-${bgimg}.jpg')`;
//     // document.querySelector(`.navicenter-${bgimg}`).classList.remove('hidden');
//     // document.querySelector(`.subline-${bgimg}`).classList.remove('hidden');
// }
// setInterval(Changebg, 3000);

//for hover effect on login card
document.querySelector('.log').addEventListener('mouseover', function () {
    document.getElementById('logincard').style.display = 'flex';
})
document.querySelector('.log').addEventListener('mouseout', function () {
    document.getElementById('logincard').style.display = 'none';
})
document.querySelector('#log-in').addEventListener('mouseover', function () {
    document.getElementById('logincard').style.display = 'flex';
})
document.getElementById('logincard').addEventListener('mouseout', function () {
    document.getElementById('logincard').style.display = 'none';
})

//for hover effect on Acadmic-card
document.querySelector('.acadmics').addEventListener('mouseover', function () {
    document.getElementById('acadmic-card').style.display = 'flex';
})
document.querySelector('.acadmics').addEventListener('mouseout', function () {
    document.getElementById('acadmic-card').style.display = 'none';
    document.getElementById('exam-card').style.display = 'none';
})
document.querySelector('#acadmic').addEventListener('mouseover', function () {
    document.getElementById('acadmic-card').style.display = 'flex';
})
document.getElementById('acadmic-card').addEventListener('mouseout', function () {
    document.getElementById('acadmic-card').style.display = 'none';
    document.getElementById('exam-card').style.display = 'none';
})


//for hover effect on exam-card
document.querySelector('.examination').addEventListener('mouseover', function () {
    document.getElementById('exam-card').style.display = 'flex';
     document.getElementById('acadmic-card').style.display = 'flex';
})
document.querySelector('.examination').addEventListener('mouseout', function () {
    // document.getElementById('exam-card').style.display = 'none';
     document.getElementById('acadmic-card').style.display = 'flex';
})
document.querySelector('#exam').addEventListener('mouseover', function () {
    document.getElementById('exam-card').style.display = 'flex';
     document.getElementById('acadmic-card').style.display = 'flex';
})
document.getElementById('exam-card').addEventListener('mouseout', function () {
    document.getElementById('exam-card').style.display = 'none';
     document.getElementById('acadmic-card').style.display = 'none';
})


//for hover effect on campus-card
document.querySelector('.campus-life').addEventListener('mouseover', function () {
    document.getElementById('campus-card').style.display = 'flex';
})
document.querySelector('.campus-life').addEventListener('mouseout', function () {
    document.getElementById('campus-card').style.display = 'none';
        document.getElementById('club-card').style.display = 'none';

})
document.querySelector('#campus').addEventListener('mouseover', function () {
    document.getElementById('campus-card').style.display = 'flex';
})
document.getElementById('campus-card').addEventListener('mouseout', function () {
    document.getElementById('campus-card').style.display = 'none';
})


//for hover effect on club-card
document.querySelector('.clubs').addEventListener('mouseover', function () {
    document.getElementById('club-card').style.display = 'flex';
     document.getElementById('campus-card').style.display = 'flex';
})
document.querySelector('.clubs').addEventListener('mouseout', function () {
    document.getElementById('club-card').style.display = 'none';
     document.getElementById('campus-card').style.display = 'flex';
})
document.querySelector('#club-child').addEventListener('mouseover', function () {
    document.getElementById('club-card').style.display = 'flex';
     document.getElementById('campus-card').style.display = 'flex';
})

document.getElementById('club-card').addEventListener('mouseout', function () {
    document.getElementById('club-card').style.display = 'none';
     document.getElementById('campus-card').style.display = 'none';
})


//