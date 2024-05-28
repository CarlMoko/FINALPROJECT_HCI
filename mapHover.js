
let mapMain = document.getElementById('mapHack');
let areas = mapMain.getElementsByTagName('area');
let mainContainer = document.getElementById('mainSection');
let currentImage = null;

let Malawaan = 'pics/cropped-malawaan1.jpg'
let Boardwalk = 'pics/cropped-board4.jpg'
let MoonBayMarina = 'pics/cropped-moonbay5.jpg'
let AyalaMalls = 'pics/cropped-ayala.jpg'
let Seafront = 'pics/seafront.jpg'
let Pamulaklakin = 'pics/cropped-pamu1.jpg'
let ElCavallo = 'pics/cropped-kabayo2.jpg'
let allhands = 'pics/cropped-image_all/png'
let OceanAdventure = 'pics/cropped-ocean3.jpg'
let Zoobic = 'pics/cropped-image_zoo.png'

for (let i = 0; i < areas.length; i++) {
    const element = areas[i];
    element.addEventListener('pointerenter', (event) => {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        // console.log('Mouse entered at position: X=' + mouseX + ', Y=' + mouseY);
        // console.log(element.alt)
        if (element.alt === 'Malawaan') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-malawaan1.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'Boardwalk') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-board4.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'MoonBayMarina') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-moonbay5.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'AyalaMalls') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-ayala.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'Seafront') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/seafront.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'Pamulaklakin') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-pamu1.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'ElCavallo') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-kabayo2.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'allhands') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-image_all.png', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'OceanAdventure') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-ocean3.jpg', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }

        if (element.alt === 'Zoobic') {
            if (!currentImage) {
                currentImage = displayImageInDiv('images/cropped-image_zoo.png', 'mainSection',200, 200);
            }
            updateImagePosition(currentImage, mouseX, mouseY);
        }
        
    });
}

mapMain.addEventListener('mouseleave', () => {
    if (currentImage) {
        currentImage.remove();
        currentImage = null;
    }
});

function displayImageInDiv(imgSrc, divId, width, height) {
    var container = document.getElementById(divId);
    var img = new Image();
    img.src = imgSrc;
    img.style.position = 'absolute';
    img.width = width; // Set the width of the image
    img.height = height; // Set the height of the image
    img.classList.add('pointerEvent')
    container.appendChild(img);
    return img;
}

function updateImagePosition(img, xCoord, yCoord) {
    img.style.left = (xCoord - 100) + 'px';
    img.style.top = (yCoord - 100) + 'px';
}
