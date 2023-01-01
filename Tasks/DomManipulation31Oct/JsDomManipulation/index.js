const heading1ButtonFunc = () => {
  let headingColorValue = document.getElementById("inputForMainHeading1").value;
  document.getElementById("mainHeading1").style.color = headingColorValue;
};
const heading2ButtonFunc = () => {
  let headingColorValue = document.getElementsByClassName(
    "inputForMainHeading2"
  )[0].value;
  document.getElementsByClassName("mainHeading2")[0].style.backgroundColor =
    headingColorValue;
};
const heading3ButtonFunc = () => {
  let headingColorValue = document.getElementsByTagName("input")[2].value;
  console.log(document.getElementsByTagName("input"));

  document.getElementsByTagName("h1")[2].style.color = headingColorValue;
};
const heading4ButtonFunc = () => {
  let container4_heading = (document
    .getElementById("container4")
    .getElementsByTagName("h1")[0].innerText = "Main Heading 4");
  let container4_note = document.createElement("p");
  document.getElementById("container4").appendChild(container4_note);
  container4_note.innerText = "Created with appendChild";
};

const container5_MouseOverFunc = (obj) => {
  obj.innerHTML = "Text is change with onmouseover and onmouseout events";
};
const container5_MouseOutFunc = (obj) => {
  obj.innerHTML = "Thank You";
};


  document.getElementById("container6_button").addEventListener("click", () => {
    let container6Note = document.getElementById("container6_note");
    container6Note.innerText = Date();
    container6Note.style.fontSize = "19px";
  });


  document.getElementById("container7_button").addEventListener("click", () => {
    let container7Note = document.getElementById("container7_note");
    container7Note.innerText =
      "Height" +
      " " +
      "is" +
      " " +
      window.innerHeight +
      "px" +
      " And " +
      " " +
      "Width" +
      " " +
      "is" +
      " " +
      window.innerWidth +
      "px";
    container7Note.style.fontSize = "19px";
  });

  document.getElementById("container8_button").addEventListener("click", () => {
    let container8Note = document.getElementById("container8_note");
    container8Note.innerText =
      "Height" +
      " " +
      "is" +
      " " +
      screen.height +
      "px" +
      " And " +
      " " +
      "Width" +
      " " +
      "is" +
      " " +
      screen.width +
      "px";
    container8Note.style.fontSize = "19px";
  });

  document.getElementById("container9_button").addEventListener("click", () => {
    let container9Note = document.getElementById("container9_note");
    container9Note.innerHTML =
      "Pathname" +
      " " +
      "is" +
      " " +
      window.location.pathname +
      "  " +
      "and" +
      " " +
      "Port" +
      " " +
      "is" +
      " " +
      window.location.port;

    container9Note.style.fontSize = "19px";
  });

