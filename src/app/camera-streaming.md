From SO:

UV4L MMAL
Thanks to comment from @mpromonet for the update on the Linux-Projects V4L2 driver that now implements MMAL very efficiently - but it is still a work in progress.

Follow these instructions to install the linux-project repository and install the UV4L driver with extras. Then install the server and mjpeg. If you want, you can experiment with the others too.

After you install everything, you can access the HTTP server on port 8080. You should also check the /etc/uv4l/conf file and set if you want mjpeg or H.264 as it makes a difference, but you can adjust a few settings via the built-in web server.

HTML 5
This is what we were all waiting for (called WebRTC) and thanks to the new driver it works great (on a Raspberry Pi 2).

First, follow these steps, http://www.linux-projects.org/modules/sections/index.php?op=viewarticle&artid=14:

curl http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc | sudo apt-key add -

# Add the following line to the file /etc/apt/sources.list
# deb http://www.linux-projects.org/listing/uv4l_repo/raspbian/ wheezy main

sudo apt-get update
sudo apt-get install uv4l uv4l-raspicam

sudo apt-get install uv4l-raspicam-extras
Then on your Raspberry Pi 2 install this the WebRTC (for a Raspberry Pi 1, read the linked site for other options)

sudo apt-get install uv4l-webrtc
Restart all the drivers and go to

http://raspberry:8080/
You now have low-latency, high-quality video streaming direct into a modern browser like Chrome or Firefox. (Maybe Safari, but I can't check because they don't do Winblows any more and Internet Explorer... eh)

MJPEG
By default, it uses mjpeg at 1080p, and it's very sluggish. I tweaked it to 800x600 framesize and using something like iSpy to process video. For security, I get about 10 fps on a crisp video. It is way better than the 3 fps at 640x480 before this driver. It works on iPhone with Safari, Android Chrome and almost everything else.

http://raspberrypi:8080/stream/video.mjpeg

This also means that motion should (I still need to test and compare) work a lot better now. Make sure to set the configuration to use v4l2_palette 8 or v4l2_palette 2

H.264
This has now been fixed for "streaming", and we don't have to go to great lengths to watch H.264 video through VLC media player. The stream is sill RAW H.264, so you need to demux it or transcode/ encapsualte if you need it to work somewhere else. You should tweak the bitrate=xxxxxx in the configuration file if you are streaming over Wi-Fi.

In VLC media player, you must tell it that you want to use the H.264 demuxer. So if you're using the GUI, then make sure to add the argument :demux=264. From command line, vlc http.../video.h264 --demux h264. Otherwise, you will just see a blank screen even though the camera LED is turned on.

http://raspberrypi:8080/stream/video.h264

Voila! HD streaming with roughly 500 ms lag (with tweaking, down to 200 ms). It is definitely much easier than using the old methods. Quality and FPS is superb, but you can't embed this in HTML5 without transcodding to MP4 or WebM. I hope this will be implemented as it will truly make this a great standalone server.