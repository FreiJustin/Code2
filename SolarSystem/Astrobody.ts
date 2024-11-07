namespace Solarsystem {
    export class Astrobody {
        orbit: Astrobody[];
        size: number;
        color: string;
        speed: number; //in radians, earth:6Math.PI/180
        orbitradius: number;
        description: string;
        positionrad: number; //in radians
        position: Vector;
        moons: number;

        constructor(_orbit: Astrobody[], _size: number, _color: string, _speed: number, _orbitradius: number, _description: string, _position?: Vector) {
            this.orbit = _orbit;
            this.size = _size;
            this.color = _color;
            this.speed = _speed;
            this.orbitradius = _orbitradius;
            this.description = _description;
            this.positionrad = 0;
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
        }

        assignChildPositions(): void {
            for (const element of this.orbit) {
                const addend: Vector = new Vector(Math.cos(element.positionrad), Math.sin(element.positionrad));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position)
            }
        }

        moveChildren(_timespeed: number, _timeslice: number): void {
            for (const element of this.orbit) {
                element.positionrad += (element.speed * _timespeed * _timeslice);
                const addend: Vector = new Vector(Math.cos(element.positionrad), Math.sin(element.positionrad));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y)
            crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }

        checkClick(_click: Vector, _element: HTMLDivElement): void {
            const difference: Vector = new Vector(_click.x - this.position.x, _click.y - this.position.y);
            if (Math.abs(difference.x) <= this.size && Math.abs(difference.y) <= this.size) {
                _element.innerHTML = this.description
            }
        }
    }
}