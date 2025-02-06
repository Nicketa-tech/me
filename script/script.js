/* JavaScript to control Sidebar opening/closing */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px"; /* Sidebar width when open */
    document.getElementById("main").style.marginLeft = "250px"; /* Push content to the right */
    document.querySelector(".site-header").style.marginLeft = "250px"; /* Move header along with content */
    //document.querySelector(".profile-picture").style.marginLeft = "250px"; /* Move profile picture along with content */
	document.querySelector(".profile-picture").style.transform = "translateX(250px)"; /* Move profile picture along with content */
    document.querySelector(".openbtn").style.left = "270px"; /* Move button out of the way */
	//document.getElementById("mediaL").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"; /* Sidebar width when closed */
    document.getElementById("main").style.marginLeft = "0"; /* Reset content margin */
    document.querySelector(".site-header").style.marginLeft = "0"; /* Reset header margin */
    //document.querySelector(".profile-picture").style.marginLeft = "0"; /* Reset profile picture margin */
	document.querySelector(".profile-picture").style.transform = "translateX(0)"; /* Reset profile picture position */
    document.querySelector(".openbtn").style.left = "20px"; /* Reset button position */
	//document.getElementById("mediaL").style.width = "0";
}
