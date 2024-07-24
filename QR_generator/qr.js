const input_type= document.querySelector("#qr_text");

const generate = document.querySelector("#generate_btn");

const download = document.querySelector("#download_btn");

const sizes = document.querySelector("#sizes");

const qrcontainer = document.querySelector(".qr_body");

 generate.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(input_type.value.length>0){
        generateQRcode();
    }
    else{
        alert("Please enter text to generate QR code");
    }

});

sizes.addEventListener("change", () => {
    if(input_type.value.length>0){
        generateQRcode();
    }
    else{
        alert("Please enter text to generate QR code");
    }
});

download.addEventListener("click", () => {
    let img = qrcontainer.querySelector(".qr_body img");

    if(img!==null){
        let imgatt = img.getAttribute("src");
        download.setAttribute("href", imgatt);
    }
    else{
        download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
        
    }
});

    function generateQRcode() {
        let size = sizes.value;

        qrcontainer.innerHTML = "";

        new QRCode(qrcontainer,{
            text: input_type.value,
            height: parseInt(size),
            width: parseInt(size),
            colorLight: "#fff",
            colorDark: "#000",
        });
    }