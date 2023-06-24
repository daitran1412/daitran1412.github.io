if (sessionStorage.getItem("password") == null) {
  window.location.href = "/login.html";
}

window.onload = () => {
    fadeOut();
}

const typePassword = sessionStorage.getItem("password");
console.log(typePassword);
const tusu = document.querySelector(".tusu");
const xungho = document.querySelector(".xungho");
if (typePassword === "vye") {
  tusu.innerHTML = `
  <p>Thân gửi: Các đồng chí đã và đang là thành viên CLB Sự kiện Tuổi trẻ ĐHQGHN - VYE</p>
  <p>
      Sau 4 năm cày cuốc kiến thức đại học, 3 năm tham gia với các hoạt động của CLB cùng các anh
      chị, các bạn
      thành viên, chúng ta đã có những kỉ niệm đẹp, những người bạn thân thiết và những bài học
      quý báu.<br>
      Tuy nhiên, do bất ngờ có mặt trong danh sách tốt nghiệp của Hú, nên thành viên tiếp theo của
      hội người già
      xin phép tạm dừng cuộc hành trình này để chuyển bến sang một chặng đường mới.<br>
      Vì vậy, em / mình xin gửi lời cảm ơn chân thành đến các anh chị, các bạn đã đồng hành
      cùng em / mình trong suốt thời gian qua và kính mời các anh chị, các bạn đến dự buổi:
  </p>
  `;
  xungho.innerHTML = `
        Em / Mình rất mong được đón tiếp các anh chị, các bạn tại buổi lễ.
    `;
} else if (typePassword === "buihoai") {
  tusu.innerHTML = `
    <p>Thân gửi: bạn Bùi Thị Thu Hoài - cán bộ trong lòng người hâm mộ</p>
    <p>
        Thư này nói ít hiểu nhiều, vì dù dài dòng hay ngắn dòng thì mục đích chính vẫn là mời bạn ghé 
        qua bên Khoa Toán để:
    </p>
    `;
  xungho.innerHTML = `
        Rất mong được đón tiếp bạn tại buổi lễ.
    `;
} else if (typePassword === "nqt") {
  tusu.innerHTML = `
    <p>Thân gửi: bạn Nguyễn Quang Thành - bro Nhân Văn </p>
    <p>
        Quý bạn lắm nên tôi mới có thư riêng gửi riêng cho bạn đấy :>. Lâu rồi chưa nhắn nên không biết 
        bữa nào là bên bạn ra trường. Tôi biết bạn rất bận, nhưng tôi cũng mong bạn dành chút thời gian 
        để đến dự buổi lễ. Bận quá nhớ viết vài dòng nhá :> 
    </p>
    `;
  xungho.innerHTML = `
        Rất mong được đón tiếp bạn tại buổi lễ. 
    `;
} else if (typePassword === "gay") {
  tusu.innerHTML = `
    <p>Thân gửi: Các bro gay go</p>
    <p>
        Biết là mọi người đều đi cả, ai không đi thì sắp xếp nhé.
    </p>
    `;
  xungho.innerHTML = `
        Rất mong được đón tiếp các bro tại buổi lễ.
    `;
}

function loader() {
  document.querySelector(".loader-container").classList.add("off");
}

function fadeOut() {
  setInterval(loader, 2000);
}
