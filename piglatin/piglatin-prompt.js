let main = require(`./script`);

const promptly = require('promptly');
 
(async () => {
    const name = await promptly.prompt(`Enter a word or phrase you would like translated into pig latin: `);
    main.pigLatinTranslator(name);

})();