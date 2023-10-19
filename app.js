let gems = ['ruby','sapphire','diamond','emerald'];
let animals = ['python','monkey','toucan','panda'];
let cars = ['maserati','mercedes','audi','mclaren'];
let colors = ['red','blue','yellow','green'];

function generator(gems,animals,cars,colors) {

    let newDomainName = [];

    gems.forEach((gem) => {
        animals.forEach((animal) => {
            cars.forEach((car) => {
                colors.forEach((color) => {
                    const domainName = `${gem}${animal}${car}${color}.com`;
                    newDomainName.push(domainName);

                    
                });
            });
        });
    });

    return newDomainName;
}

    const newUrl = generator(gems,animals,cars,colors);
    console.log(newUrl);