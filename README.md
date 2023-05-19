
<h1>Remove Geolocation from Image</h1>

<h3>Why we use this Code ?</h3>
<p>When an image is taken using a smartphone or camera certain metadata fields are often attached to it. These fields could include the model of the camera, the time it was taken, whether the flash was used, the shutter speed, focal length, light value and even the location. In Inturn, while uploading the image as a profile picture, the exif data is not stripped from images. The exif data in images contains sensitive data like Geoloacation, latitude, longitude, etc. Also it contains the camera information and other details. </p>

<h3>Tools Used: exiftool, http://exif.regex.info/exif.cgi Steps to</h3>

 

Steps TO reproduce:

1)Try to find an url which have tendency to upload an image

2)Then down load sample image which contain gps information

(you can downlaod  from here:  https://github.com/ianare/exif-samples/tree/master/jpg/gps)

3)Upload that image and try to get the url of that image

4)Now we need a tool to investigate or retrieve meta data information

https://jimpl.com/

4)just upload the uploaded image url and and click on view image datals