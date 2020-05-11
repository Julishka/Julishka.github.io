let data_0 = {
    photo: 'images/_MG_0651se.jpg',
    title: 'Eka Pada Sirsasana - एकपाद शीर्षासन',
    description: 'This asana helps to increase the flexibility of legs. Stretches the hips, hamstrings and glutes. Regular and extended period of practice can be therapeutic for varicose veins.'
  };

let data_1 = {
    photo: 'images/_MG_0750s.jpg',
    title: 'Eka Pada Adho Mukha Svanasana',
    description: 'This asana calms the mind, improves balance and confidence. Strengthens the shoulders and arms, opens the chest, hip flexors and hamstrings and stretches the quadriceps.'
  };

let data_2 = {
    photo: 'images/_MG_0784s.jpg',
    title: 'Gomukhasana',
    description: 'This asana strengthens spine, abdominal muscles and the hip joint. Stretches the hips, and relieves chronic knee pain.'
  };

let data_3 = {
    photo: 'images/_MG_0869s.jpg',
    title: 'Utthita Hasta Padangusthasana',
    description: 'Here are some awesome benefits of the asana dispayed. And if I write more, it will appear in 2 rows, so it will look nice.'
  };

let data_4 = {
    photo: 'images/_MG_0900.jpg',
    title: 'Matsyasana',
    description: 'Here are some awesome benefits of the asana dispayed. And if I write more, it will appear in 2 rows, so it will look nice.'
  };

let data_5 = {
    photo: 'images/_MG_0931.jpg',
    title: 'Eka Pada Rajakapotasana',
    description: 'Here are some awesome benefits of the asana dispayed. And if I write more, it will appear in 2 rows, so it will look nice.'
  };

let data_6 = {
    photo: 'images/_MG_1031s.jpg',
    title: 'Ardha Urdhva Dhanurasana',
    description: 'Here are some awesome benefits of the asana dispayed. And if I write more, it will appear in 2 rows, so it will look nice.'
  };

let currentPhoto = 0;
let imagesData = [data_0, data_1, data_2, data_3, data_4, data_5, data_6];

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

function loadPhoto(photoNumber)  {
    currentPhoto = photoNumber;
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
  }
  
  loadPhoto(currentPhoto);

  $('#right-arrow').click(() => {
    if(currentPhoto < 6) { 
        currentPhoto++; 
      }
    loadPhoto(currentPhoto);
   
  })
  
  $('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;  
      }
    loadPhoto(currentPhoto);
    
  }) 


  imagesData.forEach((item, index) => {
  $('#container').append(`<div class="box" id="thumb${index}"><div class="boxinbox"><img data-index="${index}"  src="${item.photo}" /></div><div class="asana">${item.title}</div></div>`);
  $('.box img').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number

    if (index === numberIndex){
      $(`#thumb${index}`).addClass("active");
      $(`:not(#thumb${index})`).removeClass("active");
    }

    loadPhoto(numberIndex);

   
  });

});


