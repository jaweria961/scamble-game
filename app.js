const msg = document.querySelector('.msg');
const guess = document.querySelector('input');

const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python','javascript','c++','php','java',
'c#','html','css','reactjs','angualr','swift','android','sql'
]

const createNewWords = () => {


 let random = Math.floor (Math.random() *sWords.length);

let newTempWordsm = sWords[random];
console.log(newTempWordsm);
return newTempWordsm;

}
const scrambleWords = (arr) =>{
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}
btn.addEventListener('click', function(){
    if(!play){
        play=true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        
        randWords = scrambleWords(newWords.split("")).join("");
        
        console.log(randWords);
        msg.innerHTML = `guess the word ${randWords}`;
    } else
    {
        let tempWords = guess.value;
        if(tempWords === newWords){
            play = false;
            msg.innerHTML = `the actual word is ${newWords}`;
            btn.innerHTML = "Start again";
            guess.classList.toggle('hidden');
            console.log('correct');
            guess.value= "";
        }
        else{
            msg.innerHTML = `the word enetered is wrong. the actual word is ${newWords}. try again`;
        }
        

    }
})