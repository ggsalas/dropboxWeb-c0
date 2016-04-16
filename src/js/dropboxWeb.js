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
        var tag = data.entries[i][".tag"]; // file or folder

        folder.append('<li class="item item-' + i + '">' + name + '</li>');
        $('.item-' + i).click(function(){
          console.log('ok ' + i + ' ' + id);

          // IF IS FILE 
          if (tag == "file"){
            console.log("file");
            $.ajax({
              type: 'post',
              url: 'https://content.dropboxapi.com/2/files/download',
              headers: {
                "Authorization": "Bearer JavJ9PXXF9AAAAAAAAAAPoqOU7LbNmvriwVWJLuuJanA6Oh6uVLgfXNfm2PPUfv9",
                "Dropbox-API-Arg":{
                  "path": path,
                },
                success: (data) => {
                  window.location = data; // The file not open or save!!
                }
              },
            });
          
          // IF IS FOLDER
          } else if (tag == "folder"){
            console.log("folder");
            $.ajax({
              type: 'post',
              data: JSON.stringify({
                "path": path,
              }),
              url: 'https://api.dropboxapi.com/2/files/list_folder',
              headers: {
                "Authorization":"Bearer " + ACCESS_TOKEN,
                "Content-Type":"application/json"
              },
              success: (data) => {
                folder.html('');
                for(var i = 0; i < data.entries.length; i++){
                    (function(i){
                      var name = data.entries[i].name;

                      folder.append('<li class="item item-' + i + '">' + name + '</li>');
                      $('.item-' + i).click(function(){
                        console.log('ok ' + i + ' ' + id);
                      });
                    })(i)
                }
              }
            });
          } else {
            console.log('error ' + tag + name);
          }
        });
      })(i)


    }
    folder.append('</ol>');
    console.log(data.entries);
  }
  //error: (err) => console.log(err),
});

