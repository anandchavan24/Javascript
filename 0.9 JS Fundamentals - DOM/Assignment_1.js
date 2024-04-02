// Assignment
// 1> Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript

// I have attched the video .

// document.querySelectorAll('p').forEach(p => {
//     p.textContent = "How's the Josh?";
// });



// 2> ● Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x

// Wait for the video to load
// window.onload = function () {
//     // Select the video element
//     const video = document.querySelector('video');
//     console.log(video)

//     // Create a button
//     const button = document.createElement('button');
//     button.id = 'changeSpeedButton'
//     button.textContent = 'Change Playback Speed to 10x';

//     // Add click event listener to the button
//     button.addEventListener('click', function () {
//         video.playbackRate = 10;
//     });
//     video.playbackRate = 10;

//     // Append the button to the page
//     document.body.appendChild(button);
// };

// // Create a button element
// const button = document.createElement('button');
// button.textContent = '10x';
// button.style.position = 'fixed';
// button.style.top = '10px';
// button.style.left = '10px';
// button.style.zIndex = '9999';

// // Add click event listener to the button
// button.addEventListener('click', () => {
//   const video = document.querySelector('video');
//   if (video) {
//     video.playbackRate = 10;
//   }
// });

// // Append the button to the document body
// document.body.appendChild(button);

// ● Create a form to submit a blog to a mock API (reqres.in)

// Attach code in index.html

// ● Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)

//  Attach code in index2.html