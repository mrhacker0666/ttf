//particlesJS.load('particles-js', 'js/config.json', function() {});
/*===============================Recent Activity Form========================================*/


/*================================================================================*/

//COUNT UP ABOVE

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var test = [getRandomInt(17,23),getRandomInt(17,23),getRandomInt(17,23),getRandomInt(17,23),getRandomInt(17,23)];
var total = 0;
for(var i in test) { total += test[i]; }
test[4] = test[4] + (100 - total);
var total = 0;
for(var i in test) { total += test[i]; }

fans = 0;
apidead = false;

$("#tiktok-name").keypress(function(e) {
    if(e.which == 13) {
        s_1();
    }
});

function FLICKSTATUS() {
  var IP1 = "***."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
  var IP2 = (Math.floor(Math.random() * 255) + 1)+".***."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
  var IP3 = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+".***."+(Math.floor(Math.random() * 255) + 0);
  var IP4 = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+".***";
  var IPs = [IP1, IP2, IP3, IP4]
  var IPi = Math.floor(Math.random() * IPs.length);
  var rIP = IPs[IPi];
  //console.log(rIP);
  var COUNTRIES = ["gr", "de", "gb", "pl", "us", "ch", "sk", "cz", "be", "no", "ro", "ru", "es", "ua"];
  var Ci = Math.floor(Math.random() * COUNTRIES.length);
  var rC = COUNTRIES[Ci];
  //console.log(rC);
  var AMOUNTS = ["5 000", "10 000", "25 000", "50 000"];
  var AMOUNTSi = Math.floor(Math.random() * AMOUNTS.length);
  var rA = AMOUNTS[AMOUNTSi];
  //console.log(rA);

  $(".tttleft").fadeOut(1250, function() {
    $(".tttleft").attr("style", "display: none !important");
  });

  $(".tttmiddle").fadeOut(1250, function() {
    $(".tttmiddle").attr("style", "display: none !important");

    $(".tttleft").empty();
    $(".tttmiddle").empty();
    $(".tttleft").append('<img src="flags/1x1/' + rC + '.svg" class="flick-flag">');
    $(".tttmiddle").append('<h5 class="m-0"></span> ' + rIP + ' received <br><strong>' + rA + ' new fans</strong></h5>');
    $(".tttleft").fadeIn(1250);
    $(".tttmiddle").fadeIn(1250);
    $(".flick-logo").fadeIn(1250);
  });

}

FLICKSTATUS();

setInterval(FLICKSTATUS, 5000);

var TIN = new Date().toLocaleDateString();

$(".bbbottom").append('<h5 class="NAT"><strong>Latest update</strong>: ' + TIN + "</h5>")

setTimeout(function() {
  $(".NAT").fadeIn(1250);
}, 1250)

var PERPER;
var SI1;
var SI2;
var SI3;

function s_1() {

  if ($("#tiktok-name").val() != "" && $("#fans-select option:selected").val() != "") {
    $(".s_1").fadeOut(1250);

    setTimeout(function() {

      $(".s_2").fadeIn(1250);

      var bar = new ProgressBar.Line("#ppp", {
      strokeWidth: 4,
      duration: 4000,
      easing: 'easeInOut',
      color: '#ff004f',
      trailColor: '#eee',
      trailWidth: 2,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#ff004f'},
      to: {color: '#00f2ea'},
      step: (state, bar) => {
        PERPER = Math.round(bar.value() * 100);
        bar.path.setAttribute('stroke', state.color);
      }
    });

    var FLI = 0;

    var L1 = 'Connect with TikTok servers .';

    $("#loading1").html(L1).fadeIn(750, function() {

      SI1 = setInterval(function() {
        var L111 = L1 + '<strong>' + PERPER + '%</strong>';
        $("#loading1").html(L111)
      }, 50);

    });

    FLI += test[0];

      bar.animate(FLI/100, function() {

        FLI += test[1];

        clearInterval(SI1);

        var L2 = 'Looking for that ' + $("#tiktok-name").val() + '-Usernames...';

        var L222 = L2 + '<strong>' + PERPER + '%</strong>';

        $("#loading2").html(L222).fadeIn(750, function() {

            bar.animate(FLI/100, function() {

              clearInterval(SI2)

              var L3 = 'Change fans value (+' + $("#fans-select option:selected").val() + ') in the TikTok database...';

              var L333 = L3 + '<strong>' + PERPER + '%</strong>';


              $("#loading3").html(L333).fadeIn(750, function() {

                FLI += test[2];

                bar.animate(FLI/100, function() {
                  clearInterval(SI3);


                  //
                  var L4 = 'Disconnecting from the database...';

                  var L444 = L4 + '<strong>' + PERPER + '%</strong>';


                  $("#loading4").html(L444).fadeIn(750, function() {

                    FLI += test[3];

                    bar.animate(FLI/100, function() {
                      clearInterval(SI4);

                      ////
                      var L5 = 'Hacking finished ...';

                      var L555 = L5 + '<strong>' + PERPER + '%</strong>';


                      $("#loading5").html(L555).fadeIn(750, function() {

                        FLI += test[4];

                        bar.animate(FLI/100, function() {

                          $(".s_3").fadeIn(1250);

                        })

                        SI5 = setInterval(function() {
                          var L555 = L5 + '<strong>' + PERPER + '%</strong>';
                          $("#loading5").html(L555)
                        }, 50);

                      });
                      ////


                    })

                    SI4 = setInterval(function() {
                      var L444 = L4 + '<strong>' + PERPER + '%</strong>';
                      $("#loading4").html(L444)
                    }, 50);

                  });
                  //


                })

                SI3 = setInterval(function() {
                  var L333 = L3 + '<strong>' + PERPER + '%</strong>';
                  $("#loading3").html(L333)
                }, 50);

              });

            })

          SI2 = setInterval(function() {
            var L222 = L2 + '<strong>' + PERPER + '%</strong>';
            $("#loading2").html(L222)
          }, 50);

        });

      });

    }, 1250)
  } else {
    alert("Enter your username and choose how many fans you want.")
  }

}

function lala() {
  $(".s_2").fadeOut(1250);
  $(".s_3").fadeOut(1250, function() {
    $(".s_4").fadeIn(1250);
  })
}
