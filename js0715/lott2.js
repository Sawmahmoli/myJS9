// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");
// 建立存放樂透號碼的空陣列 => 陣列與函式名稱相同易混淆
let arrLott = [];

function lott(type, max, sec) {
    if (type === 1) {
        // alert("威力彩");
        // 第一區：1-38取6個
        // 建立存放號碼的空陣列 => 移至最前共用
        // let lott = [];

        // while

        while (1) {
            // 檢查是已經有6個號碼
            if (lott.length == 6) {
                break;
            }

            // 以函式取代迴圈
            // 將取得數字傳到下個函式執行
            getNo(max);
            // // 亂數取號碼
            // let lottNo = Math.floor(Math.random() * max) + 1;
            // // 檢查是否重覆
            // if (!lott.includes(lottNo)) {   // 沒有重覆
            //     lott.push(lottNo);  // 增加號碼到陣列中            
            // }
        }

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;
        // 第二區：1-8取1個
        secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * sec) + 1);



    } else if (type === 2) {
        // alert("大樂透");
        // 第一區：1-49取6個
        // 建立存放號碼的空陣列
        let lott = [];

        // while

        while (1) {
            // 檢查是否已經有7個號碼
            if (lott.length == 7) {
                break;
            }

            // 亂數取號碼
            let lottNo = Math.floor(Math.random() * max) + 1;
            // 檢查是否重覆
            if (lott.includes(lottNo) == false) {   // 沒有重覆
                lott.push(lottNo);  // 增加號碼到陣列中            
            }
        }

        // 取出陣列最後一個值後，並移除
        secNo.textContent = "特別號：" + lott.pop();

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;



    } else if (type === 3) {
        // alert("今彩539");
        // 第一區：1-39取5個
        // 建立存放號碼的空陣列
        let lott = [];

        // while

        while (1) {
            // 檢查是已經有5個號碼
            if (lott.length == 5) {
                break;
            }

            // 亂數取號碼
            let lottNo = Math.floor(Math.random() * max) + 1;
            // 檢查是否重覆
            if (lott.includes(lottNo) == false) {   // 沒有重覆
                lott.push(lottNo);  // 增加號碼到陣列中            
            }
        }

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;

        // 今彩沒有第二區，所以清除
        secNo.textContent = "";
    }
}

function getNo(){
    // 亂數取號碼
    let lottNo = Math.floor(Math.random() * max) + 1;
    // 檢查陣列中數字是否重覆
    if (!arrLott.includes(lottNo)) {   // 沒有重覆
        arrLott.push(lottNo);  // 增加號碼到陣列中            
    }
}

