/* JavaScript to control Sidebar opening/closing */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px"; /* Sidebar width when open */
    document.getElementById("main").style.marginLeft = "250px"; /* Push content to the right */
    document.querySelector(".site-header").style.marginLeft = "250px"; /* Move header along with content */
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"; /* Sidebar width when closed */
    document.getElementById("main").style.marginLeft = "0"; /* Reset content margin */
    document.querySelector(".site-header").style.marginLeft = "0"; /* Reset header margin */
}
