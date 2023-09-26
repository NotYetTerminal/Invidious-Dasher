if (document.getElementsByTagName("title")[0].innerHTML.includes("Invidious"))
{
  if (window.location.href.endsWith("dash")) {
  }
  else
  {
    window.location.href = window.location.href + "&quality=dash";
    // console.log(window.location.href);
  }
}
// console.log(document.getElementsByTagName("title")[0].innerHTML.includes("Invidious"));