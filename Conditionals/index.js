//If Else

var status = "approved";

if (status === "approved") {
  console.log("approved");
} else if (status === "pending") {
  //if "approved", then this won't be checked!
  console.log("pending");
} else {
  console.log("denied");
}


console.log(10<5<1);