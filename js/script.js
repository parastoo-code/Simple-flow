let username="";
let fullname="";
let email="";
let password="";
let flag=false;
let flag2=false;
let flag3=false;
let flag4=false;

const check = document.getElementById("input1")
check.addEventListener("input",function(){
    const y=document.getElementById("eror");
    const z=document.getElementById("eror2");
    if(y){
        y.remove();
    }
    if(z){
        z.remove();
    }
    check.style.border=""; 
    if( check.value.length<=3 || check.value.length>15 ){
       const p=document.createElement("p");
       p.textContent="Username must be between 3 and 15 characters";
       p.style.color="#DC2626";
       p.id="eror";
       check.style.border="1px solid #DC2626";
       const add=document.getElementById("1");
       add.appendChild(p);  
       check.style.outline="none";
       check.style.border="1px solid #DC2626"; 
    }
    const regex= /^[A-Za-z0-9]+$/;
    if(!regex.test(check.value)){
       const p2=document.createElement("p");
       p2.textContent="Username can only contain letters and numbers";
       p2.style.color=" #DC2626";
       p2.id="eror2";
       check.style.border="1px solid #DC2626";
       const add=document.getElementById("1");
       add.appendChild(p2);  
       check.style.outline="none";
       check.style.border="1px solid #DC2626"; 
    }
    if(check.value==""){
    const y=document.getElementById("eror");
    const z=document.getElementById("eror2");    
    if(y){
        y.remove();
    }
    if(z){
        z.remove();
    }
    check.style.border=""; 
    }
    
    if(check.value.length>3 && check.value.length<15 && regex.test(check.value)){
        username=check.value;
        flag=true;  
    }
    else{
        flag=false;
    }

     
})
const namecheck=document.getElementById("input2");
namecheck.addEventListener("input",()=>{
    const k=document.getElementById("eror");
    const l=document.getElementById("eror2");
    if(k){
        k.remove();
    }
    if(l){
        l.remove();
    }
    namecheck.style.border="";
    const regex1=/^[A-Za-z ]+$/;
    const regex2= /^[A-Za-z ]+\s+[A-Za-z ]+$/;
    if(!regex1.test(namecheck.value)){
        const p = document.createElement("p");
        p.textContent="Full name must contain only letters and spaces";
        p.style.color="#DC2626";
        p.id="eror";
        const add=document.getElementById("2");
        add.appendChild(p);
        namecheck.style.outline="none";
        namecheck.style.border=" 1px solid #DC2626";
    }
    if(!regex2.test(namecheck.value)){
        const p2= document.createElement("p");
        p2.textContent="Please enter your full name";
        p2.style.color="#DC2626";
        p2.id="eror2";
        const add=document.getElementById("2");
        add.appendChild(p2);
        namecheck.style.outline="none";
        namecheck.style.border=" 1px solid #DC2626";

    }
    if(namecheck.value==""){
        const k=document.getElementById("eror");
        const l=document.getElementById("eror2");
        if(k){
            k.remove();
        } 
          if(l){
            l.remove();
        }
        namecheck.style.border="";
       }
    if(regex1.test(namecheck.value)&&regex2.test(namecheck.value)){
        flag2=true;
        fullname=namecheck.value;
    }
    else{
        flag2=false;
    }

})
const checkemail=document.getElementById("input3");
checkemail.addEventListener("input",()=>{
    const x=document.getElementById("eror");
    if(x){
        x.remove();
         checkemail.style.border="";
    }
    
    const regex3=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regex3.test(checkemail.value)){
        const p =document.createElement("p");
        p.textContent="Please enter a valid email address";
        p.style.color="#DC2626";
        p.id="eror";
        const add=document.getElementById("3");
        add.appendChild(p);
        checkemail.style.outline="none";
        checkemail.style.border=" 1px solid #DC2626";

    }
    if(checkemail.value==""){
    const x=document.getElementById("eror");
    if(x){
        x.remove();
        checkemail.style.border="";
    }
    }
    if(regex3.test(checkemail.value)){
        flag3=true;
        email=checkemail.value;

    }
    else{
        flag3=false;
    }
})
const checkpass=document.getElementById("input4");
checkpass.addEventListener("input",()=>{
    if(checkpass.value.length<8){
        const li1=document.getElementById("li1");
        const span1=document.getElementById("1s");
        const li3=document.getElementById("li3");
        const span3=document.getElementById("3s");
        li1.style.color="#DC2626";
        span1.style.color="#DC2626";
        span3.style.color="#DC2626";
        
        li3.style.color="#DC2626";
        checkpass.style.outline="none";
        checkpass.style.border=" 1px solid #DC2626";
    }
    else{
        const li3=document.getElementById("li3");
        const span3=document.getElementById("3s");
        li3.style.color="#15803D";
         span3.style.color="#15803D";
    
    }
    const regex4=/^(?=.*\d)(?=.*[\W_]).*$/;
    if(!regex4.test(checkpass.value)){ 
        const li4 =document.getElementById("li4");
        const span4=document.getElementById("4s");
        span4.style.color="#DC2626";
        li4.style.color="#DC2626";
        checkpass.style.outline="none";
        checkpass.style.border=" 1px solid #DC2626";
    }
    else{
        const li4=document.getElementById("li4");
        const span4=document.getElementById("4s");
        span4.style.color="#15803D";
        li4.style.color="#15803D";
       
    }
    const fullnamepart=fullname.split(" ");
    const emailpart=email.split('@');
    if(checkpass.value.includes(fullnamepart[0]) ||checkpass.value.includes(fullnamepart[1]) || checkpass.value.includes(emailpart[0]) || checkpass.value .includes(emailpart[1])){
      const li2=document.getElementById("li2");
      const span2=document.getElementById("2s");
      li2.style.color= "#DC2626";
      span2.style.color="#DC2626";
      checkpass.style.outline="none";
      checkpass.style.border=" 1px solid #DC2626";
    }
    else{
      const li2=document.getElementById("li2");
      const span2=document.getElementById("2s");
      li2.style.color="#15803D";
      span2.style.color="#15803D";


    }
    if(checkpass.value===""){
        const span1=document.getElementById("1s");
        const span2=document.getElementById("2s");
        const span3=document.getElementById("3s");
        const span4=document.getElementById("4s");
        span1.style.color="";
        span2.style.color="";
        span3.style.color="";
        span4.style.color="";
        li1.style.color="";
        li2.style.color="";
        li3.style.color="";
        li4.style.color="";
        checkpass.style.border="";
    }
    
    if(checkpass.value.length>=8 && regex4.test(checkpass.value) && !checkpass.value.includes(fullnamepart[0])&& !checkpass.value.includes(fullnamepart[1]) && !checkpass.value.includes(emailpart[0]) && !checkpass.value .includes(emailpart[1]) ){
        const span1=document.getElementById("1s");
        span1.style.color="#15803D";
        const li1=document.getElementById("li1");
        li1.style.color="#15803D";
        flag4=true;
        password=checkpass.value;
        checkpass.style.outline="none";
        checkpass.style.border=" 1px solid #15803D";
    }
    else{
        flag4=false;
    }

    if(flag && flag2 && flag3 && flag4){
        btn.disabled=false; 
        btn.style.background= "#465FF1";
    }
    else{
        btn.disabled=true;
        btn.style.background= "#465FF1B2";

    }

})
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    if(flag && flag2 && flag3 && flag4){
        let data={
            Username:username,
            Fullname:fullname,
            Email:email,
            Password:"*".repeat(password.length)
        }
        console.log(data);
    }
    const p=document.createElement("p");
    p.textContent="Account Created Successfully!"
    p.style.color="#15803D";
    p.id="lastp";
    const add=document.getElementById("4");
    add.appendChild(p);
    btn.disabled=true;
    btn.style.background= "#465FF1B2";
    document.querySelector("form").reset();
    if(checkpass.value===""){
        const span1=document.getElementById("1s");
        const span2=document.getElementById("2s");
        const span3=document.getElementById("3s");
        const span4=document.getElementById("4s");
        span1.style.color="";
        span2.style.color="";
        span3.style.color="";
        span4.style.color="";
        li1.style.color="";
        li2.style.color="";
        li3.style.color="";
        li4.style.color="";
        checkpass.style.border="";
    }

})







