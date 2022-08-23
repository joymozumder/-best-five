function countSelectedPlayers()
{
    const totalSelectedPlayers = document.querySelectorAll('#selected-five li').length;
    return totalSelectedPlayers;
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