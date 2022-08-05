var photos;


photos = ['https://i.postimg.cc/xjvB3p4W/Whats-App-Image-2022-07-28-at-9-32-57-PM.jpg', 'https://i.postimg.cc/9M3NGytm/Whats-App-Image-2022-07-28-at-9-34-51-PM-1-18-24-29.jpg', 'https://i.postimg.cc/Wb4Sq9Lm/Whats-App-Image-2022-07-28-at-9-34-49-PM.jpg', 'https://i.postimg.cc/520G142V/Whats-App-Image-2022-07-28-at-9-34-51-PM-18-24-45.jpg'];
let element_image = document.getElementById('image');
photos.push(photos[0]);
element_image.setAttribute("src", photos.shift());


document.getElementById('button-next').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  photos.push(photos[0]);
  element_image2.setAttribute("src", photos.shift());

});

document.getElementById('button-Previous').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  photos.unshift(photos.slice(-1)[0]);
  element_image3.setAttribute("src", photos.pop());

});