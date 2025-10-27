# Cebeci Emlak Web Sayfası

## Özellikler

- 🏠 Modern ve şık tasarım
- 📱 Responsive (mobil uyumlu)
- 🖼️ Geçişli arka plan görselleri
- 🔗 İki ana buton:
  - **İlanlarımız**: Sahibinden.com linki
  - **Yayında Olmayan İlanlar**: WP Business Katalog linki
- ✨ Yumuşak animasyonlar ve geçişler

## Kurulum

1. Tüm dosyaları bir dizine kopyalayın
2. `index.html` dosyasını web tarayıcıda açın

## Dosya Yapısı

- `index.html` - Ana HTML dosyası
- `styles.css` - CSS stilleri
- `script.js` - JavaScript fonksiyonları

## Link Güncellemeleri

Link güncellemeleri için `index.html` dosyasında şu satırları düzenleyin:

```html
<!-- Sahibinden.com linki -->
<a href="https://www.sahibinden.com/YOUR_USERNAME" target="_blank" ...>

<!-- WP Business Katalog linki -->
<a href="https://YOUR_CATALOG_URL" target="_blank" ...>
```

## Özelleştirme

### Arka Plan Görsellerini Değiştirme

`index.html` dosyasında, `.slide` div'lerinin `style` özelliklerindeki URL'leri değiştirin:

```html
<div class="slide active" style="background-image: url('YOUR_IMAGE_URL')"></div>
```

### Renkleri Değiştirme

`styles.css` dosyasında şu değişkenleri düzenleyebilirsiniz:

- `.button-primary` - İlk butonun rengi
- `.button-secondary` - İkinci butonun rengi
- `.overlay` background - Arka plan kararma efekti

## Geliştirici Notları

- Sayfa 2001'den beri emlak işinde olduğunuzu vurgular
- Arka plan görselleri otomatik olarak 5 saniyede bir değişir
- Modern glassmorphism ve animasyon efektleri kullanılmıştır

