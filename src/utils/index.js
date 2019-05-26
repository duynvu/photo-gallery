import uuid from "uuid";

export function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);

	var dataURL = canvas.toDataURL("image/png");

	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export async function getImageURL(result) {
	const data = new URLSearchParams();
	data.append("key", '574f905b2b826feaa3695c790aea666e');
	data.append("image", getBase64Image(result));
	const parsedData = JSON.stringify({
		key: '574f905b2b826feaa3695c790aea666e',
		image: localStorage.getItem("imgData"),
	});
	// console.log(parsedData);
	const rawResponse = await fetch(`https://api.imgbb.com/1/upload`, {
		method: 'post',
		body: data,
	})
	const response = rawResponse.json();
	// console.log(response);
	return response;
}

export function savePhotoToLocalStorage(name, description, url) {
	let photos = JSON.parse(localStorage.getItem("photos")) || [];
	const newPhoto = {
		id: uuid.v1(),
		name,
		description,
		url,
	}
	photos = [newPhoto, ...photos];
	console.log(photos);
	localStorage.setItem("photos", JSON.stringify(photos));
	console.log(JSON.parse(localStorage.getItem("photos")));
	return newPhoto
}

export function getPhotosFromLocalStorage() {
	let photos = JSON.parse(localStorage.getItem("photos")) || [];
	return photos;
}

export function saveTemporaryImage(result) {
	localStorage.setItem("imgData", result);
}

export function setIntitalPhotos() {
	const sampleData = [
		{
			id: uuid.v1(),
			name: 'Office',
			description: 'Office in the afternoon',
			url: "https://i.ibb.co/6Hf3XxK/pexels-photo-1963557.jpg",
		},
		{
			id: uuid.v1(),
			name: 'Mountain',
			description: 'This is a description',
			url: "https://i.ibb.co/VqFzJ0z/pexels-photo-2324562.jpg",
		},
		{
			id: uuid.v1(),
			name: 'Explore',
			description: 'This is a explore flag',
			url: "https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		},
		{
			id: uuid(),
			name: 'Leaf',
			description: 'Leaves',
			url: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		},
		{
			id: uuid(),
			url: 'https://images.pexels.com/photos/203088/pexels-photo-203088.jpeg?auto=compress&cs=tinysrgb&h=350',
			name: 'abc',
			description: 'abc'
		},
		{
			id: uuid(),
			url: 'https://images.pexels.com/photos/1599946/pexels-photo-1599946.jpeg?auto=compress&cs=tinysrgb&h=350',
			name: 'afiohaowiehfoah',
			description: 'ncaowjoef'
		},
		{
			id: uuid(),
			url: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&h=350',
			name: 'awrgar',
			description: 'aergaergqergq'
		},
		{
			id: uuid(),
			url: 'https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&h=350',
			name: 'qerg',
			description: 'qergergqerg'
		},
	]

	localStorage.setItem("photos", JSON.stringify(sampleData));
}

export function getRandomImages(quantity = 10) {

	const sampleData = [
		{
			id: uuid.v1(),
			name: 'Hang out with friends',
			description: 'Sitting on white mat on grass field',
			url: 'https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			id: uuid.v1(),
			name: 'Food photography',
			description: 'Flat-lay photography of vegetable salad on plate',
			url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'nature',
			description: 'Brown spider on leaf',
			url: 'https://images.pexels.com/photos/2317423/pexels-photo-2317423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

		},
		{
			id: uuid.v1(),
			name: 'In town',
			description: 'walk around',
			url: 'https://images.pexels.com/photos/2338113/pexels-photo-2338113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'Coffee time',
			description: 'holding ipad',
			url: 'https://images.pexels.com/photos/2309394/pexels-photo-2309394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'Family',
			description: 'happy together',
			url: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'Coast',
			discription: 'my hometown',
			url: 'https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: '10',
			discription: 'boy with camera',
			url: 'https://images.pexels.com/photos/2338044/pexels-photo-2338044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'Plant',
			discription: 'Cactus',
			url: 'https://images.pexels.com/photos/2292100/pexels-photo-2292100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: uuid.v1(),
			name: 'silverware',
			discription: 'meal',
			url: 'https://images.pexels.com/photos/2291591/pexels-photo-2291591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		}
	]

	return sampleData;
}
