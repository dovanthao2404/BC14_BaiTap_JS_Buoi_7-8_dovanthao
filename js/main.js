// get document.getelementbyid
function getMyEle(id) {
  return document.getElementById(id);
}

var array = []
var floatArray = []
var notifications = [
  "Vui lòng nhập phần tử của mảng!",
  "Vui lòng nhập số",
  "Vui lòng nhập số nguyên!",
  "Vui lòng chọn chức năng!",
  "Vui lòng nhập vị trí đầu tiên cần thay đổi",
  "Vui lòng nhập vị trí thứ hai cần thay đổi",
  "Vi trí có giá trị từ 0 - ",
  "Mảng hiện tại chưa đủ phần tử để thay đổi"
]

// Thêm Phần Tử Vào Mảng
getMyEle("btnAddElement").addEventListener("click", handlerAddElementToArray)

// Xóa mảng
getMyEle("removeArray").addEventListener("click", function () {
  handlerRemoveArray();
})

// Phần Chọn Chức Năng
getMyEle("btnConfirm").addEventListener("click", function () {
  checkTypeSelect();
})

var notificationFeature = getMyEle("notificationFeature");
var resultFeature = getMyEle("resultFeature");
var formReplace = getMyEle("formReplace");
var formFloatArray = getMyEle("formFloatArray");


function checkTypeSelect() {
  var valueCheck = "Chọn";
  var valueSelect = getMyEle("selectFeature").selectedIndex;
  var result = checkEntry("selectFeature", "notifiSelect", 3, valueCheck);
  notificationFeature.innerHTML = '';
  resultFeature.innerHTML = '';
  if (result) {
    handlerValueSelect(valueSelect);
  }
}

function handlerValueSelect(value) {
  if (value !== 9) {
    floatArray = []
  }
  if (value === 1) {
    notificationFeature.innerHTML = '';
    formReplace.innerHTML = '';
    formFloatArray.innerHTML = ''
    var total = totalPositiveNaumbersInArray(array);

    if (total !== 0) {
      resultFeature.innerHTML = `Tổng các số dương trong mảng là: ${total}`
    } else {
      resultFeature.innerHTML = `Không có số dương nào trong mảng.`
    }

  } else if (value === 2) {
    formReplace.innerHTML = '';
    notificationFeature.innerHTML = '';
    formFloatArray.innerHTML = ''
    var count = countPositiveNaumberInArray(array);

    if (count !== 0) {
      resultFeature.innerHTML = `Có ${count} số dương trong mảng.`
    } else {
      resultFeature.innerHTML = `Không có số dương nào trong mảng.`
    }
  } else if (value === 3) {

    formReplace.innerHTML = '';
    notificationFeature.innerHTML = '';
    formFloatArray.innerHTML = ''
    var minNumber = findMinNumberInArray(array);
    resultFeature.innerHTML = `Số nhỏ nhất trong mảng là: ${minNumber}.`

  } else if (value === 4) {

    formReplace.innerHTML = '';
    formFloatArray.innerHTML = ''
    notificationFeature.innerHTML = '';
    var minPositiveNaumber = findMinPositiveNaumberInArray(array);
    if (minPositiveNaumber !== -1) {

      resultFeature.innerHTML = `Số dương nhỏ nhất trong mảng là: ${minPositiveNaumber}.`

    } else {
      resultFeature.innerHTML = `Không có số dương nào trong mảng.`
    }
  } else if (value === 5) {

    formReplace.innerHTML = '';
    formFloatArray.innerHTML = ''
    notificationFeature.innerHTML = '';
    var indexLastEvenNumber = findLastEvenNumberInArray(array);
    if (indexLastEvenNumber !== -1) {

      var indexLastEvenNumber = findLastEvenNumberInArray(array);
      resultFeature.innerHTML = `Số chẵn cuối cùng trong mảng là: ${indexLastEvenNumber}`
    } else {

      resultFeature.innerHTML = `Không có số chẵn nào trong mảng.`
    }
  } else if (value === 6) {
    formReplace.innerHTML = '';
    formFloatArray.innerHTML = ''
    handlerReplaceTwoElement(array);
  } else if (value === 7) {
    formReplace.innerHTML = '';
    formFloatArray.innerHTML = ''
    handlerSortUp(array);
    showCurrentArray(array, "arrayCurrent");
  } else if (value === 8) {

    formReplace.innerHTML = '';
    notificationFeature.innerHTML = '';
    formFloatArray.innerHTML = ''
    var firstPrimeNumber = findFirstPrimeNumber(array);
    if (firstPrimeNumber) {
      resultFeature.innerHTML = `Số nguyên tố đầu tiên trong mảng là ${firstPrimeNumber}`
    } else {
      resultFeature.innerHTML = `Không có số nguyên tố trong mảng.`
    }
  } else if (value === 9) {
    formReplace.innerHTML = '';
    notificationFeature.innerHTML = '';
    showFormFloatArray();
    handlerFloatArray();
  } else {

    formReplace.innerHTML = '';
    notificationFeature.innerHTML = '';
    formFloatArray.innerHTML = ''
    handlerCompareNegativeAndPositive(array);

  }
}

// Xử lý các nghiệp vụ liên quan đến mảng số thực
function handlerFloatArray() {
  getMyEle("btnAddFloatElement").addEventListener("click", function () {
    var result = checkValidFloatArray();
    if (result) {
      var ele = +getMyEle("elementOfFloatArray").value;
      addElementToArray(floatArray, ele);
      getMyEle('elementOfFloatArray').value = '';
      showCurrentArray(floatArray, "floatArrayCurrent")
      handlerShowIntegerNumberInFloatArray(floatArray)
    } else {

    }
  })
  getMyEle("removeFloatArray").addEventListener("click", function () {
    var floatArrayCurrent = getMyEle("floatArrayCurrent");
    var resultCountInteger = getMyEle("resultCountInteger");
    floatArray = [];
    floatArrayCurrent.innerHTML = '';
    resultCountInteger.innerHTML = '';
  })
}

// Xử lý hiển thị số nguyên trong mang số thực
function handlerShowIntegerNumberInFloatArray(a) {
  var count = countIntegerNumberInFLoatArray(a);
  var resultCountInteger = getMyEle("resultCountInteger");
  if (count !== 0) {
    resultCountInteger.innerHTML = `Có ${count} số nguyên trong mảng số thực`
  } else {
    resultCountInteger.innerHTML = `Không có số nguyên trong mảng.`
  }
}

// Xử lý hiện thị so sánh giữa số âm và số dương của mảng
function handlerCompareNegativeAndPositive(a) {
  var countNegative = 0;
  var countPositive = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      countPositive++;
    } else if (a[i] < 0) {
      countNegative++;
    }
  }
  showCompare(a, countNegative, countPositive);
}

function showCompare(a, countNegative, countPositive) {
  var resultCompare = resultFeature;
  resultCompare.innerHTML = '';
  if (countNegative === 0 && countPositive === 0 && a.length > 0) {
    resultCompare.innerHTML = "Trong mảng toàn số 0";
  } else if (countNegative > countPositive) {
    resultCompare.innerHTML = "Số âm nhiều hơn số dương";
  } else if (countNegative < countPositive) {
    resultCompare.innerHTML = "Số dương nhiều hơn số âm";
  } else {
    resultCompare.innerHTML = "Số âm bằng số dương";
  }
}



// đếm số nguyên trong mảng số thực()
function countIntegerNumberInFLoatArray(a) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 1 === 0) {
      count++;
    }
  }
  return count;
}

// Kiểm tra hợp lệ mảng số thực
function checkValidFloatArray() {
  var result = checkEntry("elementOfFloatArray", "notificationFloatElement", 0) &&
    checkIsNumber("elementOfFloatArray", "notificationFloatElement", 1);
  return result;
}


// Hiển thị form nhập mảng số thực
function showFormFloatArray() {
  formFloatArray.innerHTML = `<div class="form-group">
  <label for="elementOfFloatArray">Nhập phần tử của mảng số thực</label>
  <input id="elementOfFloatArray" type="text" class="form-control" placeholder="Phần tử của mảng">
  <span id="notificationFloatElement" class="text-danger"></span>
</div>

<button id="btnAddFloatElement" class="btn btn-primary">Thêm phần tử</button>
<button id="removeFloatArray" class="btn btn-dark">Xóa mảng</button>

<div class="array-current">
  <h3 id="floatArrayCurrent" class="my-3"></h3>
  <h3 id="resultCountInteger"></h3>
</div>`;
}

// Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrimeNumber(a) {
  var prime = a.find(function (value, index) {
    return isPrime(value);
  })
  return prime;
}

// Kiểm tra có phải là số nguyên tố không
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Xử lý sắp xếp tăng dần
function handlerSortUp(a) {
  sortUp(a);
}

// Sắp xếp tăng dần
function sortUp(a) {
  a.sort(function (a, b) {
    return a - b
  })
}

// Xử lý thay đổi 2 phần tử bằng vị trí
function handlerReplaceTwoElement(a) {
  if (a.length >= 2) {
    showFormReplace();
    getMyEle("btnReplace").addEventListener("click", function () {

      var resultCheck = checkValidInputReplace(a);
      if (resultCheck) {
        replaceTwoElement(a);
        showCurrentArray(a, "arrayCurrent");
      }
    })
  } else {
    notificationFeature.innerHTML = notifications[7];
  }
}

// hoán đổi vị trí của 2 phần tử
function replaceTwoElement(a) {
  var firstIndex = +getMyEle("firstIndexReplace").value;
  var lastIndex = +getMyEle("lastIndexReplace").value;
  [a[firstIndex], a[lastIndex]] = [a[lastIndex], a[firstIndex]];
}

// Kiểm tra giá trị nhập của form thay đổi
function checkValidInputReplace(a) {
  var firstIndex = +getMyEle("firstIndexReplace").value;
  var lastIndex = +getMyEle("lastIndexReplace").value;
  var result1 =
    checkEntry("firstIndexReplace", "notiFirstIndexReplace", 4) &&
    checkIsNumber("firstIndexReplace", "notiFirstIndexReplace", 1) &&
    checkIsInteger("firstIndexReplace", "notiFirstIndexReplace", 2)
    && checkIndexReplace("notiFirstIndexReplace", 6, firstIndex, a);


  var result2 =
    checkEntry("lastIndexReplace", "notiLastIndexReplace", 5) &&
    checkIsNumber("lastIndexReplace", "notiLastIndexReplace", 1) &&
    checkIsInteger("lastIndexReplace", "notiLastIndexReplace", 2) &&
    checkIndexReplace("notiLastIndexReplace", 6, lastIndex, a);
  if (result2) {
    if (firstIndex === lastIndex) {
      getMyEle("notiLastIndexReplace").innerHTML = "Vui lòng nhập khác giá trị với vị trí đầu!";
      result2 = false;
    }
  }

  return (result1 && result2) ? true : false;

}

// Kiểm tra vị trí người nhập có hợp lệ hay không
function checkIndexReplace(idNoti, indexNoti, index, a) {
  var lastIndex = a.length - 1;
  if (index < 0 || index >= a.length) {
    getMyEle(idNoti).innerHTML = notifications[indexNoti] + lastIndex;
    return false;
  }
  getMyEle(idNoti).innerHTML = '';
  return true;
}

// Hiển thì form nhập giá trị thay đổi.
function showFormReplace() {
  formReplace.innerHTML = `<div class="form-group">
  <label for="firstIndexReplace">Nhập vị trí đầu tiên</label>
  <input id="firstIndexReplace" type="text" class="form-control" placeholder="Vị trí đầu tiên">
  <span id="notiFirstIndexReplace" class="text-danger"></span>
</div>
<div class="form-group">
  <label for="lastIndexReplace">Nhập vị trí thứ hai</label>
  <input id="lastIndexReplace" type="text" class="form-control" placeholder="Vị trí thứ hai">
  <span id="notiLastIndexReplace" class="text-danger"></span>
</div>
<button id="btnReplace" class="btn btn-primary">Thay đổi</button>`;
}

// Tìm số chẵn cuối cùng trong mảng
function findLastEvenNumberInArray(a) {
  var indexLastEvenNumber = findFirstEvenNumberInArray(a);
  var lastEvenNumber = a[indexLastEvenNumber];
  if (indexLastEvenNumber !== -1 &&
    (indexLastEvenNumber + 1) < a.length) {
    for (var i = indexLastEvenNumber + 1; i < a.length; i++) {
      if (a[i] % 2 === 0) {
        lastEvenNumber = a[i];
      }
    }
    return lastEvenNumber
  } else if (indexLastEvenNumber === -1) {
    return indexLastEvenNumber
  } else {
    return lastEvenNumber;
  }
}

// Tìm vị trí số chẵn đầu tiên trong mảng
function findFirstEvenNumberInArray(a) {
  var indexFiEvenNumber = -1;
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      return i;
    }
  }
  return indexFiEvenNumber;
}

// Tìm số dương nhỏ nhất trong mảng
function findMinPositiveNaumberInArray(a) {
  var indexMin = findFirstPositiveNaumberInArray(a);
  var min = a[indexMin];
  if (indexMin !== -1 && (indexMin + 1) < a.length) {
    for (var i = indexMin + 1; i < a.length; i++) {
      min = (a[i] < min && a[i] > 0) ? a[i] : min;
    }
    return min;
  } else if (indexMin === -1) {
    return indexMin;
  } else {
    return min;
  }

}

// Tìm vị trí của số dương đầu tiên trong mảng
function findFirstPositiveNaumberInArray(a) {
  var indexMin = -1;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      return i;
    }
  }
  return indexMin;
}

// Tìm số nhỏ nhất trong mảng
function findMinNumberInArray(a) {
  var min = a[0];
  for (var i = 1; i < a.length; i++) {
    min = (a[i] < min) ? a[i] : min;
  }
  return min;
}

// Đếm số dương trong mảng
function countPositiveNaumberInArray(a) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    count += (a[i] > 0) ? 1 : 0;
  }
  return count;
}

// Tổng các số dương trong array
function totalPositiveNaumbersInArray(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += (a[i] > 0) ? a[i] : 0;
  }
  return sum;
}

// Xử lý thêm phần tử vào trong mảng
function handlerAddElementToArray() {
  var result = checkValidInputElement();
  if (result) {
    var ele = getMyEle("elementOfArray");
    addElementToArray(array, +ele.value)
    showCurrentArray(array, "arrayCurrent");
    ele.value = '';
    showFeature();
  }
}

// Xử lý xóa mảng float
function handlerRemoveArray() {
  floatArray = [];
  floatArrayCurrent.innerHTML = "";
}

// Xử lý xóa mảng
function handlerRemoveArray() {
  array = [];
  getMyEle("arrayCurrent").innerHTML = "";
  resultFeature.innerHTML = '';
  showFeature();
}

// Show phần chức năng
function showFeature() {
  var featurePart = getMyEle("feature")
  if (array.length === 0) {
    featurePart.style.display = "none"
  } else {
    featurePart.style.display = "block"
  }
}
showFeature();

// Show mảng hiện tại
function showCurrentArray(a, id) {
  var htmls = '';
  for (var i = 0; i < a.length; i++) {
    htmls += a[i] + "\t";
  }
  getMyEle(id).innerHTML = `Mảng hiện tại: ${htmls}`;
}

// Thêm Phần Tử Cho mảng
function addElementToArray(a, el) {
  a.push(el);
}

// Kiểm tra hợp lệ nhập phần tử
function checkValidInputElement() {
  var result1 = checkEntry("elementOfArray", "notificationElement", 0) &&
    checkIsNumber("elementOfArray", "notificationElement", 1) &&
    checkIsInteger("elementOfArray", "notificationElement", 2);
  return result1 ? true : false;
}

// Kiểm tra người dùng có nhập hay không
function checkEntry(idCheck, idNotifi, indexNotifi, valueCheck = '') {
  var content = getMyEle(idCheck).value;
  var notification = getMyEle(idNotifi);

  if (content === valueCheck) {
    notification.innerHTML = notifications[indexNotifi];
    return false;
  }
  notification.innerHTML = '';
  return true;
}

// Kiểm tra có phải là số không
function checkIsNumber(idCheck, idNotifi, indexNotifi) {
  var content = +getMyEle(idCheck).value;
  var notification = getMyEle(idNotifi);
  if (isNaN(content)) {
    notification.innerHTML = notifications[indexNotifi];
    return false;
  }
  notification.innerHTML = '';
  return true;
}

// Kiểm tra có phải là số nguyên không
function checkIsInteger(idCheck, idNotifi, indexNotifi) {
  var content = +getMyEle(idCheck).value;
  var notification = getMyEle(idNotifi);
  if (content % 1 !== 0) {
    notification.innerHTML = notifications[indexNotifi];
    return false;
  }
  notification.innerHTML = '';
  return true;
}
