for f in *; do pushd $f; magick image.jpg -thumbnail 512x512 512.jpg; magick image.jpg -thumbnail 1024x1024 1024.jpg; magick image.jpg -thumbnail 2048x2048 2048.jpg; popd; done
