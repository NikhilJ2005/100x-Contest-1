// ques 7 Tansforming nested objects 
//OUTPUT:- {hello: { en: "Hello", fr: "Bonjour", es: "Hola" },bye: { en: "Goodbye", fr: "Au revoir" }}
const input = { 
  en: { hello: "Hello", bye: "Goodbye" }, 
  fr: { hello: "Bonjour", bye: "Au revoir" }, 
  es: { hello: "Hola" } 
};

const output = {};


for (const lang in input) {
 
  for (const key in input[lang]) {
  
    if (!output[key]) {
      output[key] = {};
    }
    output[key][lang] = input[lang][key];
  }
}

console.log(JSON.stringify(output, null, 2));