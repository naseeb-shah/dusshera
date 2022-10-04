
var arr=['https://media.istockphoto.com/vectors/happy-dussehra-banner-vector-id1272554142?k=20&m=1272554142&s=612x612&w=0&h=AaffI8aN69tsu9ybkbGKsVLqkvPfgFLJcpl83sgO2xI=',

'https://funkylife.in/wp-content/uploads/2021/09/dussehra-images-26.jpg',
'https://i.pinimg.com/736x/34/09/47/340947f5e263586812c5ad834cf2246d.jpg',
'https://images.indianexpress.com/2020/10/dussehra-1200.jpg',
'https://imgk.timesnownews.com/story/cold_smooth_tasty._3_0.png',
'https://media.tenor.com/MGk72cZQHN8AAAAC/dussehra-dashera.gifhttps://media.tenor.com/MGk72cZQHN8AAAAC/dussehra-dashera.gif'
,
"https://media.tenor.com/1tePyB1WosMAAAAd/rawan-happy-dussehra.gif",
'https://img.freepik.com/free-vector/flat-dussehra-background_23-2149644821.jpg?w=2000',
'https://images1.livehindustan.com/uploadimage/library/2018/10/18/16_9/16_9_1/happy_dussehra_Dussehra_Dussehra_Ravan_Dussehra_2018__1539873128.jpg'
,

'https://c.ndtvimg.com/2018-10/5b6im0f_dussehra-2018_625x300_17_October_18.jpg']
var today=new Date()
console.log(today.getDate())
if(today.getDate()==5){
    var sai= document.querySelectorAll("img")
    console.log(sai)
    sai.forEach((e)=>e.style.display='none')
     sai= document.querySelectorAll("body")
    console.log(sai)
    sai.forEach((e)=>e.style.backgroundImage='none')

}
count=0
var img=  document.createElement('img')
setInterval(()=>{
  img.src=arr[count]
  count++
if(count==arr.length){
  count=0
}

},3000)
document.getElementById('ex').append(img)