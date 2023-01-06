// fetch('http://example.com/movies.json'{
//   method: 'post',
//   headers:{
//     'Content-Type':'apploication/json'
//   },
//   body: JSON.stringify({
//     name: 'user 1'
//   })
// })
//   .then(response => {
//     response.json()})
//   .then(data => console.log(data));
 

  fetch('http://example.com/movies.json',{
    method: 'post',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({
      name:'User1'
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch('error' = console.log('ERROR'));

  fetch('http://example.com/movies.json',{
    method: "post",
    headers:{
      'content-type':'application/json'
  },
    body:JSON.stringify({
      body: 'user1'
    })
  })
  
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(error => console.log('ERROR'))