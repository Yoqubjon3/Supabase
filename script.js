window.addEventListener("DOMContentLoaded", () => {
  //
  const linkParent = document.querySelector(".link");
  const links = document.querySelectorAll(".links");
  const content = document.querySelectorAll(".link__img");
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    links.forEach((item) => {
      item.classList.remove("active");
    });
  }
  function showTabContent(idx = 0) {
    content[idx].style.display = "block";
    links[idx].classList.add("active");
  }
  hideTabContent();
  showTabContent();
  linkParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("links")) {
      links.forEach((item, index) => {
        if (target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
  ///
const ApiParent = document.querySelector(".api__link");
  const Apilinks = document.querySelectorAll(".api__links");
  const Apicontent = document.querySelectorAll(".api__tab");
  function apihideTabContent() {
    Apicontent.forEach((item) => {
      item.style.display = "none";
    });
    Apilinks.forEach((item) => {
      item.classList.remove("api_active");
    });
  }
  function apishowTabContent(idx = 0) {
    Apicontent[idx].style.display = "block";
    Apilinks[idx].classList.add("api_active");
  }
  apihideTabContent();
  apishowTabContent();
  ApiParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("api__links")) {
        Apilinks.forEach((item, index) => {
        if (target == item) {
          apihideTabContent();
          apishowTabContent(index);
        }
      });
    }
  });
const crudParent = document.querySelector(".crud_link");
  const crudlinks = document.querySelectorAll(".crud__links");
  const crudcontent = document.querySelectorAll(".crud__bucket");
  function crudhideTabContent() {
    crudcontent.forEach((item) => {
      item.style.display = "none";
    });
    crudlinks.forEach((item) => {
      item.classList.remove("crud_active");
    });
  }
  function crudshowTabContent(idx = 0) {
    crudcontent[idx].style.display = "block";
    crudlinks[idx].classList.add("crud_active");
  }
  crudhideTabContent();
  crudshowTabContent();
  crudParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("crud__links")) {
      crudlinks.forEach((item, index) => {
        if (target == item) {
          crudhideTabContent();
          crudshowTabContent(index);
        }
      });
    }
  });
}); //DONCONTENT END
