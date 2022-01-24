if (typeof running === "undefined") { 
  running = false
}
if (!running) {
  button = document.getElementsByClassName(
    "VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c  jh0Tpd Gt6sbf QQrMi NKaD6"
  );

  timeInSeconds = 100000000;
  running = true
  ampm = 0;

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyC" && e.altKey == true){
      run()
    }
  })

  function run() {
    textTime = window.prompt(
      "Enter the time to exit the meeting in the format \nHH:MM"
    );

    textTime = textTime.split(":");

    if (/pm/g.test(textTime[1])) {
      textTime[1].replace("pm", "");
      if (parseInt(textTime) < 12) {
        ampm = 12;
      }
    }

    if (/am/g.test(textTime[1])) {
      textTime[1].replace("am", "");
    }

    hours = parseInt(textTime[0]) + ampm - new Date().getHours();
    minutes = parseInt(textTime[1]) - new Date().getMinutes();

    minutes = hours * 60 + minutes;

    timeInSeconds = minutes * 60;

    console.log(timeInSeconds);

    if (timeInSeconds != NaN && timeInSeconds > 0) {
      timeout = setTimeout(close, timeInSeconds * 1000);

      function close() {
        button[0].click()
        div.remove();
        // console.log("working");
      }

      //////////////////////////////
      //////////////////////////////

      //UI

      //////////////////////////////
      //////////////////////////////

      var mousePosition;
      var offset = [0, 0];
      var div;
      var isDown = false;
      var prepos = {};

      div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = "0px";
      div.style.top = "0px";
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.background = "#3c4043";
      div.style.color = "white";
      div.style.zIndex = 1000;

  
      document.body.appendChild(div);

      div.addEventListener(
        "mousedown",
        function (e) {
          isDown = true;
          offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
          prepos = {
            x: e.clientX,
            y: e.clientY,
          };
        },
        true
      );

      document.addEventListener(
        "mouseup",
        function (e) {
          isDown = false;
          if (prepos.x == e.clientX && prepos.y == e.clientY) {
            //

            clearTimeout(timeout);
            div.remove();
            running = false
            //
          }
        },
        true
      );

      document.addEventListener(
        "mousemove",
        function (event) {
          event.preventDefault();
          if (isDown) {
            mousePosition = {
              x: event.clientX,
              y: event.clientY,
            };

            a = mousePosition.x + offset[0];
            b = mousePosition.y + offset[1];
            if (a < 0) {
              a = 0;
            }
            if (b < 0) {
              b = 0;
            }
            if (a + 50 > window.innerWidth) {
              a = window.innerWidth - 50;
            }
            if (b + 50 > window.innerHeight) {
              b = window.innerHeight - 50;
            }

            div.style.left = a + "px";
            div.style.top = b + "px";
          }
        },
        true
      );
    }
  }
}