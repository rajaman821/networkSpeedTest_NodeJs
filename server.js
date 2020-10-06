// import NetworkSpeed = require('network-speed'); // ES6
const express = require("express");
const app = express();
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://www.backblaze.com/blog/megabits-vs-megabytes/';
    const fileSizeInBytes = 50000000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(speed);
}

setInterval(function () { getNetworkDownloadSpeed(); }, 3000);

app.listen(3000, function () {
    console.log("Node server listening on port 3000");
});