'use strict';

angular.module('stockDogApp')
  .service('QuoteService', function ($http, $interval) {
    var stocks = [];
    // var BASE = 'http://query.yahooapis.com/v1/public/yql';
    // var BASE = 'https://www.coinhako.com/api/v1/price/currency/BTCUSD';
    var BASE = 'https://api.coinmarketcap.com/v1/ticker/';
    // var BASE = 'http://www.iNorthwind.com/Service1.svc/getAllCustomers';

    var update = function (quotes) {
      console.log(quotes);
      // Ensure that the current quotes match registered stocks
      // if (quotes.length === stocks.length) {
      _.each(stocks, function (stock, idx) {
        // var stock = stocks[idx];
        var quote = quotes.find(function (quote) {
          return quote.symbol === stock.company.symbol;
        });
        if (stock.company.symbol == quote.symbol) {
          stock.lastPrice = parseFloat(quote.price_usd);
          stock.change = quote.percent_change_1h * stock.lastPrice * 0.01;
          stock.percentChange = quote.percent_change_1h;
          stock.marketValue = stock.shares * stock.lastPrice;
          stock.dayChange = stock.marketValue * parseFloat(quote.percent_change_24h) * 0.01;
          stock.save();
        }
      });
      // }
    };

    this.register = function (stock) {
      stocks.push(stock);
    };

    this.deregister = function (stock) {
      _.remove(stocks, stock);
    };

    this.clear = function () {
      stocks = [];
    };

    this.fetch = function () {
      var symbols = _.reduce(stocks, function (symbols, stock) {
        symbols.push(stock.company.symbol);
        return symbols;
      }, []);
      // var query = encodeURIComponent('select * from yahoo.finance.quotes where symbol in (\'' + symbols.join(',') + '\')');
      // var url = BASE + '?' + 'q=' + query + '&format=json&diagnostics=true&env=http://datatables.org/alltables.env';
      var url = BASE; // + symbols + '/';
      // $http.jsonp(url)
      //   .success(function (results) {
      //       var quotes = results.data;
      //       update(quotes);
      //   })
      //   .error(function (data) {
      //     console.log(data);
      //   });
      // $http({
      //     method: 'GET',
      //     url: url,
      //     headers: 'Access-Control-Allow-Origin: *'
      //   })
      // .success(function (results) {
      //   var quotes = results.data;
      //   update(quotes);
      // })
      // .error(function (data) {
      //   console.log(data);
      // });
      $http.get(url)
        .then(function (success) {
          // if (success.data.count) {
          // var quotes = success.data.count > 1 ? success.data.results.quote : [success.data.query.results.quote];
          var quotes = success.data;
          update(quotes);
          // }
        }, function (error) {
          console.log(error);
        });


    };

    $interval(this.fetch, 500000);
  });
