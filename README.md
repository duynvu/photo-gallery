# Photo Gallery
*Nguyen Vu Duy*

## Introduction
My name is Nguyen Vu Duy. This is a take-home assignment for Holistics Interview for intern.
The requirement is building a simple photo gallery website. The duration for this assignment is three days. I choose React libray to do this project.
Github: [https://github.com/duynvu/photo-gallery/](https://github.com/duynvu/photo-gallery/).
Website: [https://photo-gallery-vuduy.herokuapp.com/](https://photo-gallery-vuduy.herokuapp.com/).
Email: [duynvu@gmail.com]()

## Requirement
- Photo: each photo contains: image, name, description. Photo can varies in size and ratio. The photos must always be displayed in original aspect ratio.
- Home page: the homepage list out the photos. It should have infinite scrolling feature. Clicking an image should display a modal (or a full photo details page) showing the image in larger size with title and description. User should be able to navigate between photos easily.
- Upload and edit: In edit mode, we only allow editing the name and the description of the photo. You can use whatever storage you like for storing photos such as: localStorage, online image hosting, etc.Users should see uploaded photos when re-visiting the site (unless they clear browser cookies/cache).
- Handle the image layout and infinite scrolling without using external libraries. Feel free to use external libraries for other parts of the project.
- Good UI/UX + aesthetics.
- Responsive on all screen sizes.

## Achievement and Issue
#### Homepage
![Homepage](https://i.ibb.co/gFGppGv/Screen-Shot-2019-05-26-at-4-22-57-PM.png)
* In this section, I decided to display in image in columns using property *column-count* in **CSS**, so I set media change *column-count* change from 3 to 1 depend on screen size by *@media*.
* Photo is scaled by 1.05 by hover, and the *cursor* change to "pointer".
* I save information of photos in localStorage in format *[{name, description, url}, ...]*. I choose this method to handle revisting page, so it can keep all the information or new edit.
* If photos or button "Upload" are clicked, there is a modal will pop up. In this feature, I use lib [react-modal](https://www.npmjs.com/package/react-modal) to handle modal.
* If users scroll down, the homepage will auto append more photos (inifinite scroll). In this feautre, I researched and tried many ways in pure CSS and Javscript but I still got trouble when detecting when I should push more photos. So I decided to use [external package](https://www.npmjs.com/package/react-infinite-scroll-component) to solve this problem because of limited time
#### Modal
* I use [react-modal](https://www.npmjs.com/package/react-modal) to have this feature.
* Modal is used for form(upload form) and displaying photo, so I have state **isUpload** to detect whether modal is used for form or photo.
#### Photo Modal
![](https://i.ibb.co/YWctVWQ/Screen-Shot-2019-05-26-at-4-35-12-PM.png)
* This component is displayed when photo is clicked.
* This component contains: image, name, description and two button to go to previous or next photo.
#### Upload Modal
![upload modal](https://i.ibb.co/pw1nbMd/Screen-Shot-2019-05-26-at-4-52-54-PM.png)
![upload modal filled](https://i.ibb.co/hRWZyhH/Screen-Shot-2019-05-26-at-4-53-29-PM.png)
* This component is displayed when the Upload button in the homepage is clicked.
* In this feature, I got trouble with how to upload image online, it takes me more than one day to solve. These are some methods I have tried:
    * Use online image hosting: Unsplash and PexelAPI. This method work well for crawling images, but it limited the number of request to 50 requests/hour. So it will lead to error if I test or the company test it after several requests.
    * Use localStorage: I converted the *<img>* into *base64* string to save it in localStorage. However, a localStorage have limited capacity.
    * Create my own backend to store image: I tried to save the image information to backend. However, I reasearched that Heroku only allow static server, it means I will fail if I try to save file to *public* folder or save it in text file.
    * So I decied to come back to online image hosting. I use [imgbb.com](https://imgbb.com/) to upload image. I call API to upload image and receive a JSON response containing the url of image. Then I store that url into localStorage. This solution works well for uploading. However, the image the API receive *base64* image. Therefore, when I use that image url, it return a small *base64* image. *Base64* image cannot be resize in *<img>*.
* In short, *upload image* feature is working but it return a *base64* image, small and cannot be resized.

#### utils
* This is a module I write for backend task.
* *getImageURL(img)*: it send API to host server ([imgbb.com](https://imgbb.com/)) and return to response.
* setIntitalPhotos(): set list of photos for first time visiting.
* getPhotosFromLocalStorage(): get the array of photos I save in *localStorage*.
* savePhotoToLocalStorage(name, description, url): save the new image to array of photo in *localStorage*.
#### Deployment
* I choose [Heroku](https://www.heroku.com/) to deploy this app.

## Improvement
* The *infinite scroll* have not been solved it, so I will spend more time to researched more. As it is the first problem, I had spent nearly one day to research but many tasks had not been done yet, so I decided to external and jump to next tasks.
* *Upload Image* feature still gets trouble. I will fix it in the future.
* Feature *Edit* have not been done yet. However, I believe that I can finish this feature if I have more time.

## Conslusion
* [Photo Gallery](https://photo-gallery-vuduy.herokuapp.com/) displays a homepage with many photos and can upload new image. I use *React hooks* to do this project.
* There are some problems need to be improved or finished: *infinite scroll*, *upload image*, *edit image*, *the layout of homepage*, etc.