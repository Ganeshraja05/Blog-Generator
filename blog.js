document.getElementById("generate-article").addEventListener("click", function () {
  const title = document.getElementById("article-title").value;
  const intro = document.getElementById("article-intro").value;
  const layout = document.getElementById("layout").value;
  const bgColor = document.getElementById("bg-color").value;
  const textColor = document.getElementById("text-color").value;
  const fontFamily = document.getElementById("font-family").value;
  const textStyle = document.querySelector('input[name="text-style"]:checked')
    ? document.querySelector('input[name="text-style"]:checked').value
    : "";
  const listItems = document.getElementById("article-list").value.split(",");
  const imageUrls = document.getElementById("article-images").value.split(",");
  const references = document.getElementById("article-references").value;
  const footerText = document.getElementById("footer-text").value;

  let articleHTML =
    '<article style="background-color: ' +
    bgColor +
    '; color: ' +
    textColor +
    '; font-family: ' +
    fontFamily +
    ';">' +
    '<header>' +
    '<h1 style="font-weight: ' +
    (textStyle === "bold" ? "bold" : "normal") +
    "; font-style: " +
    (textStyle === "italic" ? "italic" : "normal") +
    ';">' +
    title +
    "</h1>" +
    "<p>" +
    intro +
    "</p>" +
    "</header>";

  if (layout === "one-column") {
    articleHTML += '<div class="one-column">';
  } else if (layout === "two-column") {
    articleHTML += '<div class="two-column">';
  } else if (layout === "grid") {
    articleHTML += '<div class="grid-layout">';
  }

  if (listItems.length > 0 && listItems[0] !== "") {
    articleHTML += "<ul>";
    listItems.forEach(function (item) {
      articleHTML += "<li>" + item.trim() + "</li>";
    });
    articleHTML += "</ul>";
  }

  if (imageUrls.length > 0 && imageUrls[0] !== "") {
    articleHTML += '<div class="images">';
    imageUrls.forEach(function (url) {
      articleHTML +=
        '<img src="' + url.trim() + '" alt="Article Image" class="article-image">';
    });
    articleHTML += "</div>";
  }

  articleHTML += "</div>";

  articleHTML +=
    '<footer>' +
    "<h3>References:</h3>" +
    "<pre>";

  const referencesArray = references.split("\n");
  referencesArray.forEach(function (ref) {
    if (ref.trim()) {
      articleHTML += "<span>" + ref.trim() + "</span>";
    }
  });

  articleHTML +=
    "</pre>" +
    "<p>" +
    footerText +
    "</p>" +
    "</footer>" +
    "</article>";

  document.getElementById("generated-article").innerHTML = articleHTML;
});
