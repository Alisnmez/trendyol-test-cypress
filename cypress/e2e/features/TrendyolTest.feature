Feature: Trendyol alışveriş testi

Scenario: Ürün ekleme ve kontrol
  Given "trendyolHomePageURL" sayfasina gidilir
  Then "closeModal" objesine tiklanir
  Then "Elektronik" objesine hover yapilir
  Then "Bilgisayar" objesine tiklanir
  Then "onerilenSiralama" objesine tiklanir
  Then "enYuksekFiyat" objesine tiklanir
  Then beklenir
  Then "ilkUrun" objesine tiklanir ve yeni sayfaya gidilir
  Then "sepeteEkleMetni" objesinin gorunur olmasi beklenir
  Then "sepeteEkle" objesine tiklanir
  Then bir onceki sayfaya gidilir
  Then "ikinciUrun" objesine tiklanir ve yeni sayfaya gidilir
  Then "sepeteEkleMetni" objesinin gorunur olmasi beklenir
  Then "sepeteEkle" objesine tiklanir
  Then "sepetim" objesine tiklanir
  Then "urunSil" objesine tiklanir
  Then "sepetGuncellendiMetni" objesinin gorunur olmasi beklenir
  Then "kargoBedavaMetni" objesinin gorunur olmasi beklenir
  Then beklenir
  Then "siparisOzeti" ve "toplam" degerleri karsilastirilir
  Then "sepetiOnayla" objesine tiklanir
  Then "uyeOlmadanDevamEtMetni" objesinin gorunur olmasi beklenir
  Then "uyeOlmadanDevamEt" objesine tiklanir
  Then "adresEkleMetni" objesinin gorunur olmasi beklenir
  Then "eposta" objesine "dummyEposta" yazilir 
  Then "adInput" objesine "ad" yazilir 
  Then "soyadInput" objesine "soyad" yazilir 
  Then "telefonInput" objesine "telefon" yazilir 
  Then "ilButton" objesine tiklanir
  Then beklenir
  Then "secilenil" objesine tiklanir
  Then beklenir
  Then "ilceButton" objesine tiklanir
  Then beklenir
  Then "secilenilce" objesine tiklanir
  Then beklenir
  Then "mahalleButton" objesine tiklanir
  Then beklenir
  Then "secilenMahalle" objesine tiklanir
  Then "textAreaAdress" objesine "adress" yazilir 
  Then "textAreaAdressBaslik" objesine "adressBaslik" yazilir
  Then "kaydetButton" objesine tiklanir
  Then "epostaDogrulama" objesinin gorunur olmasi beklenir

