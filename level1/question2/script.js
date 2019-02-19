
 
     
     function personalcard(userid,id,title,completed){
         let card2=document.createElement("div");
         card2.style.background = "lightgreen";
         card2.style.borderRadius="10%";
         card2.style.padding="10%";
         card2.style.fontSize="20px";
         card2.style.margin="30px";
         card2.style.textAlign="center";
         
         
         
         let para1 = document.createElement("p");
         para1.innerHTML = "User Id: "+userid +"<br>";
         card2.appendChild(para1);
         
         let para2 = document.createElement("p");
         para2.innerHTML = "Id: "+id +"<br>";
         card2.appendChild(para2);
         
         let para3=document.createElement("p");
         para3.innerHTML= "Title: "+title +"<br>"
         card2.appendChild(para3);
         
           let para4=document.createElement("p");
         para4.innerHTML= "Completed: "+completed +"<br>"
         card2.appendChild(para4);
         
         
          
         document.body.appendChild(card2);
         
        
         
     }

     
        
   
     
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((res) => {
        console.log(res[1]);
    
        personalcard(res[1].userId,res[1].id,res[1].title,res[1].completed);
         
    
       for (i=1; i<res.length;i++){
        console.log(i);
           personalcard(res[i].userId,res[i].id,res[i].title,res[i].completed);
    }
    
    })
     
   
 
     
       
