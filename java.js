const timeBlocks = $(".container");

const timeDisplay = moment().format('MMMM Do YYYY');

const timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

const saveButton = document.querySelectorAll("button");

const timeList = ["9am", "10am", "11am", "NOON", "1pm", "2pm", "3pm", "4pm", "5pm"];

const idTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let i = 0; i < timeList.length; i++) {
  const newRow = $("<div class='row time-block'>").attr("id", idTime[i]);
  const newDiv2 = $("<div class='hour col-1'>")
  const newDiv = $("<textarea class='col-10'>");
  const newButt = $("<button type='button' class='saveBtn col-1 far fa-save'>");

  timeBlocks.append(newRow);

  newDiv2.text(timeList[i]);
  newRow.append(newDiv2);

  newDiv.text();
  newRow.append(newDiv);

  newButt.text();
  newRow.append(newButt);
}

localStorageFunction();

function localStorageFunction() {
  $("textarea")[0].value = localStorage.getItem("textarea1");
  $("textarea")[1].value = localStorage.getItem("textarea2");
  $("textarea")[2].value = localStorage.getItem("textarea3");
  $("textarea")[3].value = localStorage.getItem("textarea4");
  $("textarea")[4].value = localStorage.getItem("textarea5");
  $("textarea")[5].value = localStorage.getItem("textarea6");
  $("textarea")[6].value = localStorage.getItem("textarea7");
  $("textarea")[7].value = localStorage.getItem("textarea8");
  $("textarea")[8].value = localStorage.getItem("textarea9");
}

$("button").on("click", function (event) {
  event.preventDefault();
  const textArea1 = $("textarea")[0].value;
  const textArea2 = $("textarea")[1].value;
  const textArea3 = $("textarea")[2].value;
  const textArea4 = $("textarea")[3].value;
  const textArea5 = $("textarea")[4].value;
  const textArea6 = $("textarea")[5].value;
  const textArea7 = $("textarea")[6].value;
  const textArea8 = $("textarea")[7].value;
  const textArea9 = $("textarea")[8].value;
  localStorage.setItem("textarea1", textArea1);
  localStorage.setItem("textarea2", textArea2);
  localStorage.setItem("textarea3", textArea3);
  localStorage.setItem("textarea4", textArea4);
  localStorage.setItem("textarea5", textArea5);
  localStorage.setItem("textarea6", textArea6);
  localStorage.setItem("textarea7", textArea7);
  localStorage.setItem("textarea8", textArea8);
  localStorage.setItem("textarea9", textArea9);
});

function hourUpdater() {
  const currentHour = moment().hours();
  $(".time-block").each(function () {
    const blockHour = parseInt($(this).attr("id").split(" ")[0]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();

var checkTime = setInterval(hourUpdater, 15000);