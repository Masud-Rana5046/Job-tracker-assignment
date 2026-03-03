
let currentTab = 'all';
const tabActive = ["bg-[#0000f8]", "border-[#0000f8]", "text-white"];
const tabInactive = ["bg-white", "text-slate-700","border-slate-200" ]

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");     
const emptyState = document.getElementById("empty-state");

//console.log(allContainer, interviewContainer, rejectedContainer);

function switchTab(tab){
    console.log(tab);
const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for(const t of tabs){
        const tabName = document.getElementById("tab-" + t);
        //console.log(tabName);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for(const section of pages){
        section.classList.add("hidden");
    }

    if(tab === 'all'){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    else{
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
    }
    updatesState()
}

//state update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available");



switchTab(currentTab);

//deligation korbo

document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickElement = event.target;
    const card = clickElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");
   // console.log(card);
    //console.log(clickElement);
    if(clickElement.classList.contains("interview")){
        //console.log('interview myself');
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        updatesState()
    }
    if(clickElement.classList.contains("rejected")){
        //console.log('rejected myself');
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updatesState()
    }
    if(clickElement.classList.contains("delete")){
        //console.log('delete this');
        parent.removeChild(card);
        updatesState()
    }
});

function updatesState(){
    // totalStat.innerText = allContainer.children.length;
    // interviewStat.innerText = interviewContainer.children.length;
    // rejectedStat.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    };
    totalStat.innerText = counts["all"];
    interviewStat.innerText = counts["interview"];
    rejectedStat.innerText = counts["rejected"];

    availableStat.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }

}
updatesState()