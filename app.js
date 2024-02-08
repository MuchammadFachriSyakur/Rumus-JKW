const hitungJarak = document.getElementById("H_JARAK");
const htiungWaktu = document.getElementById("H_WAKTU");
const htiungKecepatan = document.getElementById("H_KECEPATAN");

const jarak = document.getElementById("jarak");
const kecepatan = document.getElementById("kecepatan");
const waktu = document.getElementById("waktu");

hitungJarak.addEventListener("click", e =>{
  e.preventDefault();
  if(kecepatan.value === "" && waktu.value === ""){
    alert("Diisi Bang");
    return;
  }else{
    const ConveretNumberWaktu = Number(waktu.value);
    const ConveretNumberKecepatan = Number(kecepatan.value);
    const result = ConveretNumberKecepatan * ConveretNumberWaktu;
    document.querySelector("form .hasil").textContent = `Jarak adalah ${result} Kilometer`;
  }
});

htiungWaktu.addEventListener("click", e=>{
  e.preventDefault();
  if(kecepatan.value === "" && waktu.value === ""){
    alert("Diisi Bang");
    return;
  }else{
    const ConveretNumberJarak = Number(jarak.value);
    const ConveretNumberKecepatan = Number(kecepatan.value);
    const result = ConveretNumberJarak / ConveretNumberKecepatan;
    document.querySelector("form .hasil").textContent = `Waktu adalah ${result} Jam`;
  }
});

htiungKecepatan.addEventListener('click',e=>{
  e.preventDefault();
  if(kecepatan.value === "" && waktu.value === ""){
    alert("Diisi Bang");
    return;
  }else{
    const ConveretNumberJarak = Number(jarak.value);
    const ConveretNumberWaktu = Number(waktu.value);
    const result = ConveretNumberJarak / ConveretNumberWaktu;
    document.querySelector("form .hasil").textContent = `Kecepatan adalah ${result} km/jam`;
  }
});