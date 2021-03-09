let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let first_word = 'Sony';
first_word = first_word.toLowerCase()
let second_word = 'Hewlett';
second_word = second_word.toLowerCase()
let third_word = 'Packard';
third_word = third_word.toLowerCase()
let a = first_word.length + third_word.length
if (a > 26) {
    a %= 26
    result = '' + arr_en[a];
}
result = '' + arr_en[a-1];
/*в якості першого символу
записати букву, яка в алфавіті стоїть на місці,
відповідному сумі кількостей символів в першому і
третьому словах; якщо ця сума більше 26, знайти і
використовувати в якості номера позиції шуканої букви в
алфавіті залишок від ділення вказаної суми на 26*/

let b = second_word.slice(-1)
let c = arr_en.indexOf(b)
if (c == 0) {
    let d = 'z';
    result += d;
}
else {
    c = arr_en.indexOf(b) - 1
    result += arr_en[c]
}
/*В якості другого символу записати букву, яка в алфавіті
передує букві, що є останнім символом другого слова на
екрані; якщо це буква «а», записати «z»*/

if (third_word.length % 2 == 0){
    let h = third_word[(third_word.length / 2) - 1]
    let h1 = arr_en.indexOf(h)
    if (h1 == 25){
        h2 = 'a';
        result += h2
    }
    else{
        h1 = arr_en.indexOf(h) + 1
        result += arr_en[h1]
    }
    
}
else {
    let g = (third_word.length / 2) - 0.5
    let g1 = arr_en.indexOf(third_word[g])
    if (g1 == 25){
        let g2 = 'a';
        result += g2
    }
    else {
        g1 = arr_en.indexOf(third_word[g]) + 1
        result += arr_en[g1]
    }
}
/*Якщо третє слово містить непарну кількість букв, то в
якості третього символу записати букву, яка в алфавіті
слідує за буквою, що є середнім символом третього слова;
якщо це буква «z», записати «а». Якщо ж третє слово
містить парну кількість символів, то в якості третього
символу записати букву, яка в алфавіті передує букві, яка
є першим з двох середніх символів третього слова; якщо
це буква «а», записати «z».*/

let f = first_word[0]
let f1 = arr_en.indexOf(f)
if (f1 == 25){
    f2 = 'a';
    result += f2
}
else{
    f1 = arr_en.indexOf(f) + 1
    result += arr_en[f1]
}

/*В якості четвертого символу записати букву, яка в
алфавіті слідує за буквою, що є першим символом
першого слова на екрані; якщо це буква «z», записати «а». */

console.log(result)
function myFunction(){
    result1 = (document.getElementById("myinput").value);
    console.log(result1)
    if (result1 == result){
        alert("Password is correct!")
    }
    else {
        alert("Password isn`t correct!")
    }
};

