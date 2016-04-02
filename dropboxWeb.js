const ACCESS_TOKEN = 'JavJ9PXXF9AAAAAAAAAANxVl8bfZOzTXUuxo3eyXoVKY14lXMl63HS0dpPVDyLzC'
const DATA = {
  "path": "/IntroB_",
  "recursive": false,
  "include_media_info": false,
  "include_deleted": false
}

$.ajax({
  type: 'post',
  url: 'https://api.dropboxapi.com/2/files/list_folder',
  data: JSON.stringify(DATA),
  headers: {
    "Authorization":"Bearer " + ACCESS_TOKEN,
    "Content-Type":"application/json"
  },
  //success: (data) => console.log(data.entries[1]),
  success: (data) => {
    for(var i = 0; i < data.entries.length; i++){
      $('.folder').append(data.entries[i].name + '<br />');
    }
  }
  //error: (err) => console.log(err)
})

