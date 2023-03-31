/*--fetch table values--*/
//https://docs.google.com/spreadsheets/d/1p0ph_2qUTmwDLj_uoWtdErGTfqay1qLV/edit?usp=sharing&ouid=109796315657009011797&rtpof=true&sd=true
//==============get teams=================================//
//google spreedsheet data
//1p0ph_2qUTmwDLj_uoWtdErGTfqay1qLV
const sheetId = '1p0ph_2qUTmwDLj_uoWtdErGTfqay1qLV';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'League1';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

//DOM function lisatener
const data = []
document.addEventListener('DOMContentLoaded', init)

/*INT FUNCTION TO PROCCESS ***This function fetches data from the google sheet detailed above
after the data is fethced in the function, it is then changed from an unstructures array 
to a structured array to use in other functoons****/
function init() {
  fetch(url)
    .then(res => res.text())
    .then(rep => {
      //Remove additional text and extract only JSON:
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      //rows of the data retrieved
      const stats = jsonData.table.rows;
      //=============LOG TO CONSOLE========================//
      console.log(jsonData);
      console.log(stats[1]);


      let structuredArr = [];
      let awaitPaymentArr = [];

      var mytble = document.getElementById("mytble");
      var myteamList = document.getElementById("myteams");

      for (let i = 1; i < stats.length; i++) {

        var team= stats[i].c[0].v;
        var match = stats[i].c[1].v;
        var wins = stats[i].c[2].v;
        var loses = stats[i].c[3].v;
        var draws = stats[i].c[4].v;
        var points = stats[i].c[5].v;
        var penilise = stats[i].c[6].v;

        var colo="";
        if (points == "-" && match == "-"){
          colo = "pink";       
        }
        mytble.innerHTML+=`
        <tr class="${colo} text-left">
          <td>${team}</td>
          <td>${match}</td>
          <td class="lightgreennum">${wins}</td>
          <td class="redclrbg">${loses}</td>
          <td>${draws}</td>
          <td><b>${points}</b></td>
          <td>${penilise}</td>
        </tr>`

        myteamList.innerHTML+=`
        <li><i class="fa fa-angle-right"></i>${team}</li>`
      }
    });
}