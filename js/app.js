"use strict";

const contactButton = document.querySelector("[data-save-contact]");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function saveContact() {
  const vCard = [
    "BEGIN:VCARD", "VERSION:3.0", "FN:Khaled Elgafarey", "N:Elgafarey;Khaled;;;",
    "TEL;TYPE=CELL:+201010474002",
    "URL:https://mlthnrgev-cell.github.io/Eng-Khaled-Elgafarey-/index.html",
    "URL;TYPE=Facebook:https://www.facebook.com/share/1C6KMp8SJZ/",
    "URL;TYPE=Instagram:https://www.instagram.com/khaledelgafarey_",
    "URL;TYPE=TikTok:https://www.tiktok.com/@khaledelgafarey0",
    "NOTE:Electronics Student - Al-Suwaidi Technical Academy", "END:VCARD"
  ].join("\n");
  const fileUrl = URL.createObjectURL(new Blob([vCard], { type: "text/vcard;charset=utf-8" }));
  const downloadLink = Object.assign(document.createElement("a"), { href: fileUrl, download: "Khaled-Elgafarey.vcf" });
  document.body.append(downloadLink); downloadLink.click(); downloadLink.remove(); URL.revokeObjectURL(fileUrl);
  showToast();
}

contactButton?.addEventListener("click", saveContact);
