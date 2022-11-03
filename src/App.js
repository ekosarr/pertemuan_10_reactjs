import logo from './logo.svg';
import './App.css';
 
function App() {
 
    const userLogged = "eko";
    const userLoggedJSX = <strong>eko for future</strong>;
    
 
  return (
    <div className="Parentbox">
    <div className="Foto">
      <img src="ipon14.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">Iphone</p>
      <h1 className="Title"> Iphone 14 Pro</h1>
      <p className="Price">Rp 21.999.000</p>
      <p className="Info">
      Sekilas info tentang kami :
1. Brand new - Original - Segel
2. Garansi Resmi Apple 1 Tahun, Garansi Toko 7 Hari
3. Gratis Ongkir & Asuransi + Cashback up to 300rb + Bisa COD
4. Positif review 99 % dari 100 % kepuasan customer
5. Sudah melayani 100,000 ++ customer secara online
6. After sales yg siap melayani anda selama 24 jam

- RESELLER / DROPSHIPER Welcome
- SPECIALPRICE untuk repeat order
- Menerima pengadaan kantor atau perusahaan
- Kami memiliki offline store untuk pelayanan AFTERSALES
- Bisa self pickup di toko kami (Wajib Konfirmasi)

Varian :
- iBox : Apple Indonesia 1 Tahun
- Internasional : Apple International 1 Tahun ( Claim di IBOX/QCD/Mitracare Indonesia, Garansi IMEI 1 Tahun )


In the Box
iPhone with iOS 16
USB-C to Lightning Cable
Documentation
Lihat Lebih Sedikit

<h3 className="Color">Color</h3>
        <div className="Warna">
          <button className="Black"></button>
          <button className="Silver"></button>
          <button className="Gold"></button>
          <button className="Purple"></button>
        </div>
        <h3 className="Size">Varian</h3>
        <div className="Ukuran">
          <button className="S">128GB</button>
          <button className="M">256GB</button>
          <button className="L">512GB</button>
          <button className="XL">1TB</button>
        </div>
        <button className="Beli">Buy Now</button>
        <button className="Wish">Add To Wishlist</button>
      </p>
    </div>
   </div>

    
  );
}
 
export default App;
 
