let currentImages = {"head": 1, "body": 1, "legs": 1};
function swapBodyPart(id, offset) {
    currentImages[id] += offset;
    currentImages[id] > 4 ? currentImages[id] = 1 : currentImages[id] < 1 ? currentImages[id] = 4 : null;
    document.getElementById(id).src = `img/${id}${currentImages[id]}.png`;
};
function toggleVisibility(id) {
    document.getElementById(id).classList.toggle("block");
};