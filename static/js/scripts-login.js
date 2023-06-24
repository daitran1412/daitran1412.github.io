const loginBtn = document.querySelector("#btn-login");

loginBtn.addEventListener("click", (event) => {
  console.log("click");
  event.preventDefault();
  const password = document.querySelector("#password").value;

  if (password === "vye" || password === "buihoai" || password === "nqt" || password === "gay") {
    window.location.href = "/index.html";
    sessionStorage.setItem("password", password);
    console.log(sessionStorage);
  } else {
    const noti = document.querySelector(".noti");
    noti.style.display = "block";
    noti.style.color = "red";
    noti.innerHTML = "Mật khẩu không đúng";
  }
});



