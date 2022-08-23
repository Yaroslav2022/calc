const calc = document.querySelector('.calc');

calc.addEventListener('click', function(event) {

});

const inputNode = document.querySelector('.js_output');
const outputNode = document.querySelector('.js_out ');

const AC = document.querySelector('.calc_block_input_item_AC');
const plus_or_minus = document.querySelector('.calc_block_input_item_plus_or_minus');
const percent = document.querySelector('.calc_block_input_item_percent');
const share = document.querySelector('.calc_block_input_item_share');
const seven = document.querySelector('.calc_block_input_item_7');
const eight = document.querySelector('.calc_block_input_item_8');
const nine = document.querySelector('.calc_block_input_item_9');
const X = document.querySelector('.calc_block_input_item_X');
const four = document.querySelector('.calc_block_input_item_4');
const five = document.querySelector('.calc_block_input_item_5');
const six = document.querySelector('.calc_block_input_item_6');
const minus = document.querySelector('.calc_block_input_item_-');
const one = document.querySelector('.calc_block_input_item_1');
const two = document.querySelector('.calc_block_input_item_2');
const three = document.querySelector('.calc_block_input_item_3');
const plus = document.querySelector('.calc_block_input_item_plus');
const nullValue = document.querySelector('.calc_block_input_item_0');
const comma = document.querySelector('.calc_block_input_item_comma');
const equally = document.querySelector('.calc_block_input_item_equally');
AC.addEventListener('click', function() {
    outputNode.innerHTML = 0;
});
plus_or_minus.addEventListener('click', function() {
    outputNode.innerHTML = function() {

    };
});
percent.addEventListener('click', function() {
    outputNode.innerHTML = 0;
});
share.addEventListener('click', function() {
    outputNode.innerHTML = 0;
});
seven.addEventListener('click', function() {
    outputNode.innerHTML = 7;
});
eight.addEventListener('click', function() {
    outputNode.innerHTML = 8;
});
nine.addEventListener('click', function() {
    outputNode.innerHTML = 9;
});
X.addEventListener('click', function() {
    outputNode.innerHTML = '';
});
four.addEventListener('click', function() {
    outputNode.innerHTML = 4;
});
five.addEventListener('click', function() {
    outputNode.innerHTML = 5;
});
six.addEventListener('click', function() {
    outputNode.innerHTML = 6;
});
minus.addEventListener('click', function() {
    outputNode.innerHTML = '';
});
one.addEventListener('click', function() {
    outputNode.innerHTML = 1;
});
two.addEventListener('click', function() {
    outputNode.innerHTML = 2;
});
three.addEventListener('click', function() {
    outputNode.innerHTML = 3;
});
plus.addEventListener('click', function() {
    outputNode.innerHTML = '';
});
nullValue.addEventListener('click', function() {
    outputNode.innerHTML = 0;
});
comma.addEventListener('click', function() {
    outputNode.innerHTML = ',';
});
equally.addEventListener('click', function() {
    outputNode.innerHTML = '';
});