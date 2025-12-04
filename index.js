const genActivityBtn = document.getElementById('activity-btn')

genActivityBtn.addEventListener("click", ()=>{
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById('generated-activity').innerHTML = `
    <p> Generated activity: ` + data.activity
    })
})