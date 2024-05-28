const element = document.getElementById("mybtn");
const elements = document.getElementById("demo");
element.addEventListener("click", function() {
    elements.style.backgroundColor = "#340570";
  document.getElementById("demo").innerHTML = " Git is a specific open-source version control system created by Linus Torvalds in 2005.Specifically, Git is a distributed version control system, which means that the entire codebase and history is available on every developer’s computer, which allows for easy branching and merging.According to a Stack Overflow developer survey, over 87% of developers use Git.We’ve used GitHub from the inception of Datadog. It’s a high-quality product, and a lot of our engineers contribute to open source so there’s a sense of community there. GitHub is ingrained in the DNA of our engineering, it’s become part of the culture.” Push what's possible with GitHub Copilot, the world's most trusted and widely adopted AI developer tool.";
});