
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to vote.";
}