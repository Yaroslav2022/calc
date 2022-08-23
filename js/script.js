const calc = document.querySelector('.calc');

calc.addEventListener('click', function(event) {

});

const inputNode = document.querySelector('.js_output');
const outputNode = document.querySelector('.js_out');

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
    outputNode.value = 0
});

plus_or_minus.addEventListener('click', function() {
    outputNode.value = ''
});
percent.addEventListener('click', function() {
    outputNode.value = ''
});
share.addEventListener('click', function() {

    outputNode.value = 0 + outputNode.value;
});
seven.addEventListener('click', function() {
    outputNode.value = 7 + outputNode.value;
});
eight.addEventListener('click', function() {
    outputNode.value = 8 + outputNode.value;
});
nine.addEventListener('click', function() {
    outputNode.value = 9 + outputNode.value;
});
X.addEventListener('click', function() {
    outputNode.value = '';
});
four.addEventListener('click', function() {
    outputNode.value = 4 + outputNode.value;
});
five.addEventListener('click', function() {
    outputNode.value = 5 + outputNode.value;
});
six.addEventListener('click', function() {
    outputNode.value = 6 + outputNode.value;
});
minus.addEventListener('click', function() {
    outputNode.value = '' + outputNode.value;
});
one.addEventListener('click', function() {
    outputNode.value = 1 + outputNode.value;
});
two.addEventListener('click', function() {
    outputNode.value = 2 + outputNode.value;
});
three.addEventListener('click', function() {

    outputNode.value = 3 + outputNode.value;
});
plus.addEventListener('click', function() {
    outputNode.value = '' + outputNode.value;
});
nullValue.addEventListener('click', function() {
    outputNode.value = 0 + outputNode.value
});
comma.addEventListener('click', function() {
    outputNode.value = ',' + outputNode.value;
});
equally.addEventListener('click', function() {
    outputNode.value = '' + outputNode.value;
});

function f1() {
    alert('test');
}