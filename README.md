Reşat Akkuş Kariyer Net Case Değerlendirmesi Üzerine

Öncelikle bu case'i gerçekten kısıtlı zamanda yaptığımı belirtmek isterim. Tüm maddelerin üstünden geçmeye çalıştım, zamanın yeteceği kadar component yapabilmeye çalıştım.
Case içinde verilen her şeyi ya da farklı araçlar ile de olsa defalarca yaptım.Fakat aynı zamanda mesaili bir işim var ve bazı talihsiz olaylar yaşadım.
Tabiki de daha fazla zaman olsaydı sitede gördüğüm her componenti ya da tasarımı birebir eklemek isterdim fakat case'in amacına uygun sekilde her seyi yapmaya calıstım.

Bir template-starter kullandım ve bunu olabildiğince sadelestirmeye çalıştım.Ufak birkaç sorun yaşadım, configlerle alakalı fakat hallettim.
Nuxt 3, Composition API, Pinia ve PrimeVue kullandım.
PrimeVue yerine Navie UI kullanacaktım fakat ufak sorunlar yaşadım, bunları çözmekle zaman kaybetmek yerine PrimeVue kullanmayı tercih ettim.

Component Base bir yapı kullanmaya çalıştım, componentleri uzun tutmadım. Akabinde çok fazla componente de ihtiyacım olmadı.
Kariyer.net is-ilanları ve is ilanı sayfasında gerekli componentleri ve aksiyonları yapmaya çalıştım. Header ve Footer bile yapamadım çünkü gerçekten kısıtlı bir vaktim vardı.

Routing yapısını istenildiği şekilde Nuxt/Pages ile sağladım.

Projeyi Github'a aktardım.
İlanlar içinde istenildiği üzere bazı anahtar kelimeler ve lokasyona göre iş ilanı listelenip card'a tıklandığında detayına gidilmektedir.
İlan listeleme de sayfalama yaptım fakat paginatorun tasarımı üzerinde çok durmadım.
Endpointler için mockapi.io servisini kullandım fakat free sürümde istenildiği gibi bir response yazamadım ve mock datalarla düzgünce oynayamadım fakat elimde sadece bu olduğu için bunu kullandım.
Api istekleri ve state management için Pinia kullandım.
Api istekleri için Environment variable kullanmış oldum.
Servisten cevap alınamadığı durumlarda bir Error Handling mekanizması kurdum.
Oluşturan her component için test yazamadım fakat 2 büyük component için Vitest kullanarak test yazdım.
Proje sayfalarını tasarlarken Kariyer.net'i kopyalamaya çalıştım.Mobil görünümün üstüne çok düşemedim, dediğim gibi zaman sorunu mevcuttu fakat düzgün görünmesini sağladım.



## Project setup and usage

Install node:

**Latest node LTS version required (18)**
Use node manager like **nvm** to install.

Install pnpm:
[https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Vitest test runner:

```
npx vitest dev
```

Build:

```
pnpm build
```

Start Production build:

```
pnpm start
```
