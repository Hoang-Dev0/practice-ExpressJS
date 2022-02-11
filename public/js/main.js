let currentPage = 0;

const loadPage = (page) => {
  currentPage = page;
  $.ajax({
    url: `./users?page=${page}`,
    type: "GET",
  })
    .then((data) => {
      $("#content").html("");
      for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        const li = $(`<h1>${element.username} : ${element.password}</h1>`);
        $("#content").append(li);
      }
    })

    .catch((err) => {
      console.log("API bi loi");
    });
};

const nextPage = () => {
  currentPage++;
  $.ajax({
    url: `./users?page=${currentPage}`,
    type: "GET",
  })
    .then((data) => {
      $("#content").html("");
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const li = $(`<h1>${element.username} : ${element.password}</h1>`);
        $("#content").append(li);
      }
    })

    .catch((err) => {
      console.log("API bi loi");
    });
};
const prevPage = () => {
  currentPage--;
  $.ajax({
    url: `./users?page=${currentPage}`,
    type: "GET",
  })
    .then((data) => {
      $("#content").html("");
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const li = $(`<h1>${element.username} : ${element.password}</h1>`);
        $("#content").append(li);
      }
    })

    .catch((err) => {
      console.log("API bi loi");
    });
};
