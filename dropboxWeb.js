const ACCESS_TOKEN = 'JavJ9PXXF9AAAAAAAAAANxVl8bfZOzTXUuxo3eyXoVKY14lXMl63HS0dpPVDyLzC'
const DATA = {
  "path": "/IntroB_",
  "recursive": false,
  "include_media_info": false,
  "include_deleted": false
}

var folder = $('.folder');

$.ajax({
  type: 'post',
  url: 'https://api.dropboxapi.com/2/files/list_folder',
  data: JSON.stringify(DATA),
  headers: {
    "Authorization":"Bearer " + ACCESS_TOKEN,
    "Content-Type":"application/json"
  },
  success: (data) => {
    folder.append('<ol>');
    for(var i = 0; i < data.entries.length; i++){
      var name = data.entries[i].name;

      folder.append('<li class="item item-' + i + '">' + name + '</li>');
      $('.item-' + i).click(function(){
        console.log('ok ' + i);
      });
    }
    folder.append('</ol>');
  }
  //error: (err) => console.log(err),
});

