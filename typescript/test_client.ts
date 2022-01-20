import WebSocket from "ws";

const socket = new WebSocket("ws://0.0.0.0:8080");

socket.on("open", () => {
    sendMessage();
    console.log("open");
});

socket.on("message", (msg) => {
    console.log("message from server", msg.toString());
});

function wait(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
}

async function sendMessage() {
    socket.send("!join foo2");
    do {
        await wait(2000);
        socket.send("hello, server 3");
    } while (true);
}
