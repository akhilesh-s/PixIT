

//effects
document.addEventListener("click", e=>
{
  if(e.target.classList.contains("vin-btn"))
  {
    Caman("#output", function()
    {
      this.vintage().render();
    });
  }
  else if(e.target.classList.contains("lom-btn"))
  {
    Caman("#output", function()
    {
      this.lomo().render();
    });
  }
  else if(e.target.classList.contains("clr-btn"))
  {
    Caman("#output", function()
    {
      this.clarity().render();
    });
  }
  else if(e.target.classList.contains("hda-btn"))
  {
    Caman("#output", function()
    {
      this.hazyDays().render();
    });
  }
  else if(e.target.classList.contains("nos-btn"))
  {
    Caman("#output", function()
    {
      this.nostalgia().render();
    });
  }
  else if(e.target.classList.contains("pin-btn"))
  {
    Caman("#output", function()
    {
      this.pinhole().render();
    });
  }
  else if(e.target.classList.contains("gru-btn"))
  {
    Caman("#output", function()
    {
      this.grungy().render();
    });
  }
  else if(e.target.classList.contains("lov-btn"))
  {
    Caman("#output", function()
    {
      this.love().render();
    });
  }
  else if(e.target.classList.contains("sun-btn"))
  {
    Caman("#output", function()
    {
      this.sunrise().render();
    });
  }
});
 
//Display Image
var openFile = function(event)
{
  var input =event.target;
  var reader = new FileReader();
  reader.onload = function()
  {
    var data= reader.result;
    var output = document.getElementById("output");
    output.src = data;
  };
  reader.readAsDataURL(input.files[0]);
} 

//reset

const reset = document.getElementById("reset");
if(reset)
{
reset.addEventListener("click", function()
{
  Caman("#output", function()
  {
    this.revert()
  });
});
}
//download
const down = document.getElementById("download");

//var fileName = document.getElementById("customFile").files[0].name;
if(down){
down.addEventListener("click", function(){
  const fileExtension = fileName.slice(-4);
  console.log(123);
  //check Image Type
  /*if(fileExtension===".jpg" || fileExtension===".png")
  {
    var newFileName = fileName.substring(0, fileName.length,-4)+ "-edited.jpg";
  }*/
  download(output, newFileName);
});
}
function download(output, newFileName)
{
  var e;
  var link = document.createElement("a");

  link.download = fileName;
  link.href=outpu.toDataURL("image/jpeg", 0.8);

  e = new MouseEvent("click");

  link.dispatchEvent(e);

}
