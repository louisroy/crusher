(function() {
  var redirectToDiscussion = function(id) {
    window.location.href = 'https://m.facebook.com/messages/read/?tid=id.' + id;
    
    // Wait for page to load
    setTimeout(startFetchingMessages, 2000);
  }
  
  var startFetchingMessages = function() {
    setInterval(seeOlder, 500); 
  };
  
  var seeOlder = function() {
    document.querySelector('#see_older a').click();
  };
  
  startFetchingMessages();
  //redirectToDiscussion(window.prompt('Enter discussion ID'));
})();
