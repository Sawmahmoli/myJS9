// 排序前
let sortBefore=document.getElementById("sortBefore");
// 排序後
let sortAfter=document.getElementById("sortAfter");
// 第二區號碼
let secNo=document.getElementById("secNo");

// 威力彩
function lott1(){
    // 第一區號碼：1-38取6
    // 建立存放號碼的空陣列
    let lott=[];

    // (1)while
    let count=1;
    while(1){
        // 檢查陣列長度是否超過6
        if(lott.length==6){
            break;
        }

        // 亂數取號碼
        lottNo=Math.floor(Math.random()*38)+1;
        // 檢查是否重複
        if(lott.includes(lottNo)==false){ // 沒有重複
            lott.push(lottNo); // 增加號碼到陣列
            count++;
        }  
    }


    // (2)for
    /*
    // 第一個號碼
    let lottNo= Math.floor(Math.random()*38)+1;
    lott.push(lottNo);
    console.log(lottNo);

    // 第二個號碼開始 檢查每個數字是否重複
    // 還需要5個號碼
    for(let i=1; i<=5; i++){
        // 亂數取號碼
        lottNo=Math.floor(Math.random()*38)+1;
        // 檢查是否重複
        if(lott.includes(lottNo)==false){ // 沒有重複
            lott.push(lottNo); // 增加號碼到陣列
        }else{
            // 當號碼重複時，不計算執行次數
            i--; // i=i-1
            
        }
    }
    */


    // 未排序
    sortBefore.textContent=`排序前號碼：`+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
    sortAfter.textContent=`排序後號碼：`+lott;

    // 第二區號碼：1-8取1
    secNo.textContent=`第二區號碼：`+ Math.floor((Math.random()*8)+1);



}

// 大樂透
function lott2(){
    // 第一區號碼：1-38取6
    // 建立存放號碼的空陣列
    let lott=[];

    // while
    let count=1;
    while(1){
        // 檢查陣列長度是否超過7
        if(lott.length==7){
            break;
        }

        // 亂數取號碼
        lottNo=Math.floor(Math.random()*49)+1;
        // 檢查是否重複
        if(lott.includes(lottNo)==false){ // 沒有重複
            lott.push(lottNo); // 增加號碼到陣列
            count++;
        }  
    }

    // 取出陣列中的最後一個值並移除
    secNo.textContent="特別號"+lott.pop();


    // 未排序
    sortBefore.textContent=`排序前號碼：`+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
    sortAfter.textContent=`排序後號碼：`+lott;

    // 第二區號碼：1-49取1（不與第1區重複
    /*
    while(1){
        let lottNo2=Math.floor((Math.random()*49)+1);
    // 檢查是否重複
        if(lott.includes(lottNo2)==false){ // 沒有重複
            secNo.textContent=`特別號：`+ lottNo2;
            break;
            }
        }
    */
}

// 今彩539
function lott3(){
    // 第一區號碼：1-39取5
    // 建立存放號碼的空陣列
    let lott=[];

    // while
    let count=1;
    while(1){
        // 檢查陣列長度是否超過5
        if(lott.length==5){
            break;
        }
        // 亂數取號碼
        lottNo=Math.floor(Math.random()*39)+1;
        // 檢查是否重複
        if(lott.includes(lottNo)==false){ // 沒有重複
            lott.push(lottNo); // 增加號碼到陣列
            count++;
        }  
    }

    // 未排序
    sortBefore.textContent=`排序前號碼：`+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
    sortAfter.textContent=`排序後號碼：`+lott;

    // 今彩無第二區號碼，不顯示
    secNo.textContent="";
}