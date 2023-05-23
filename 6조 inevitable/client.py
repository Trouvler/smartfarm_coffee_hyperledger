import socket
import time
import cv2
from imutils.video import VideoStream
import imutils
import imagezmq
 
sender = imagezmq.ImageSender(connect_to='tcp: //168.131.239.87:5555')
 
rpi_name = socket.gethostname() # send RPi hostname with each image
 
picam = VideoStream(usePiCamera=True).start()
time.sleep(2.0)  # allow camera sensor to warm up
 
while True:  # send images as stream until Ctrl-C
    image = picam.read()
    image = imutils.resize(image, width=640, height=640)
    sender.send_image(rpi_name, image)
    cv2.waitKey(1)