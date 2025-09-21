# 🛒 E-commerce Backend (NestJS + Prisma + PostgreSQL)

## 📌 Loyihaning qisqacha tavsifi
Ushbu loyiha **E-commerce (onlayn do‘kon) tizimi** uchun tayyorlangan backend bo‘lib, **NestJS**, **Prisma ORM** va **PostgreSQL** asosida yozilgan.  

Loyihada **authentication**, **relation’lar (aloqalar)** va **transaction’lar** qanday ishlashini ko‘rsatib beradi.  

Ma’lumotlar bazasi sxemasi **one-to-one**, **one-to-many** va **many-to-many** aloqalarni o‘z ichiga oladi. Shuningdek, unda **avtomatik yaratiladigan** va **qo‘lda yaratiladigan** junction table’lar ham mavjud.  

---

## 🚀 Asosiy imkoniyatlar
- **Foydalanuvchi va Profil boshqaruvi**
  - `User` va `Profile` o‘rtasida **1:1 aloqa**.
  - Parollar xavfsiz saqlanadi.
- **Mahsulotlar va Kategoriyalar**
  - **M:N aloqa** (automatic junction table).
- **Buyurtmalar va Buyurtma elementlari**
  - `Order` va `OrderItem` o‘rtasida **1:N aloqa**.
  - `OrderItem` qo‘lda yaratilgan jadval bo‘lib, qo‘shimcha `quantity` maydoniga ega.
- **Vaqtni avtomatik yozish**
  - `orderDate` buyurtma yaratilgan vaqtni avtomatik yozib boradi.
- **Transaction’lar**
  - Bir nechta mahsulotni bitta buyurtmaga qo‘shishda transaction ishlatiladi.
- **Toza arxitektura**
  - Modulga bo‘lingan struktura.

---

## 📂 Ma’lumotlar bazasi sxemasi

- `User` ↔ `Profile` → **1:1 aloqa**  
- `User` ↔ `Order` → **1:N aloqa**  
- `Product` ↔ `Category` → **M:N aloqa (avtomatik junction table)**  
- `Order` ↔ `OrderItem` ↔ `Product` → **M:N aloqa (qo‘lda junction table, quantity bilan)**  

---

## 🛠️ Texnologiyalar
- **Backend Framework:** NestJS  
- **ORM:** Prisma  
- **Ma’lumotlar bazasi:** PostgreSQL  
- **Tili:** TypeScript  

---

## 📦 O‘rnatish

```bash
# Repozitoriyani klonlash
git clone https://github.com/your-username/ecommerce-backend.git

# Kutubxonalarni o‘rnatish
npm install

# Prisma migratsiyalarini ishlatish
npx prisma migrate dev

# Dastur serverini ishga tushirish
npm run start:dev
