let el=document.getElementById("sentence")
async function type(sentence,delay)
{
    console.log(sentence[0])
 
    for(let i=0;i<sentence.length;i++)
    {
     await wait(100)
        el.textContent+=sentence[i]
    }

}
function wait(delay)
{
    return new Promise(resolve=>setTimeout(resolve,delay))
}

async function deleteSentence(delay)
{
    let el=document.getElementById("sentence")

   let sentence =el.textContent
   console.log(sentence)
   for(let i =sentence.length;i>=0;i--)
   {
    await wait(delay)
    el.textContent=sentence.slice(0,i)
     
   }
}

async function loop()
{
   await type("Hey! i am Manish Manda")
   await wait(2000)
   await  deleteSentence(100)
   await type("I am a web Developer..")
   await wait(1500)
   await  deleteSentence(100)
   await wait(1000)
   loop()
}
loop()