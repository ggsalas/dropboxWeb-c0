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


      (function(i){
        var name = data.entries[i].name;
        var id = data.entries[i].id;
        var path = data.entries[i].path_lower;

        folder.append('<li class="item item-' + i + '">' + name + '</li>');
        $('.item-' + i).click(function(){
          console.log('ok ' + i + ' ' + id);

          // TODO: if is folder, open...

          $.ajax({
            type: 'post',
            url: 'https://content.dropboxapi.com/2/files/download',
            headers: {
              "Authorization":"Bearer " + ACCESS_TOKEN,
              "Dropbox-API-Arg":{
                "path": path,
              },
            },
         
          });
        });
      })(i)


    }
    folder.append('</ol>');
    console.log(data.entries);
  }
  //error: (err) => console.log(err),
});

