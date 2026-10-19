const container = document.getElementById('container');
const imgWidth = 200;
const imgHeight = 200;
const verbs = ["Turn", "Walk", "Cross", "Continue", "Veer", "Follow", "Look"];
const directions = ["left", "right", "straight", "backwards", "north", "south", "west", "east"];
const prepositions = ["about", "above", "across", "after", "against", "along", "among", "around", "at", "before", "behind", "below", "beside", "between", "by", "during", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "out", "over", "since", "through", "to", "toward", "under", "until", "up", "with", "within", "without"];
const locations = ["the traffic light", "the roundabout", "a bridge", "the fork", "the crosswalk", "the gas station", "some trash", "the sign", "a library", "a mailbox", "the river", "a park", "the crack", "a square", "a circle", "a triangle", "an old tree", "a bristly bush", "the mountainous structure", "a dead end", "the construction zone"];
const soundFiles = [
  'sounds/forceField_000.ogg',
  'sounds/forceField_001.ogg',
  'sounds/forceField_002.ogg',
  'sounds/forceField_003.ogg',
  'sounds/forceField_004.ogg'
];

function generateDynamicSentence() {
  const getRandomWord = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const verb = getRandomWord(verbs);
  const direction = getRandomWord(directions);
  const preposition = getRandomWord(prepositions);
  const location = getRandomWord(locations);
  
  return `${verb} ${direction} ${preposition} ${location}.`;
}

window.addEventListener('mousemove', (event) => {
    console.log(`Page X/Y: ${event.pageX}, ${event.pageY}`);
    console.log(`Client X/Y: ${event.clientX}, ${event.clientY}`);
    console.log(`Screen X/Y: ${event.screenX}, ${event.screenY}`);
});

container.addEventListener('click', () => {

  const newElement = document.createElement('div');
  const newSentence = generateDynamicSentence();
  const img = document.createElement('img');
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') + '30';
  const randomSound = Math.floor(Math.random() * soundFiles.length);
  const selectedSound = soundFiles[randomSound];  
  const audio = new Audio(selectedSound);

  newElement.textContent = newSentence;
  newElement.style.backgroundColor = randomColor;
  newElement.classList.add('box'); // Optional: for CSS styling

    img.classList.add('random-image');
    img.style.width = Math.floor(Math.random() * 300) + 'px';
    img.style.height = Math.floor(Math.random() * 300) + 'px';
    img.src = `https://picsum.photos/${imgWidth}/${imgHeight}?random=${Math.random()}`;

    const maxX = container.clientWidth - imgWidth;
    const maxY = container.clientHeight - imgHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    img.style.left = `${event.pageX}px`;
    img.style.top = `${event.pageY}px`;

  container.appendChild(newElement); 
  container.appendChild(img);


  newElement.scrollIntoView({ 
  behavior: 'smooth', 
  block: 'end' 

});

  audio.play();
});
