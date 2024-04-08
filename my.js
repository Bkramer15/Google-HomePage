//will pop up a message with word that is typed in search bar
const googleSearch = document.getElementById('googleSearch');
if(googleSearch){
  googleSearch.addEventListener('click',function(){
    let inputValue = document.getElementById('search').value;
    let googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);
    window.location.href = googleSearchUrl;
  });
}

//will allow for image search based on user search queary
const imageSearchButton = document.getElementById('.imageSearch');
if(imageSearchButton){
  imageSearchButton.addEventListener('click',function(){
    let inputValue = document.getElementById('search').value;
    let imageSearchUrl = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(inputValue);
    window.location.href = imageSearchUrl;
  });
}

//will alllow for settibgs link to be hidden or shown when clicked
//will alllow for settibgs link to be hidden or shown when clicked
document.addEventListener('DOMContentLoaded', function(){
  const settingsLink = document.getElementById('settingsLink');
  const settingsMenu = document.querySelector('.settingsMenu');

  if (settingsLink) {
      settingsLink.addEventListener('click', function(){
          if (settingsMenu.style.display === "none" || !settingsMenu.style.display) {
              settingsMenu.style.display = "block";
          } else {
              settingsMenu.style.display = "none";
          }
      });
  } else {
      console.log('Settings link not found');
  }
});

//will allow for randomized phrases on feeling lucky button
document.getElementById('luckySearch').addEventListener('mouse',function(){
  const verb = document.getElementById('luckySearch').querySelector('span')
  let phrase = ["crazy","happy","sad","excited","hungry","exotic","tired"];
  let randPhrase = phrase[Math.floor(Math.random() * phrase.length)];

  verb.textContent = randPhrase;
});

