'use strict';

const showImages = (images) => {
  images.forEach((image)=>{
   const lista = document.createElement('li');
   const figure = document.createElement('figure');
   const linkki = document.createElement('a');
   const figcaption = document.createElement('figcaption');
   const otsikko3 = document.createElement('h3');

   linkki.setAttribute('href',`img/original/${image.mediaURL}`);
   linkki.innerHTML = `<img src="img/thumbs/${image.mediaThumb}">`;

  figcaption.appendChild(otsikko3);
  figure.appendChild(figcaption);
  figure.appendChild(linkki);
  lista.appendChild(figure);

  const mainlist = document.querySelector('ul');
  mainlist.appendChild(lista);
  });
};



fetch('images.json').then((response)=>{
  //console.log(response);
  return response.json();
}).then((images)=>{
  showImages(images);
});











// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
