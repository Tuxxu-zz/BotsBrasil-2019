$(".nav-links a").click(function() {
    $("#nav-check").prop('checked', false);
    $(".btn-close").css({ "display": "none" });
});
$(".nav-btn").click(function() {
    $(".btn-close").css({ "display": "block" });
});
$(".btn-close").click(function() {
    $("#nav-check").prop('checked', false);
    $(".btn-close").css({ "display": "none" });
});


$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/cb4073ac-9473-4af7-9921-9e38120ab1f0',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#cards').append(
                '<div class="col-4 card column is-6-mobile is-3-tablet is-3-desktop">' +
                ' <a href="#' + data[i]['id'] + '" rel="modal:open">' +
                '<img class="' + data[i]['stage'] + '" src="' + data[i]['pic'] + '" alt="' + data[i]['palestrante'] + '" height="150">' +
                ' <figcaption class="' + data[i]['stage'] + '">' +
                '  <p class="palestrante">' + data[i]['palestrante'] + '</p>' +
                ' <p class="modal-company">' + data[i]['company'] + '</p>' +
                ' </figcaption>' +
                ' </a>' +
                '  <br>' +
                ' </div><div id="' + data[i]['id'] + '" class="modal ' + data[i]['stage'] + '"><h4 class="modal-title-'+ data[i]['stage']+'">Palestra</h4><br><h4>' + data[i]['title'] + '</h4><br><p>' + data[i]['description'] + '</p> <hr><h4>' + data[i]['palestrante'] + '</h4><h5>' + data[i]['company'] + '</h5><br><p>' + data[i]['minibio'] + '</p> </div>');
            i++;
        }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/d21ae26e-6ff1-4a85-8927-2616edd4dadf',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#workshop').append(
                '<div class="col-4 card column is-6-mobile is-3-tablet is-3-desktop">' +
                ' <a href="#' + data[i]['id'] + '" rel="modal:open">' +
                '<img class="' + data[i]['stage'] + '" src="' + data[i]['pic'] + '" alt="' + data[i]['palestrante'] + '" height="150">' +
                ' <figcaption class="' + data[i]['stage'] + '">' +
                '  <p class="palestrante">' + data[i]['palestrante'] + '</p>' +
                ' <p class="modal-company">' + data[i]['company'] + '</p>' +
                ' </figcaption>' +
                ' </a>' +
                '  <br>' +
                ' </div><div id="' + data[i]['id'] + '" class="modal ' + data[i]['stage'] + '"><h4 class="modal-title-'+ data[i]['stage']+'">Workshop</h4><br><h4>' + data[i]['title'] + '</h4><br><p>' + data[i]['description'] + '</p> <hr><h4>' + data[i]['palestrante'] + '</h4><h5>' + data[i]['company'] + '</h5><br><p>' + data[i]['minibio'] + '</p> </div>');
            i++;
        }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/fd2d3582-5249-4066-ad45-155dd20d07c9',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#partners-her').append(
              ' <a href="' + data[i]['link'] + ' " target="_blank">' +
              '<img class="partners-logo" src="' + data[i]['logo'] + '" alt="' + data[i]['title'] + '" height="150">'
              );
            i++;
        }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/cc05553d-b9a5-42be-8770-28a8b3c140d6',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#partners-walle').append(
              ' <a href="' + data[i]['link'] + ' " target="_blank">' +
              '<img class="partners-logo" src="' + data[i]['logo'] + '" alt="' + data[i]['title'] + '" height="150">'
              );
            i++;
        }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/fc5137c3-9a67-4696-a254-20f3240aa1bc',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#partners-bb8').append(
              ' <a href="' + data[i]['link'] + ' " target="_blank">' +
              '<img class="partners-logo" src="' + data[i]['logo'] + '" alt="' + data[i]['title'] + '" height="150">'
              );
            i++;
        }
    }
});

$.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/54a13bbc-cd3b-4159-9606-64681f4e5b68',
    dataType: 'json',
    success: function(data) {
        var i = 0;
        while (i < data.length) {
            $('#partners-friends').append(
              ' <a href="' + data[i]['link'] + ' " target="_blank">' +
              '<img class="partners-logo" src="' + data[i]['logo'] + '" alt="' + data[i]['title'] + '" height="150">'
              );
            i++;
        }
    }
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
