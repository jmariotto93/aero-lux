# ✈️ E-commerce de Venda de Aviões

> ⚠️ Este projeto está atualmente em **desenvolvimento**. Funcionalidades podem mudar e ainda não está pronto para produção.

Este projeto é um e-commerce de venda de aviões, desenvolvido com **React**. O objetivo é criar uma aplicação moderna, interativa e **multilíngue**, permitindo aos usuários:

- Navegar pelos modelos de aviões disponíveis  
- Visualizar preços atualizados conforme a moeda do país selecionado  

---

## ⚙️ Tecnologias Utilizadas

- **React**: construção da interface e gerenciamento de componentes  
- **React i18next (i18n)**: tradução dinâmica do conteúdo para diferentes idiomas (pt, en, de, es, ru, zh)  
- **API ExchangeRate.host**: conversão de moedas em tempo real  

---

## 🌍 Funcionalidades

- Tradução automática ao selecionar o idioma via bandeira  
- Conversão automática de preços de acordo com a moeda local  

**Exemplo de conversão de moeda:**

| Base (USD) | Brasil (BRL) |
|------------|--------------|
| $6,500,000 | R$ 35,000,000 |

- Interface responsiva e intuitiva  ⚠️ em **desenvolvimento**.

---

## 💻 API de Conversão de Moeda

A aplicação utiliza a API pública: [ExchangeRate.host](https://exchangerate.host/documentation)  

Essa chamada busca a taxa de conversão atual entre a moeda base e a moeda destino, garantindo que os valores exibidos estejam sempre atualizados conforme o mercado.

---

## 🚀 Objetivo

O projeto foi criado para praticar:

- Internacionalização (i18n)  
- Consumo de APIs externas  
- Formatação dinâmica de valores monetários  
- Desenvolvimento de uma aplicação React moderna e interativa
