document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value

    try{
        const res = await fetch(`https://alien-api-info.azurewebsites.net/api/${alienName}`)
        const data = await res.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeWorld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    }catch(err){
        console.log(err)
    }
    
}