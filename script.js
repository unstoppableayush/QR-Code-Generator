
let submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let website = document.getElementById("website").value;
    if(website){
        let qrcodeContainer = document.querySelector(".qrcode");
        qrcodeContainer.innerHTML="";
        let qrImage = new QRCode(qrcodeContainer,website);
        console.log(qrImage);

        // Display QR Code Container
        document.querySelector(".qrcode-container").style.display ="block";
        document.querySelector(".download").style.display ="block";
    }
    else{
        alert("Please enter a valid URL !")
    }
})

let downloadBtn = document.querySelector('.download');
downloadBtn.addEventListener('click',()=>{
    let downloadLink = document.querySelector(".download");
    let qrcodeContainer = document.querySelector(".qrcode");
    downloadLink.href = qrcodeContainer.querySelector('canvas').toDataURL(); // Convert canvas to data URL
    downloadLink.download = 'qrcode.png'; // Set filename for downloaded image
    downloadLink.click();
})
