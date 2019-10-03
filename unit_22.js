let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;

// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
function t1() {
    count1++;
    document.querySelector('.out-1').textContent = `Click: ${count1}`;
}

document.querySelector('.div-1').addEventListener('click', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */
function t2() {
    count2++;
    document.querySelector('.out-2').textContent = `dblClick: ${count2}`;
}

document.querySelector('.div-2').addEventListener('dblclick', t2);


// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */
function t3() {
    count3++;
    document.querySelector('.out-3').textContent = `mousemove: ${count3}`;
}

document.querySelector('.div-3').addEventListener('mousemove', t3);


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */
function t4() {
    event.preventDefault();
    count4++;
    document.querySelector('.out-4').textContent = `contextmenu: ${count4}`;
}

document.querySelector('.div-4').addEventListener('contextmenu', t4);

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */
function t5() {
    count5++;
    document.querySelector('.out-5').textContent = `mousedown: ${count5}`;
}

document.querySelector('.div-5').addEventListener('mousedown', t5);

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */
function t6() {
    count6++;
    document.querySelector('.out-6').textContent = `mouseenter: ${count6}`;
}

document.querySelector('.div-6').addEventListener('mouseenter', t6);


// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/
function t7() {
    count7++;
    document.querySelector('.out-7').textContent = `mouseleave: ${count7}`;
}

document.querySelector('.div-7').addEventListener('mouseleave', t7);

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/
function t8() {
    count8++;
    document.querySelector('.out-8').textContent = `mouseout: ${count8}`;
}

document.querySelector('.div-8').addEventListener('mouseout', t8);


// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */
function t9() {
    count9++;
    document.querySelector('.out-9').textContent = `mouseover: ${count9}`;
}

document.querySelector('.div-9').addEventListener('mouseover', t9);


// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/
function t10() {
    count10++;
    document.querySelector('.out-10').textContent = `mouseup: ${count10}`;
}

document.querySelector('.div-10').addEventListener('mouseup', t10);



