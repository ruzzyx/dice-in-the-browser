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
  const images = [
  'imgs/arrows/01.png',
  'imgs/arrows/02.png',
  'imgs/arrows/03.png',
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
  const arrow = document.createElement('arrow');
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') + '30';
  const randomSound = Math.floor(Math.random() * soundFiles.length);
  const selectedSound = soundFiles[randomSound];  
  const audio = new Audio(selectedSound);

  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  //console.log(randomIndex);
  //console.log(selectedImage);

  newElement.textContent = newSentence;
  newElement.style.backgroundColor = randomColor;
  //newElement.style.backgroundImage.src = '${selectedImage}';
  newElement.classList.add('box'); // Optional: for CSS styling
  
    // 1. Create the image element
    
    img.classList.add('random-image');
    
    // 2. Set dimensions
    img.style.width = Math.floor(Math.random() * 300) + 'px';
    img.style.height = Math.floor(Math.random() * 300) + 'px';

    // 3. Generate a completely unique random image URL
    // Appending Math.random() ensures the browser doesn't load a cached image
    img.src = `https://picsum.photos/${imgWidth}/${imgHeight}?random=${Math.random()}`;
    // img.src = selectedImage;

    // 4. Calculate random positions within the visible window viewport
    // Subtract the image width/height so the image doesn't bleed off-screen
    const maxX = container.clientWidth - imgWidth;
    const maxY = container.clientHeight - imgHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // 5. Apply coordinates
    img.style.left = `${event.pageX}px`;
    img.style.top = `${event.pageY}px`;
    
    arrow.classList.add('random-arrow');
    arrow.src = selectedImage;

    arrow.style.left = '50px';
    arrow.style.top = '100px';

    // 6. Append to the page canvas
    //container.append(img);

  container.appendChild(newElement); 
  container.appendChild(img);
  container.appendChild(arrow);


  newElement.scrollIntoView({ 
  behavior: 'smooth', 
  block: 'end' 




});

  audio.play();
});






// 1. Select the button and the container where new elements will go
//  const button = document.getElementById('add-btn'); --> button option
// 2. Attach a click event listener to the button
//  container.addEventListener('click', () => {
// 3. Create a new element (e.g., a <div> or <li>)
//  const newElement = document.createElement('div');
// 4. Customize the new element (add text, classes, or styles)
//   newElement.textContent = newSentence;
//   newElement.classList.add('box'); // Optional: for CSS styling
// 5. Append the newly created element to the container
//  container.append(newElement); 
//  });

// Example usage:
//console.log(generateDynamicSentence()); 
// Output might be: "A giant panda quickly built a bug in the code on Mars."

