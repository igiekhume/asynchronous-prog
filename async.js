//Task 01: Iterating with Async/Await:
async function iterateWithAsyncAwait(values) {
    for await (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // delay for 1 second
    }
  }


  //Task 03: Handling Errors with Async/Await
  async function awaitCall(url) {
    try {
      const response = await axios.get(url);
      // Process the response data
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      // Log a user-friendly error message or fallback behavior
      return null; // or throw an error, rethrow, or handle in a different way
    }
  }



//Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      const response = await fetch('https://example-api.com/data'); // Replace with your API URL
      const data = await response.json(); // Parse JSON response
  
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }