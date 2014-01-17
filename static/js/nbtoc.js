//original layout at https://gist.github.com/magican/5574556
$(function(){
 
  function list_el(h){
    link = $(h).find("a").attr('href');
    title = $(h).text();
    text = title.substring(0, title.length-1);
    console.log(text);
    return "<a href='" + link + "'>" + text + "</a>"
  }
 
  function lvl(header){
    if (header !== undefined) {
      return parseInt($(header).prop("tagName").substring(1));
    }
    else return 0;
  }
 
  window.toc = function(){
  headers = $('.rendered_html h1,h2');
  html = "<ol class='nested'>";
  
  $.each(headers , function(i, h) {
   if (lvl(h) == lvl(headers[i+1])) {
      html += "<li class='nested'>" + list_el(h) + "</li>" ;
      console.log("first");
    }
    else if ( lvl(h) < lvl(headers[i+1]) ) {
      html += "<li class='nested'>" + list_el(h) + "<ol class='nested'>";
      console.log("second");
    }
    else if (lvl(h) > lvl(headers[i+1])) {
      html += "<li class='nested'>"+ list_el(h) +"</li></ol></li>";
      console.log("third");
    }
  }) 
  html += "</ol>"
  
  $('#toc').html(html)
  $('#toc-wrapper .header').click(function(){
      $('#toc').slideToggle()
      $('#toc-wrapper').toggleClass('closed')
      if ($('#toc-wrapper').hasClass('closed')){
        $('#toc-wrapper .hide-btn').html('[show]')
      } else {
          $('#toc-wrapper .hide-btn').html('[hide]')
      }
      return false
  })
  $('#toc-static').html(html)
  }
  toc()
  
 
})
