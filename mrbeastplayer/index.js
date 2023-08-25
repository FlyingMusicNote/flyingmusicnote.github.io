fetch('info.json')
  .then(response => response.json()).then(videoList => {
    // Yes
    const videoNum = Math.floor(Math.random() * videoList.length - 1);
    const video = videoList[videoNum];

    const iframe = document.getElementById("MrBeastVideo");
    iframe.src = `https://www.youtube.com/embed/${video["id"]}`;
    iframe.title = `${video["title"]}`;

    const videoNumber = document.getElementById("videoNumber");
    videoNumber.textContent = `Video #${(videoList.length + 1) - (videoNum + 1)}`;

})

function refreshPage(){
  window.location.reload();
} 