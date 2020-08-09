class Hero{
    constructor(name, hp, damage){
        this.name = name;
        this.damage = damage;
        this.hp = hp;
    }
    applyDamage(damage){
        this.hp -= damage; //this thằng Hero.applyDamage
    }
    attack(enemy){
        enemy.applyDamage(this.damage);//this thằng Hero.attack
    }
}
// const heroA = new Hero('Tinh',100,10);
// const heroB = new Hero('Bao', 50, 5);
// console.log({heroA,heroB});
// heroA.attack(heroB);
// console.log({heroA,heroB});

class RangeHero extends Hero{//subclass là RangeHero
    //nếu không có gì thay đổi thì không cần khai báo lại constructor
    //mà do có thêm thuộc tính range nên phải khai báo lại
    constructor(name, hp, damage, range){
        super(name, hp, damage); //super đại diện cho thằng Hero.
        //Khai báo lại để sử dụng được các thuộc tính của thằng Hero
        this.range = range;
    }
    attack(enemy){
        //vì đã overriding rồi nên
        //muốn sử dụng lại của thằng Hero mà không cần viết lại
        //thì cứ super mà dứt nhưng phải cùng method nha 3
        super.attack(enemy)
        this.hp += this.damage
    }
}
const heroA = new RangeHero('Tinh',100,10);
const heroB = new Hero('Bao', 50, 5);
console.log({heroA,heroB});
heroA.attack(heroB);
console.log({heroA,heroB});