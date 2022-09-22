const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)

    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
               

        randomSelect()
        
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag=>tag.trim() !=='').map(tag =>tag.trim())
    
     tagsEl.innerHTML=''

    tags.forEach(tag => {
        
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}


function randomSelect(){

    //Nr of times to run
    
    const times = 30
    
   //highlite and unHighlite each one

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        if (randomTag !== undefined){
        highlightTag(randomTag)
        }

        setTimeout(()=>{
           unHighlightTag(randomTag)
        }, 100)
    },100)

     //Stop and pick a random tag

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100) 

    }, times *100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}