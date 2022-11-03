fetch("https://xkcd.vercel.app/?comic=latest")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Write the code to display the greeting text here
    console.log(data)
     document.getElementById('programmer').setAttribute('src', data.img)
  }).catch(error => {
      console.log(error)
  });