var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
  
  var dataArray = formatDataForView(data);
  
  dataArray.splice(1,1);
  
  console.table(dataArray);
  
  for (var i = 1; i < dataArray.length; i++){
      
      if(dataArray[i][0]==1){
        dataArray[i][0] = 'January'
      }else if(dataArray[i][0]==2){
        dataArray[i][0] = 'February'
      }else if(dataArray[i][0]==3){
        dataArray[i][0] = 'March'
      }else if(dataArray[i][0]==4){
        dataArray[i][0] = 'April'
      }else if(dataArray[i][0]==5){
        dataArray[i][0] = 'May'
      }else if(dataArray[i][0]==6){
        dataArray[i][0] = 'June'
      }else if(dataArray[i][0]==7){
        dataArray[i][0] = 'July'
      }else if(dataArray[i][0]==8){
        dataArray[i][0] = 'August'
      }else if(dataArray[i][0]==9){
        dataArray[i][0] = 'September'
      }else if(dataArray[i][0]==10){
        dataArray[i][0] = 'October'
      }else if(dataArray[i][0]==11){
        dataArray[i][0] = 'November'
      }else{
        dataArray[i][0] = 'December'
      }
  }

  var table = google.visualization.arrayToDataTable(dataArray, false);
  
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  
  var options ={
    title: 'Average Temperature 2014 in San Francisco',
    width: 800,
    height: 350,
    bar: {groupWidth: "95%"},
    hAxis: {title: 'Month'},
    hAxis: {minValue: 0},
    vAxis: {title: 'Temp. In Fahrenheit', titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    colors:['red','blue']
  }
  chart.draw(table, options);

  });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //get the keys
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(parseInt(value[prop], 0));
        }
        dataArray.push(dataEntry);
    });
    return dataArray;
}

angular.module('showHideApp',[]).controller('showHideController', function($scope){
       $scope.showMe = function(){
         $scope.show=true;
       }
       $scope.hideMe = function(){
         $scope.show=false;
       }
   });