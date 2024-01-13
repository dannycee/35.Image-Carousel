// Get references to HTML elements
const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Get references to all image elements within the "imgs" container
const img = document.querySelectorAll("#imgs img");

// Initialize an index variable to track the current image
let idx = 0;

// Set up an interval to automatically transition to the next image every 2000 milliseconds (2 seconds)
let interval = setInterval(run, 2000);

// Define a function to run at each interval, incrementing the index and updating the displayed image
function run() {
  idx++;
  changeImage();
}

// Define a function to update the displayed image based on the current index
function changeImage() {
  // Check if the index exceeds the number of images, reset to the first image
  if (idx > img.length - 1) {
    idx = 0;
  }
  // Check if the index is less than zero, reset to the last image
  else if (idx < 0) {
    idx = img.length - 1;
  }

  // Update the transform property to display the corresponding image
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Define a function to reset the interval when manual navigation buttons are clicked
function resetInterval() {
  // Clear the existing interval
  clearInterval(interval);
  // Set up a new interval to continue automatic image transitions
  interval = setInterval(run, 2000);
}

// Add click event listeners to the right and left buttons
rightBtn.addEventListener("click", () => {
  // Increment the index and update the displayed image
  idx++;
  changeImage();
  // Reset the interval to maintain automatic transitions
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  // Decrement the index and update the displayed image
  idx--;
  changeImage();
  // Reset the interval to maintain automatic transitions
  resetInterval();
});
