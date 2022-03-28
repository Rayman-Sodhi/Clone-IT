
import {Chat__BOX} from "../component/chatboxx.js"

let ForChatT = document.querySelector(".ForChatT")

ForChatT.innerHTML = Chat__BOX()

let HideChatBox___ = document.querySelector(".cl")
let ShowChatBox___ = document.querySelector(".chatbox")
ShowChatBox___.addEventListener("click" , exchat)
HideChatBox___.addEventListener("click" , clos)

function exchat()
{
  let explorechat = document.getElementById("explr");
  let chatbox = document.getElementById("cbt");
  explorechat.style.display ="block";
  chatbox.style.display = "none";

}

function clos()
{
  let explorechat = document.getElementById("explr");
  let chatbox = document.getElementById("cbt");
  explorechat.style.display ="none";
  chatbox.style.display = "block";



}