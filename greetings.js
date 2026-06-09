function greetings(){
    const hour=new Date().getHours();
    if (hour<=12)
    {
        console.log("Good Morning!");
    }
    else if(hours<16)
    {
        console.log("Good Afternoon");
    }
    else{
        console.log("Good Evening");
    }

}
greetings();