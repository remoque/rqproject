const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 初期表示
window.onload = function () {
    showCalendar(today);
};
// 前の月表示
function prevcalendar(){
    showDate.setMonth(showDate.getMonth() - 1);
    showCalendar(showDate);
}

// 次の月表示
function nextcalendar(){
    showDate.setMonth(showDate.getMonth() + 1);
    showCalendar(showDate);
}

// カレンダー表示
function showCalendar(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#calendar_header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#vacant_calendar').innerHTML = calendar;
}
// 空席状況のファイル読み込み
function getVacantInfo(month){
    let csvArray = []; // 戻り値
    // 表示する店名をげっと
    let store_name = document.getElementsByClassName('store__select').item(0).value;
    if(store_name == ""){
        return csvArray;
    }else{
        // CSVファイルを取得
        const root = "/assets/calendar/" ;
        let csv = new XMLHttpRequest();
        let path = "";
        // CSVファイルへのパス
        if (month != 12){
            path = root + store_name  + "/vacantinfo" + (month+1) + ".csv";
        }else if(month == 12){
            path = root + store_name  + "/vacantinfo" + 1 + ".csv";
        }
        csv.open("GET", path, false);
        // csvファイル読み込み失敗時のエラー対応
        try {
            csv.send(null);
        } catch (err) {
            console.log(err);
    }
        // 改行ごとに配列化
        let lines = csv.responseText.split(/\r\n|\n/);
        // 1行ごとに処理 ヘッダーの行を無視
        for (let i = 1; i < lines.length; ++i) {
            let cells = lines[i].split(",");
            if (cells.length != 1) {
                csvArray.push(...cells);
            }
        }
    }
    return csvArray;
}

// カレンダー作成
function createProcess(year, month) {
    let csvArraypre = getVacantInfo((month + 1));
    let csvArray = getVacantInfo(month);
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);
    // 当月、翌月とも空席情報があるとき＝ファイルを読み込めているときの表示
    if(csvArray.length != 0 && csvArraypre.length != 0){
        // 1行ずつ設定
        for (var i = 0; i < row; i++) {
            calendar += "<tr>";
            // 1colum単位で設定
            for (var j = 0; j < week.length; j++) {
                if (i == 0 && j < startDayOfWeek) {
                    // 1行目で1日まで先月の日付を設定
                    calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "<br>-</td>";
                } else if (count >= endDate) {
                    // 最終行で最終日以降、翌月の日付を設定
                    count++;
                    calendar += "<td class='disabled'>" + (count - endDate) + "<br>"+ csvArraypre[count - endDate - 1] +"</td>";
                } else {
                    // 当月の日付を曜日に照らし合わせて設定
                    count++;
                    if(year == today.getFullYear()
                        && month == (today.getMonth())
                        && count == today.getDate()){
                        calendar += "<td class='today'>" + count + "<br>"+ csvArray[count - 1] + "</td>";
                    } else {
                        calendar += "<td>" + count + "<br>" + csvArray[count - 1] + "</td>";
                    }
                }
            }
            calendar += "</tr>";
        }
    }else{// いずれかの空席情報がない時の表示
    // 1行ずつ設定
        for (var i = 0; i < row; i++) {
            calendar += "<tr>";
            // 1colum単位で設定
            for (var j = 0; j < week.length; j++) {
                if (i == 0 && j < startDayOfWeek) {
                    // 1行目で1日まで先月の日付を設定
                    calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "<br>-</td>";
                } else if (count >= endDate) {
                    // 最終行で最終日以降、翌月の日付を設定
                    count++;
                    calendar += "<td class='disabled'>" + (count - endDate) + "<br>-</td>";
                } else {
                    // 当月の日付を曜日に照らし合わせて設定
                    count++;
                    if(year == today.getFullYear()
                        && month == (today.getMonth())
                        && count == today.getDate()){
                        calendar += "<td class='today'>" + count + "<br>-</td>";
                    } else {
                        calendar += "<td>" + count + "<br>-</td>";
                    }
                }
            }
            calendar += "</tr>";
        }
    }
    return calendar;
}
