# Azure Translate API

Welcome to my final project for ITIS 6177. This project serves as an API connecting you, the user, to Microsoft Azure's Translator API, providing an intuitive and seamless design.

Live API link: http://172.190.81.205:8080/api

## Features 

The three functionalities built into my API are: language list, detect language, and translate.

- Language list returns a JSON of all possible translatable languages that Azure Translate supports, along with their 2 character language code. This functionality can be found by simply clicking the button labeled "See Available Languages" on the landing page of my API.

- Detect language returns a JSON with the 2 character language code corresponding to the language of any inputted text. Azure also includes the confidence score of the detected language, whether translation with that language is supported, and whether transliteration is supported. This functionality can be demonstrated by entering text into the first text box and clicking the button labeled "Detect Language" on the landing page of my API.

- Translate returns a JSON with the translation of user inputted text into the language of their choice. The JSON will show first the detected input language, including the 2 character language code of the input language and the confidence score of the language detection, followed by the translation text and the 2 character language code of the generated translation. This functionality can be demonstrated by entering text to translate into the input text box, entering a 2 character language code to translate the text to in the second input text box, and clicking the "Translate" button on the landing page of my API.

## Dependencies 

- Node.js
- Azure Cognitive Services (API Key and Endpoint)
- Azure App Service (Optional)
- Postman (Optional)

## Local Usage

```
[ ] clone the git repository
[ ] run command 'npm i'
[ ] run command 'node app.js'
```  

## Endpoints

-----------
|Endpoint | Description|
|----------------------|
|```GET /languages``` | Returns list of languages the API supports |
|```GET /translate``` | Translate specified text into target language |
|```GET /detect``` | Identify the source language of specified text |
----------------
