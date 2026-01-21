document.getElementById("storyForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const story = document.getElementById("story").value;

  const body = `name: ${name}
title: ${title}

story:
${story}`;

  const url =
    "https://github.com/Vatsal-Verma/test-github-workflow/issues/new" +
    "?title=" + encodeURIComponent(`Story Submission: ${title}`) +
    "&body=" + encodeURIComponent(body) +
    "&labels=story-submission";

  window.location.href = url;
});
