let codes = document.querySelectorAll('.highlight > pre > code');
let countID = 0;
codes.forEach((code) => {

  code.setAttribute("id", "code" + countID);
  
  let btn = document.createElement('i');
  btn.className = "fa fa-clipboard btn-copy";
  btn.setAttribute("aria-hidden", "true");
  btn.setAttribute("title", "Copy to clipboard");
  btn.setAttribute("data-clipboard-action", "copy");
  btn.setAttribute("data-clipboard-target", "#code" + countID);
  
  let div = document.createElement('div');
  div.appendChild(btn);
  
  code.before(div);

  countID++;
}); 

let clipboard = new ClipboardJS('.btn-copy');
