document.addEventListener("DOMContentLoaded", function () {
  // SIDEBAR TOGGLE
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var menuButton = document.getElementById("menuButton");

  // Function to open the sidebar
  function openSidebar() {
      if (!sidebarOpen) {
          sidebar.classList.add("sidebar-responsive");
          sidebarOpen = true;
      }
  }

  // Function to close the sidebar
  function closeSidebar() {
      if (sidebarOpen) {
          sidebar.classList.remove("sidebar-responsive");
          sidebarOpen = false;
      }
  }

  // Toggle the sidebar when the menu button is clicked
  menuButton.addEventListener("click", function () {
      if (sidebarOpen) {
          closeSidebar();
      } else {
          openSidebar();
      }
  });

  var logoutLink = document.querySelector(".sidebar-list-item a[href='logout']");
    logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating to "#" (or update the href)
        window.location.href = "login.html";
        alert("Logged out!"); // Simulated logout action
    });

});
