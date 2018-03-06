$(document).ready(function() {
    var vCurrency;
    $.ajax({
        url: "https://www.quandl.com/api/v3/datasets/CURRFX/USDCOP.json?api_key=n4XYHUMpF-UynfHsQ_d-&start_date=2017-09-09"
    }).then(function(data) {
       $('.dataset-idusd').append(data.dataset.id);
       $('.dataset-nameusd').append(data.dataset.name);
       $('.dataset-Changeusd').append(data.dataset.data[0][1]);
       vCurrency = data.dataset.data[0][1];                 //Valor del dolar hoy
            $.ajax({
                url: "https://www.quandl.com/api/v3/datasets/CHRIS/ICE_KC1.json?api_key=n4XYHUMpF-UynfHsQ_d-"
            }).then(function(data) {
            $('.dataset-id').append(data.dataset.id);
            $('.dataset-name').append(data.dataset.name);
            $('.dataset-Change').append(data.dataset.data[0][4]);
            var vcafee = data.dataset.data[0][4];                  //valor del cafe hoy
            var trend = data.dataset.data[0][5];                  //valor del cafe hoy

            

            var v1= vcafee+15-10;
            var v2= v1/100;
            v2= v2*vCurrency;
            v1=v2/0.453592;
            v2=v1/1.3528571429;
            v1=v2*12.5;
            $('#pruebas').text(v1);

            if (trend>=0)
            {
                $('#pruebas').css('color', 'green');

            }
            else{
                $('#pruebas').css('color', 'red');
                $('#pruebas').css('font-size', 'xx-large');
                
            }
            
            var vcafe=[];
            var vMaxcafe=[];
            var vMincafe=[];
            for (var i = 0; i<=365; i++ )
            {
                vMaxcafe[i] = data.dataset.data[i][2];
                vMincafe[i] = data.dataset.data[i][3];
                vcafe[i] = data.dataset.data[i][4];

            } 
       
      
    });
    });
    
});