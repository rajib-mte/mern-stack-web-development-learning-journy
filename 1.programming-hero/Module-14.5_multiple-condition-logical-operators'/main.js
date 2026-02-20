const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = false;

if (salary > 2000 && height > 60 && isBCS == true) {
  console.log("Su patro");
} else {
  console.log("onno patro khuji");
}

if (salary > 25000 || height > 72 || isBCS == true) {
  console.log("Eso baba kobul");
} else {
  console.log("toi bag");
}

// ---------- Complex condition ---------------
if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("tomar 14 gosti raji");
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("tomar 14 gosti raji");
}
