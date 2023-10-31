document.addEventListener("DOMContentLoaded", () => {
  let author = document.getElementById("author");
  let content = document.getElementById("content");
  let description = document.getElementById("description");
  let publishedAt = document.getElementById("publishedAt");
  let search = document.getElementById("search");
  let search_btn = document.getElementById("search_btn");
  let img = document.getElementById("img");
  let Home = document.getElementById("Home");
  let Sports = document.getElementById("Sports");
  let Politics = document.getElementById("Politics");
  let Education = document.getElementById("Education");
  console.log(author, content, description, publishedAt);
  search_btn.addEventListener("click", () => {
    let search = document.getElementById("search").value;
    console.log(search);
    news(search);
  });

  async function news(search = "cricket") {
    try {
      let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=90704232e3884d258bac45cec4c2469a`;
      console.log(search);
      const response = await fetch(url);
      console.log(response);
      let data = await response.json();
      console.log(data);
      let data1 = data.articles.map((e) => {
        return `
         <main>
         <div class='container'>
         <img src="${e.urlToImage}"  alt="" id="img" />
         <h3>${e.title}</h3>
          <p>${e.author}</p>
          <p>${e.content}</p>
          <p>${e.description}</p>
          <button id="read_more">read more</button>
          
         </div>

         </main>
         `;
        // <h2>${e.publishedAt}</h2>;
      });
      author.innerHTML = data1;
    } catch (error) {
      console.log(error);
      alert("error");
    }
  }
  // let read_more = document.getElementById("read_more");
  // console.log(read_more);
  // read_more.addEventListener("click", () => {
  //   author.style = `background-color:red`;
  // });
  let read_more_buttons = document.querySelectorAll("#read_more");

  read_more_buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Here you can apply the style or perform any action for each "read more" button
      button.parentElement.style.backgroundColor = "red";
    });
  });
  Home.addEventListener("click", (e) => {
    news("karnataka");
  });
  Sports.addEventListener("click", (e) => {
    news("sports");
  });
  Politics.addEventListener("click", (e) => {
    news("Politics");
  });
  Education.addEventListener("click", (e) => {
    news("Education");
  });
});
