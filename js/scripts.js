$(function(){$("#parralax1").parallax("50%",.1),$("#parralax2").parallax("50%",.1),$("#parralax3").parallax("50%",.1),$("#video").css({height:$(window).height()+"px"}),$(window).resize(function(){$("#video").css({height:$(window).height()+"px"})}),$(".covervid-video").coverVid(1920,1080),$(".nav a").smoothScroll({offset:-50}),$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-sticked"):$(".navbar-fixed-top").removeClass("top-nav-sticked")}),$(".stats").circliful(),$(".icon").tooltip();var e=$(".isotope").isotope({itemSelector:".item",layoutMode:"fitRows"}),t={numberGreaterThan50:function(){var e=$(this).find(".number").text();return parseInt(e,10)>50},ium:function(){var e=$(this).find(".name").text();return e.match(/ium$/)}};$("#filters").on("click","button",function(){var a=$(this).attr("data-filter");a=t[a]||a,e.isotope({filter:a})}),$(".button-group").each(function(e,t){var a=$(t);a.on("click","button",function(){a.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})}),$(".item").on("click",function(e){e.preventDefault();var t=$(this).attr("data-item");$.getJSON("ajax/"+t+".json",function(e){var t=$("#show-project");t.slideUp(function(){t.find("h4").html(e.title),t.find("p").html(e.content);for(var a=[],o=0;o<e.skillz.length;o++)a.push("<li>"+e.skillz[o]+"</li>");t.find("img").attr("src",e.imgUrl),t.find("ul").html(a),t.find(".btn-contact").remove(),$(e.link).insertAfter("#show-project ul"),t.slideDown(),$("#anchor-project")[0].click()})})}),$("#show-project .close").click(function(){$("#show-project").slideUp()}),$("#contact form").on("click",".send",function(e){e.preventDefault(),console.log("eee");var t=$("#nom").val(),a=$("#prenom").val(),o=$("#sujet").val(),r=$("#email").val(),n=$("#message").val(),i=0;""===t||""===r||""===n||""===a||""===o?(i=1,$(".message-error").remove(),$("#form-error").append('<span class="message-error"><strong>Erreur!</strong> Merci de remplir tous les champs !</span>').show().fadeIn(200)):/(.+)@(.+){2,}\.(.+){2,}/.test(r)||($(".message-error").remove(),$("#form-error").append('<span class="message-error"><strong>Erreur!</strong> Email non valide !</span>').show().fadeIn(200),i=1);var s=$("#contact form").serialize();return 0===i?($("#form-error").fadeOut(500,function(){$(".loader").fadeIn(200)}),$.ajax({type:"POST",url:"../mail.php",data:s,success:function(){$(".loader").fadeOut(200,function(){$("#form-sent").fadeIn(200).delay(4e3).fadeOut(400)})}}),!1):void 0});{var a=[{stylers:[{hue:"#ff1a00"},{invert_lightness:!0},{saturation:-100},{lightness:33},{gamma:.5}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2D333C"}]}],o=new google.maps.LatLng(48.965352,2.244951),r=$(document).width()>480?!0:!1,n={zoom:15,draggable:r,center:o,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:a,scrollwheel:!1,disableDefaultUI:!0},i=new google.maps.Map(document.getElementById("map"),n);new google.maps.Marker({position:o,map:i,title:"Juste ici !",icon:"http://alexandretobia.fr/img/marker.png"})}});