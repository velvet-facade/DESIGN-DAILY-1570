const projectInfo = await fetch(
  "https://uidesigndaily.com/posts/figma-cards-card-day-1570"
);

const mailBtn = Document.getElementById("mailbtn");

mailBtn.addEventListener("click", openMail());

async function openMail() {
   const content = await Window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=ananyakannan1502@gmail.com"
  );
  content.Document.write(<p>Your message here:</p>)
}
