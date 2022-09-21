const Form = document.getElementById('bookform');
const feedbackEl = document.getElementById('feedback')
const sel = Form.elements['selgroup']
const time = Form.elements['time']
const clientName = Form.elements['clientName']
const meetingAgenda = Form.elements['purpose']
let meetingTime;
let ownerPage;
let owner;
let id = 0


const loginPage =document.querySelector('.login_page')
const loginBtn = document.getElementById('logbtn')
const exitBtn = document.getElementById('exitbtn')

const App = document.querySelector(".app")

const loginForm = document.getElementById('loginform');
const UsernameEl = loginForm.elements['username']
const UserpasswordEl = loginForm.elements['userpassword']

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userName = UsernameEl.value
    const userPassword = UserpasswordEl.value

    if(userName === "Abdumarick" && userPassword === "123"|| userName === "Bakhresa" && userPassword === "123" || userName === "Mohamed dewji" && userPassword === "123"){
      const dataFromStorage = JSON.parse(localStorage.getItem(`${userName}`))

      if(dataFromStorage !== null){
        let dataObject = dataFromStorage[0]
        App.innerHTML = `
        <header>
            <div class="logo"><a href="index.html">AppointmentBooking</a></div>
            <div class="welcome">Welcome Again ${userName}!</div>
        </header>
        <main>
            <div class="header">Here are your Appointments</div>
            <div class="appointments">
              <p>${dataObject.name} request meeting at ${dataObject.meetingTime} the meeting is ${dataObject.purpose}</p>
              <button>Approve the meeting</button>
              <button>Decline meeting</button>
            </div>
        </main>
        `

      }
      else{
        App.innerHTML =`
        <header>
            <div class="logo"><a href="index.html">AppointmentBooking</a></div>
            <div class="welcome">Welcome Again ${userName}!</div>
        </header>
        <main>
            <p>oops! you dont have any appointments today ${userName}</p>
        </main>
        `
      }

      
    }
})

const appointmentsEl = document.querySelector(".appointments")



function showLoginPage(){
    loginPage.classList.toggle('show')
    if(loginPage.classList.contains('show')){
        exitBtn.style.display = "block";
        loginBtn.style.display = "none";
    }
    else{
        exitBtn.style.display = "none";
        loginBtn.style.display = "block";
    }
}




Form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const meetingTime = time.value >= 12 ? `${time.value}pm`: `${time.value}am`
    const name = clientName.value
    const purpose = meetingAgenda.value
    owner = sel.options[sel.selectedIndex].text

    if(owner === "Abdumarick"){
         ownerPage = appointmentbooking(
            owner,
            ["6am", "8am", "9am", "14pm", "16pm", "18pm"],
            "any",
           id
         )
    }

    if(owner === "Bakhresa"){
        ownerPage = appointmentbooking(
            owner,
            ["10am", "15pm", "18pm"],
            ["business", "family", "fun"],
          id
         )
    }
    if(owner === "Mohamed dewji"){
        ownerPage = appointmentbooking(
            owner,
            ["9am", "12am", "13pm", "14pm"],
            "business",
          id
         )
    }
    ownerPage.newMeeting = {name, meetingTime ,purpose,id}
})


function incremented(){
    id += 1

    return id
}


//A business owner object will container(his freehours,pending meeting,approved meeting,decline meeting,business meeting,family meeting,important meeting,meeting reasons,feedback)
function appointmentbooking(businessOwner,freeHours,Reasons){
    
 
    return {
        businessOwner,
        freeHours,
        Reasons,
        _pendingMeeting: [],
        _approvedMeeting: [],
        _declinedMeeting: [],
        _feedBack: "",

        get FreeHours(){
            return this.freeHours
        },

        get feedBack(){
            return this._feedBack
        },
        

        set newMeeting(meeting){
            const {name, meetingTime, purpose,id} = meeting
            if(this.freeHours.indexOf(meetingTime) !== -1){
                this._pendingMeeting.push(meeting)
                incremented()
                localStorage.setItem(`${owner}`, JSON.stringify(this._pendingMeeting)) 
                feedbackEl.innerHTML = `<p>Feedback from ${owner}: hey ${name} i am looking forward to meet with you my friend</p>`   
            }
            else{
                feedbackEl.innerHTML = `<p>Feedback from ${owner}:hey ${name} Sorry the time is not suitable for us to meet</p>`
            }
        },
        // set approveMeeting(id){
        //     const reviewMeeting = this._pendingMeeting.filter((meeting)=>{
        //         return meeting.id === id
        //     })[0]
        //     this._approvedMeeting.push(reviewMeeting)
        //     console.log(this._approvedMeeting)

        //     feedbackEl.innerHTML = `<p>Hey ${name} your appointment is approved by ${owner} at ${meetingTime} </p>`
        // },
        // set declineMeeting(id){
        //     const reviewMeeting = this._pendingMeeting.filter((meeting)=>{
        //         return meeting.id === id
        //     })
        //     this._declinedMeeting.push(reviewMeeting)

        //     feedbackEl.innerHTML = `<p>Hey ${name} your meeting was declined by ${owner} for the reasons that are best known by himself</p>`
        // }
    }
}




//a client meeting that are in freehours and has business reasons will be pushed to pending meeting for review.

//A business owner will have a button to approve the meeting after the review of the meeting

//A business owner will have a option to add the important people that he will meet for fun

//A business owner will filter all the meeting that are fun related but with not his important personals send them to declined meeting

//A company important meeting will be pushed to a pending meeting even if its out of the free hours

//A business owner will have a chance to arrange the family meeting with the family people object 



var array1 =[1,2,3,4,2,5,8,9]


const sum = array1.reduce((acc,item,index,array) => {
    acc += item
    if(index === array.length-1){
        return acc/array.length
    }
    else{
        return acc
    }
})









