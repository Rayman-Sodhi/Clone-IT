let oneim = document.getElementById('oneim')
let twoim = document.getElementById('twoim')
let threeim = document.getElementById('threeim')
let fourim = document.getElementById('imagefour')
let imageone = document.getElementById('imageone')
let imagetwo = document.getElementById('imagetwo')
let imagethree = document.getElementById('imagethree')
let contimageimp = document.getElementById('contimageimp')
let conta = document.getElementById('conta')
let lent = document.getElementById('lent')
let out = document.getElementById('out')
let nana = document.getElementById('nana')
let star = document.getElementById('st')
let price = document.getElementById('price')
let descters = document.getElementById('descters')
let imagerone = document.getElementById('imagerone')
let imagertwo = document.getElementById('imagertwo')

let data = JSON.parse(localStorage.getItem('ProductDetail'))

data.forEach((element) => {
  oneim.src = element.img1
  twoim.src = element.img2
  threeim.src = element.img3
  fourim.src = element.img4
  contimageimp.src = element.img1
  nana.innerHTML = element.name
  star.innerHTML = element.rating
  price.innerHTML = "MRP : ₹" + element.price
  descters.innerHTML = element.description

  conta.addEventListener('mouseover', () => {
    out.style.display = 'block'
    lent.style.backdropFilter = 'brightness(200%)'
    result.style.backgroundImage = `url(${contimageimp.src})`

    contimageimp.style.filter = 'brightness(50%)'
  })
  conta.addEventListener('mouseout', () => {
    out.style.display = 'none'
    lent.style.backdropFilter = ''
    contimageimp.style.filter = ''
  })
  imageone.addEventListener('mouseover', () => {
    contimageimp.src = element.img1
  })
  imagetwo.addEventListener('mouseover', () => {
    contimageimp.src = ' '
    contimageimp.src = element.img2
  })
  imagethree.addEventListener('mouseover', () => {
    contimageimp.src = ' '
    contimageimp.src = element.img3
  })
  imagefour.addEventListener('mouseover', () => {
    contimageimp.src = ' '
    contimageimp.src = element.img4
  })
})

const container = document.querySelector('.container')
const image = document.querySelector('.image')
const lens = document.querySelector('.lens')
const result = document.querySelector('.result')
const containerreact = container.getBoundingClientRect()
const imagereact = image.getBoundingClientRect()
const lensreact = lens.getBoundingClientRect()
const resultreact = result.getBoundingClientRect()

container.addEventListener('mousemove', zoomimage)

function zoomimage(e) {
  const { x, y } = getmousepos(e)
  lens.style.left = x + 'px'
  lens.style.top = y + 'px'
  let fx = resultreact.width / lensreact.width
  let fy = resultreact.height / lensreact.height

  result.style.backgroundSize = `${imagereact.width * fx}px ${
    imagereact.height * fy
  }px`
  result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`
}
function getmousepos(e) {
  let x = e.clientX - containerreact.left - lensreact.width / 2
  let y = e.clientY - containerreact.top - lensreact.height / 2

  let minX = 0
  let minY = 0
  let maxX = containerreact.width - lensreact.width
  let maxY = containerreact.height - lensreact.height
  if (x <= minX) {
    x = minX
  } else if (x >= maxX) {
    x = maxX
  }
  if (y <= minY) {
    y = minY
  } else if (y >= maxY) {
    y = maxY
  }

  return { x, y }
}
//   localStorage.removeItem("ProductDetail")





let getLocalAdress = JSON.parse(localStorage.getItem("MyNykaaAddress"))
let MyAkkilast = getLocalAdress[getLocalAdress.length-1]

let getpin = document.querySelector(".getpin")
getpin.textContent = MyAkkilast.Postel

let getaddresss = document.querySelector(".getaddresss")
getaddresss.textContent = MyAkkilast.Address.substring(0,30)

let daa = new Date()

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let getDat = document.querySelector(".getDat")
getDat.textContent = daa.getDate() + 7 + "th/" + month[daa.getMonth()].substring(0,3) 

localStorage.setItem("MyNykaaAddress" , JSON.stringify(getLocalAdress))



//ADD TO BAG

let AddtoBag_btn = document.querySelector(".AddtoBag_btn")
AddtoBag_btn.addEventListener("click" , fnAddtoBag_btn)

function fnAddtoBag_btn() {


  let getNykaCart = JSON.parse(localStorage.getItem("NykaaCart"))

  let dataa = JSON.parse(localStorage.getItem('ProductDetail'))
  let dataalast = dataa[dataa.length-1]

  getNykaCart.push(dataalast)

  localStorage.setItem("NykaaCart" , JSON.stringify(getNykaCart))

  localStorage.setItem("ProductDetail", JSON.stringify(dataa))



}


//ADD TO WISH

let add_hrt = document.querySelector(".add_hrt")

add_hrt.addEventListener("click" , fnAddTOWiSh)

function fnAddTOWiSh() {


    
  let getWishes = JSON.parse(localStorage.getItem("NykaaWish"))

  let dataa = JSON.parse(localStorage.getItem('ProductDetail'))
  let dataalast = dataa[dataa.length-1]

  getWishes.push(dataalast)

  localStorage.setItem("NykaaWish" , JSON.stringify(getWishes))

  localStorage.setItem("ProductDetail", JSON.stringify(dataa))

}