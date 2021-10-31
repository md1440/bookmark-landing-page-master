// ACCORDION FAQ

const accordionTitles = document.querySelectorAll(".accordion-title");

      accordionTitles.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
          const height = accordionTitle.nextElementSibling.scrollHeight;
          console.log(height);
          accordionTitle.classList.toggle("accordion-active");

          if (accordionTitle.classList.contains("accordion-active")) {
            // accordionTitle.classList.add("pb-5-delay");
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
          } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
            // setTimeout(() => {  accordionTitle.classList.remove("pb-5-delay"); }, 600);
          }
        });
      });

// FEATURES TAB

$(".feature[data-id=0]").addClass("jqBlock");
$(".btn-tab").on("click", function () {
  var value = $(this).attr("data-id");

  $(".feature").removeClass("jqBlock");
  // $(".btn-tab").removeClass("border-b-2 border-bookmark-red");

  $(".feature[data-id =" + value + "]").addClass("jqBlock");
  // $(".btn-tab").addClass("border-b-2 border-bookmark-red");

  });