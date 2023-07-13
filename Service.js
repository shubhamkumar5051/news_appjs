app.service("NewsService", function ($http) {
  this.getTopHeadlines = function () {
    var url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=193f9cca9f084044a67aa03f114316c8";
    return $http.get(url);
  };

  this.getNewsByCategory = function (category) {
    var url =
      "https://newsapi.org/v2/top-headlines?country=in&category=" +
      category +
      "&apiKey=0f879b2c146e46d6b125fec6abc87851";
    return $http.get(url);
  };

  this.searchNewsByCountry = function (country) {
    var url =
      "https://newsapi.org/v2/top-headlines?country=" +
      country +
      "&apiKey=0f879b2c146e46d6b125fec6abc87851";
    return $http.get(url);
  };
});
