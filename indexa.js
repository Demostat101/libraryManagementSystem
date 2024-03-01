let email1= document.getElementById('email1');
let pass1 = document.getElementById("pass1");
let fname = document.getElementById('fname');
let bt1 = document.getElementById('bt1');
let btt = document.getElementById('btt');
let search = document.getElementById('search');
let uname = document.getElementById('uname');
let bk = document.querySelector(".bk");
let list = document.getElementById('list');
let link = document.getElementsByClassName("link");
let read = document.querySelector(".read");
let parag2 = document.getElementById("parag2")





let dataBase= [];

let signUp=(e)=>{
 
     e.preventDefault();
     let usersDetails = {
        id : Date.now(),
        mail : email1.value,
        password : pass1.value,
        firstName : fname.value
        };

        
        
            if(email1.value && pass1.value ){
              dataBase.push(usersDetails)
              console.log(dataBase);
                  if(dataBase.length > 0){
                    dataBase.forEach((name)=>{
                      console.log(name.mail);
                      localStorage.setItem("user",JSON.stringify(dataBase));
                      

                      alert("You have successfully signed up on our platform")
                      return
                      
                    })
                  }

                     

            } else{
                alert("Enter valid entry,kindly fillup all boxes")
              }
                
               
       

        
       
   
   

     document.querySelector('form').reset();
     
}

document.addEventListener("DOMContentLoaded",()=>{
   
  bt1.addEventListener('click',signUp);
 
});
     

          



//console.log(link);

  // for(let i =0; i <= link.length ; i++) {
  //   link[i].addEventListener('click',()=>{
  //     window.open("./signUp.html")
  //    })
  // } 





// .................................Book Library...............................................//

const books = [

     {
         "title": "Harry Potter and the Philosopher's Stone",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82563W?edition=ia%3Aharrypottersorce0000rowl_t5a1",
         "image": "https://covers.openlibrary.org/b/olid/OL32784488M-M.jpg"
       },
       {
         "title": "Harry Potter and the Deathly Hallows",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82586W?edition=ia%3Aharrypotterdeath0000rowl_n2u6",
         "image": "https://covers.openlibrary.org/b/olid/OL10506200M-M.jpg"
       },
       {
         "title": "Harry Potter and the Goblet of Fire",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82577W?edition=ia%3Aharrypottergoble0000rowl_z6r7",
         "image": "https://covers.openlibrary.org/b/olid/OL37058078M-M.jpg"
       },
       {
         "title": "Harry Potter and the Chamber of Secrets",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82537W?edition=ia%3Aharrypotterchamb0000rowl_e1h5",
         "image": "https://covers.openlibrary.org/b/olid/OL32784120M-M.jpg"
       },
       {
         "title": "Harry Potter and the Half-Blood Prince",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82565W?edition=ia%3Aharrypottereoeni0000rowl",
         "image": "https://covers.openlibrary.org/b/olid/OL9158073M-M.jpg"
       },
       {
         "title": "Harry Potter and the Prisoner of Azkaban",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82536W?edition=ia%3Aharrypotterpriso0000rowl_g2m5",
         "image": "https://covers.openlibrary.org/b/olid/OL24549468M-M.jpg"
       },
       {
         "title": "Harry Potter and the Order of the Phoenix",
         "author": "J. K. Rowling",
         "url": "https://openlibrary.org//works/OL82548W?edition=ia%3Aharispoterisirfe0000rowl",
         "image": "https://covers.openlibrary.org/b/olid/OL37786194M-M.jpg"
       },
   
       {
         "title": "Harry Potter",
         "author": "Insight Editions",
         "url": "https://openlibrary.org//works/OL25435677W",
         "image": "https://covers.openlibrary.org/b/olid/OL34105008M-M.jpg"
       },
   
       {
         "title": "Harry Potter",
         "author": "Insight Editions",
         "url": "https://openlibrary.org//works/OL25420118W",
         "image": "https://covers.openlibrary.org/b/olid/OL34079643M-M.jpg"
       },
       {
         "title": "Harry Potter",
         "author": "Insight Editions",
         "url": "https://openlibrary.org//works/OL25476157W",
         "image": "https://covers.openlibrary.org/b/olid/OL34166524M-M.jpg"
       },
   
       {
         "title": "Harry Potter",
         "author": "MUTI",
         "url": "https://openlibrary.org//works/OL25433235W",
         "image": "https://covers.openlibrary.org/b/olid/OL34100160M-M.jpg"
       },
   
       {
         "title": "Harry Potter",
         "author": "Insight Editions Staff",
         "url": "https://openlibrary.org//works/OL25201820W",
         "image": "https://covers.openlibrary.org/b/olid/OL33612025M-M.jpg"
       }
   
   ];
   
   let a = async ()=>{
   
    try {
 
      let data = "";
      
    
  
        books.forEach(book => {
        
         let card =
       `
  
        <div class="books">
         
        <div class='group'>
         <p class="title">${book.title}</p>
          <p class="author">Author: <span id="auth">${book.author}</span></p>
         </div>

         <img src="${book.image}" alt="" class="imgg">
        
         </div>
        
    `
         data += card;
         console.log({data});
    
         document.querySelector(".bk").innerHTML = data;
         // return result;
     
     
     
     });

     } catch (error) {
     console.error(error);
     }
   
         
   }
   
   
   
   a()


    
    


    //.................search Option.....................................................//
   
   
    search.addEventListener('keyup', (e)=>{
      const searchString = e.target.value.toLowerCase();
      const filteredChar = books.filter((char)=>{
        return char.title.toLowerCase().includes(searchString) || char.author.toLowerCase().includes(searchString);
        
     
     
      })
      
      //console.log(filteredChar);
      
      if (filteredChar.length > 0) displayChar(filteredChar);
      else {
        bk.innerHTML = `<div class="books" style="margin-left: 1000px;">
            
        <div class='group' >
          <p>No Book Found</p>
        </div>
        
        </div>`
       
        document.body.style.backgroundColor = 'aqua';
      }
      //console.log(filteredChar);
    });

    const displayChar = (chars)=>{

      let html = chars.map((char)=>{
        return `
          <div class="books">
            
          <div class='group'>
            <p>${char.title}</p>
            <p>Author:${char.author}</p>
            <img src = '${char.image}'>
          </div>
          
          </div>
        `

        
       }).join('');
      
       bk.innerHTML = html;
      list.innerText = `FILTERED RESULT(${chars.length})`

      document.body.style.backgroundColor = 'aqua';
    }