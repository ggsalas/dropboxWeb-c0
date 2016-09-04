export default class Disqus{
  static disqusDisplay(id){
    const root = document.getElementById(id);
    root.innerHTML = `
      <div class="container">
        <H2 class="text-center section-title">Chat</h2>
        <div id="disqus_thread"></div>
      </div>                                          
    `;
  }

  static _disqusJs(){
    var d = document, s = d.createElement('script');
    s.src = '//dropboxweb.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  constructor(root_id){
    Disqus.disqusDisplay(root_id);
    Disqus._disqusJs();
  }

}
