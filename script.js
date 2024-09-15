// Globally get display div by its d name

let mydisplay = document.getElementById("mydisplay");

// first of all i create function that store the input value in locla storage

let handleSave = () => {
  // in function first i get all inputs with its value by its id name
  let myname = document.getElementById("myname");
  let myemail = document.getElementById("myemail");
  let myage = document.getElementById("myage");
  let mycity = document.getElementById("mycity");
  let myadd = document.getElementById("myadd");

  var obj = {
    myname: myname.value,
    myemail: myemail.value,
    myage: myage.value,
    mycity: mycity.value,
    myadd: myadd.value,
  };
  // console.log(obj);

  //01 sab se pehly ye line dekh rhi ha user name ki key me koi data pehly se store ha k ni ager ha to
  //02 usy data name k variable k equal kerdo or jab b user name ki key dekhi jye to usy parse me convert ker k dikhaye
  //03 or ye code help ker rha ha if ki condiyion check kerny me k pehly data ha k ni

//   let data = JSON.parse(localStorage.getItem("data"));

  //if condition sab se pehly dekh rahi ha k ager pehly se local storage me data store ha to ye false ho jye gi ager data ni ha to iski condition chal jye gi

  //ye condition keh rhi ha ager data ni store to localstorage me item set kerdo jiski key rakhdo "user" or uski value ko string me rakhdo or sme array bna k object rakhdo
//   if (!data) {
    localStorage.setItem("data", JSON.stringify(obj));
//   }

  //ager if wali condition false ho jye gi to else wali condition keh rahi ha data name k var me jo new user ki trf se data arha ha usko purani value k sath push kerdy or usko string me convert ker k set kerdy dy
  // else{
  //     data.push(obj)
  //     localStorage.setItem("data",JSON.stringify(data))
  // }
  handleDisplay();
};
//Create function to display a localstorage data

let handleDisplay = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  mydisplay.innerHTML = "";

  // data.map((obj)=>{
  if (data) {
    console.log("if");

    mydisplay.innerHTML = `<div><h1>${data.myname}</h1><br><h1>${data.myemail}</h1> <h1>${data.myage}</h1> <h1>${data.mycity}</h1> <h1>${data.myadd}</h1></div>`;
  } else {
    console.log("else");

    mydisplay.innerHTML = `<div><h1>Your data display here.</h1></div>`;
  }

  myname.value = myemail.value = myage.value = mycity.value = myadd.value = "";

  // })
};

handleDisplay();
