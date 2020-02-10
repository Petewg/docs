var btnDropdown = document.querySelectorAll(".btn-dropdown");

for (var i = 0; i < btnDropdown.length; i++) {
   btnDropdown[i].addEventListener("click", function (e) {
      e.preventDefault();
      var dropdown = this.nextElementSibling;
      dropdown.classList.toggle("visible-flex");
   });
}

function search() {
   var input, filter, sidebar, link, i;
   input = document.getElementById("search");
   filter = input.value.toUpperCase();
   sidebar = document.getElementById("sidebar");
   link = sidebar.getElementsByClassName("sidebar-link");

   for (i = 0; i < link.length; i++) {
      if (link[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
         link[i].style.display = "";
      } else {
         link[i].style.display = "none";
      }
   }
}

function openFunction(evt, nameFunction) {
   var i, content, links;
   content = document.getElementsByClassName("content");
   for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
   }
   links = document.getElementsByClassName("links");
   for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
   }
   document.getElementById(nameFunction).style.display = "block";
   evt.currentTarget.className += "active";
}

function controlSidebar() {
   var btnOpen = document.querySelector('#btnOpen');
   var btnClose = document.querySelector('#btnClose');
   var sidebar = document.querySelector('#sidebar');

   btnOpen.addEventListener('click', function () {
      sidebar.style.left = '0';
   }, false);

   btnClose.addEventListener('click', function () {
      sidebar.style.left = '-70vw';
   }, false);
}
controlSidebar();