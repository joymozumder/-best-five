function countSelectedPlayers()
{
    const totalSelectedPlayers = document.querySelectorAll('#selected-five li').length;
    return totalSelectedPlayers;
}

function getInputElementValueById(elementId)
{
    const element = document.getElementById(elementId);
    const elementValueString = element.value;

    //validity check
    if(isNaN(elementValueString) || elementValueString === ''){
        return "NaN";
    }

    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;       
}

document.getElementById('all-players').addEventListener('click', function(event){
    if(event.target.nodeName === 'BUTTON'){
        const selectedPlayerName = event.target.parentNode.parentNode.children[0].innerText;
        
        const totalSelectedPlayers = countSelectedPlayers();
        if(totalSelectedPlayers < 5)
        {
            const selectedPlayersList = document.getElementById('selected-five');
            const li = document.createElement('li');
            li.innerText = selectedPlayerName;
            selectedPlayersList.appendChild(li);
            event.target.setAttribute("disabled", true); 
            event.target.style.backgroundColor = "#b3b3b3";
        }
        else{
            alert("Sorry!! You can't select more than five players");
        }
    }
});

document.getElementById('calculate-player-expenses-btn').addEventListener('click', function(){
    const totalSelectedPlayers = countSelectedPlayers();
    
    if(totalSelectedPlayers === 0)
    {
        alert("You haven't selected any player yet");
    }
    else
    {
        const perPlayerBudget = getInputElementValueById('per-player-budget-field');
        if (perPlayerBudget !== "NaN") {
            const totalPlayerExpenses = perPlayerBudget * totalSelectedPlayers;
            setTextElementValueById("total-player-expenses", totalPlayerExpenses);
        } 
        else {
            setTextElementValueById("total-player-expenses", 0);
            alert("Please provide a valid input");
        }
    }
});

