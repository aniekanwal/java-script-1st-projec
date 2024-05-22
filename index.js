var weather = prompt("Enter your area weather:");


        if (weather == 'hot') {
            document.write('<div class="card">' +
                '<img src="hot.jpg" alt="Hot Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
                '</div>' + 
                '</div>');
        }else if (weather == 'cold') {
            document.write('<div class="card">' +
                '<img src="" alt="Cold Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
                
                '</div>' +
                '</div>');
        }else if (weather == 'sunny') {
            document.write('<div class="card">' +
                '<img src="sunny.jpg" alt="Sunny Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
                '</div>' +
                '</div>');
        }else if (weather == 'partly cloudy') {
            document.write('<div class="card">' +
                '<img src="partly cloudy.jpg" alt="partly cloudy Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
                '</div>' +
                '</div>');
        }
        else if (weather == 'rainy') {
            document.write('<div class="card">' +
                '<img src="rainy.jpg" alt="Rainy Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
            
                '</div>' +
                '</div>');
        } else if (weather == 'snowy') {
            document.write('<div class="card">' +
                '<img src="snowy.jpg" alt="Snowy Weather">' +
                '<div class="card-body">' +
                '<h1>It\'s ' + weather + ' today</h1>' +
                
                '</div>' +
                '</div>');
        } else {
            document.write('<div class="card">' +
                '<div class="card-body">' +
                '<h1>😜 Are you kidding me?</h1>' +
                
                '</div>' +
                '</div>');
        }
    