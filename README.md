# Iza Waffle - QR Menü Sitesi

Iza Waffle dükkanı için responsive, çok dilli QR menü web sitesi.

## Özellikler

- ✅ Tam responsive tasarım (mobil, tablet, masaüstü)
- ✅ Türkçe/İngilizce dil desteği
- ✅ Pembe tema tasarımı (Ekleristan sitesi benzeri)
- ✅ Modern ve kullanıcı dostu arayüz
- ✅ Hero video bölümü (giriş videosu)
- ✅ Sosyal medya ikonları (Instagram, Facebook, Twitter, TikTok, YouTube)
- ✅ Ürün görselleri (menü öğeleri için)
- ✅ Şubeler bölümü
- ✅ Kuruluş hikayesi ve tanıtım yazısı
- ✅ Google Maps entegrasyonu
- ✅ Smooth scroll animasyonları
- ✅ Logo desteği (placeholder dahil)
- ✅ Ekleristan sitesi ile uyumlu font ve renkler

## Dosya Yapısı

```
iza/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── logo.png            # Logo dosyası (eklemeniz gerekiyor)
├── hero-video.mp4      # Giriş videosu (eklemeniz gerekiyor)
├── hero-video.webm     # Giriş videosu (alternatif format)
├── images/             # Ürün görselleri klasörü
│   ├── cilekli-waffle.jpg
│   ├── muzlu-waffle.jpg
│   ├── cikolatali-waffle.jpg
│   ├── fistikli-waffle.jpg
│   ├── yaban-mersinli-waffle.jpg
│   └── bal-cevizli-waffle.jpg
└── README.md           # Bu dosya
```

## Kurulum

1. Tüm dosyaları bir klasöre kopyalayın
2. `logo.png` dosyasını ekleyin (60x60px önerilir)
3. `hero-video.mp4` dosyasını ekleyin (giriş videosu için)
4. `images/` klasörüne ürün görsellerini ekleyin
5. `index.html` dosyasını bir web tarayıcısında açın

## Özelleştirme

### Logo Ekleme
- `logo.png` dosyasını proje klasörüne ekleyin
- Logo yüklenemezse otomatik olarak "IW" placeholder gösterilir

### Giriş Videosu Ekleme
- `hero-video.mp4` dosyasını proje klasörüne ekleyin
- Video formatı: MP4 veya WebM
- Önerilen süre: 10-30 saniye
- Video yüklenemezse gradient arka plan gösterilir

### Ürün Görselleri Ekleme
- `images/` klasörüne aşağıdaki görselleri ekleyin:
  - `cilekli-waffle.jpg` (Çilekli Waffle)
  - `muzlu-waffle.jpg` (Muzlu Waffle)
  - `cikolatali-waffle.jpg` (Çikolatalı Waffle)
  - `fistikli-waffle.jpg` (Fıstıklı Waffle)
  - `yaban-mersinli-waffle.jpg` (Yaban Mersinli Waffle)
  - `bal-cevizli-waffle.jpg` (Bal ve Cevizli Waffle)
- Görsel yüklenemezse emoji placeholder gösterilir

### Sosyal Medya Linkleri
- `index.html` dosyasında sosyal medya linklerini bulun
- `href="#"` değerlerini gerçek linklerinizle değiştirin
- Header ve Footer'da sosyal medya ikonları bulunur

### Google Maps Ekleme
1. Google Maps'te adresinizi bulun
2. "Paylaş" butonuna tıklayın
3. "Haritayı yerleştir" sekmesini seçin
4. HTML kodunu kopyalayın
5. `index.html` dosyasındaki `<iframe>` etiketini bulun (satır ~150)
6. `src` attribute'unu kopyaladığınız kodla değiştirin

### Adres Bilgisi
- `index.html` dosyasında "Adres bilgisi buraya eklenecek" yazan yeri bulun
- Gerçek adres bilginizle değiştirin

### İletişim Bilgileri
- E-posta ve telefon numarasını `index.html` footer bölümünde güncelleyin

### Menü Öğeleri
- Menü öğelerini `index.html` dosyasındaki `.menu-item` bölümlerinde düzenleyebilirsiniz
- Fiyatları ve ürün isimlerini değiştirebilirsiniz
- Her menü öğesi için görsel ekleyebilirsiniz

### Şubeler Bölümü
- `index.html` dosyasında `.branches-section` bölümünü bulun
- Şube bilgilerini (isim, adres, telefon) güncelleyin
- Yeni şubeler ekleyebilir veya mevcut şubeleri kaldırabilirsiniz

### Kuruluş Hikayesi
- `index.html` dosyasında `.story-section` bölümünü bulun
- Kuruluş yılı ve yeri bilgilerini güncelleyin
- Hikaye metnini özelleştirebilirsiniz

## Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

## Notlar

- Site tamamen statik HTML/CSS/JavaScript ile çalışır
- Herhangi bir sunucu veya veritabanı gerektirmez
- Dil tercihi tarayıcı localStorage'ında saklanır

## Lisans

Bu proje Iza Waffle için özel olarak hazırlanmıştır.

