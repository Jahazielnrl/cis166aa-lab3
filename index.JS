function funct1() {
  any;
  $("#image1").fadeToggle("slow", "linear");
}
function myText() {
  let text = "hello World";
  alert(text);
}

var i = 0;
var images = [];
var time = 3000;
images[0] = "images/honda-civic.jpg";
images[1] = "images/mazda-miata copy.jpg";
images[2] = "images/toyota-supra.jpg";
images[3] = "images/skyline-c110.jpg";

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;

const mySub = {
  subscriptions: [
    {
      first_name: "John",
      last_name: "cook",
      date: 04 / 12 / 23,
      cellphone: 1234567890,
      school_name: "water community college",
    },
    {
      first_name: "bob",
      last_name: "rock",
      date: 04 / 12 / 23,
      cellphone: 1111111111,
      school_name: "water community college",
    },
    {
      first_name: "mark",
      last_name: "smith",
      date: 04 / 12 / 23,
      cellphone: 2222222222,
      school_name: "water community college",
    },
    {
      first_name: "kevin",
      last_name: "jones",
      date: 04 / 12 / 23,
      cellphone: 3333333333,
      school_name: "water community college",
    },
    {
      first_name: "noah",
      last_name: "garcia",
      date: 04 / 12 / 23,
      cellphone: 4444444444,
      school_name: "water community college",
    },
    {
      first_name: "james",
      last_name: "olivera",
      date: 04 / 12 / 23,
      cellphone: 5555555555,
      school_name: "water community college",
    },
    {
      first_name: "jose",
      last_name: "charles",
      date: 04 / 12 / 23,
      cellphone: 6666666666,
      school_name: "water community college",
    },
    {
      first_name: "luis",
      last_name: "smith",
      date: 04 / 12 / 23,
      cellphone: 7777777777,
      school_name: "water community college",
    },
    {
      first_name: "carlos",
      last_name: "king",
      date: 04 / 12 / 23,
      cellphone: 8888888888,
      school_name: "water community college",
    },
    {
      first_name: "sam",
      last_name: "adam",
      date: 04 / 12 / 23,
      cellphone: 9999999999,
      school_name: "water community college",
    },
  ],
};
