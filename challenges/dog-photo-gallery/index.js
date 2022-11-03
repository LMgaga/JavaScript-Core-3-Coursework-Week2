document.getElementById('dog-button').addEventListener('click', () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Write the code to display the greeting text here
    console.log(data)
    let img = "<li>"
    img += "<img src='" + data.message + "' alt=''> "
    img += "</li>"
     document.getElementById('images').innerHTML += img
  }).catch(error => {
      console.log(error)
  });
} )
