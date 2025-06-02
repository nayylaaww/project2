import React, { useState } from 'react';
import './GameInfo.css';
import { useNavigate } from 'react-router-dom';

function GameInfo() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); 

  const sections = [
    {
      title: 'Tentang Game',
      content: 'Algorithmics Universe adalah game edukatif berbasis logika dan pemrograman visual. Pemain akan mengontrol robot kecil untuk menyelesaikan tantangan menggunakan instruksi seperti berjalan, melompat, menyalakan lampu, dan mengulang perintah. Semua aksi dilakukan melalui sistem drag-and-drop layaknya blok pemrograman.'
    },
    {
      title: 'Instruksi berjalan maju ↑',
      content: 'Perintah ini digunakan untuk menggerakkan karakter maju satu langkah ke arah yang sedang dihadapinya saat ini. Arah hadap karakter dapat berubah tergantung perintah rotasi sebelumnya, sehingga langkah maju akan mengikuti orientasi terbaru.'
    },
    {
      title: 'Instruksi putar ke kiri ↶',
      content: 'Perintah ini membuat karakter berputar ke kiri (berlawanan arah jarum jam) sebesar 90 derajat dari arah hadapnya saat ini. Perintah ini tidak menggerakkan karakter maju atau mundur, hanya mengubah orientasi arah pandangnya. Sangat berguna saat ingin mengatur arah gerak selanjutnya.'
    },
    {
      title: 'Instruksi putar ke kanan ↷',
      content: 'Perintah ini membuat karakter berputar ke kanan (searah jarum jam) sebesar 90 derajat dari arah hadapnya saat ini. Perintah ini tidak menggerakkan karakter maju atau mundur, hanya mengubah orientasi arah pandangnya. Sangat berguna saat ingin mengatur arah gerak selanjutnya.'
    },
    {
      title: 'Instruksi melompat ⤒',
      content: 'Perintah ini membuat karakter melompat ke depan sejauh 1 tile, mengikuti arah hadapnya saat ini. Tidak seperti “berjalan” yang hanya bisa dilakukan di permukaan datar, melompat memungkinkan karakter naik 1 tingkat atau turun beberapa tingkat sekaligus (misalnya dari permukaan tinggi ke rendah).'
    },
    {
      title: 'Instruksi power ⚠︎ ⤒',
      content: 'Instruksi Power digunakan untuk menyalakan lampu yang berada tepat di bawah karakter. Saat karakter berdiri di atas tile lampu berwarna biru (lamp-off) dan menjalankan Power, maka lampu akan menyala berubah menjadi warna kuning terang (lamp-on)'
    },
    {
      title: 'Instruksi mengulang',
      content: 'Instruksi pengulangan adalah instruksi khusus yang dapat digunakan untuk mengulang beberapa instruksi sejumlah kali tertentu. Instruksi pengulangan memiliki bingkai khusus tempat Anda dapat menghapus instruksi dari daftar instruksi. Instruksi ini juga memiliki penghitung tempat Anda dapat menentukan berapa kali instruksi dalam instruksi pengulangan akan diulang.'
    },

  ];

  return (
    <div className="game-info-container">
      <div className="logo">
        <img src="/logo.png" alt="logo-img" />
      </div>

      <button className="close-btn-home" onClick={() => navigate('/')}>🏠︎</button>

      <div className="tab-list">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h2>{sections[activeIndex].title}</h2>
        <p>{sections[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default GameInfo;
