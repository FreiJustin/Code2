namespace Farm{
    export class Animal{
        type:string;
        sound:string;
        foodtype:string;
        foodamount:number=100;
        name:string;

        constructor(_type:string, _sound:string, _food:string, _name:string){
            this.set(_type, _sound, _food, _name);
        }

        set(_type:string, _sound:string, _food:string, _name:string):void{
        this.type = _type;
        this.sound = _sound;
        this.foodtype = _food;
        this.name = _name;
        }

        eat(_element:HTMLElement):void{
            const para: HTMLParagraphElement = document.createElement("p");
            this.foodamount -= 25;
            para.innerHTML = this.name + " ate their " + this.foodtype + " and has " + this.foodamount + "% left";
            _element.appendChild(para);
            if(this.foodamount <= 0){
                this.refill(para);
            }
        }

        refill(_element:HTMLElement):void{
            const para: HTMLParagraphElement = document.createElement("p");
            para.innerHTML = "Old MacDonald refilled the food of " + this.name;
            _element.appendChild(para);   
        }

        sing(_element:HTMLElement):void{
            const para: HTMLParagraphElement = document.createElement("p");
            para.innerHTML = "Old MacDonald had a farm, E-I-E-I-O <br> And on that farm he had a " + this.type + " E-I-E-I-O <br> With a " + this.sound + " here and a " + this.sound + " there <br> " + this.sound + " here, " + this.sound + " there, " + this.sound + " everywhere <br>";
            _element.appendChild(para);
        }
    }
}