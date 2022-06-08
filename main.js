const name = 'sports complex Dalida';
let sport = ('box', 'kick-box', 'bjj', 'pool');
let kind_sport = ['box', 'kick-box', 'bjj', 'pool'];
let sport_price = [1000, 2000, 3000, 4000];
let count_kind_sport = kind_sport.length;
let age = undefined;
console.log(count_kind_sport);
kind_sport.push('mma');
kind_sport.pop();
kind_sport.unshift('mma');
most_visited = ['boxing', 'kick-boxing', 'bjj', 'pool', 'boxing', 'boxing'];
const count = most_visited.filter((arr) => arr === 'boxing')
console.log(count);
const rasilka = kind_sport.map((arr)=> 'we have ' + arr);
console.log(rasilka)
function average(a, b,c,d) {
    return  (a + b + c + d)/4;
}
new_sport = ['sambo', 'mma'];
let sum = average(...sport_price);
sum = String(sum);
if(sum === 2500){
    console.log('da');
}else if(sum == 2500){
    console.log('ne strogi');
}else{
    console.log('net')
}
for(let i =0; i<kind_sport.length; i++){
    console.log(i)
}

[a, b, ...other] = kind_sport;
console.log(a);
console.log(other);