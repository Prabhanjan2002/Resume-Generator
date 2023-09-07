function addnewwefieldwe() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weob = document.getElementById("we");
  let weaddbuttonob = document.getElementById("weaddbutton");

  weob.insertBefore(newNode, weaddbuttonob);
}

function addnewfieldeq() {
  let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.classList.add("eqfield");
  newnode.classList.add("mt-2");
  newnode.setAttribute("rows", 3);
  newnode.setAttribute("placeholder", "Enter here");

  let eqob = document.getElementById("eq");
  let eqaddbuttonob = document.getElementById("eqaddbutton");

  eqob.insertBefore(newnode, eqaddbuttonob);
}

function generatecv() {
  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = namefield;

  document.getElementById("nameT2").innerHTML = namefield;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactfield").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressfield").value;
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbfield").value;
  document.getElementById("instaT").innerHTML =
    document.getElementById("instafield").value;
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedfield").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectivefield").value;

  //   work experience loop
  let wes = document.getElementsByClassName("wefield");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //academic qualification
  let eqs = document.getElementsByClassName("eqfield");
  let str1 = "";
  for (let e of eqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("eqT").innerHTML = str1;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-templet").style.display = "block";
}

function printcv() {
  window.print();
}
