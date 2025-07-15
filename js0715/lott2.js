// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// fuction getLott( 類別 第一區號碼 第一區所取數量 第二區最大值 第二區所取數量
// 第二區所取數量省略 => 用tp判斷
// 第二區最大值留下 => 排序時使用
function getLott(tp, firstMax, firstNum, secMax){
    
    // 建立存放號碼的空陣列
    let lott = [];
      
    // 判斷是否為大樂透
    // 是則最後一碼給特別號
    if(tp===2){
        firstNum=firstNum+1;
    }
    
    // 第一區
    while (1) {
        // 判斷是否已經有N個號碼
        if (lott.length == firstNum) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        // 判斷號碼是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 將號碼加到陣列中            
        }
    }

    // 第二區
    secNo.textContent="";
    // 判斷是否需要第二區號碼
    if(tp===1){
        // 威力彩
        secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);
    }else if(tp===2){
        // 大樂透 => 最後一碼上方函式已產生，取出最後一碼後需移除
        secNo.textContent = "特別號:" + lott.pop();
    }
    
    // 顯示
    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序後
    lott.sort((a, b) => {
        return a - b; // 遞增排序
    })
    sortAfter.textContent = "排序後號碼:" + lott;
    
    

}

// 大樂透


// 今彩539
