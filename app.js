var loading = document.getElementById("load-wrap")
var loadingText = document.getElementById("loading-text")



window.addEventListener('load', function() {
  loading.style.opacity = "0"
  setTimeout(()=>{

    loading.style.display = 'none'

    let message = document.getElementById('chatmessage')
let message1 = document.getElementById('chatmessage1')
let message2 = document.getElementById('chatmessage2')
let message3 = document.getElementById('chatmessage3')


function show(element){
  element.style.animationName='expand-bounce'
  element.style.animationDuration='0.40s'
}

function hide(element){
  element.style.animationName='shrink'
  element.style.animationDuration='0.40s'
}

//  message

  setTimeout(()=>{

    show(message)

  }, 1000)

  setTimeout(()=>{

    hide(message)

  }, 4000)

// message1

setTimeout(()=>{

  show(message1)

}, 5000)

setTimeout(()=>{

  hide(message1)

}, 8000)

// message3

setTimeout(()=>{

  show(message3)

}, 9000)

setTimeout(()=>{

  hide(message3)

}, 12000)

// message3

setTimeout(()=>{

  show(message2)

}, 13000)

setTimeout(()=>{

  hide(message2)

}, 16000)
  }, 300)
  
});

setTimeout(()=>{
  loadingText.innerHTML = "We're getting things ready for you..."
}, 3000)

setTimeout(()=>{
  loadingText.innerHTML = "Your experience matters to us..."
}, 6000)

setTimeout(()=>{
  loadingText.innerHTML = "Hang on, we're almost there..."
}, 12000)




let project_modal = document.getElementsByClassName("project-modal")
let project1_modal = document.getElementById("project1-modal");
let project2_modal = document.getElementById("project2-modal");
let project3_modal = document.getElementById("project3-modal");
let project4_modal = document.getElementById("project4-modal");
let project5_modal = document.getElementById("project5-modal");

let project1 = document.getElementById("project1-btn");
let project2 = document.getElementById("project2-btn")
let project3 = document.getElementById("project3-btn")
let project4 = document.getElementsByClassName("project4-btn")
let project5 = document.getElementsByClassName("project5-btn")

let closebtns = document.getElementsByClassName("close");




for(let i=0; i<closebtns.length; i++){

  closebtns[i].addEventListener('click', ()=>{
    project_modal[i].style.visibility='hidden'
  })

}

for(let i=0; i<project_modal.length; i++){

  window.addEventListener('click', (event)=>{
    if (event.target == project_modal[i]) {
        project_modal[i].style.visibility = "hidden";
    }
  })

}

function makeVisible(element){
  element.style.visibility='visible'
}

project1.addEventListener('click', ()=>{
  makeVisible(project1_modal)
})

project2.addEventListener('click', ()=>{
  makeVisible(project2_modal)
})

project3.addEventListener('click', ()=>{
  makeVisible(project3_modal)
})

for(let i=0; i<project4.length; i++){

  project4[i].addEventListener('click', ()=>{
    makeVisible(project4_modal)
  })

  project5[i].addEventListener('click', ()=>{
    makeVisible(project5_modal)
  })
}


let okbtn = document.getElementById("ok-btn");
let unavailableModal = document.getElementById('unavailable-modal')
let socialBtns = document.getElementsByClassName('unavailable')
let modalText = document.getElementById("modal-text")
let submitBtn = document.getElementById("submitbtn")

submitBtn.addEventListener('click', ()=>{
  modalText.innerHTML = "Our servers are down at this moment. Please use below details for contacting me. Thank you!"
  makeVisible(unavailableModal)
})

for(let i=0; i<socialBtns.length; i++){
  socialBtns[i].addEventListener('click', ()=>{

    modalText.innerHTML = "Note: Currently i am unavailable on social media. Kindly use below details to contact me. Thank you!"

    makeVisible(unavailableModal)
  })
}

window.addEventListener('click', (event)=>{
  if(event.target == unavailableModal){
    unavailableModal.style.visibility='hidden'
  }
})

okbtn.addEventListener('click', ()=>{
  unavailableModal.style.visibility='hidden'
})


fetch('http://localhost:3600/query', {
  mode: 'no-cors',
  method: "post",
  headers: {
       "Content-Type": "application/json"
  },
  body: JSON.stringify({yusuf: 'this is yusuf'})
})
.then((res)=>{
  res.json()
}).then((data)=>{
  console.log(data);
})



