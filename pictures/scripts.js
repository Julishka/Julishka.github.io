let imagesData = [];
    imagesData.push ({
      photo: 'images/img01.jpg',
      title: 'Eka Pada Sirsasana',
      description: 'This asana helps to increase the flexibility of legs. Stretches the hips, hamstrings and glutes. Regular and extended period of practice can be therapeutic for varicose veins.'
    });

    imagesData.push ({
      photo: 'images/_MG_0750s.jpg',
      title: 'Eka Pada Adho Mukha Svanasana',
      description: 'This asana calms the mind, improves balance and confidence. Strengthens the shoulders and arms, opens the chest, hip flexors and hamstrings and stretches the quadriceps.'
    });

    imagesData.push ({
      photo: 'images/_MG_0784s.jpg',
      title: 'Gomukhasana',
      description: 'This asana strengthens spine, abdominal muscles and the hip joint. Stretches the hips, and relieves chronic knee pain.'
    });

    imagesData.push ({
      photo: 'images/_MG_0869s.jpg',
      title: 'Utthita Hasta Padangusthasana',
      description: 'This asana strengthens and stretches the legs and ankles. It deeply stretches the hamstrings, while gently opening the hips, shoulders, and arms. Challenges and improves the sense of balance.'
    });

    imagesData.push ({
      photo: 'images/_MG_0900.jpg',
      title: 'Matsyasana',
      description: 'This asana stretches intercostal muscles, and stimulates the organs of the body. Strengthens the upper back, the back of the neck, and improves posture.'
    });
    
    imagesData.push ({
      photo: 'images/_MG_0931.jpg',
      title: 'Eka Pada Rajakapotasana',
      description: 'This asana opens the hip joint, lengthens the hip flexor and stretches the thighs, gluteals and piriformis muscles. Improves posture, alignment, diminishes lower back pain and stiffness.'
    });

    imagesData.push ({
      photo: 'images/_MG_1031s.jpg',
      title: 'Ardha Urdhva Dhanurasana',
      description: 'This asana stretches the chest and lungs. Strengthens the arms and wrists, legs, buttocks, abdomen and spine. Stimulates the thyroid and pituitary, increases energy and counteracts depression.'
    });

let currentPhoto = 0;

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

function loadPhoto(photoNumber)  {
    currentPhoto = photoNumber;
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    
    $(`#thumb${photoNumber}`).addClass("active"); //toggleClass - adds or removes class
    $(`:not(#thumb${photoNumber})`).removeClass("active"); //since we already told "Class", we don't need to use "." before "active"
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
  $('#container').append(`<div class="box" id="thumb${index}"><div class="boxinbox"><img imagesData-index="${index}"  src="${item.photo}" /></div><div class="asana">${item.title}</div></div>`);
  $(`#thumb0`).addClass("active");
  $('.box img').click((event) => {
    let indexClicked = $(event.target).attr('imagesData-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number

    loadPhoto(numberIndex);

  });

});


