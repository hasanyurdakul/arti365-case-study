# Artı365 Case Study

## İçindekiler

- [Giriş](#giriş)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Kurulum Talimatları](#kurulum-talimatları)
- [Uygulamayı Çalıştırma](#uygulamayı-çalıştırma)

## Giriş

"Employee" modeli üzerinde, basit CRUD işlemlerinin yapılabildiği bir uygulamadır.

## Kullanılan Teknolojiler

### Client

- React
- React Router Dom
- React Toastify
- Axios
- MUI
- Tailwind
- Formik
- Yup

### Server

- ASP.NET Core

## Kurulum Talimatları

1. Repoyu klonlayın:

   ```bash
   git clone https://github.com/hasanyurdakul/arti365-case-study.git
   ```

2. Client için gerekli dependency'leri kurun:

   ```bash
   # For client
   cd client
   npm install
   ```

3. 5082 portunuz doluysa, client'ın root directory'sinde bulunan .env dosyasına, server'ın çalıştığı port adresini girin:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5082/api
   ```

## Uygulamayı Çalıştırma

### Client

```bash
cd client
npm start
```

### Server

```bash
cd server
dotnet run --project ./Arti365.Case.Server.API
```
