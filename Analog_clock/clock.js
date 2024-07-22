let hr = document.querySelector('#hour');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

function displaytime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hr_rotation = 30 * hh + mm / 2;
    let mm_rotation = 6 * mm;
    let ss_rotation = 6 * ss;

    hr.style.transform = `rotate(${hr_rotation}deg)`;
    mn.style.transform = `rotate(${mm_rotation}deg)`;
    sc.style.transform = `rotate(${ss_rotation}deg)`;
}

setInterval(displaytime, 1000);
