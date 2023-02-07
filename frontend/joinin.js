const joinbtn = document.body.querySelector('.JoinBtn');
const btngroup = document.body.querySelector('.BtnGroup');
const joinform = document.body.querySelector('.JoinForm');
const joinx = document.body.querySelector('.JoinForm').querySelector('.fa-x');
const joinname = document.body.querySelector('#JoinName');
const joinid = document.body.querySelector('#JoinId');
const joinpassword = document.body.querySelector('#JoinPassword');
const joinpasswordshow = joinpassword.querySelector('.fa-eye');
const joinpasswordhide = joinpassword.querySelector('.fa-eye-slash');
const joinpwcheck = document.body.querySelector('#JoinPWcheck');
const joinpwcheckshow = joinpwcheck.querySelector('.fa-eye');
const joinpwcheckhide = joinpwcheck.querySelector('.fa-eye-slash');
const joinemail = document.body.querySelector('#JoinEmail');

joinpassword.querySelector('input').addEventListener('input', (e) => {
    const passwordreq =
        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/;
    joinpassword.querySelector('.fa-check').style.backgroundColor =
        passwordreq.test(e.target.value) ? `#2b90d9` : `#b8b8b8`;
    if (joinpasswordhide.classList.contains('show')) {
        return;
    }
    if (e.target.value.length > 0) {
        joinpasswordshow.classList.add('show');
    } else {
        joinpasswordshow.classList.remove('show');
        joinpasswordhide.classList.remove('show');
    }
});
joinpasswordshow.addEventListener('mouseover', (e) => {
    joinpassword.querySelector('input').type = 'text';
    e.target.classList.toggle('show');
    joinpasswordhide.classList.toggle('show');
});
joinpasswordhide.addEventListener('mouseout', (e) => {
    joinpassword.querySelector('input').type = 'password';
    e.target.classList.toggle('show');
    joinpasswordshow.classList.toggle('show');
});
joinpwcheck.querySelector('input').addEventListener('input', (e) => {
    const passwordreq =
        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/;
    joinpwcheck.querySelector('.fa-check').style.backgroundColor =
        joinpassword.querySelector('input').value === e.target.value &&
        passwordreq.test(joinpassword.querySelector('input').value)
            ? `#2b90d9`
            : `#b8b8b8`;
    if (joinpwcheckhide.classList.contains('show')) {
        return;
    }
    if (e.target.value.length > 0) {
        joinpwcheckshow.classList.add('show');
    } else {
        joinpwcheckshow.classList.remove('show');
        joinpwcheckhide.classList.remove('show');
    }
});
joinpwcheckshow.addEventListener('mouseover', (e) => {
    joinpwcheck.querySelector('input').type = 'text';
    e.target.classList.toggle('show');
    joinpwcheckhide.classList.toggle('show');
});
joinpwcheckhide.addEventListener('mouseout', (e) => {
    joinpwcheck.querySelector('input').type = 'password';
    e.target.classList.toggle('show');
    joinpwcheckshow.classList.toggle('show');
});

// joinemail.querySelector("input").addEventListener("input", (e) => {
//   const emailreq =
//     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
//   joinemail.querySelector(".fa-check").style.backgroundColor = emailreq.test(
//     e.target.value
//   )
//     ? `#2b90d9`
//     : `#b8b8b8`;
// });
