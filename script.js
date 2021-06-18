console.log('testing');
const sentences=["A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures.", "A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law office.","Paralegals are not allowed to offer legal services directly to the public on their own and must perform their legal work under an attorney or law firm", "A teacher\'s professional duties may extend beyond formal teaching.", "Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities.", "In some education systems, teachers may have responsibility for student discipline."]
let btn=document.getElementById('btn');
let msg=document.getElementById('msg');
let typedWords=document.getElementById('typedWords');
let startTime,endTime;

btn.addEventListener('click',(e)=>{
    if(btn.innerText=="Start"){
        typedWords.focus();
        btn.innerText="Done";
        showSentence();
    }
    else{
        typedWords.blur();
        showResult();
        btn.innerText="Start"
        //msg.innerText="";
        typedWords.value="";
    }
})
//function call on start button click
const showSentence=(e)=>{
     let randomWord=Math.floor(Math.random()*sentences.length);
     msg.innerHTML=sentences[randomWord] 
    let date=new Date();
    startTime=date.getTime();
    
}
//function call on done button click
const showResult=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime =((endTime-startTime)/1000);
    let totalStr=typedWords.value;
    let countWord=wordCounter(totalStr); 
    let correctWord=compareWord(msg.innerText,totalStr);
     
    let speed=Math.floor((countWord/totalTime)*60);
    console.log('speed is: '+speed);
    msg.innerHTML=`Your Speed is ${speed} wpm and ${correctWord}`; 
  //  msg.innerText="hello"
}
//function to count word in sentence user write
const wordCounter=(Str)=>{
 let count =Str.split(" ").length;
 return count;
}
//compare string and user enter words
const compareWord=(msgText,userText)=>{
let word1=msgText.split(" ");
let word2=userText.split(" ");
let count=0;
word1.forEach((item,index) => {
    if(item==word2[index]){
        count++;
    }
});
let errorWords=(word1.length-count);
return(`${count} correct out of ${word1.length} words and total number of error are ${errorWords}`)
}
