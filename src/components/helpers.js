import {apiKey} from "../config";

export const getDataFromNasa = async (url) => {
  return await fetch(`https://api.nasa.gov/mars-photos/api/v1/${url}api_key=${apiKey}`
  )
    .then(response => response.body)
    .then(rb => {
      const reader = rb.getReader();

      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({done, value}) => {
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }

          push();
        }
      });
    })
    .then(stream => {
      return new Response(stream, {headers: {"Content-Type": "text/html"}}).text();
    })
    .then(result => {
      return (JSON.parse(result));
    });
};
