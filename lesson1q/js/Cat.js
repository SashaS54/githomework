
class Cat extends Animal {
    whoSay = 'AGRH! say';
    constructor(options) {
        super(options)
        this.weight = options.weight;
    }
    get nameInfo() {
        super.nameInfo()
        return 'Cat name: '+ this.name;
    }
    get ageInfo() {
        return this.age*5;
    }
    set ageInfo(newAge) {
        super.ageInfo = newAge;
    }
    fullInfo = function($el) {
        let r = `
        <ul>
        <li>${this.name}</li>
        <li>${this.color}</li>
        <li>${this.ageInfo}years</li>
        <li>${this.weight}</li>
        </ul>
        `;
        $el.innerHTML = r;
    }
    animalSay() {
        return Cat.whoSay + this.name;
    }
}